import Image from "next/image";

export default function CommunitySection() {
  return (
    <section className="bg-brand-black py-20 md:py-28 -mt-[180px]">
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
        <div className="flex flex-col gap-4 order-1 md:order-2 max-w-[480px] md:py-20">
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
              Value lives
            </span>
            <span
              style={{
                display: "block",
                fontWeight: 300,
                letterSpacing: "0.08em",
              }}
            >
              in the system
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
              To keep it intact, we spent two years selecting and partnering
              with two Self Help Groups: Polo SHG (Leimekuri) and Aaradha SHG
              (Memberchuk), who are now part of the supply chain.
            </p>
            <p className="text-[16px] leading-[1.8] text-brand-text">
              The tradition stays with its rightful owners: the women
              brewmasters remain in control; we didn&apos;t outsource heritage,
              we safeguarded it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
