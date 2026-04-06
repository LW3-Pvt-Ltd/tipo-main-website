import Image from "next/image";

export default function MapSection() {
  return (
    <section className="bg-brand-black py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-10 md:px-16 lg:px-20">
        {/* Welcome heading */}
        <div className="text-center mb-4">
          <span className="text-[20px] uppercase tracking-[0.25em] text-brand-gold font-medium block mb-3">
            Welcome
          </span>
          <h2 className="font-serif text-2xl md:text-4xl leading-snug text-brand-gold">
            TiPo&apos;s Po:Ro Apong
            <br />
            to your world
          </h2>
        </div>

        {/* Culture quote */}
        <div className="max-w-3xl mx-auto text-center mb-0">
          <p className="font-serif text-brand-gold/80 text-lg md:text-xl italic leading-relaxed">
            Every culture has a fermentation that is unique to them
          </p>
          <p className="font-serif text-brand-gold/80 text-lg md:text-xl italic leading-relaxed">
            Japan has Sak&eacute;, Korea has Soju, Europe has Wine.
          </p>
          <p className="font-serif text-brand-gold text-lg md:text-xl font-medium leading-relaxed mt-2">
            India has Po:Ro Apong.
          </p>
        </div>

        {/* Map + Bottle */}
        <div className="relative mb-16" style={{ marginTop: "-110px" }}>
          <Image
            src="/Tipo-website/images/map.webp"
            alt="World map highlighting the Brahmaputra Valley origin of Po:ro Apong"
            width={1200}
            height={600}
            className="w-full max-w-6xl mx-auto h-auto object-contain relative z-10"
          />

          {/* Bottle overlay — flush to right edge, boundary touches viewport edge */}
          <div className="hidden md:block absolute -bottom-20" style={{ right: "-266px" }}>
            <Image
              src="/Tipo-website/images/bottle.jpeg"
              alt="TI:PO bottle angled presentation"
              width={750}
              height={1800}
              className="object-contain"
            />
          </div>
        </div>

        {/* Contact & Distribution */}
        <div className="text-center mt-20">
          <span className="text-[10px] uppercase tracking-[0.25em] text-brand-gold font-medium block mb-4">
            Contact &amp; Distribution
          </span>
          <p className="text-[12px] leading-[1.85] text-brand-text">
            +91 88220 92973 &nbsp;|&nbsp; info@heritagetipo.com
          </p>
        </div>
      </div>
    </section>
  );
}
