import Image from "next/image";

function IconWhatsApp() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.38 1.26 4.78L2.05 22l5.45-1.43a9.76 9.76 0 004.54 1.12c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.52 14.1c-.23.63-1.34 1.22-1.83 1.27-.49.05-.48.37-3.03-.67-2.55-1.04-4.08-3.72-4.2-3.89-.12-.17-.97-1.29-.97-2.46 0-1.17.61-1.74.83-1.98.22-.24.48-.3.64-.3l.46.01c.15 0 .35-.06.55.41.2.47.68 1.66.74 1.78.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.11-.24.23-.1.45.14.22.62.98 1.33 1.59.92.81 1.69 1.06 1.93 1.17.24.11.38.09.52-.06.14-.15.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.39.66 1.63.78.24.12.4.18.46.28.06.1.06.58-.17 1.14z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function IconYouTube() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function IconEmail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

const socials = [
  { label: "WhatsApp", href: "https://whatsapp.com/channel/0029Vb7OJeaL7UVYCgg56E2r", Icon: IconWhatsApp },
  { label: "Instagram", href: "https://instagram.com/the_wellbeing_matters", Icon: IconInstagram },
  { label: "YouTube", href: "https://youtube.com/@TheWell-beingMatters", Icon: IconYouTube },
  { label: "Email", href: "mailto:well-beingmattersng@outlook.com", Icon: IconEmail },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1e5c45",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      {/* Top CTA row */}
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "72px 24px 56px",
          borderBottom: "1px solid rgba(255,255,255,0.12)",
        }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        <div>
          <h3
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              color: "#fff",
              marginBottom: 8,
              lineHeight: 1.2,
            }}
          >
            Ready to start living<br />with intention?
          </h3>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, maxWidth: 360 }}>
            Join our community for a supportive circle to stay accountable for every health win.
          </p>
        </div>
        <div
          style={{ display: "flex", gap: 10, flexWrap: "wrap" }}
          className="md:justify-end"
        >
          <a
            href="https://selar.com/9606812642"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange"
            style={{
              padding: "13px 26px",
              borderRadius: 999,
              background: "#f97316",
              color: "#fff",
              fontSize: 13,
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
              padding: "13px 26px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.3)",
              color: "rgba(255,255,255,0.85)",
              fontSize: 13,
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Join the Community
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "28px 24px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none", flexShrink: 0 }}>
          <div
            style={{
              width: 150,
              height: 58,
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
              sizes="150px"
            />
          </div>
        </a>

        {/* Social icons */}
        <nav aria-label="Social links" style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              aria-label={label}
              className="social-icon"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
              }}
            >
              <Icon />
            </a>
          ))}
        </nav>

        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
          © {new Date().getFullYear()} Well-being Matters
        </p>
      </div>
    </footer>
  );
}
