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
            pl values match Discover's left offsets so text shares the
            same vertical axis (x=180 mobile, x=80 desktop). */}
        <div className="relative z-10 pt-[180px] md:pt-[240px] pb-40 md:pb-52">
          <div
            className="pl-[440px] md:pl-[340px] pr-6 md:pr-10 max-w-[680px] md:max-w-[740px] text-left"
            style={{
              fontFamily: '"Mainlux", "Inter", sans-serif',
            }}
          >
            {/* THE CRAFT label */}
            <span
              className="block text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-6"
              style={{ fontWeight: 300 }}
            >
              The Craft
            </span>

            {/* Subtitle — descriptive line: MAINLUX Light, gold */}
            <p
              className="text-brand-gold text-[22px] md:text-[24px] leading-[1.15] mb-0"
              style={{ fontWeight: 300 }}
            >
              Born at the Foothills of the
            </p>

            {/* Main heading — emphasized phrase: MAINLUX Bold */}
            <h1
              className="text-brand-gold text-[22px] md:text-[24px] uppercase leading-[1.15] mb-6"
              style={{ fontWeight: 900, letterSpacing: "0.02em" }}
            >
              Eastern Himalayas
            </h1>

            {/* Intro paragraphs — body: Yantramanav Light */}
            <div
              className="flex flex-col gap-4 max-w-[420px]"
              style={{
                fontFamily:
                  'var(--font-yantramanav), "Inter", sans-serif',
                fontWeight: 300,
              }}
            >
              <p className="text-[13px] leading-[1.55] text-brand-text">
                Po:ro Apong is born where the Eastern Himalayan foothills spill into
                Assam&apos;s Brahmaputra Valley.
              </p>
              <p className="text-[13px] leading-[1.55] text-brand-text">
                From this landscape emerges a living library of
                flavour&mdash;60+ forest botanicals, each shaped by soil,
                climate and time. Herbs are gathered from the mountains; rice rises
                from the river&apos;s alluvial fields.
              </p>
              <p className="text-[13px] leading-[1.55] text-brand-text">
                Every year the valley resets
                itself&mdash;flood, monsoon, heat and generous
                humidity&mdash;creating one of India&apos;s richest biodiversities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
