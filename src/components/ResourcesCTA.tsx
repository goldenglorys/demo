import Reveal from "./Reveal";

export default function ResourcesCTA() {
  return (
    <section id="resources" style={{ background: "#1e5c45", padding: "100px 0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <Reveal>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 20 }}>
              Resource
            </p>
            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.035em",
                color: "#fff",
                marginBottom: 24,
              }}
            >
              Fuel Your Body with African Recipes
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.6)", marginBottom: 36 }}>
              Discover the nutritional power of African cuisine. Build meals
              that nourish your body using familiar, culturally rooted
              ingredients — making healthy eating feel like home, not restriction.
            </p>
            <a
              href="https://selar.com/71175r894e"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange"
              style={{
                display: "inline-block",
                padding: "15px 34px",
                borderRadius: 999,
                background: "#f97316",
                color: "#fff",
                fontSize: 15,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Get the Guide →
            </a>
          </Reveal>

          {/* Right — what's inside, as clean list */}
          <Reveal delay={2}>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
              {[
                "Nutrient profiles of 20+ African meals and their health benefits",
                "Recipe guide to build culturally rooted, balanced meals",
                "How to build a sustainable meal plan around your lifestyle",
                "SMART goal-setting to achieve your desired health status",
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                    padding: "22px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <span style={{ color: "#f97316", fontSize: 16, flexShrink: 0, marginTop: 2 }}>→</span>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.75)" }}>{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
