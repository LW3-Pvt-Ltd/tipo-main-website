import Image from "next/image";

export default function MapSection() {
  return (
    <section className="bg-brand-black pt-20 md:pt-28 pb-4 md:pb-[clamp(60px,4.2vw,100px)] relative mt-0 md:-mt-[100px] no-magnify">
      <div className="max-w-[clamp(1152px,75vw,1800px)] mx-auto px-10 md:px-[clamp(64px,5.5vw,120px)]">
        {/* Welcome heading + culture quote */}
        <div data-parallax-text className="max-w-[clamp(600px,41.7vw,900px)] mx-auto text-center flex flex-col gap-4 md:py-20">
          <h2 className="text-[20px] md:text-[clamp(24px,1.67vw,38px)] leading-snug text-[#D4922A]">
            <span className="tx-eyebrow block">Welcome</span>
            <span className="tx-tracked-light block">TiPo&apos;s Po:Ro Apong</span>
            <span className="tx-tracked-light block">to your world</span>
          </h2>
          <div className="flex flex-col gap-1">
            <p className="tx-body text-[clamp(14px,0.97vw,20px)] leading-[1.4] md:leading-[1.8] text-brand-text">
              Every culture has a fermentation that is unique to them.
            </p>
            <p className="tx-body text-[clamp(14px,0.97vw,20px)] leading-[1.4] md:leading-[1.8] text-brand-text">
              Japan has Sak&eacute;, Korea has Soju, Europe has Wine.
            </p>
            <p className="tx-serif-bold text-[clamp(16px,1.11vw,22px)] leading-[1.4] text-[#C8C8C8]">
              India has Po:Ro Apong.
            </p>
          </div>
        </div>

        {/* Map + Bottle — negative margin only on md+ to avoid text overlapping map on mobile */}
        <div className="relative md:mb-16 mt-6 md:-mt-[200px] xl:-mt-[260px] 2xl:-mt-[340px]">
          <Image
            src="/tipo-main-website/images/map.webp"
            alt="World map highlighting the Brahmaputra Valley origin of Po:ro Apong"
            width={1200}
            height={600}
            className="w-full max-w-[clamp(864px,60vw,1400px)] mx-auto h-auto object-contain relative z-10 force-magnify"
          />

          {/* Bottle overlay — desktop: right edge flush with viewport */}
          <div
            className="hidden md:block absolute -bottom-[540px] xl:-bottom-[740px] 2xl:-bottom-[440px]"
            style={{
              right: "calc(-1 * ((100vw - clamp(1152px, 75vw, 1800px)) / 2 + clamp(64px, 5.5vw, 120px)))",
              maskImage:
                "radial-gradient(ellipse 70% 70% at 60% 55%, black 40%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 70% at 60% 55%, black 40%, transparent 100%)",
            }}
          >
            <Image
              src="/tipo-main-website/images/Bottom bottle latest.webp"
              alt="TI:PO bottle angled presentation"
              width={1055}
              height={2531}
              className="object-contain w-[clamp(1055px,51.5vw,1320px)]"
            />
          </div>

          {/* Bottle overlay — mobile: pushed to right edge */}
          <div
            className="md:hidden flex justify-end md:mt-[516px]"
            style={{
              marginRight: "-30px",
              maskImage:
                "radial-gradient(ellipse 60% 70% at 65% 55%, black 35%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 70% at 65% 55%, black 35%, transparent 100%)",
            }}
          >
            <Image
              src="/tipo-main-website/images/Bottom bottle latest.webp"
              alt="TI:PO bottle angled presentation"
              width={375}
              height={900}
              className="object-contain"
            />
          </div>
        </div>

        {/* Motif + Contact & Distribution */}
        <div id="contact" className="mt-8 md:mt-[460px] xl:mt-[620px] 2xl:mt-[210px]">
          <Image
            src="/tipo-main-website/images/motif-latest.webp"
            alt="Decorative motif"
            width={600}
            height={60}
            className="mx-auto block h-6 w-auto"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 50%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 50%, transparent 100%)",
            }}
          />
          <div className="text-center mt-[45px]">
            <h2 className="tx-eyebrow text-[20px] md:text-[clamp(24px,1.67vw,38px)] leading-snug mb-[13px] text-[#D4922A]">
              Contact &amp; Distribution
            </h2>
            <p className="tx-body-medium text-[clamp(14px,0.97vw,20px)] leading-[1.4] md:leading-[1.8] text-[#C8C8C8]">
              +91 88220 92973 &nbsp;|&nbsp;{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&to=info@heritagetipo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300 underline-offset-2 hover:underline"
              >
                info@heritagetipo.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
