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
  title: "TabStudio - Freelance Agency",
  description:
    "Hi, We are TabStudio - A Freelance Agency that helps creators and brands tell better stories through sharp and engaging edits.",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    locale: "en_US",
    type: "website",
    title:
      "TabStudio is a freelance agency that helps bring your content to life.",
    description:
      "Hi, We are TabStudio - A Freelance Agency that helps creators and brands tell better stories through sharp and engaging edits.",
    url: "http://localhost:3000",
    images: {
      url: "http://localhost:3000/metadata/tourist.webp",
      width: 1200,
      height: 630,
      alt: "Open Graph Image",
    },
  },
  keywords: ["Freelance", "Video Editor", "Agency", "Content Creator"],
  authors: [
    { name: "TabStudio", url: "https://tabstudio.com" },
    { name: "Adebayo Omojuwa", url: "https://tabstudio.com" },
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/rsa0oqz.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
