import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SearchProvider } from "@/components/search/SearchProvider";
import { ThemeScript } from "@/components/theme/ThemeScript";
import { getPublicSearchIndex } from "@/lib/search";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Rhinon Help - Documentation & Support",
    template: "%s · Rhinon Help",
  },
  description:
    "Documentation, guides and help center for the Rhinon platform. Everything you need to build, integrate and ship.",
  metadataBase: new URL("https://help.rhinon.tech"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Public entries only — gated (developers) docs are merged in client-side
  // by <SearchProvider> via /api/search/gated once the session is verified.
  const searchIndex = getPublicSearchIndex();
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeScript />
        <TooltipProvider>
          <SearchProvider index={searchIndex}>{children}</SearchProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
