import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center overflow-hidden">
      {/* Hero area — pure black to match bottle */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center bg-black">
        {/* Bottle centered + Discover positioned beside it */}
        <div className="relative z-10 flex flex-col items-center translate-y-[120px]">
          <div
            style={{
              maskImage:
                "radial-gradient(ellipse 65% 75% at 50% 45%, black 40%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 65% 75% at 50% 45%, black 40%, transparent 100%)",
            }}
          >
            <Image
              src="/Tipo-website/images/tipo-bottle-latest.webp"
              alt="TI:PO Po:ro Apong rice wine bottle"
              width={1200}
              height={2700}
              className="object-contain max-h-[128vh]"
              priority
            />
          </div>
          <a
            href="#the-craft"
            className="absolute right-[-50px] top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[0.25em] text-brand-text whitespace-nowrap hover:text-brand-gold transition-colors duration-300 cursor-pointer"
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
              d="M0,0 L1440,0 L1440,15 C1380,8 1300,18 1220,12 C1140,6 1080,28 1020,35 C960,42 900,30 840,25 C780,20 720,30 660,50 C600,70 540,100 480,130 C420,158 360,178 300,180 C240,182 180,155 120,120 C60,85 30,55 0,40 Z"
              fill="#000000"
            />
            {/* Subtle gold stroke on the curve edge */}
            <path
              d="M0,40 C30,55 60,85 120,120 C180,155 240,182 300,180 C360,178 420,158 480,130 C540,100 600,70 660,50 C720,30 780,20 840,25 C900,30 960,42 1020,35 C1080,28 1140,6 1220,12 C1300,18 1380,8 1440,15"
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
