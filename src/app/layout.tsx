import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thewellbeingmatters.com"),
  title: {
    default: "Well-being Matters | Nutrition Accountability Community",
    template: "%s | Well-being Matters",
  },
  description:
    "Well-being Matters is a nutrition accountability community founded by Dr. Mary Oyewole-Asowata. Empowering women and busy mothers with food literacy, 1-on-1 coaching, and evidence-based strategies for sustainable healthy living.",
  keywords: [
    // Brand & founder
    "Well-being Matters",
    "The Well-being Matters",
    "Dr. Mary Oyewole-Asowata",
    "Dr. Mary Asowata nutritionist",

    // Core service
    "nutrition accountability",
    "nutrition accountability community",
    "1-on-1 nutrition coaching",
    "1-on-1 accountability sessions",
    "nutrition check-ins",
    "health coaching for women",
    "nutrition coaching for busy mothers",
    "online nutrition coach",

    // Audience & problem
    "healthy living for women",
    "food literacy",
    "food literacy skills",
    "sustainable healthy lifestyle",
    "healthy habits for women",
    "hormonal health nutrition",
    "weight management for women",
    "low energy nutrition help",
    "busy mom health tips",
    "postpartum nutrition",
    "breastfeeding nutrition",

    // Methodology
    "habit stacking wellness",
    "environment design health",
    "mindset reframing nutrition",
    "evidence-based nutrition",
    "behavior change nutrition",
    "meal planning accountability",
    "sugar spike management",
    "food groups education",

    // Community & format
    "nutrition accountability community",
    "online wellness community",
    "free health community",
    "live nutrition sessions",
    "group health check-ins",
    "community health support",

    // Resources & products
    "African recipes nutrition guide",
    "healthy African meals",
    "African food nutrition",
    "fuel your body African recipes",

    // Location / outreach
    "Greenville North Carolina nutrition",
    "North Carolina community health",
    "West Greenville health",
    "Kare4theLot",
    "Rooted in Wellness event",
    "nutrition outreach North Carolina",

    // General wellness long-tail
    "how to build healthy habits",
    "nutrition coach online",
    "accountability partner health",
    "progress over perfection wellness",
    "healthy lifestyle without dieting",
    "no diet weight management",
  ],
  authors: [{ name: "Dr. Mary Oyewole-Asowata" }],
  creator: "Dr. Mary Oyewole-Asowata",
  publisher: "Well-being Matters",
  category: "Health & Wellness",
  openGraph: {
    title: "Well-being Matters | Nutrition Accountability Community",
    description:
      "Stop watching your body fail. Start living with intention. Join our nutrition accountability community led by Dr. Mary Oyewole-Asowata.",
    type: "website",
    locale: "en_US",
    url: "https://thewellbeingmatters.com",
    siteName: "Well-being Matters",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Well-being Matters — Nutrition Accountability Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Well-being Matters | Nutrition Accountability Community",
    description:
      "Evidence-based nutrition accountability for women and busy mothers. 1-on-1 coaching, live community sessions, and food literacy tools.",
    images: ["/images/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://thewellbeingmatters.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://thewellbeingmatters.com/#organization",
      name: "Well-being Matters",
      url: "https://thewellbeingmatters.com",
      logo: "https://thewellbeingmatters.com/images/logo.jpg",
      sameAs: [
        "https://instagram.com/the_wellbeing_matters",
        "https://youtube.com/@TheWell-beingMatters",
        "https://whatsapp.com/channel/0029Vb7OJeaL7UVYCgg56E2r",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "well-beingmattersng@outlook.com",
        contactType: "customer support",
      },
    },
    {
      "@type": "Person",
      "@id": "https://thewellbeingmatters.com/#founder",
      name: "Dr. Mary Oyewole-Asowata",
      jobTitle: "Founder, Consultant Nutritionist & Public Health Researcher",
      worksFor: { "@id": "https://thewellbeingmatters.com/#organization" },
      knowsAbout: [
        "Public Health Nutrition",
        "Food Literacy",
        "Nutrition Accountability",
        "Community Health",
        "Dietary Behavior Research",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://thewellbeingmatters.com/#website",
      url: "https://thewellbeingmatters.com",
      name: "Well-being Matters",
      publisher: { "@id": "https://thewellbeingmatters.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://thewellbeingmatters.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "HealthAndBeautyBusiness",
      "@id": "https://thewellbeingmatters.com/#business",
      name: "Well-being Matters",
      description:
        "Nutrition accountability community providing 1-on-1 coaching, food literacy education, and community support for women and busy mothers.",
      url: "https://thewellbeingmatters.com",
      telephone: "",
      email: "well-beingmattersng@outlook.com",
      founder: { "@id": "https://thewellbeingmatters.com/#founder" },
      offers: [
        {
          "@type": "Offer",
          name: "1-on-1 Nutrition Accountability Session",
          url: "https://selar.com/9606812642",
        },
        {
          "@type": "Offer",
          name: "Free Community Membership",
          url: "https://lu.ma/oezpermz",
        },
        {
          "@type": "Offer",
          name: "Fuel Your Body with African Recipes Guide",
          url: "https://selar.com/71175r894e",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
