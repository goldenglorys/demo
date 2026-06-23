import Reveal from "./Reveal";

const symptoms = [
  "Low energy",
  "Weight gain around the belly",
  "Mood swings",
  "Hormonal imbalance",
];

export default function RealityCheck() {
  return (
    <section style={{ background: "#f4f3f2", padding: "100px 0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div>
            <Reveal>
              <h2
                style={{
                  fontSize: "clamp(32px, 5vw, 52px)",
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: "-0.035em",
                  color: "#111",
                  marginBottom: 28,
                }}
              >
                Many of us are pouring into everyone else while running on empty.
              </h2>
            </Reveal>

            <Reveal delay={1}>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "#555", marginBottom: 20 }}>
                We&apos;re running on stress, quick meals, low protein intake,
                poor sleep, and exhaustion. Then we complain about the
                symptoms.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "#555", marginBottom: 32 }}>
                And we keep saying{" "}
                <em style={{ color: "#111", fontStyle: "italic", fontWeight: 600 }}>
                  &quot;I&apos;m just tired.&quot;
                </em>
              </p>
            </Reveal>

            <Reveal delay={2}>
              <div
                style={{
                  borderLeft: "3px solid #f97316",
                  paddingLeft: 24,
                  marginBottom: 36,
                }}
              >
                <p style={{ fontSize: 16, lineHeight: 1.8, color: "#333" }}>
                  <strong>But here&apos;s the reality:</strong> your body is not
                  your last priority, it just needs adequate nourishment,
                  fitness, and good sleep. Well-being becomes possible when we
                  stop blaming ourselves and start addressing root causes with
                  compassion and awareness.
                </p>
              </div>

              <a
                href="https://lu.ma/oezpermz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-orange"
                style={{
                  display: "inline-block",
                  padding: "13px 28px",
                  borderRadius: 999,
                  background: "#f97316",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Join the Community →
              </a>
            </Reveal>
          </div>

          {/* Right — symptoms as large editorial text */}
          <div>
            <Reveal>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#aaa",
                  marginBottom: 24,
                }}
              >
                Sound familiar?
              </p>
            </Reveal>

            {symptoms.map((symptom, i) => (
              <Reveal key={symptom} delay={(Math.min(i + 1, 4)) as 1 | 2 | 3 | 4}>
                <div
                  style={{
                    borderTop: "1px solid rgba(0,0,0,0.1)",
                    padding: "22px 0",
                  }}
                >
                  <p
                    style={{
                      fontSize: "clamp(22px, 3vw, 30px)",
                      fontWeight: 700,
                      color: "#111",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {symptom}
                  </p>
                </div>
              </Reveal>
            ))}

            <Reveal delay={4}>
              <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)", paddingTop: 22 }}>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "#777" }}>
                  That&apos;s why our check-ins are not about perfection, they&apos;re
                  about awareness, support, and tracking progress together in a
                  safe and encouraging space.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
