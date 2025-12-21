import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Daniel Ikechukwu Edu | Actor • Model • Voice Artist",
  description:
    "Daniel Ikechukwu Edu is a Nigerian-American actor based in Los Angeles, available for commercial, theatrical, voice over, and UGC work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Lightweight performer schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Daniel Ikechukwu Edu",
              jobTitle: "Actor, Model, Voice Artist",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Los Angeles",
                addressRegion: "CA",
              },
              sameAs: [
                "https://www.instagram.com/d_edu_/",
                "https://www.tiktok.com/@d_edu_",
                "https://www.backstage.com/tal/daniel-edu/",
              ],
            }),
          }}
        />
      </head>

      <body suppressHydrationWarning={true}>
        <Navbar />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
