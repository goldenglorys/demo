import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "Dr. Mary has played such an important and inspiring role in my wellness journey. Her deep knowledge of nutrition and genuine passion for helping people make healthier choices truly stand out. The personalized food plan she created for me has been life-changing, and her consistent follow-ups keep me motivated. She also created a supportive community where she shares helpful meal ideas, nutrition tips, and encouragement that make healthy living feel achievable. Dr. Mary goes above and beyond for her clients, and her care shines through in everything she does. I'd gladly recommend her to anyone looking to improve their health and lifestyle — she's simply outstanding!",
    name: "Adedoyin",
    detail: "Germany · 7-Day Healthy Habits Challenge",
  },
  {
    quote:
      "I encourage everyone to participate in this course, as it offers a wealth of knowledge on topics such as food consumption, food preferences, meal selection and combinations, managing sugar spikes from our food.",
    name: "Oluwaseun Akinbode",
    detail: "Community Member",
  },
  {
    quote:
      "Good evening Dr Mary, I'm glad I joined today's session on Breastfeeding and Postpartum. Thank you for creating the platform for such awareness, so educative. Well done to the guests also, God bless you 🙏",
    name: "Community Member",
    detail: "Live Session Participant",
  },
  {
    quote:
      "Prioritizing emotional well-being involves recognizing and managing emotions, building strong relationships, and practicing self-care to cultivate a positive and resilient mindset.",
    name: "Adeyemo Omotayo",
    detail: "Community Member",
  },
  {
    quote:
      "I'll be watchful about smoothie that supply only simple sugars for kids. Never skip meals for kids.",
    name: "Victoria",
    detail: "Community Member",
  },
  {
    quote:
      "You would learn how you can make your lives better. Learning about movement, serving sizes and food groups like fruits and vegetables are also important as they can help with some health issues people deal with like iron deficiency.",
    name: "Mimi",
    detail: "Nutrition Education Session",
  },
];

const row = [...testimonials, ...testimonials];

function PersonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

function Stars() {
  return (
    <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#1e5c45">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ quote, name, detail }: { quote: string; name: string; detail: string }) {
  return (
    <div
      className="card-premium"
      style={{
        width: 320,
        flexShrink: 0,
        background: "#fff",
        borderRadius: 18,
        border: "1px solid rgba(0,0,0,0.07)",
        padding: "28px 26px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 2px 12px rgba(0,0,0,0.05), 0 4px 20px rgba(0,0,0,0.04)",
      }}
    >
      <Stars />

      <p
        style={{
          fontSize: 13,
          lineHeight: 1.8,
          color: "#444",
          fontStyle: "italic",
          marginBottom: 20,
          display: "-webkit-box",
          WebkitLineClamp: 5,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author row */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: "auto" }}>
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: "#edf5f1",
            border: "1px solid rgba(30,92,69,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1e5c45",
            flexShrink: 0,
          }}
        >
          <PersonIcon />
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
            Real words from real people who chose to show up for their health.
          </p>
        </Reveal>
      </div>

      {/* Single-row marquee */}
      <div
        className="marquee-outer"
        style={{ overflow: "hidden" }}
      >
        <div
          className="marquee-left"
          style={{ display: "inline-flex", gap: 20 }}
        >
          {row.map((card, i) => (
            <Card key={i} {...card} />
          ))}
        </div>
      </div>

    </section>
  );
}
