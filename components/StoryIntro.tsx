import Image from "next/image";

export default function StoryIntro() {
  return (
    <section id="the-craft" className="bg-brand-black py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-10 md:px-16 lg:px-20">
        {/* Two-column: Image + Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 items-start">
          {/* Left — Image */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/Tipo-website/images/herb-collector.webp"
              alt="Women herb collectors gathering botanicals in the Himalayan foothills"
              fill
              className="object-cover"
            />
          </div>

          {/* Right — Text */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span
                className="text-[20px] uppercase tracking-[0.25em] text-brand-gold"
                style={{
                  fontFamily: '"Mainlux", "Inter", sans-serif',
                  fontWeight: 700,
                }}
              >
                The Forest
              </span>
              <h2
                className="text-xl md:text-2xl leading-snug text-brand-gold"
                style={{
                  fontFamily: '"Mainlux", "Inter", sans-serif',
                  fontWeight: 300,
                }}
              >
                &amp; the Herb collectors
              </h2>
            </div>
            <div
              className="flex flex-col gap-4"
              style={{
                fontFamily: 'var(--font-yantramanav), "Inter", sans-serif',
                fontWeight: 300,
              }}
            >
              <p className="text-[12px] leading-[1.85] text-brand-text">
                Each season begins in the forest at the foothills of the Himalayas.
                Women trained in botanical knowledge enter the surrounding landscape
                to gather what the year allows. They collect with restraint,
                selecting from more than sixty forest botanicals based on smell,
                maturity, texture, and memory.
              </p>
              <p className="text-[12px] leading-[1.85] text-brand-text">
                The forest decides what is available. The collectors decide what
                should be taken and what should be left behind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
