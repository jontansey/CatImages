import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jon Tansey MarketAxess Test",
  description: "Test application for MarketAxess by Jon Tansey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
