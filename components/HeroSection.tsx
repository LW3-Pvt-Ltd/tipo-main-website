import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center overflow-hidden">
      {/* Hero area — pure black to match bottle */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center bg-black">
        {/* Bottle centered + Discover positioned beside it */}
        <div className="relative z-10 flex flex-col items-center translate-y-[100px]">
          <div
            style={{
              transform: "translateX(20px) scale(1.2)",
              transformOrigin: "top center",
              maskImage:
                "radial-gradient(ellipse 45% 72% at 50% 45%, black 15%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 45% 72% at 50% 45%, black 15%, transparent 70%)",
            }}
          >
            <Image
              src="/Tipo-website/images/tipo-bottle-latest.webp"
              alt="TI:PO Po:ro Apong rice wine bottle"
              width={900}
              height={2025}
              className="object-contain max-h-[96vh]"
              priority
            />
          </div>
          <a
            href="#the-craft"
            className="absolute top-1/2 uppercase tracking-[0.25em] text-brand-gold whitespace-nowrap hover:text-brand-goldlight transition-colors duration-300 cursor-pointer animate-glow left-[180px] -translate-y-[calc(50%_+_60px)] md:left-[80px] md:-translate-y-[calc(50%-180px)]"
            style={{
              fontFamily: '"Mainlux Light", "Mainlux", "Inter", sans-serif',
              fontWeight: 300,
              fontSize: "10pt",
            }}
          >
            Discover &gt;&gt;
          </a>
        </div>
      </div>

      {/* Himalaya background with built-in shape divider cutout */}
      <div className="w-full relative z-20 -mt-[60px]" style={{ minHeight: "61vw" }}>
        {/* Himalaya new image — black cutout at top blends seamlessly with hero */}
        <div className="absolute inset-0">
          <Image
            src="/Tipo-website/images/himalaya-new.webp"
            alt="Eastern Himalayas with shape divider cutout"
            fill
            className="object-cover object-top"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, transparent 22%, rgba(0,0,0,0.55) 42%, rgba(0,0,0,0.65) 100%)",
            }}
          />
        </div>

        {/* Text content — positioned over the himalaya image.
            Outer flex centers an inner box whose width mirrors the
            bottle wrapper above (max-h:96vh * natural aspect 900/2025).
            Inside, we use the SAME left offsets as the Discover button
            (180px mobile / 80px desktop) so text and Discover share the
            exact same vertical axis. */}
        <div className="relative z-10 pt-[180px] md:pt-[240px] pb-40 md:pb-52 flex flex-col items-center">
          <div
            className="relative"
            style={{ width: "calc(96vh * 900 / 2025)", maxWidth: "100vw" }}
          >
          <div
            className="max-w-[260px] md:max-w-[420px] ml-[180px] md:ml-[80px] text-left"
            style={{
              fontFamily: '"Mainlux", "Inter", sans-serif',
            }}
          >
            {/* THE CRAFT label */}
            <span
              className="text-[10px] uppercase tracking-[0.25em] text-brand-gold"
              style={{ fontWeight: 300 }}
            >
              The Craft
            </span>

            {/* Subtitle — descriptive line: MAINLUX Light */}
            <p
              className="text-brand-offwhite/80 text-sm md:text-[15px] italic mt-1 mb-0"
              style={{ fontWeight: 300 }}
            >
              Born at the Foothills of the
            </p>

            {/* Main heading — emphasized phrase: MAINLUX Bold */}
            <h1
              className="text-brand-gold text-2xl md:text-3xl lg:text-4xl tracking-[0.08em] uppercase leading-tight mb-3"
              style={{ fontWeight: 700 }}
            >
              Eastern Himalayas
            </h1>

            {/* Intro paragraphs — body: Yantramanav Light */}
            <div
              className="flex flex-col gap-2 max-w-xl"
              style={{
                fontFamily:
                  'var(--font-yantramanav), "Inter", sans-serif',
                fontWeight: 300,
              }}
            >
              <p className="text-[12px] leading-[1.7] text-brand-text">
                Po:ro Apong is born where the Eastern Himalayan foothills spill into
                Assam&apos;s Brahmaputra Valley.
              </p>
              <p className="text-[12px] leading-[1.7] text-brand-text">
                From this landscape emerges a living library of
                flavour&mdash;60+ forest botanicals, each shaped by soil,
                climate and time. Herbs are gathered from the mountains; rice rises
                from the river&apos;s alluvial fields.
              </p>
              <p className="text-[12px] leading-[1.7] text-brand-text">
                Every year the valley resets
                itself&mdash;flood, monsoon, heat and generous
                humidity&mdash;creating one of India&apos;s richest biodiversities.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
