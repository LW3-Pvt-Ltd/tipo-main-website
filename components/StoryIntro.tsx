import Image from "next/image";

export default function StoryIntro() {
  return (
    <section id="" className="bg-brand-black py-[clamp(44px,3vw,80px)] md:mt-20">
      <div className="max-w-[clamp(1152px,75vw,1800px)] mx-auto px-10 md:px-[clamp(64px,5.5vw,120px)]">
        {/* Two-column: Image + Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-[clamp(40px,3vw,80px)] gap-y-12 items-start md:items-center">
          {/* Left — Image */}
          {/* style={{height:360, width:480}}  */}
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
            <div data-parallax-img className="absolute" style={{ inset: "-15%" }}>
              <Image
                src="/tipo-main-website/images/latest new herb-collector .webp"
                alt="Women herb collectors gathering botanicals in the Himalayan foothills"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right — Text */}
          <div data-parallax-text className="flex flex-col gap-2">
            <div className="flex flex-col gap-1 mt-5">
              <span className="tx-serif-bold text-[20px] uppercase tracking-[0.25em] text-[#D4922A]">
                The Forest
              </span>
              <h2 className="tx-serif-light text-[20px] md:text-[clamp(24px,1.67vw,38px)] leading-snug text-[#D4922A]">
                &amp; the Herb collectors
              </h2>
            </div>
            <div className="tx-body flex flex-col gap-2 md:gap-1">
              <p className="text-[clamp(16px,1.11vw,22px)] leading-[1.4] text-brand-text md:text-brand-gold">
                Each season begins in the forest at the foothills of the Himalayas.
              </p>
              <p className="text-[clamp(16px,1.11vw,22px)] leading-[1.2] md:leading-[1.25] text-brand-text">
                Women trained in botanical knowledge enter the surrounding landscape
                to gather what the year allows. They collect with restraint,
                selecting from more than sixty forest botanicals based on smell,
                maturity, texture, and memory.
              </p>
              <p className="text-[clamp(16px,1.11vw,22px)] leading-[1.2] md:leading-[1.25] text-brand-text">
                The forest decides what is available.
                <br />
                The collectors decide what should be taken and what should be left
                behind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
