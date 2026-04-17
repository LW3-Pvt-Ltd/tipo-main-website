import Image from "next/image";

export default function HeritageSection() {
  return (
    <section id="heritage" className="bg-brand-black py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-10 md:px-16 lg:px-20">
        {/* Two-column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 items-start">
          {/* Left — Text */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-[20px] uppercase tracking-[0.25em] text-brand-gold font-medium">
                It takes a village,
              </span>
              <h2 className="font-serif text-xl md:text-2xl leading-snug text-brand-gold">
                they say!
              </h2>
            </div>
            <div className="gold-divider mt-1 mb-1" />
            <p className="text-[12px] leading-[1.85] text-brand-text">
              Po:ro Apong is made by women, and it has always been so. Knowledge
              is passed through apprenticeship, not instruction. Girls grow up
              assisting long before they are trusted to decide. Years are spent
              observing, repeating, correcting, and waiting.
            </p>
            <p className="text-[12px] leading-[1.85] text-brand-text">
              Authority is not granted; it is recognized. The role of the
              brewmaster is earned through time, judgment, and restraint. What
              exists is a lineage — a continuous chain of women who carry the
              responsibility of brewing the Po:ro Apong, season after season.
            </p>
            <p className="text-[12px] leading-[1.85] text-brand-text">
              This structure has preserved the craft not by freezing it in time,
              but by keeping it human.
            </p>
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
