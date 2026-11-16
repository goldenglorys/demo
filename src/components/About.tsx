import Image from "next/image";
import Reveal from "./Reveal";
import { LINKS } from "@/lib/links";

export default function About() {
  return (
    <section id="about" style={{ background: "#f4f3f2", padding: "100px 0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <Reveal delay={1}>
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div
                style={{
                  position: "relative",
                  borderRadius: 20,
                  overflow: "hidden",
                  maxWidth: 420,
                  width: "100%",
                  aspectRatio: "3/4",
                }}
              >
                <Image
                  src="/images/founder-blue.jpg"
                  alt="Dr. Mary Oyewole-Asowata, Founder of Well-being Matters"
                  fill
                  loading="lazy"
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                  sizes="(max-width: 1024px) 80vw, 420px"
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "20px 24px",
                    background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                  }}
                >
                  <p style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>
                    Dr. Mary Oyewole-Asowata
                  </p>
                  <p style={{ fontSize: 12, color: "#f97316", marginTop: 3 }}>
                    Founder · Consultant Nutritionist · Public Health Researcher
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <h2
                style={{
                  fontSize: "clamp(32px, 5vw, 48px)",
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: "#111",
                  marginBottom: 32,
                }}
              >
                Why I started Well-being Matters.
              </h2>
            </Reveal>

            <Reveal delay={1}>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: "#555", marginBottom: 20 }}>
                Mary Oyewole-Asowata, Ph.D is a nutrition expert and the founder
                of Well-being Matters Consults — an accountability-based
                community that empowers families with accessible, evidence-based
                health and nutrition education.
              </p>
            </Reveal>

            <Reveal delay={2}>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: "#555", marginBottom: 20 }}>
                As a researcher, she works in the Department of Agricultural and
                Human Sciences at North Carolina State University. Dr. Mary
                Oyewole-Asowata maintains an active presence on social media,
                where she regularly posts healthy eating and lifestyle content.
                Her digital courses support mothers and families seeking
                balanced approaches to feeding their families.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: "#555", marginBottom: 36 }}>
                Follow Dr. Mary on Instagram:{" "}
                <a
                  href={LINKS.personalInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#1e5c45", fontWeight: 600 }}
                >
                  @nutritionwithdrmary
                </a>
              </p>
            </Reveal>

            <Reveal delay={4}>
              <a
                href="https://selar.com/9606812642"
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
                Book a Consultation
              </a>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
