import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import "./globals.css";


const inter = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Restaurant Template",
  description: "Modern restaurant website template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head> */}
      <body className={inter.className}>
          {children}
      </body>
    </html>
  );
}
