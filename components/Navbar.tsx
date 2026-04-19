"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "The Craft", href: "#the-craft" },
    { label: "The Women", href: "#heritage" },
    { label: "The Contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        background:
          "linear-gradient(to right, #0A0A0F 0%, #12131A 50%, #1A1C26 100%)",
        borderBottomColor: "rgba(255,255,255,0.04)",
      }}
    >
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-20 py-5">
        {/* Logo */}
        <a href="#" className="block">
          <Image
            src="/Tipo-website/images/logo.webp"
            alt="TI:PO Po:Ro Apong logo"
            width={80}
            height={40}
            className="h-8 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[11px] uppercase tracking-[0.14em] transition-all duration-300 border-b border-transparent hover:border-brand-gold pb-0.5"
                style={{
                  color: "#D4922A",
                  fontFamily: '"Mainlux", "Inter", sans-serif',
                  fontWeight: 300,
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col items-center justify-center gap-[5px] w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[1.5px] bg-brand-gold transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-brand-gold transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-brand-gold transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 bg-black/80 backdrop-blur-md border-t border-white/5">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[12px] uppercase tracking-[0.14em] transition-all duration-300"
                style={{
                  color: "#D4922A",
                  fontFamily: '"Mainlux", "Inter", sans-serif',
                  fontWeight: 300,
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
