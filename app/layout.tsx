import { ModeProvider } from "@/contexts/ModeContext";
import type { Metadata } from "next";
import Header from "@/components/header/Header";
import "./globals.css";
import { Lexend_Deca } from 'next/font/google'
import BaseViewLayout from "@/components/layouts/BaseViewLayout";
import { Tour } from "@/components/tour";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  variable: "--font-lexend-deca",
});

export const metadata: Metadata = {
  title: "HubSpot Community Platform",
  description: "Rapidly launch a community integrated with your CRM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lexendDeca.className}>
      <body>
        <ModeProvider>
          <Tour>
            <div className="baseLayoutStackedView">
              <Header/>
              <BaseViewLayout>
                {children}
              </BaseViewLayout>
            </div>
          </Tour>
        </ModeProvider>
      </body>
    </html>
  );
}
