import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const instrumentSerif = Instrument_Serif({subsets:['latin'],weight:['400'],variable:'--font-serif'});

const instrumentSerifHeading = Instrument_Serif({
  subsets:['latin'],
  weight:['400'],
  variable:'--font-heading'
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
  title: "Kredo",
  description: "Money that protects itself.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, instrumentSerifHeading.variable, "font-serif", instrumentSerif.variable)}
      suppressHydrationWarning
    >
      <body className={cn("min-h-screen antialiased bg-background font-sans", instrumentSerifHeading.variable, geistSans.variable)}>{children}</body>
    </html>
  );
}
