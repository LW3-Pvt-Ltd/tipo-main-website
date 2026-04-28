import Image from "next/image";

export default function CellarSection() {
  return (
    <section className="bg-brand-black py-[clamp(44px,3vw,80px)]">
      <div className="max-w-[clamp(1152px,75vw,1800px)] mx-auto px-10 md:px-[clamp(64px,5.5vw,120px)]">
        {/* Two-column 50/50: matches StoryIntro so the image renders identically sized */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-[clamp(40px,3vw,80px)] gap-y-12 items-start md:items-center">
          {/* Left — image (2400x1800 / 4:3 frame) */}
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
            <div data-parallax-img className="absolute" style={{ inset: "-15%" }}>
              <Image
                src="/tipo-main-website/images/latest new winery .webp"
                alt="Traditional winery with worker overseeing the process"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right — text */}
          <div data-parallax-text className="flex flex-col gap-4 md:gap-2 w-full md:max-w-[clamp(480px,33.3vw,680px)] pb-10 md:pt-10 md:mt-[2.5px]">
            <h2 className="text-[20px] md:text-[clamp(24px,1.67vw,38px)] leading-snug text-[#D4922A]">
              <span className="tx-eyebrow block">Technology is the valet,</span>
              <span className="tx-tracked-light block">not the star.</span>
            </h2>
            <p className="tx-serif-light text-[clamp(16px,1.11vw,22px)] leading-[1.4] text-[#D4922A]">
              Tipo did not reinterpret
              <br />
              Po:ro Apong.
            </p>
            <div className="tx-body flex flex-col gap-4 md:gap-2">
              <p className="text-[clamp(16px,1.11vw,22px)] leading-[1.2] md:leading-[1.25] text-brand-text">
                Our role is deliberately modest: introduce hygiene, scientific
                filtration, and clean bottling in modern winery setting so the
                Po:ro Apong can travel without altering its character.
              </p>
              <p className="text-[clamp(16px,1.11vw,22px)] leading-[1.2] md:leading-[1.25] text-brand-text">
                This quiet preservation is overseen by Ajoy Shaw, DipWSET, our
                Chief Winemaker, ensuring what reaches you is what was made at
                the source: the Brahmaputra Valley, kept pristine in glass.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
