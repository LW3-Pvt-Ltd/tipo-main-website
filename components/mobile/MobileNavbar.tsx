"use client";

import { useState } from "react";
import Image from "next/image";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "The Craft", href: "#mobile-the-craft" },
    { label: "The Team", href: "#mobile-heritage" },
    { label: "The Contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 md:hidden"
      style={{
        background: "#000000",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="flex items-center justify-between px-6 py-4">
        <a href="#top" className="block">
          <Image
            src="/images/logo.webp"
            alt="TI:PO Po:Ro Apong logo"
            width={80}
            height={30}
            className="h-[26px] w-auto object-contain"
          />
        </a>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="flex flex-col items-center justify-center gap-[5px] w-8 h-8 bg-transparent border-0 p-0 cursor-pointer"
        >
          <span
            className="block w-5 h-[1.5px] bg-brand-gold transition-all duration-300"
            style={{ transform: open ? "rotate(45deg) translate(4px, 4px)" : "none" }}
          />
          <span
            className="block w-5 h-[1.5px] bg-brand-gold transition-all duration-300"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-5 h-[1.5px] bg-brand-gold transition-all duration-300"
            style={{ transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }}
          />
        </button>
      </div>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? 240 : 0,
          opacity: open ? 1 : 0,
        }}
      >
        <ul className="list-none m-0 py-6 flex flex-col items-center gap-6">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="tx-serif-light text-[12px] uppercase tracking-[0.14em] text-[#F0B537] no-underline"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
