import type { Metadata } from "next";
import { Inter, Playfair_Display, Yantramanav } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const yantramanav = Yantramanav({
  subsets: ["latin"],
  variable: "--font-yantramanav",
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "TI:PO — Po:Ro Apong",
  description:
    "TI:PO — A premium traditional Indian rice wine, handcrafted by women from the Brahmaputra Valley, Assam.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${yantramanav.variable}`}>
      <body className="min-h-screen bg-brand-black text-brand-offwhite overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
