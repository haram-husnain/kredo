import type { Metadata } from "next";
import { Geist, Geist_Mono, Stack_Sans_Notch } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const stackSansNotch = Stack_Sans_Notch({
  subsets:['latin'],
  weight:['300', '400', '500', '600'],
  variable: "--font-stack-sans-notch",
  display: "swap",
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
      className={cn("h-full antialiased", geistSans.variable, geistMono.variable, stackSansNotch.variable)}
      suppressHydrationWarning
    >
      <body className={cn("min-h-screen antialiased bg-background font-sans", stackSansNotch.variable, geistSans.variable)}>{children}</body>
    </html>
  );
}
