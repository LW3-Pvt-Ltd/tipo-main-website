import Image from "next/image";

interface ProcessRow {
  label: string;
  heading: string;
  highlight?: string;
  body: string[];
  image: string;
  imageAlt: string;
  imageW: number;
  imageH: number;
  reversed: boolean;
  /** If true, label sits on its own line above heading (two-line title). */
  stacked?: boolean;
  /** If true, label is Mainlux Bold and heading is Mainlux Light (inverse of default). */
  boldLabel?: boolean;
  /** If true, both label and heading are Mainlux Bold. */
  boldBoth?: boolean;
  /** Overrides the color of the heading span only (label keeps #D4922A). */
  headingColor?: string;
  /** Optional pull-quote block rendered after the body; each string is its own line. */
  pullQuote?: string[];
  /** If true, use the larger 28px heading / 14px #C8C8C8 body scale + wider padding. */
  largeText?: boolean;
  bodySize?: string;
}

const rows: ProcessRow[] = [
  {
    label: "The Brewmaster\u2019s",
    heading: "MAGIC",
    body: [
      "The gathered botanicals are handed to the women brewmasters.",
      "There is no recipe to follow. Proportions are decided anew every season, based on climate, humidity, the character of the herbs, and the brewmaster\u2019s accumulated experience.",
      "The botanicals are dried, ground, and combined with rice flour to form e-pob, the traditional starter cake.",
      "This starter does not impose flavor. It invites fermentation \u2014 recruiting native yeasts and microbes specific to this place.",
    ],
    image: "/Tipo-website/images/brewmaster.webp",
    imageAlt: "Illustration of a brewmaster figure in traditional clothing with botanicals",
    imageW: 520,
    imageH: 520,
    reversed: false,
    bodySize: "16px",
  },
  {
    label: "FIRE, RICE",
    heading: "and the restraint",
    body: [
      "Po:ro Apong ferments in solid state, not liquid. Fermentation takes place in small batches, typically 5 to 7 kilograms, allowing close attention rather than mechanical intervention.",
      "The ferment beds are not stirred or corrected. The brewmasters monitor progress by sight, scent, and time. Intervention is rare, and only when necessary. This process resists massive scale by design. It depends on judgment rather than automation, and on time rather than speed.",
    ],
    image: "/Tipo-website/images/mandala.webp",
    imageAlt: "Intricate circular mandala illustration of rice and botanicals",
    imageW: 578,
    imageH: 578,
    reversed: true,
    stacked: true,
    boldLabel: true,
    largeText: true,
    bodySize: "16px",
  },
  {
    label: "Grain Boundary",
    heading: "Fermentation",
    body: [
      "The gathered botanicals are handed to the women brewmasters.",
      "There is no recipe to follow. Proportions are decided anew every season, based on climate, humidity, the character of the herbs, and the brewmaster\u2019s accumulated experience.",
      "The botanicals are dried, ground, and combined with rice flour to form e-pob, the traditional starter cake.",
      "This starter does not impose flavor. It invites fermentation \u2014 recruiting native yeasts and microbes specific to this place.",
    ],
    image: "/Tipo-website/images/new-grain-boundary.webp",
    imageAlt: "Oval illustration representing the grain boundary fermentation process",
    imageW: 720,
    imageH: 720,
    reversed: false,
    stacked: true,
    boldBoth: true,
    largeText: true,
    bodySize: "16px",
  },
  {
    label: "A RARE SOLID-STATE",
    heading: "Fermentation",
    highlight: "Po:ro Apong ferments in solid state, not liquid.",
    body: [
      "Fermentation takes place in small batches, typically 5 to 7 kilograms, allowing close attention rather than mechanical intervention.",
      "The ferment beds are not stirred or corrected. The brewmasters monitor progress by sight, scent, and time. Intervention is rare, and only when necessary.",
      "This process resists massive scale by design.",
      "It depends on judgment rather than automation, and on time rather than speed.",
    ],
    image: "/Tipo-website/images/solid-state.webp",
    imageAlt: "Folk art figure with floral motifs representing solid-state fermentation",
    imageW: 440,
    imageH: 440,
    reversed: true,
    stacked: true,
    boldLabel: true,
    largeText: true,
    bodySize: "16px",
  },
  {
    label: "",
    heading: "The Drawing",
    body: [
      "In the traditional method, when fermentation is complete, the wine is gently drawn from the grain. What emerges reflects the forest, the season, and the decisions made during that cycle.",
      "Each batch is distinct. Variation is not corrected; it is accepted as truth.",
    ],
    pullQuote: ["This is not an inconsistency.", "This is nature."],
    image: "/Tipo-website/images/drawing.webp",
    imageAlt: "Detailed illustrated scene showing the drawing process",
    imageW: 520,
    imageH: 520,
    reversed: false,
    largeText: true,
    bodySize: "16px",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-brand-black py-12 md:py-10">
      <div className="max-w-6xl mx-auto px-10 md:px-16 lg:px-20 flex flex-col gap-20 md:gap-28">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 items-center ${
  i === 1 ? "-mt-10 md:-mt-10" : i === 2 ? "-mt-10 md:-mt-10" : ""
}`}
>
            {/* Text */}
            <div
              className={`flex flex-col gap-4 ${
                row.reversed ? "md:order-2" : "md:order-1"
              } ${row.largeText ? "md:py-5 max-w-[480px]" : ""}${
    i === 0 ? "mt-[25px]" : ""
  }`}
            >
              <h2
                className={`text-xl md:text-2xl leading-snug ${
                  row.stacked ? "" : "whitespace-nowrap"
                }`}
                style={{
                  color: "#D4922A",
                  fontFamily: '"Mainlux", "Inter", sans-serif',
                }}
              >
                {row.label && (
                  <span
                    style={{
                      fontWeight: row.boldBoth || row.boldLabel ? 700 : 300,
                      letterSpacing:
                        row.boldBoth || row.boldLabel ? "0.18em" : "0.08em",
                      textTransform: row.boldLabel ? "uppercase" : undefined,
                      display: row.stacked ? "block" : undefined,
                    }}
                  >
                    {row.label}
                    {row.stacked ? "" : " "}
                  </span>
                )}
                <span
                  style={{
                    fontWeight: row.boldBoth ? 700 : row.boldLabel ? 300 : 700,
                    letterSpacing:
                      row.boldBoth ? "0.18em" : row.boldLabel ? "0.08em" : "0.18em",
                    display: row.stacked ? "block" : undefined,
                    color: row.headingColor,
                  }}
                >
                  {row.heading}
                </span>
              </h2>
              {row.highlight && (
                <p
                  className={`${
                    row.largeText ? "text-[16px]" : "text-[14px]"
                  } leading-[1.85]`}
                  style={{
                    color: "#D4922A",
                    fontFamily: '"Mainlux", "Inter", sans-serif',
                    fontWeight: 300,
                  }}
                >
                  {row.highlight}
                </p>
              )}
              <div
                className="flex flex-col gap-4"
                style={{
                  fontFamily: 'var(--font-yantramanav), "Inter", sans-serif',
                  fontWeight: 300,
                }}
              >
                {row.body.map((para, j) => (
                  <p
                    key={j}
                    className="text-brand-text"
style={{
  fontSize: row.bodySize || "14px",
  lineHeight: row.bodySize ? "1.9" : "1.85",
}}
                  >
                    {para}
                  </p>
                ))}
              </div>
              {row.pullQuote && (
                <div
                  className="flex flex-col gap-1 text-brand-text"
                  style={{
                    marginTop: "8px",
                    fontFamily: '"Mainlux", "Inter", sans-serif',
                    fontWeight: 700,
                  }}
                >
                  {row.pullQuote.map((line, k) => (
                    <p key={k} className="text-[16px] leading-[1.4]">
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Illustration */}
            <div
              className={`flex justify-center ${
                row.reversed ? "md:order-1" : "md:order-2"
              }`}
            >
              <Image
                src={row.image}
                alt={row.imageAlt}
                width={row.imageW}
                height={row.imageH}
                className={`w-full h-auto object-contain ${
  i === 0
    ? "max-w-[520px]"
    : i === 1
    ? "max-w-[528px]"
    : i === 2
    ? "max-w-[580px]" // 👈 increase size here
    : i === 4
    ? "max-w-[528px]"
    : "max-w-[440px]"
}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
