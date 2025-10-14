import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HeroHeader } from "@/components/Common/Header/Header";
import Footer from "@/components/Common/Footer/footer";
import ChatbotWrapper from "@/components/Common/Chatbot/ChatbotWrapper";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rhinon Tech | Home",
  description: "Rhinon Tech - Your AI Assistant",
  verification: {
    google: "oFNjd84lhv6mmqsdSBESEE01R9vODYcjfYeb2DNcu50",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9G0GGFT317"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9G0GGFT317');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeroHeader />
        {children}
        <ChatbotWrapper />
        <Footer />
      </body>
    </html>
  );
}
