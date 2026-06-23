import Reveal from "./Reveal";

const pillars = [
  {
    num: "01",
    title: "Habit Stacking",
    body: "Build healthier routines by attaching new behaviors to existing daily habits."
  },
  {
    num: "02",
    title: "Environment Design",
    body: "Reduce the triggers and friction that pull you off course. When your environment supports you, consistency becomes the path of least resistance.",
  },
  {
    num: "03",
    title: "Mindset Reframing",
    body: "Shift all-or-nothing thinking and create sustainable progress. Together we break punishing cycles and build lasting, compassionate awareness.",
  },
];

export default function Methodology() {
  return (
    <section
      id="methodology"
      style={{
        background: "#f8f6f2",
        padding: "100px 0",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-12 items-end" style={{ marginBottom: 72 }}>
            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.035em",
                color: "#111",
              }}
            >
              Evidence-based strategies for sustainable change.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#666" }}>
              In our community we use proven behaviour change strategies. As many of our members have goals to build sustainable lifestyle that improve their overall well-being without diet restriction.
            </p>
          </div>
        </Reveal>

        {/* Three pillars — editorial columns, no card borders */}
        <div className="grid md:grid-cols-3 gap-0" style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}>
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.num} delay={(i + 1) as 1 | 2 | 3}>
              <div
                className="pillar-item"
                style={{
                  padding: "48px 40px 48px 0",
                  borderRight: i < 2 ? "1px solid rgba(0,0,0,0.1)" : "none",
                  paddingRight: i < 2 ? 40 : 0,
                  paddingLeft: i > 0 ? 40 : 0,
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "clamp(48px, 6vw, 72px)",
                    fontWeight: 900,
                    letterSpacing: "-0.05em",
                    color: "#1e5c45",
                    lineHeight: 1,
                    marginBottom: 20,
                    opacity: 0.25,
                  }}
                >
                  {pillar.num}
                </span>
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    color: "#111",
                    marginBottom: 14,
                  }}
                >
                  {pillar.title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: "#666" }}>
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
