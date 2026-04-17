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
      <div className="max-w-6xl mx-auto px-10 md:px-16 lg:px-20">
        {/* Brand block + 3 nav columns */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10 mb-14">
          {/* Brand block — left */}
          <div>
            <p className="font-serif text-brand-gold text-sm mb-3">
              Po:Ro Apong
            </p>
            <p className="text-[11px] text-brand-text leading-relaxed">
              Handcrafted by Women
            </p>
            <p className="text-[11px] text-brand-text leading-relaxed">
              Traditional Indian Rice Wine
            </p>
            <p className="text-[11px] text-brand-text leading-relaxed mt-2">
              From the Brahmaputra Valley, Assam, India
            </p>
          </div>

          {/* 3 nav columns — right-aligned with equal gaps */}
          <div className="flex gap-12 md:gap-16 justify-start md:justify-end">
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

        {/* Divider */}
        <div className="w-full h-px bg-brand-gold/20 mb-6" />

        {/* Copyright */}
        <p className="text-[10px] tracking-wider text-brand-text/40 text-center">
          &copy; {new Date().getFullYear()} TI:PO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
