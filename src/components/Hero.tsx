"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

const HeroShader = dynamic(() => import("./HeroShader"), { ssr: false });

export default function Hero() {
  return (
    <>
      <section
        style={{
          background: "#1e5c45",
          minHeight: "88vh",
          paddingTop: 76,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* DotOrbit shader fills hero background */}
        <HeroShader />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: 1160,
            padding: "40px 24px 72px",
            textAlign: "center",
          }}
        >
          {/* Community label */}
          <p
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
              marginBottom: 28,
              animation: "fadeIn 0.6s ease forwards",
              animationDelay: "0.1s",
              opacity: 0,
            }}
          >
            Well-being Matters · Nutrition Accountability Community
          </p>

          {/* Headline */}
          <div style={{ position: "relative" }}>
            <h1 style={{ margin: 0, lineHeight: 0.92 }}>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(52px, 8vw, 100px)",
                  fontWeight: 900,
                  letterSpacing: "-0.05em",
                  color: "#fff",
                  animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
                  animationDelay: "0.25s",
                  opacity: 0,
                }}
              >
                Well-being
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(52px, 8vw, 100px)",
                  fontWeight: 900,
                  letterSpacing: "-0.05em",
                  color: "#f97316",
                  animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
                  animationDelay: "0.4s",
                  opacity: 0,
                }}
              >
                Matters.
              </span>
            </h1>

            {/* Floating wellness graphic card */}
            <div
              className="float-a hidden lg:block"
              style={{
                position: "absolute",
                right: "-2%",
                top: "5%",
                width: 180,
                borderRadius: 18,
                overflow: "hidden",
                boxShadow: "0 32px 80px rgba(0,0,0,0.4)",
                animation: "fadeIn 0.6s ease forwards, floatA 5.5s ease-in-out infinite",
                animationDelay: "0.8s, 0.8s",
                opacity: 0,
              }}
            >
              <Image
                src="/images/wellness-graphic.jpg"
                alt="Nutrition Accountability"
                width={180}
                height={144}
                style={{ width: "100%", height: "auto", display: "block" }}
                sizes="180px"
              />
            </div>

            {/* Floating glass stat card */}
            <div
              className="float-b hidden lg:block"
              style={{
                position: "absolute",
                left: "1%",
                bottom: "5%",
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 16,
                padding: "16px 22px",
                textAlign: "left",
                animation: "fadeIn 0.6s ease forwards, floatB 4.8s ease-in-out infinite",
                animationDelay: "1s, 1s",
                opacity: 0,
              }}
            >
              <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
                Inside the community
              </p>
              <p style={{ fontSize: 15, fontWeight: 700, color: "#fff", lineHeight: 1.5 }}>
                1-on-1 sessions<br />
                <span style={{ color: "#f97316" }}>+ live check-ins</span>
              </p>
            </div>
          </div>

          {/* Subtext */}
          <p
            style={{
              fontSize: "clamp(15px, 1.8vw, 18px)",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 500,
              margin: "36px auto 40px",
              animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
              animationDelay: "0.55s",
              opacity: 0,
            }}
          >
            Most people don&apos;t fail because their goals are unclear. They
            fail because they lack{" "}
            <span style={{ color: "#fff", fontWeight: 600 }}>
              systems that support consistency and accountability.
            </span>
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
              animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
              animationDelay: "0.7s",
              opacity: 0,
            }}
          >
            <a
              href="https://selar.com/9606812642"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange"
              style={{
                padding: "14px 32px",
                borderRadius: 999,
                background: "#f97316",
                color: "#fff",
                fontSize: 15,
                fontWeight: 700,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Book a Consultation
            </a>
            <a
              href="https://lu.ma/oezpermz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{
                padding: "14px 32px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#fff",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Join the Community
            </a>
          </div>
        </div>
      </section>

      {/* White peek rounding up from below */}
      <div
        style={{
          height: 48,
          background: "#fff",
          borderRadius: "40px 40px 0 0",
          marginTop: -48,
          position: "relative",
          zIndex: 2,
        }}
      />
    </>
  );
}
