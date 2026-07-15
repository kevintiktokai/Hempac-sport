import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/lib/store";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Toasts from "@/components/Toasts";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HEMPAC — Premium Sports Gear Engineered for Champions",
    template: "%s | HEMPAC",
  },
  description:
    "Premium sports equipment for every level of the game. Racquets, footwear, training gear and more — engineered for speed, power and precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <StoreProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toasts />
        </StoreProvider>
      </body>
    </html>
  );
}
