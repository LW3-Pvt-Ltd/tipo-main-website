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
  /** Per-paragraph leading overrides; index matches body array. undefined entries use default. */
  bodyLeadings?: (string | undefined)[];
  /** If true, use the larger 28px heading / 14px #C8C8C8 body scale + wider padding. */
  largeText?: boolean;
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
    image: "/tipo-main-website/images/latest brewmaster 1.webp",
    imageAlt: "Illustration of a brewmaster figure in traditional clothing with botanicals",
    imageW: 520,
    imageH: 520,
    reversed: false,
    bodyLeadings: ["leading-[1.2] md:leading-[1.25]", "leading-[1.2] md:leading-[1.25]", "leading-[1.2] md:leading-[1.25]", "leading-[1.2] md:leading-[1.25]"],
  },
  {
    label: "FIRE, RICE",
    heading: "and the restraint",
    body: [
      "Po:ro Apong ferments in solid state, not liquid. Fermentation takes place in small batches, typically 5 to 7 kilograms, allowing close attention rather than mechanical intervention.",
      "The ferment beds are not stirred or corrected. The brewmasters monitor progress by sight, scent, and time. Intervention is rare, and only when necessary. This process resists massive scale by design. It depends on judgment rather than automation, and on time rather than speed.",
    ],
    image: "/tipo-main-website/images/latest mandala 1.webp",
    imageAlt: "Intricate circular mandala illustration of rice and botanicals",
    imageW: 578,
    imageH: 578,
    reversed: true,
    stacked: true,
    boldLabel: true,
    largeText: true,
    bodyLeadings: ["leading-[1.2] md:leading-[1.25]", "leading-[1.2] md:leading-[1.25]"],
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
    image: "/tipo-main-website/images/latest new-grain-boundary 1.webp",
    imageAlt: "Oval illustration representing the grain boundary fermentation process",
    imageW: 720,
    imageH: 720,
    reversed: false,
    stacked: true,
    boldBoth: true,
    largeText: true,
    bodyLeadings: ["leading-[1.2] md:leading-[1.25]", "leading-[1.2] md:leading-[1.25]", "leading-[1.2] md:leading-[1.25]", "leading-[1.2] md:leading-[1.25]"],
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
    image: "/tipo-main-website/images/latest solid-state 1.webp",
    imageAlt: "Folk art figure with floral motifs representing solid-state fermentation",
    imageW: 440,
    imageH: 440,
    reversed: true,
    stacked: true,
    boldLabel: true,
    largeText: true,
    bodyLeadings: ["leading-[1.2] md:leading-[1.25]", "leading-[1.2] md:leading-[1.25]", undefined, "leading-[1.2] md:leading-[1.25]"],
  },
  {
    label: "",
    heading: "The Drawing",
    body: [
      "In the traditional method, when fermentation is complete, the wine is gently drawn from the grain. What emerges reflects the forest, the season, and the decisions made during that cycle.",
      "Each batch is distinct. Variation is not corrected; it is accepted as truth.",
    ],
    pullQuote: ["This is not an inconsistency.", "This is nature."],
    image: "/tipo-main-website/images/latest drawing 1.webp",
    imageAlt: "Detailed illustrated scene showing the drawing process",
    imageW: 520,
    imageH: 520,
    reversed: false,
    largeText: true,
    bodyLeadings: ["leading-[1.2] md:leading-[1.25]"],
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-brand-black py-[clamp(44px,3vw,80px)]">
      <div className="max-w-[clamp(1152px,75vw,1800px)] mx-auto px-10 md:px-[clamp(64px,5.5vw,120px)] flex flex-col gap-16 md:gap-[clamp(88px,6vw,160px)]">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-1 gap-x-8 md:gap-x-[clamp(40px,3vw,80px)] gap-y-6 items-center ${
  i === 0
    ? "md:grid-cols-[2fr_3fr]"
    : i === 1
    ? "md:grid-cols-[3fr_2fr]"
    : i === 2
    ? "md:grid-cols-[2fr_3fr] md:gap-x-2"
    : i === 3
    ? "md:grid-cols-2 md:gap-x-4"
    : i === 4
    ? "md:grid-cols-2 md:gap-x-4"
    : "md:grid-cols-2"
}`}
>
            {/* Text */}
            <div
              data-parallax-text
              className={`flex flex-col gap-4 md:gap-2 order-2 ${
                row.reversed ? "md:order-2" : "md:order-1"
              } ${row.largeText ? `${i !== 1 && i !== 2 && i !== 3 && i !== 4 ? "md:py-5 " : ""}w-full md:max-w-[clamp(480px,33.3vw,680px)]` : ""}${
    i === 0 ? " mt-0" : ""}${
    i === 2 ? " md:ml-6" : ""
  }`}
            >
              <h2
                className={`text-[20px] md:text-[clamp(24px,1.67vw,38px)] leading-snug text-[#D4922A] ${
                  row.stacked ? "" : "whitespace-nowrap"
                }`}
              >
                {row.label && (
                  <span
                    className={`${
                      row.boldBoth || row.boldLabel ? "tx-eyebrow" : "tx-tracked-light"
                    } ${row.boldLabel ? "uppercase" : ""} ${
                      row.stacked ? "block" : ""
                    }`}
                  >
                    {row.label}
                    {row.stacked ? "" : " "}
                  </span>
                )}
                <span
                  className={`${
                    row.boldLabel ? "tx-tracked-light" : "tx-eyebrow"
                  } ${row.stacked ? "block" : ""}`}
                  style={row.headingColor ? { color: row.headingColor } : undefined}
                >
                  {row.heading}
                </span>
              </h2>
              {row.highlight && (
                <p
                  className={`tx-serif-light leading-[1.4] text-[#D4922A] ${
                    row.largeText ? "md:text-[clamp(16px,1.11vw,22px)]" : "text-[14px]"
                  }`}
                >
                  {row.highlight}
                </p>
              )}
              <div className="tx-body flex flex-col gap-4 md:gap-2">
                {row.body.map((para, j) => (
                  <p
                    key={j}
                    className={`text-[14px] md:text-[clamp(16px,1.11vw,22px)] ${row.bodyLeadings?.[j] ?? "leading-[1.85] md:leading-[1.5]"} text-brand-text`}
                  >
                    {para}
                  </p>
                ))}
              </div>
              {row.pullQuote && (
                <div className="tx-serif-bold flex flex-col gap-[2px] text-brand-text mt-2">
                  {row.pullQuote.map((line, k) => (
                    <p key={k} className="text-[clamp(16px,1.11vw,22px)] leading-[1.2]">
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Illustration */}
            <div
              data-parallax-img
              className={`flex justify-center order-1 ${
                row.reversed ? "md:order-1" : "md:order-2"
              }${i === 0 ? " md:justify-end" : i === 1 ? " md:justify-start" : i === 2 ? " md:justify-end" : i === 3 ? " md:justify-start" : i === 4 ? " md:justify-end" : ""}`}
            >
              <Image
                src={row.image}
                alt={row.imageAlt}
                width={row.imageW}
                height={row.imageH}
                className={`w-full h-auto object-contain ${
  i === 0
    ? "max-w-[280px] sm:max-w-[380px] md:max-w-[clamp(529px,37vw,693px)]"
    : i === 1
    ? "max-w-[280px] sm:max-w-[380px] md:max-w-[clamp(514px,36vw,689px)]"
    : i === 2
    ? "max-w-[300px] sm:max-w-[420px] md:w-[94%] md:max-w-full"
    : i === 3
    ? "max-w-[260px] sm:max-w-[340px] md:w-full md:max-w-[clamp(480px,43vw,768px)]"
    : i === 4
    ? "max-w-[280px] sm:max-w-[380px] md:w-full md:max-w-[clamp(462px,33vw,594px)]"
    : "max-w-[260px] sm:max-w-[340px] md:max-w-[440px]"
}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
