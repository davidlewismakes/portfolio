import type { Metadata } from "next";
import { Bricolage_Grotesque, Newsreader } from "next/font/google";
import { SITE } from "@/lib/content";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  alternates: { canonical: SITE.url },
  openGraph: {
    url: SITE.url,
    siteName: "David Lewis Makes",
    title: SITE.title,
    description: SITE.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="site-shell flex flex-col">{children}</body>
    </html>
  );
}
