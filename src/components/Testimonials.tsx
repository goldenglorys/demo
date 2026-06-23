import Reveal from "./Reveal";

const featured = {
  quote:
    "Dr. Mary has played such an important and inspiring role in my wellness journey. Her deep knowledge of nutrition and genuine passion for helping people make healthier choices truly stand out. The personalized food plan she created for me has been life-changing, and her consistent follow-ups keep me motivated. I would gladly recommend her to anyone looking to improve their health and lifestyle.",
  name: "Adedoyin",
  detail: "Germany · 7-Day Healthy Habits Challenge",
};

const others = [
  {
    quote:
      "I encourage everyone to participate in this course. It offers a wealth of knowledge on food consumption, food preferences, meal selection and combinations, and managing sugar spikes.",
    name: "Oluwaseun Akinbode",
    detail: "Community Member",
  },
  {
    quote:
      "I'm glad I joined the session on Breastfeeding and Postpartum. Thank you for creating the platform for such awareness. So educative. Well done to the guests also.",
    name: "Community Member",
    detail: "Live Session Participant",
  },
  {
    quote:
      "You would learn how to make your life better through movement, serving sizes, and food groups — and how they can help with health issues like iron deficiency.",
    name: "Mimi",
    detail: "Nutrition Education Session",
  },
];

const allCards = [featured, ...others];
const row1 = [...allCards, ...allCards];
const row2 = [...[...allCards].reverse(), ...[...allCards].reverse()];

function Stars() {
  return (
    <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#f97316">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ quote, name, detail }: { quote: string; name: string; detail: string }) {
  return (
    <div
      style={{
        width: 320,
        flexShrink: 0,
        background: "#fff",
        borderRadius: 18,
        border: "1px solid rgba(0,0,0,0.07)",
        padding: "28px 26px",
        display: "flex",
        flexDirection: "column",
        gap: 0,
      }}
    >
      <Stars />
      <p
        style={{
          fontSize: 14,
          lineHeight: 1.8,
          color: "#444",
          fontStyle: "italic",
          marginBottom: 20,
          flex: 1,
        }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #1e5c45 0%, #2e8a62 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 13,
            fontWeight: 800,
            color: "#fff",
            flexShrink: 0,
          }}
        >
          {name[0]}
        </div>
        <div>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#111" }}>{name}</p>
          <p style={{ fontSize: 11, color: "#999", marginTop: 1 }}>{detail}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section style={{ background: "#f8f6f2", padding: "100px 0", overflow: "hidden" }}>

      {/* Header */}
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px", marginBottom: 56 }}>
        <Reveal>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#111",
              marginBottom: 12,
            }}
          >
            What our community says.
          </h2>
          <p style={{ fontSize: 15, color: "#777", maxWidth: 480 }}>
            Real results from real people who chose to show up for their health.
          </p>
        </Reveal>
      </div>

      {/* Marquee rows */}
      <div className="marquee-outer" style={{ display: "flex", flexDirection: "column", gap: 16 }}>

        {/* Row 1: scrolls left */}
        <div style={{ overflow: "hidden" }}>
          <div
            className="marquee-left"
            style={{ display: "inline-flex", gap: 16 }}
          >
            {row1.map((card, i) => (
              <Card key={i} {...card} />
            ))}
          </div>
        </div>

        {/* Row 2: scrolls right */}
        <div style={{ overflow: "hidden" }}>
          <div
            className="marquee-right"
            style={{ display: "inline-flex", gap: 16 }}
          >
            {row2.map((card, i) => (
              <Card key={i} {...card} />
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
