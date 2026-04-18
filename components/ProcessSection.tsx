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
    imageW: 440,
    imageH: 440,
    reversed: false,
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
    imageW: 440,
    imageH: 440,
    reversed: true,
  },
  {
    label: "Grain Boundary",
    heading: "Fermentation",
    body: [
      "The gathered botanicals are handed to the women brewmasters. There is no recipe to follow. Proportions are decided anew every season, based on climate, humidity, the character of the herbs, and the brewmaster\u2019s accumulated experience.",
      "The botanicals are dried, ground, and combined with rice flour to form e-pob, the traditional starter cake. This starter does not impose flavor. It invites fermentation \u2014 recruiting native yeasts and microbes specific to this place.",
    ],
    image: "/Tipo-website/images/fermentation.webp",
    imageAlt: "Oval illustration representing the grain boundary fermentation process",
    imageW: 400,
    imageH: 480,
    reversed: false,
  },
  {
    label: "A RARE SOLID-STATE",
    heading: "Fermentation",
    highlight: "Po:ro Apong ferments in solid state, not liquid.",
    body: [
      "Fermentation takes place in small batches, typically 5 to 7 kilograms, allowing close attention rather than mechanical intervention.",
      "The ferment beds are not stirred or corrected. The brewmasters monitor progress by sight, scent, and time. Intervention is rare, and only when necessary.",
    ],
    image: "/Tipo-website/images/solid-state.webp",
    imageAlt: "Folk art figure with floral motifs representing solid-state fermentation",
    imageW: 440,
    imageH: 440,
    reversed: true,
  },
  {
    label: "",
    heading: "The Drawing",
    body: [
      "In the traditional method, when fermentation is complete, the wine is gently drawn from the grain. What emerges reflects the forest, the season, and the decisions made during that cycle.",
      "Each batch is distinct. Variation is not corrected; it is accepted as truth. This is not an inconsistency. This is nature.",
    ],
    image: "/Tipo-website/images/drawing.webp",
    imageAlt: "Detailed illustrated scene showing the drawing process",
    imageW: 440,
    imageH: 440,
    reversed: false,
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-brand-black py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-10 md:px-16 lg:px-20 flex flex-col gap-20 md:gap-28">
        {rows.map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 items-center"
          >
            {/* Text */}
            <div
              className={`flex flex-col gap-4 ${
                row.reversed ? "md:order-2" : "md:order-1"
              }`}
            >
              <h2
                className="text-xl md:text-2xl leading-snug whitespace-nowrap"
                style={{
                  color: "#D4922A",
                  fontFamily: '"Mainlux", "Inter", sans-serif',
                }}
              >
                {row.label && (
                  <span style={{ fontWeight: 300 }}>{row.label} </span>
                )}
                <span style={{ fontWeight: 700 }}>{row.heading}</span>
              </h2>
              {row.highlight && (
                <p
                  className="text-[14px] leading-[1.85]"
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
                    className="text-[12px] leading-[1.85] text-brand-text"
                  >
                    {para}
                  </p>
                ))}
              </div>
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
                className="w-full max-w-[440px] h-auto object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
