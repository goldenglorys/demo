import { PODCAST_SHEET } from "./links";
import { FALLBACK_CSV } from "./podcast-fallback";

export type Episode = {
  videoId: string;
  title: string;
  label?: string; // e.g. "Episode 10"
  url: string;
  thumbnail: string;
};

export type PodcastSection = { name: string; episodes: Episode[] };

export type PodcastData = {
  sections: PodcastSection[];
  upcomingCourses: string[];
  source: "sheet" | "fallback";
  warnings: string[];
};

/** Minimal RFC-4180 CSV parser (handles quotes, commas and newlines in cells). */
export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (c === '"') inQuotes = false;
      else cell += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ",") { row.push(cell); cell = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(cell); rows.push(row); row = []; cell = "";
    } else cell += c;
  }
  if (cell !== "" || row.length) { row.push(cell); rows.push(row); }
  return rows;
}

/** Extract the 11-char YouTube video id from any common URL shape. */
export function youtubeId(raw: string): string | null {
  const m = raw
    .trim()
    .match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/))([\w-]{11})/i);
  return m ? m[1] : null;
}

function cleanTitle(raw: string): { title: string; label?: string } {
  // Sheet titles look like "Some title| |Episode 10" or "Title ||Episode 8".
  const parts = raw.split("|").map((p) => p.trim()).filter(Boolean);
  let label: string | undefined;
  if (parts.length > 1 && /^episode\s*\d+$/i.test(parts[parts.length - 1])) {
    label = parts.pop()!.replace(/\s+/, " ");
  }
  return { title: parts.join(" | ").replace(/\s+/g, " "), label };
}

const normTitle = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

export function buildPodcastData(csv: string, source: PodcastData["source"]): PodcastData {
  const rows = parseCsv(csv);
  const warnings: string[] = [];
  const seenIds = new Set<string>();
  const seenTitles = new Set<string>();
  const sections: PodcastSection[] = [{ name: "Podcast Episodes", episodes: [] }];
  const upcomingCourses: string[] = [];
  let current = sections[0];
  let inCourses = false;

  rows.forEach((r, idx) => {
    const a = (r[0] ?? "").trim();
    const b = (r[1] ?? "").trim();
    if (!a && !b) return;
    if (idx === 0 && /episode/i.test(a) && /link/i.test(b)) return; // header row

    const id = b ? youtubeId(b) : null;
    if (id) {
      const { title, label } = cleanTitle(a);
      const tKey = normTitle(title);
      if (seenIds.has(id) || seenTitles.has(tKey)) {
        warnings.push(`Duplicate skipped (row ${idx + 1}): ${title}`);
        return;
      }
      seenIds.add(id);
      seenTitles.add(tKey);
      current.episodes.push({
        videoId: id,
        title,
        label,
        url: `https://www.youtube.com/watch?v=${id}`,
        thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      });
      return;
    }

    if (b) warnings.push(`Row ${idx + 1} has a link that isn't a YouTube URL: ${b}`);

    // A row with text but no video link is a section heading (or a course name).
    if (/^plans to have online course/i.test(a)) { inCourses = true; return; }
    if (inCourses) {
      if (!/^working on/i.test(a)) upcomingCourses.push(a.replace(/\.+$/, "").trim());
      return;
    }
    current = { name: a, episodes: [] };
    sections.push(current);
  });

  return { sections: sections.filter((s) => s.episodes.length), upcomingCourses, source, warnings };
}

/**
 * Reads the public Google Sheet. Next.js caches the result and re-fetches in the
 * background at most once per `revalidate` window (see app/podcast/page.tsx).
 * If Google is unreachable the bundled snapshot is used so the page never breaks.
 */
export async function getPodcastData(): Promise<PodcastData> {
  const url = `https://docs.google.com/spreadsheets/d/${PODCAST_SHEET.id}/export?format=csv&gid=${PODCAST_SHEET.gid}`;
  try {
    const res = await fetch(url, { next: { revalidate: 3600, tags: ["podcast"] } });
    if (!res.ok) throw new Error(`Sheet responded ${res.status}`);
    const csv = await res.text();
    if (csv.trimStart().startsWith("<")) throw new Error("Sheet is not public (got HTML)");
    const data = buildPodcastData(csv, "sheet");
    if (!data.sections.length) throw new Error("Sheet parsed to zero episodes");
    return data;
  } catch (err) {
    console.error("[podcast] falling back to snapshot:", err);
    return buildPodcastData(FALLBACK_CSV, "fallback");
  }
}
