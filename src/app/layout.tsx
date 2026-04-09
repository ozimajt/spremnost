import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "СПРЕМНОСТ — Modular Survival System",
  description: "Spremnost — modular survival rack system for off-grid preparedness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/spremnost-logo.svg" />
        <link href="https://cdn.jsdelivr.net/npm/dseg@0.46.0/css/dseg.min.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
