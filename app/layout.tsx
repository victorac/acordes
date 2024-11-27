import type { Metadata } from "next";
import type { Viewport } from 'next'
import { Nunito } from "next/font/google";
import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const nunito = Nunito({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Acordes",
  description: "Chords and intervals visualizer",
};

 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
