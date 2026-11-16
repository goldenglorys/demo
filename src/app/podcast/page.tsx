import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPodcastData } from "@/lib/podcast";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Podcast",
  description:
    "The Well-being Matters Podcast with Dr. Mary Oyewole-Asowata: evidence-based conversations on nutrition, health screenings, women's health and cultural foods.",
  alternates: { canonical: "/podcast" },
};

// Rebuild this page in the background at most once an hour. A new row in the
// Google Sheet therefore shows up on the site within ~1 hour with no deploy.
export const revalidate = 3600;

const photos = [
  { src: "/images/podcast/nutrient-dense.jpg", alt: "Nutrient-dense foods including salmon, berries, greens and nuts" },
  { src: "/images/podcast/heart-health.jpg", alt: "Heart-healthy foods beside a blood pressure monitor" },
  { src: "/images/podcast/diabetes-friendly.jpg", alt: "Wholesome foods beside a glucose meter" },
  { src: "/images/podcast/mediterranean.jpg", alt: "A balanced meal of grilled fish, salad and whole grains" },
];

export default async function PodcastPage() {
  const { sections, upcomingCourses } = await getPodcastData();

  return (
    <>
      <Navbar />
      <main>
        <section style={{ background: "#1e5c45", padding: "150px 0 80px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px", color: "#fff" }}>
            <h1 style={{ fontSize: "clamp(34px, 6vw, 58px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.035em", marginBottom: 24 }}>
              Welcome to the Well-being Matters Podcast
            </h1>
            <p style={{ fontSize: 19, fontWeight: 600, lineHeight: 1.6, marginBottom: 16 }}>
              I&apos;m so glad you&apos;re here! — Dr. Mary Oyewole-Asowata
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginBottom: 32 }}>
              This is a space for us to connect through conversations about
              nutrition, your health, and your well-being, guiding you to make
              intentional choices, one episode at a time.
            </p>
            <a href={LINKS.youtube} target="_blank" rel="noopener noreferrer" className="btn-orange"
               style={{ display: "inline-block", padding: "14px 30px", borderRadius: 999, background: "#f97316", color: "#fff", fontSize: 15, fontWeight: 700, textDecoration: "none" }}>
              Subscribe on YouTube
            </a>
          </div>
        </section>

        <section style={{ background: "#f4f3f2", padding: "80px 0 40px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
              {photos.map((p) => (
                <div key={p.src} style={{ position: "relative", aspectRatio: "1/1", borderRadius: 16, overflow: "hidden" }}>
                  <Image src={p.src} alt={p.alt} fill sizes="(max-width: 640px) 100vw, 25vw" style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div>
            <p style={{ maxWidth: 760, margin: "40px auto 0", textAlign: "center", fontSize: 17, lineHeight: 1.85, color: "#444" }}>
              Whether we&apos;re talking about nutrition, health screenings,
              women&apos;s health, or how to make the most of our cultural foods,
              our podcast goal is to share evidence-based insights you can
              actually use in raising health-conscious families.
            </p>
          </div>
        </section>

        {sections.map((section) => (
          <section key={section.name} style={{ background: "#f4f3f2", padding: "40px 0 60px" }}>
            <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
              <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#111", marginBottom: 28 }}>
                {section.name}
              </h2>
              <div style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
                {section.episodes.map((ep) => (
                  <a key={ep.videoId} href={ep.url} target="_blank" rel="noopener noreferrer"
                     style={{ textDecoration: "none", color: "inherit", background: "#fff", borderRadius: 16, overflow: "hidden", border: "1px solid rgba(0,0,0,0.07)", display: "block" }}>
                    <div style={{ position: "relative", aspectRatio: "16/9", background: "#ddd" }}>
                      <Image src={ep.thumbnail} alt="" fill sizes="(max-width: 640px) 100vw, 340px" style={{ objectFit: "cover" }} />
                    </div>
                    <div style={{ padding: "16px 18px 20px" }}>
                      {ep.label && (
                        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#f97316", marginBottom: 6 }}>
                          {ep.label}
                        </p>
                      )}
                      <p style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.45, color: "#111" }}>{ep.title}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        ))}

        {upcomingCourses.length > 0 && (
          <section style={{ background: "#f4f3f2", padding: "40px 0 100px" }}>
            <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
              <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#111", marginBottom: 12 }}>
                Courses coming soon
              </h2>
              <p style={{ color: "#555", marginBottom: 20 }}>Course launch in January.</p>
              <ul style={{ paddingLeft: 20, color: "#333", lineHeight: 2 }}>
                {upcomingCourses.map((c) => <li key={c}>{c}</li>)}
              </ul>
              <a href={LINKS.courseWaitlist} target="_blank" rel="noopener noreferrer" className="btn-orange"
                 style={{ display: "inline-block", marginTop: 24, padding: "14px 30px", borderRadius: 999, background: "#f97316", color: "#fff", fontSize: 15, fontWeight: 700, textDecoration: "none" }}>
                Join the waitlist
              </a>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
