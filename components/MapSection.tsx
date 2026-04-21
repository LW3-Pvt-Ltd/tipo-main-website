import Image from "next/image";

export default function MapSection() {
  return (
    <section className="bg-brand-black py-20 md:py-28 relative overflow-hidden -mt-[100px]">
      <div className="max-w-6xl mx-auto px-10 md:px-16 lg:px-20">
        {/* Welcome heading + culture quote */}
        <div className="max-w-[600px] mx-auto text-center flex flex-col gap-4 md:py-20 -translate-y-[45px]">
          <h2
            className="text-xl md:text-2xl leading-snug"
            style={{
              color: "#D4922A",
              fontFamily: '"Mainlux", "Inter", sans-serif',
            }}
          >
            <span
              style={{
                display: "block",
                fontWeight: 700,
                letterSpacing: "0.18em",
              }}
            >
              Welcome
            </span>
            <span
              style={{
                display: "block",
                fontWeight: 300,
                letterSpacing: "0.08em",
              }}
            >
              TiPo&apos;s Po:Ro Apong
            </span>
            <span
              style={{
                display: "block",
                fontWeight: 300,
                letterSpacing: "0.08em",
              }}
            >
              to your world
            </span>
          </h2>
          <div className="flex flex-col gap-1">
            <p
              className="text-[14px] leading-[1.8] text-brand-text"
              style={{
                fontFamily: 'var(--font-yantramanav), "Inter", sans-serif',
                fontWeight: 300,
              }}
            >
              Every culture has a fermentation that is unique to them.
            </p>
            <p
              className="text-[14px] leading-[1.8] text-brand-text"
              style={{
                fontFamily: 'var(--font-yantramanav), "Inter", sans-serif',
                fontWeight: 300,
              }}
            >
              Japan has Sak&eacute;, Korea has Soju, Europe has Wine.
            </p>
            <p
              className="text-[16px] leading-[1.4]"
              style={{
                color: "#C8C8C8",
                fontFamily: '"Mainlux", "Inter", sans-serif',
                fontWeight: 700,
              }}
            >
              India has Po:Ro Apong.
            </p>
          </div>
        </div>

        {/* Map + Bottle — negative margin only on md+ to avoid text overlapping map on mobile */}
        <div className="relative mb-16 mt-6 md:-mt-[255px] -translate-y-[145px] md:translate-y-0">
          <Image
            src="/Tipo-website/images/map.webp"
            alt="World map highlighting the Brahmaputra Valley origin of Po:ro Apong"
            width={1200}
            height={600}
            className="w-full max-w-[864px] mx-auto h-auto object-contain relative z-10"
          />

          {/* Bottle overlay — desktop: flush to right edge */}
          <div
            className="hidden md:block absolute"
            style={{
              right: "-226px",
              bottom: "-600px",
              transform: "rotate(0deg)",
              maskImage:
                "radial-gradient(ellipse 70% 70% at 60% 55%, black 40%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 70% at 60% 55%, black 40%, transparent 100%)",
            }}
          >
            <Image
              src="/Tipo-website/images/bottle.jpeg"
              alt="TI:PO bottle angled presentation"
              width={938}
              height={2250}
              className="object-contain"
            />
          </div>

          {/* Bottle overlay — mobile: pushed to right edge */}
          <div
            className="md:hidden flex justify-end mt-[516px]"
            style={{
              marginRight: "-30px",
              maskImage:
                "radial-gradient(ellipse 60% 70% at 65% 55%, black 35%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 70% at 65% 55%, black 35%, transparent 100%)",
            }}
          >
            <Image
              src="/Tipo-website/images/bottle.jpeg"
              alt="TI:PO bottle angled presentation"
              width={375}
              height={900}
              className="object-contain"
            />
          </div>
        </div>

        {/* Motif + Contact & Distribution */}
        <div className="mt-[670px] md:mt-[640px]">
          <Image
            src="/Tipo-website/images/motif-latest.webp"
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
            <h2
              className="text-xl md:text-2xl leading-snug mb-[13px]"
              style={{
                color: "#D4922A",
                fontFamily: '"Mainlux", "Inter", sans-serif',
                fontWeight: 700,
                letterSpacing: "0.18em",
              }}
            >
              Contact &amp; Distribution
            </h2>
            <p
              className="text-[14px] leading-[1.8]"
              style={{
                color: "#C8C8C8",
                fontFamily: 'var(--font-yantramanav), "Inter", sans-serif',
                fontWeight: 500,
              }}
            >
              +91 88220 92973 &nbsp;|&nbsp; info@heritagetipo.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
