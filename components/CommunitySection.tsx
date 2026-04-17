import Image from "next/image";

export default function CommunitySection() {
  return (
    <section className="bg-brand-black py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-10 md:px-16 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 items-start">
        {/* Left — Image (shown after text on mobile) */}
        <div className="order-2 md:order-1">
          <Image
            src="/Tipo-website/images/value-lives.webp"
            alt="Women of the Self Help Groups in traditional dresses"
            width={580}
            height={500}
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>

        {/* Right — Text (shown first on mobile) */}
        <div className="flex flex-col gap-4 order-1 md:order-2">
          <div className="flex flex-col gap-2">
            <span className="text-[20px] uppercase tracking-[0.25em] text-brand-gold font-medium">
              Value lives
            </span>
            <h2 className="font-serif text-xl md:text-2xl leading-snug text-brand-gold">
              in the system
            </h2>
          </div>
          <div className="gold-divider mt-1 mb-1" />
          <p className="text-[12px] leading-[1.85] text-brand-text">
            To keep it intact, we spent two years selecting and partnering with
            two Self Help Groups: Polo SHG (Leimekuri) and Aaradha SHG
            (Memberchuk), who are now part of the supply chain.
          </p>
          <p className="text-[12px] leading-[1.85] text-brand-text">
            The tradition stays with its rightful owners: the women brewmasters
            remain in control; we didn&apos;t outsource heritage, we
            safeguarded it.
          </p>
        </div>
      </div>
    </section>
  );
}
