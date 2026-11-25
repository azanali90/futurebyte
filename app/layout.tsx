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

        {/* Ad Script 1 */}
        <Script
          id="ad-zone-12338656"
          src="https://al5sm.com/tag.min.js"
          data-zone="12338656"
          strategy="afterInteractive"
        />

        {/* Ad Script 2 */}
        <Script
          id="ad-zone-314868"
          src="https://quge5.com/88/tag.min.js"
          data-zone="314868"
          strategy="afterInteractive"
          data-cfasync="false"
        />

        {/* Ad Script 3 */}
        <Script
          id="ad-zone-12333637"
          src="https://nap5k.com/tag.min.js"
          data-zone="12333637"
          strategy="afterInteractive"
        />

        <Header />
        <main>{children}</main>
        <Footer />

      </body>
    </html>
  );
}
