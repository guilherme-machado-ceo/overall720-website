import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Overall Consultoria 720° | Venture Building Strategic Intelligence",
  description:
    "A Powerhouse of Venture Building Strategic Intelligence. 720° Advisory & Consulting across Geopolitics, Politech, and Global Governance & Sustainability.",
  keywords: [
    "Overall Consultoria 720",
    "Venture Building Strategic Intelligence",
    "Inteligência Estratégica",
    "Geopolítica",
    "Politech",
    "Sustentabilidade",
    "Governança Global",
    "IA",
    "Intelligence Artificial",
    "Consultoria Estratégica",
  ],
  authors: [{ name: "Overall Consultoria 720°" }],
  icons: {
    icon: "/logo-overall720.jpg",
  },
  openGraph: {
    title: "Overall Consultoria 720° | Venture Building Strategic Intelligence",
    description:
      "720° Advisory & Consulting across Geopolitics, Politech, and Global Governance & Sustainability.",
    url: "https://overall720.xyz",
    siteName: "Overall Consultoria 720°",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Overall Consultoria 720°",
    description:
      "A Powerhouse of Venture Building Strategic Intelligence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
