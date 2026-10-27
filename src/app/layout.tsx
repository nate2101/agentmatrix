import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AgentMatrix | Autonomous Enterprise AI Workforce",
  description: "Deploy autonomous AI agent fleets that execute financial reconciliation, inbound pipeline qualification, security compliance, and customer support 24/7 with deterministic precision.",
  keywords: [
    "Autonomous AI Agents",
    "Enterprise Workforce",
    "B2B SaaS",
    "Financial Reconciliation AI",
    "SDR Automation",
    "SOC 2 Compliance Agent",
    "Deterministic AI"
  ],
  authors: [{ name: "nate2101" }],
  openGraph: {
    title: "AgentMatrix — The Autonomous Enterprise AI Workforce",
    description: "Replace repetitive 40-hour operational toil with deterministic, verifiable AI agent fleets.",
    url: "https://agentmatrix.vercel.app",
    siteName: "AgentMatrix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentMatrix | Autonomous Enterprise AI Workforce",
    description: "Replace repetitive 40-hour operational toil with deterministic, verifiable AI agent fleets.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#06080d] text-[#f3f4f6]">{children}</body>
    </html>
  );
}
