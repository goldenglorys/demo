"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (menuOpen && scrolled) setMenuOpen(false);
  }, [scrolled, menuOpen]);

  const navLinks = [
    { label: "Methodology", href: "#methodology" },
    { label: "Impact", href: "#impact" },
    { label: "About", href: "#about" },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.3s",
          background: scrolled || menuOpen ? "rgba(255,255,255,0.95)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "none",
        }}
      >
        <nav
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "0 24px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          {/* Logo — cropped tightly to content area */}
          <a href="#" style={{ textDecoration: "none", flexShrink: 0 }}>
            <div
              style={{
                width: 120,
                height: 44,
                borderRadius: 8,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src="/images/logo.jpg"
                alt="The Well-being Matters"
                fill
                style={{ objectFit: "cover", objectPosition: "center 42%" }}
                priority
                sizes="120px"
              />
            </div>
          </a>

          {/* Pill nav — desktop only */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              background: scrolled ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.12)",
              border: scrolled ? "1px solid rgba(0,0,0,0.1)" : "1px solid rgba(255,255,255,0.2)",
              borderRadius: 999,
              padding: "4px",
              transition: "all 0.3s",
            }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  padding: "7px 16px",
                  borderRadius: 999,
                  color: scrolled ? "#444" : "rgba(255,255,255,0.9)",
                  textDecoration: "none",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            {/* Desktop CTA */}
            <a
              href="https://lu.ma/oezpermz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange hidden md:inline-block"
              style={{
                fontSize: 13,
                fontWeight: 700,
                padding: "9px 20px",
                borderRadius: 999,
                background: "#f97316",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Join the Community
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex md:hidden"
              style={{
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: scrolled || menuOpen ? "#111" : "#fff",
                borderRadius: 8,
                transition: "color 0.2s",
              }}
            >
              {menuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div
            style={{
              borderTop: "1px solid rgba(0,0,0,0.07)",
              padding: "16px 24px 24px",
            }}
          >
            <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#111",
                    textDecoration: "none",
                    padding: "14px 12px",
                    borderRadius: 10,
                    display: "block",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid rgba(0,0,0,0.07)" }}>
                <a
                  href="https://lu.ma/oezpermz"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="btn-orange"
                  style={{
                    display: "block",
                    padding: "15px 24px",
                    borderRadius: 999,
                    background: "#f97316",
                    color: "#fff",
                    fontSize: 15,
                    fontWeight: 700,
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  Join the Community
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
