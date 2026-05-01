import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omelora — #Changemaker",
  description:
    "Omelora means Changemaker. Bridging global gaps in education through funding and mentorship.",
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