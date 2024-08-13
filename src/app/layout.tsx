import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Anek_Telugu } from "next/font/google";
import classNames from "classnames";

import "./globals.css";

const anekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Software Engineer",
  description: "Full stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-background text-foreground">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
