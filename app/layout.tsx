import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omelora | #Changemaker",
  description:
    "Omelora is a youth-led nonprofit connecting 1,500 volunteers across 34 countries to bridge gaps in education. We send school kits, books, and care kits to underfunded schools and run mentorship programs in Nigeria, Uganda, and beyond.",
  openGraph: {
    title: "Omelora | #Changemaker",
    description: "Youth-led education nonprofit. 1,500 volunteers. 34 countries. Real impact.",
    url: "https://omelora.org",
    siteName: "Omelora",
    type: "website",
    images: [
      {
        url: "/imgs/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Omelora — #Changemaker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omelora | #Changemaker",
    description: "Youth-led education nonprofit. 1,500 volunteers. 34 countries. Real impact.",
    images: ["/imgs/opengraph.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}