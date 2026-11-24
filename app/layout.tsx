import "./globals.css";
import Script from "next/script";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    siteName: SITE.name,
    type: "website",
    locale: "en_US",
  },
  other: {
    "google-adsense-account": "ca-pub-1841843726454987",
    "google-site-verification":
      "7B_vYaTIdNTSwjuzgWovkM98DkKUeub9-FCVVtd5lmI",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Script
          id="monetag-onclick"
          strategy="afterInteractive"
          src="https://al5sm.com/tag.min.js"
          data-zone="12338656"
        />

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
