import Image from "next/image";

export default function CellarSection() {
  return (
    <section className="bg-brand-black py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-10 md:px-16 lg:px-20">
        {/* Two-column: wider image left, text right */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-16 gap-y-12 items-start">
          {/* Left — wider image (3 cols) */}
          <div className="md:col-span-3">
            <Image
              src="/Tipo-website/images/winery.webp"
              alt="Traditional winery with worker overseeing the process"
              width={720}
              height={500}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>

          {/* Right — text (2 cols) */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-[20px] uppercase tracking-[0.25em] text-brand-gold font-medium">
                Technology is the valet,
              </span>
              <h2 className="font-serif text-xl md:text-2xl leading-snug text-brand-gold">
                not the star.
              </h2>
            </div>
            <p className="font-serif text-brand-gold/80 text-sm italic mb-2">
              Tipo did not reinterpret Po:ro Apong.
            </p>
            <div className="gold-divider mt-1 mb-1" />
            <p className="text-[12px] leading-[1.85] text-brand-text">
              Our role is deliberately modest: introduce hygiene, scientific
              filtration, and clean bottling in modern winery setting so the
              Po:ro Apong can travel without altering its character.
            </p>
            <p className="text-[12px] leading-[1.85] text-brand-text">
              This quiet preservation is overseen by Ajoy Shaw, DipWSET, our
              Chief Winemaker, ensuring what reaches you is what was made at the
              source: the Brahmaputra Valley, kept pristine in glass.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
