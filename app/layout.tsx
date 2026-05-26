import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Banoth Revanth Kumar — Full Stack Developer",
  description:
    "Portfolio of Banoth Revanth Kumar — Final Year B.Tech CSE student at Narsimha Reddy Engineering College. Full Stack Developer specializing in MERN stack. I build real-world web apps that solve real problems — from idea to deployment.",
  keywords: [
    "Banoth Revanth Kumar",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Web Developer India",
  ],
  authors: [{ name: "Banoth Revanth Kumar" }],
  openGraph: {
    title: "Banoth Revanth Kumar — Full Stack Developer",
    description:
      "I build real-world web apps that solve real problems — from idea to deployment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        style={{
          fontFamily: "var(--font-inter), Inter, sans-serif",
          backgroundColor: "#0a0a0f",
          color: "#f1f5f9",
          overflowX: "hidden",
        }}
      >
        {children}
      </body>
    </html>
  );
}
