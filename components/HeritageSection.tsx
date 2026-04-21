import Image from "next/image";

export default function HeritageSection() {
  return (
    <section id="heritage" className="bg-brand-black py-20 md:py-28 mt-[60px]">
      <div className="max-w-6xl mx-auto px-10 md:px-16 lg:px-20">
        {/* Two-column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 items-start">
          {/* Left — Text */}
          <div className="flex flex-col gap-4 max-w-[480px] md:py-20 -translate-y-[40px]">
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
                It takes a village,
              </span>
              <span
                style={{
                  display: "block",
                  fontWeight: 300,
                  letterSpacing: "0.08em",
                }}
              >
                they say!
              </span>
            </h2>
            <div
              className="flex flex-col gap-4"
              style={{
                fontFamily: 'var(--font-yantramanav), "Inter", sans-serif',
                fontWeight: 300,
              }}
            >
              <p className="text-[16px] leading-[1.8] text-brand-text">
                Po:ro Apong is made by women, and it has always been so.
                Knowledge is passed through apprenticeship, not instruction.
                Girls grow up assisting long before they are trusted to decide.
                Years are spent observing, repeating, correcting, and waiting.
              </p>
              <p className="text-[16px] leading-[1.8] text-brand-text">
                Authority is not granted; it is recognized.
              </p>
              <p className="text-[16px] leading-[1.8] text-brand-text">
                The role of the brewmaster is earned through time, judgment,
                and restraint. What exists is a lineage &mdash; a continuous
                chain of women who carry the responsibility of brewing the
                Po:ro Apong, season after season.
              </p>
              <p className="text-[16px] leading-[1.8] text-brand-text">
                This structure has preserved the craft not by freezing it in
                time, but by keeping it human.
              </p>
            </div>
          </div>

          {/* Right — Image */}
          <div>
            <Image
              src="/Tipo-website/images/it-takes-a-village.webp"
              alt="Women brewmasters of the village in traditional attire"
              width={560}
              height={480}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
