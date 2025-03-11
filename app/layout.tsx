import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tetheros NextJS Boilerplate",
  description: "Rapidly spin up demos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
