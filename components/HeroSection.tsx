import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center overflow-hidden">
      {/* Hero area — pure black to match bottle */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center bg-black">
        {/* Bottle centered + Discover positioned beside it */}
        <div className="relative z-10 flex flex-col items-center translate-y-[40px]">
          <div
            style={{
              maskImage:
                "radial-gradient(ellipse 70% 95% at 50% 48%, black 55%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 95% at 50% 48%, black 55%, transparent 100%)",
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
            className="absolute top-1/2 uppercase tracking-[0.25em] text-brand-gold whitespace-nowrap hover:text-brand-goldlight transition-colors duration-300 cursor-pointer animate-glow text-[7px] right-[40px] -translate-y-[calc(50%+240px)] md:text-[14px] md:right-[-60px] md:-translate-y-1/2"
          >
            Discover &gt;&gt;
          </a>
        </div>
      </div>

      {/* Himalaya background with built-in shape divider cutout */}
      <div className="w-full relative">
        {/* Himalaya new image — black cutout at top blends seamlessly with hero */}
        <div className="absolute inset-0">
          <Image
            src="/Tipo-website/images/himalaya-new.webp"
            alt="Eastern Himalayas with shape divider cutout"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Shape divider — fades himalaya into the section below */}
        <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
          <img
            src="/Tipo-website/images/himalaya-shape-divider.svg"
            alt=""
            className="w-full block"
            aria-hidden="true"
          />
        </div>

        {/* Text content — positioned over the himalaya image */}
        <div className="relative z-10 pt-[180px] md:pt-[240px] pb-16 md:pb-20">
          <div className="max-w-4xl mx-auto px-10 md:px-16 lg:px-20 text-center">
            {/* Subtitle */}
            <p className="font-serif text-brand-offwhite/70 text-sm md:text-base italic mb-2">
              Born at the Foothills of the
            </p>

            {/* Main heading */}
            <h1 className="font-serif text-brand-gold text-2xl md:text-3xl lg:text-4xl tracking-[0.08em] uppercase leading-none mb-6">
              Eastern Himalayas
            </h1>

            {/* THE CRAFT label */}
            <div className="flex justify-center mb-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-brand-gold font-medium">
                The Craft
              </span>
            </div>

            {/* Intro paragraph */}
            <p className="text-[12px] leading-[1.9] text-brand-text max-w-xl mx-auto text-left">
              Po:ro Apong is born where the Eastern Himalayan foothills spill into
              Assam&apos;s Brahmaputra Valley. From this landscape emerges a living
              library of flavour&mdash;60+ forest botanicals, each shaped by soil,
              climate and time. Herbs are gathered from the mountains; rice rises
              from the river&apos;s alluvial fields. Every year the valley resets
              itself&mdash;flood, monsoon, heat and generous humidity&mdash;creating
              one of India&apos;s richest biodiversities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
