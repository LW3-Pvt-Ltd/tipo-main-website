import Image from "next/image";

export default function CellarSection() {
  return (
    <section className="bg-brand-black py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-10 md:px-16 lg:px-20">
        {/* Two-column 50/50: matches StoryIntro so the image renders identically sized */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 items-start">
          {/* Left — image (2400x1800 / 4:3 frame) */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/Tipo-website/images/winery.webp"
              alt="Traditional winery with worker overseeing the process"
              fill
              className="object-cover"
            />
          </div>

          {/* Right — text */}
          <div className="flex flex-col gap-4 max-w-[480px] md:py-20">
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
                Technology is the valet,
              </span>
              <span
                style={{
                  display: "block",
                  fontWeight: 300,
                  letterSpacing: "0.08em",
                  color: "#FFFFFF",
                }}
              >
                not the star.
              </span>
            </h2>
            <p
              className="text-[16px] leading-[1.85]"
              style={{
                color: "#D4922A",
                fontFamily: '"Mainlux", "Inter", sans-serif',
                fontWeight: 300,
              }}
            >
              Tipo did not reinterpret Po:ro Apong.
            </p>
            <div
              className="flex flex-col gap-4"
              style={{
                fontFamily: 'var(--font-yantramanav), "Inter", sans-serif',
                fontWeight: 300,
              }}
            >
              <p className="text-[14px] leading-[1.8] text-brand-text">
                Our role is deliberately modest: introduce hygiene, scientific
                filtration, and clean bottling in modern winery setting so the
                Po:ro Apong can travel without altering its character.
              </p>
              <p className="text-[14px] leading-[1.8] text-brand-text">
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
