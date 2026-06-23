"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

const slides = [
  {
    title: "Rooted in Wellness",
    org: "West Greenville Health Council",
    body: "The Well-being Matters' community outreach for Rooted in Wellness Event organized by West Greenville Health Council.",
    image: "/images/outreach-3.jpg",
  },
  {
    title: "Fill a Child's Plate",
    org: "Kare4theLot Partnership",
    body: "We provided nutritional support through the \"Fill a Child's Plate\" event in partnership with Kare4theLot. This initiative helps expose youth to various vocational and career pathways while strengthening community relationships within Greenville Community, North Carolina.",
    image: "/images/outreach-2.jpg",
  },
  {
    title: "Community Health Fairs",
    org: "On-the-ground Outreach",
    body: "Taking nutrition education directly into communities resource tables, educational materials, and one-on-one conversations about sustainable healthy living for families.",
    image: "/images/outreach-1.jpg",
  },
];

export default function CommunityImpact() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section id="impact" style={{ background: "#f4f3f2", padding: "100px 0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-12 items-end" style={{ marginBottom: 56 }}>
            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.035em",
                color: "#111",
              }}
            >
              Well-being goes beyond the screen.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#666" }}>
              We believe everyone deserves access to resources that empower
              informed health decisions regardless of their lived experience or
              demographics.
            </p>
          </div>
        </Reveal>

        {/* Carousel */}
        <Reveal delay={1}>
          <div>

            {/* ── Desktop: full image with text overlay ── */}
            <div className="hidden md:block">
              <div
                style={{
                  position: "relative",
                  borderRadius: 24,
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  width: "100%",
                }}
              >
                {/* Slide track */}
                <div
                  style={{
                    display: "flex",
                    height: "100%",
                    transform: `translateX(-${current * 100}%)`,
                    transition: "transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)",
                    willChange: "transform",
                  }}
                >
                  {slides.map((slide, i) => (
                    <div
                      key={i}
                      style={{ flexShrink: 0, width: "100%", position: "relative" }}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 1200px) 100vw, 1160px"
                        priority={i === 0}
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.25) 55%, transparent 100%)",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: "clamp(24px, 4vw, 48px)",
                        }}
                      >
                        <p
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "#f97316",
                            marginBottom: 10,
                          }}
                        >
                          {slide.org}
                        </p>
                        <h3
                          style={{
                            fontSize: "clamp(20px, 3vw, 32px)",
                            fontWeight: 800,
                            color: "#fff",
                            marginBottom: 12,
                            letterSpacing: "-0.02em",
                          }}
                        >
                          {slide.title}
                        </h3>
                        <p
                          style={{
                            fontSize: 15,
                            lineHeight: 1.7,
                            color: "rgba(255,255,255,0.78)",
                            maxWidth: 600,
                          }}
                        >
                          {slide.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: "rgba(255,255,255,0.12)",
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${((current + 1) / slides.length) * 100}%`,
                      background: "#f97316",
                      transition: "width 0.5s ease",
                      borderRadius: 2,
                    }}
                  />
                </div>
              </div>

              {/* Thumbnail strip — desktop */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  marginTop: 16,
                }}
              >
                {slides.map((slide, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="carousel-thumb-btn"
                    aria-label={`Show ${slide.title}`}
                    style={{
                      width: 96,
                      height: 64,
                      borderRadius: 10,
                      overflow: "hidden",
                      border: i === current ? "2.5px solid #f97316" : "2.5px solid transparent",
                      opacity: i === current ? 1 : 0.45,
                      cursor: "pointer",
                      padding: 0,
                      position: "relative",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="96px"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* ── Mobile: image above, text below ── */}
            <div className="block md:hidden">
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  borderRadius: 20,
                  overflow: "hidden",
                  aspectRatio: "16/9",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    height: "100%",
                    transform: `translateX(-${current * 100}%)`,
                    transition: "transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)",
                    willChange: "transform",
                  }}
                >
                  {slides.map((slide, i) => (
                    <div
                      key={i}
                      style={{ flexShrink: 0, width: "100%", position: "relative" }}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="100vw"
                        priority={i === 0}
                      />
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: "rgba(255,255,255,0.2)",
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${((current + 1) / slides.length) * 100}%`,
                      background: "#f97316",
                      transition: "width 0.5s ease",
                      borderRadius: 2,
                    }}
                  />
                </div>
              </div>

              {/* Text below image on mobile */}
              <div
                style={{
                  padding: "20px 4px 8px",
                }}
              >
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#f97316",
                    marginBottom: 8,
                  }}
                >
                  {slides[current].org}
                </p>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: "#111",
                    marginBottom: 10,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {slides[current].title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.75,
                    color: "#555",
                  }}
                >
                  {slides[current].body}
                </p>
              </div>

              {/* Dot indicators — mobile */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 8,
                  marginTop: 20,
                }}
              >
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Slide ${i + 1}`}
                    style={{
                      width: i === current ? 28 : 8,
                      height: 8,
                      borderRadius: 4,
                      background: i === current ? "#f97316" : "rgba(0,0,0,0.2)",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
