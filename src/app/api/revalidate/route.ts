import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// Called daily by the Vercel Cron in vercel.json (Vercel sends
// `Authorization: Bearer $CRON_SECRET`). Also usable manually after editing the sheet:
//   curl -H "Authorization: Bearer $CRON_SECRET" https://thewellbeingmatters.com/api/revalidate
export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  revalidateTag("podcast");
  revalidatePath("/podcast");
  return NextResponse.json({ ok: true, at: new Date().toISOString() });
}
