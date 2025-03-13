import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Geist, Geist_Mono, Source_Sans_3, Open_Sans, Bitter } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans-3",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--font-open-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const bitter = Bitter({
  variable: "--font-bitter",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Judy Ye's Portfolio",
  description: "Frontend software engineer, Judy Ye's portfolio.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/undraw_smiley-face-light.svg",
        href: "/undraw_smiley-face-light.svg",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/undraw_smiley-face-dark.svg",
        href: "/undraw_smiley-face-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${sourceSans.variable} ${openSans.variable} ${bitter.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
