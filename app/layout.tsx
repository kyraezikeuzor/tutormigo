import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tutormigo.com"),
  title: "Tutormigo — Elite SAT Tutoring",
  description:
    "Affordable SAT prep from students at Columbia, Yale, Harvard, and UT. $30/hour. SAT/ACT prep, academic mentorship, and college admissions consulting.",
  openGraph: {
    title: "Tutormigo — Elite SAT Tutoring",
    description:
      "Affordable SAT prep from Ivy & T20 students. Free first session. 1550+ avg tutor scores.",
    url: "https://tutormigo.com",
    siteName: "Tutormigo",
    type: "website",
    images: [
      {
        url: "/imgs/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Tutormigo — Elite SAT Tutoring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tutormigo — Elite SAT Tutoring",
    description:
      "Affordable SAT prep from Ivy & T20 students. Free first session. 1550+ avg tutor scores.",
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