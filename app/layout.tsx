import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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

export const metadata: Metadata = {
  title: "TI:PO — Po:Ro Apong",
  description:
    "TI:PO — A premium traditional Indian rice wine, handcrafted by women from the Brahmaputra Valley, Assam.",
  icons: {
    icon: "/Tipo-website/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-brand-black text-brand-offwhite overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
