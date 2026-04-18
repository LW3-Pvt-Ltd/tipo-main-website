export default function Footer() {
  const exploreLinks = [
    { label: "The Origin", href: "#" },
    { label: "The Craft", href: "#the-craft" },
    { label: "The Women", href: "#heritage" },
    { label: "The Wine", href: "#" },
    { label: "Chronicle", href: "#" },
  ];

  const experienceLinks = [
    { label: "Visit TI:PO", href: "#" },
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

  const headerStyle = {
    color: "#D4922A",
    fontFamily: '"Mainlux", "Inter", sans-serif',
    fontWeight: 700,
    letterSpacing: "2px",
  } as const;

  const linkStyle = {
    color: "#C8C8C8",
    fontFamily: 'var(--font-yantramanav), "Inter", sans-serif',
    fontWeight: 300,
  } as const;

  return (
    <footer
      id="contact"
      className="py-[60px] px-[40px]"
      style={{
        background:
          "linear-gradient(135deg, #2e2e2e 0%, #242424 35%, #171717 70%, #0e0e0e 100%)",
      }}
    >
      {/* 4 columns, evenly spaced horizontally */}
      <div className="flex flex-wrap justify-between gap-x-10 gap-y-10 items-start max-w-6xl mx-auto">
        {/* Column 1 — Brand */}
        <div className="flex flex-col">
          <p
            className="text-[12px] leading-[1.6]"
            style={{
              color: "#C8C8C8",
              fontFamily: '"Mainlux", "Inter", sans-serif',
              fontWeight: 300,
            }}
          >
            Po:Ro Apong
          </p>
          <p
            className="text-[12px] leading-[1.6]"
            style={{
              color: "#888888",
              fontFamily: 'var(--font-yantramanav), "Inter", sans-serif',
              fontWeight: 300,
            }}
          >
            Handcrafted by Women
          </p>
          <p
            className="text-[12px] leading-[1.6]"
            style={{
              color: "#888888",
              fontFamily: 'var(--font-yantramanav), "Inter", sans-serif',
              fontWeight: 300,
            }}
          >
            Traditional Indian Rice Wine
          </p>
          <p
            className="text-[12px] leading-[1.6]"
            style={{
              color: "#888888",
              fontFamily: 'var(--font-yantramanav), "Inter", sans-serif',
              fontWeight: 300,
            }}
          >
            From the Brahmaputra Valley, Assam, India
          </p>
        </div>

        {/* Column 2 — Explore */}
        <div className="flex flex-col">
          <h4
            className="text-[12px] uppercase mb-3"
            style={headerStyle}
          >
            Explore
          </h4>
          <ul className="flex flex-col">
            {exploreLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[12px] hover:text-white transition-colors duration-300"
                  style={{ ...linkStyle, lineHeight: 2 }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Experience */}
        <div className="flex flex-col">
          <h4
            className="text-[12px] uppercase mb-3"
            style={headerStyle}
          >
            Experience
          </h4>
          <ul className="flex flex-col">
            {experienceLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[12px] hover:text-white transition-colors duration-300"
                  style={{ ...linkStyle, lineHeight: 2 }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Connect */}
        <div className="flex flex-col">
          <h4
            className="text-[12px] uppercase mb-3"
            style={headerStyle}
          >
            Connect
          </h4>
          <ul className="flex flex-col">
            {connectLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[12px] hover:text-white transition-colors duration-300"
                  style={{ ...linkStyle, lineHeight: 2 }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
