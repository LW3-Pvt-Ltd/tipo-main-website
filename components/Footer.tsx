import Image from "next/image";

export default function Footer() {
  const exploreLinks = [
    { label: "The Origin", href: "#" },
    { label: "The Craft", href: "#the-craft" },
    { label: "The Women", href: "#heritage" },
    { label: "The Wine", href: "#" },
    { label: "Chronicle", href: "#" },
  ];

  const experienceLinks = [
    { label: "Visit TÍ:PO", href: "#" },
    { label: "For Restaurants", href: "#" },
    { label: "Shop", href: "#" },
    { label: "Stockist Finder", href: "#" },
  ];

  const connectLinks = [
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "Contact", href: "#contact" },
    { label: "Press Kit", href: "#" },
  ];

  return (
    <footer id="contact" className="bg-black pt-16 pb-10 md:pt-20 md:pb-12">
      <div className="max-w-5xl mx-auto px-8 md:px-10">
        {/* 4-column layout: equal gaps, centered within container */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-14 items-start">
          {/* Brand block */}
          <div>
            <Image
              src="/Tipo-website/images/footer-logo.webp"
              alt="TI:PO — Po:ro Apong"
              width={560}
              height={260}
              className="h-auto w-[140px] mt-0 mb-4 block"
              priority
            />
            <p className="text-[11px] text-brand-text leading-relaxed">
              Handcrafted by Women
            </p>
            <p className="text-[11px] text-brand-text leading-relaxed">
              Traditional Indian Rice Wine
            </p>
            <p className="text-[11px] text-brand-text leading-relaxed mt-2">
              From the Brahmaputra Valley,
            </p>
            <p className="text-[11px] text-brand-text leading-relaxed">
              Assam, India
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-brand-gold font-medium mb-5">
              Explore
            </h4>
            <ul className="flex flex-col gap-2">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[11px] text-brand-text hover:text-brand-offwhite transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-brand-gold font-medium mb-5">
              Experience
            </h4>
            <ul className="flex flex-col gap-2">
              {experienceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[11px] text-brand-text hover:text-brand-offwhite transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-brand-gold font-medium mb-5">
              Connect
            </h4>
            <ul className="flex flex-col gap-2">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[11px] text-brand-text hover:text-brand-offwhite transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}
