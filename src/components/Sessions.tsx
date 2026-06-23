import Reveal from "./Reveal";

export default function Sessions() {
  return (
    <section style={{ background: "#fff", padding: "100px 0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* 1-on-1 Sessions */}
          <div>
            <Reveal>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1e5c45", marginBottom: 16 }}>
                1-on-1 Accountability Sessions
              </p>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: "#111",
                  marginBottom: 24,
                }}
              >
                A space to uncover root causes.
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#555", marginBottom: 36 }}>
                During sessions, my role is to listen carefully, ask thoughtful
                questions, and help uncover the likely root causes behind current
                habits and behaviours. We focus on:
              </p>
            </Reveal>

            {[
              "Your personal health story and current symptoms.",
              "What you have already tried and how your body responded.",
              "Review of any relevant labs or health markers when appropriate.",
              "How your coaching programme and check-ins work.",
            ].map((item, i) => (
              <Reveal key={i} delay={(Math.min(i + 1, 4)) as 1 | 2 | 3 | 4}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "18px 0", borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#1e5c45", flexShrink: 0, marginTop: 3 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "#333" }}>{item}</p>
                </div>
              </Reveal>
            ))}

            <Reveal delay={4}>
              <div style={{ paddingTop: 20, borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                <a
                  href="https://selar.com/9606812642"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-green"
                  style={{
                    display: "inline-block",
                    marginTop: 8,
                    padding: "13px 28px",
                    borderRadius: 999,
                    background: "#1e5c45",
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Book a Consultation
                </a>
              </div>
            </Reveal>
          </div>

          {/* Community */}
          <div>
            <Reveal>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#f97316", marginBottom: 16 }}>
                Free Community Membership
              </p>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: "#111",
                  marginBottom: 24,
                }}
              >
                More than a programme, a circle of support.
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#555", marginBottom: 36 }}>
                As a member, you are not expected to arrive with perfect language
                or a detailed understanding of health records. You simply need to{" "}
                <strong style={{ color: "#111" }}>show up honestly and openly.</strong>
              </p>
            </Reveal>

            {[
              "Build consistent habits and discipline",
              "Receive 1-on-1 execution goals and progress check-ins",
              "Live conversations and community engagement",
            ].map((item, i) => (
              <Reveal key={i} delay={(Math.min(i + 1, 4)) as 1 | 2 | 3 | 4}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "20px 0", borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                  <span style={{ color: "#f97316", fontSize: 20, flexShrink: 0, lineHeight: 1 }}>→</span>
                  <p style={{ fontSize: 16, fontWeight: 600, color: "#222" }}>{item}</p>
                </div>
              </Reveal>
            ))}

            <Reveal delay={4}>
              <div style={{ paddingTop: 20, borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                <a
                  href="https://lu.ma/oezpermz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-orange"
                  style={{
                    display: "inline-block",
                    marginTop: 8,
                    padding: "13px 28px",
                    borderRadius: 999,
                    border: "2px solid #f97316",
                    color: "#f97316",
                    fontSize: 14,
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Join the Community →
                </a>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
