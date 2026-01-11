import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xliium - Web & SEO for Local Businesses",
  description:
    "Done-for-you websites and SEO solutions for local small and medium-sized businesses. Get more clients without learning the technical stuff.",
  icons: {
    icon: "/logo/frame-black.png",
    apple: "/logo/frame-black.png",
  },
  openGraph: {
    title: "Xliium - Web & SEO for Local Businesses",
    description:
      "Done-for-you websites and SEO solutions for local small and medium-sized businesses. Get more clients without learning the technical stuff.",
    url: "https://www.xliium.com",
    siteName: "Xliium",
    images: [
      {
        url: "/logo/frame-black.png",
        width: 1200,
        height: 630,
        alt: "Xliium - Web & SEO for Local Businesses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xliium - Web & SEO for Local Businesses",
    description:
      "Done-for-you websites and SEO solutions for local small and medium-sized businesses. Get more clients without learning the technical stuff.",
    images: ["/logo/frame-black.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
