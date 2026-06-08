"use client";

import { useState } from "react";

const linkMap: Record<string, { href: string; target?: string }> = {
  "The Craft": { href: "#mobile-the-craft" },
  "The Team": { href: "#mobile-heritage" },
  "The Wine": { href: "/wine" },
  "Press Kit": { href: "/press-kit" },
  "Instagram": { href: "https://www.instagram.com/tipo.heritage", target: "_blank" },
  "YouTube": { href: "https://www.youtube.com/@TipoHeritage", target: "_blank" },
  "Blogs": { href: "https://link.heritagetipo.com/landing?v=2", target: "_blank" },
  "Contact": { href: "#contact" },
  "info@heritagetipo.com": {
    href: "https://mail.google.com/mail/?view=cm&to=info@heritagetipo.com",
    target: "_blank",
  },
};

const experienceLinks = ["Visit TI:PO", "For Restaurants", "Stockist Finder"];

export default function MobileFooter() {
  const cols = [
    {
      title: "Explore",
      links: ["The Craft", "The Team", "The Wine"],
    },
    {
      title: "Experience",
      links: experienceLinks,
    },
    { title: "Connect", links: ["Instagram", "YouTube", "Blogs", "Contact", "Press Kit"] },
  ];

  const [open, setOpen] = useState<string | null>(null);
  const [comingSoonLink, setComingSoonLink] = useState<string | null>(null);

  return (
    <footer
      id="contact"
      className="md:hidden py-12 px-7 relative"
      style={{
        background:
          "linear-gradient(135deg, #2e2e2e 0%, #242424 35%, #171717 70%, #0e0e0e 100%)",
        zIndex: 3,
      }}
    >
      <div className="flex flex-col gap-8">
        {/* Brand block */}
        <div className="flex flex-col">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.webp"
            alt="TI:PO"
            className="h-[22px] w-auto object-contain mb-[10px] self-start"
          />
          <p className="tx-serif-light text-[13px] leading-[1.6] text-[#C8C8C8] m-0">Po:Ro Apong</p>
          <p className="tx-body text-[13px] leading-[1.6] text-[#C8C8C8] m-0">Handcrafted by Women</p>
          <p className="tx-body text-[13px] leading-[1.6] text-[#C8C8C8] m-0">Heritage Alcoholic Beverage</p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col divide-y divide-white/10">
          {cols.map((col) => (
            <div key={col.title}>
              <button
                onClick={() => setOpen(open === col.title ? null : col.title)}
                className="w-full flex items-center justify-between py-4 bg-transparent border-0 cursor-pointer"
              >
                <span className="tx-eyebrow font-bold text-[13px] tracking-[0.22em] uppercase text-brand-gold">
                  {col.title}
                </span>
                <span
                  className="text-brand-gold text-[18px] transition-transform duration-300"
                  style={{ transform: open === col.title ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === col.title ? 400 : 0, opacity: open === col.title ? 1 : 0 }}
              >
                <ul className="list-none p-0 mt-0 mb-4 flex flex-col">
                  {col.links.map((l) => {
                    const isExperience = col.title === "Experience";
                    const meta = linkMap[l];
                    return (
                      <li key={l} className="flex flex-col">
                        <a
                          href={isExperience ? undefined : (meta?.href ?? "#")}
                          target={meta?.target}
                          rel={meta?.target === "_blank" ? "noopener noreferrer" : undefined}
                          onClick={isExperience ? (e) => {
                            e.preventDefault();
                            setComingSoonLink(comingSoonLink === l ? null : l);
                          } : undefined}
                          className="tx-body font-light text-[13px] leading-[2.2] text-[#C8C8C8] no-underline hover:text-white transition-colors cursor-pointer"
                        >
                          {l}
                        </a>
                        {isExperience && comingSoonLink === l && (
                          <span className="inline-block self-start mb-2 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-brand-gold bg-[#111] border border-brand-gold/50 rounded-md whitespace-nowrap shadow-lg">
                            Coming Soon
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      {comingSoonLink && (
        <div
          className="fixed inset-0 z-[5]"
          onClick={() => setComingSoonLink(null)}
        />
      )}
    </footer>
  );
}
