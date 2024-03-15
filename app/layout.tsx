import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import MobileMenu from "@/components/navbar/mobile-menu";
import MobileMenuToggler from "@/components/navbar/mobile-menu-toggler";
import { Overlay } from "@/components/navbar/overlay";
import Footer from "@/components/footer";
import AnimatePresenceComp from "./animate-presence";
import { Toaster } from "@/components/ui/sonner";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lateef Taiwo",
  description:
    "Crafting beautiful and functional user experiences. Lateef Taiwo - Front-End React Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <AnimatePresenceComp>
        <html lang="en" suppressHydrationWarning>
          <body
            className={cn(
              "relative antialiased transition duration-100",
              jetbrainsMono.className
            )}
            suppressHydrationWarning
          >
            <ThemeProvider attribute="class" defaultTheme="light">
              <Navbar />
              <Overlay />
              <MobileMenu />
              <MobileMenuToggler />
              {children}
              <Footer />
              <Toaster richColors position="top-right" />
            </ThemeProvider>
          </body>
        </html>
      </AnimatePresenceComp>
    </Providers>
  );
}
