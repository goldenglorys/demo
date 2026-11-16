"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { LINKS } from "@/lib/links";

const tabs = ["Courses", "Store front"] as const;

const btn = {
  display: "inline-block",
  padding: "14px 30px",
  borderRadius: 999,
  background: "#f97316",
  color: "#fff",
  fontSize: 15,
  fontWeight: 700,
  textDecoration: "none",
} as const;

export default function Membership() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Courses");

  return (
    <section id="membership" style={{ background: "#f4f3f2", padding: "100px 0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <Reveal>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1e5c45", marginBottom: 16 }}>
            Membership
          </p>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.03em", color: "#111", marginBottom: 24, maxWidth: 720 }}>
            Well-being Matters+
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16" style={{ alignItems: "start" }}>
          <div>
            <Reveal delay={1}>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: "#555", marginBottom: 20 }}>
                Well-being Matters+ is an educational membership community and is
                not a substitute for individualized medical care, diagnosis, or
                treatment. Everything inside is designed to help you feel more
                informed, more prepared, and more confident, not to replace
                your relationship with your healthcare providers.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: "#555", marginBottom: 32 }}>
                Dr. Mary is an educator, not your personal dietitian.
                Participation does not create a dietitian-patient relationship.
                For medical concerns, diagnoses, treatment decisions, or
                questions specific to your situation, always consult your own
                healthcare provider.
              </p>
            </Reveal>

            <Reveal delay={2}>
              <div style={{ background: "#fff", borderRadius: 16, padding: 28, border: "1px solid rgba(0,0,0,0.07)" }}>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: "#111", marginBottom: 8 }}>
                  Join our email newsletter
                </h3>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: "#666", marginBottom: 20 }}>
                  <strong>Consent:</strong> By joining our community, you confirm
                  that you have read all required information to understand the
                  purpose of the Well-being Matters consults. You also agree that
                  your details can be used to send you nutrition-related
                  information as it applies to the Well-being Matters community
                  only. We respect your privacy and will not share or sell your
                  details to any third parties.
                </p>
                <a href={LINKS.newsletter} target="_blank" rel="noopener noreferrer" className="btn-orange" style={btn}>
                  Sign up for the newsletter
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={2}>
            <div role="tablist" aria-label="Membership offers" style={{ display: "flex", gap: 8, marginBottom: 20 }}>
              {tabs.map((t) => (
                <button
                  key={t}
                  role="tab"
                  aria-selected={tab === t}
                  onClick={() => setTab(t)}
                  style={{
                    padding: "10px 22px",
                    borderRadius: 999,
                    border: "1px solid " + (tab === t ? "#1e5c45" : "rgba(0,0,0,0.15)"),
                    background: tab === t ? "#1e5c45" : "transparent",
                    color: tab === t ? "#fff" : "#333",
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>

            <div role="tabpanel" style={{ background: "#1e5c45", borderRadius: 20, padding: 36, color: "#fff" }}>
              {tab === "Courses" ? (
                <>
                  <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#f97316", marginBottom: 12 }}>
                    Course launch in January
                  </p>
                  <h3 style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 14 }}>
                    Online courses: join the waitlist
                  </h3>
                  <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.7)", marginBottom: 28 }}>
                    Our video-based courses launch in January. Register for the
                    waitlist and be the first to know when doors open.
                  </p>
                  <a href={LINKS.courseWaitlist} target="_blank" rel="noopener noreferrer" className="btn-orange" style={btn}>
                    Waitlist registration
                  </a>
                </>
              ) : (
                <>
                  <h3 style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 14 }}>
                    Nourish &amp; Thrive™ Recipe Collection
                  </h3>
                  <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.7)", marginBottom: 14 }}>
                    The Hormonal Recipe Collection is packed with nourishing
                    recipes designed to support women&apos;s health and wellness.
                  </p>
                  <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.7)", marginBottom: 28 }}>
                    The guidebook includes hormone-friendly nutrition tips,
                    balanced meal plans, and delicious recipes to help you thrive
                    from the inside out.
                  </p>
                  <a href={LINKS.recipeCollection} target="_blank" rel="noopener noreferrer" className="btn-orange" style={btn}>
                    Purchase the collection
                  </a>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
