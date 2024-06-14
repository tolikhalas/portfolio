import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anatolii's Portfolio",
  description: "Modern & Minimalistic Anatolii Halas Portfolio",
  creator: "Anatolii Halas",
  authors: [
    {
      name: "Anatolii Halas",
      url: "https://www.linkedin.com/in/anatolii-halas/",
    },
  ],
  applicationName: "Anatolii Halas Portfolio",
  category: "portfolio",
  keywords: ["dev", "develope", "development", "IT", "programming"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
