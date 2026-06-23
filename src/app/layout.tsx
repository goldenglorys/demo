import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Well-being Matters | Nutrition Accountability Community",
  description:
    "Empowering women and busy mothers with food literacy skills, structured accountability, and evidence-based strategies for sustainable healthy living.",
  keywords: [
    "nutrition accountability",
    "health community",
    "food literacy",
    "healthy living",
    "wellness",
    "Dr. Mary Asowata",
  ],
  openGraph: {
    title: "Well-being Matters",
    description:
      "Stop watching your body fail. Start living with intention. Join our nutrition accountability community.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
