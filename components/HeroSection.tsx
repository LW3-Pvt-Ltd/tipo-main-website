import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center overflow-hidden">
      {/* Hero area — pure black to match bottle */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center bg-black">
        {/* Bottle centered + Discover positioned beside it */}
        <div className="relative z-10 flex flex-col items-center">
          <div
            style={{
              maskImage:
                "radial-gradient(ellipse 65% 75% at 50% 45%, black 40%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 65% 75% at 50% 45%, black 40%, transparent 100%)",
            }}
          >
            <Image
              src="/Tipo-website/images/tipo-bottle.jpeg"
              alt="TI:PO Po:ro Apong rice wine bottle"
              width={800}
              height={1800}
              className="object-contain max-h-[85vh]"
              priority
            />
          </div>
          <a
            href="#the-craft"
            className="absolute right-[-100px] top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[0.25em] text-brand-text whitespace-nowrap hover:text-brand-gold transition-colors duration-300 cursor-pointer"
          >
            Discover &gt;&gt;
          </a>
        </div>
      </div>

      {/* River background section — text lives inside the curve reveal */}
      <div className="w-full relative">
        {/* River background image — extends behind everything */}
        <div className="absolute inset-0">
          <Image
            src="/Tipo-website/images/river.jpg"
            alt="Brahmaputra Valley river landscape"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        {/* Shape divider overlaying the TOP of river — black fill ABOVE the curve */}
        <div className="relative z-20 w-full pointer-events-none">
          <svg
            viewBox="0 0 1440 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            style={{ height: "220px" }}
            preserveAspectRatio="none"
          >
            {/* Fill ABOVE the curve with black — seamless transition from hero */}
            <path
              d="M0,0 L1440,0 L1440,110 C1420,120 1380,132 1300,140 C1220,150 1140,135 1060,125 C980,115 920,120 820,140 C720,160 650,188 550,180 C450,170 400,135 300,90 C200,50 120,35 0,40 Z"
              fill="#000000"
            />
            {/* Subtle gold stroke on the curve edge */}
            <path
              d="M0,40 C120,35 200,50 300,90 C400,135 450,170 550,180 C650,188 720,160 820,140 C920,120 980,115 1060,125 C1140,135 1220,150 1300,140 C1380,132 1420,120 1440,110"
              fill="none"
              stroke="rgba(201,168,76,0.12)"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Text content — positioned below the curve, over the river */}
        <div className="relative z-10 pb-16 md:pb-20 -mt-4">
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
