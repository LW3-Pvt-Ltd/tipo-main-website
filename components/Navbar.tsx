"use client";

import { useState } from "react";
import Image from "next/image";

function easeInOutQuart(t: number) {
  return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
}

function getAbsoluteTop(el: HTMLElement): number {
  let top = 0;
  let cur: HTMLElement | null = el;
  while (cur) {
    top += cur.offsetTop;
    cur = cur.offsetParent as HTMLElement | null;
  }
  return top;
}

function rafScrollTo(end: number, duration = 800, onDone?: () => void) {
  const start = window.scrollY;
  const distance = end - start;
  const startTime = performance.now();
  document.documentElement.style.scrollBehavior = "auto";
  const tick = (now: number) => {
    const t = Math.min(1, (now - startTime) / duration);
    window.scrollTo(0, start + distance * easeInOutQuart(t));
    if (t < 1) {
      requestAnimationFrame(tick);
    } else {
      document.documentElement.style.scrollBehavior = "";
      onDone?.();
    }
  };
  requestAnimationFrame(tick);
}

function scrollToParallax(e: React.MouseEvent) {
  e.preventDefault();
  rafScrollTo(window.innerHeight);
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

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
          "linear-gradient(to right, #090909 0%, #0E0C0D 50%, #151314 100%)",
        borderBottomColor: "rgba(255,255,255,0.04)",
      }}
    >
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-20 py-5">
        {/* Logo */}
        <a href="#" className="block">
          <Image
            src="/tipo-main-website/images/logo.webp"
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
                onClick={
                  link.label === "The Craft" ? scrollToParallax :
                  link.label === "The Women" ? (e) => { e.preventDefault(); scrollToSection("heritage"); } :
                  (e) => { e.preventDefault(); scrollToSection("contact"); }
                }
                className="tx-serif-light text-[11px] uppercase tracking-[0.14em] text-[#D4922A] transition-all duration-300 border-b border-transparent hover:border-brand-gold pb-0.5"
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
                onClick={(e) => { if (link.label === "The Craft") scrollToParallax(e); setMenuOpen(false); }}
                className="tx-serif-light text-[12px] uppercase tracking-[0.14em] text-[#D4922A] transition-all duration-300"
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
