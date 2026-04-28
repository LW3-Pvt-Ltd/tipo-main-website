import Image from "next/image";

export default function CommunitySection() {
  return (
    <section className="bg-brand-black pt-[clamp(44px,3vw,80px)] pb-[clamp(44px,3vw,120px)] md:pb-[120px]">
      <div className="max-w-[clamp(1152px,75vw,1800px)] mx-auto px-10 md:px-[clamp(64px,5.5vw,120px)] grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-[clamp(40px,3vw,80px)] gap-y-12 items-start md:items-center">
        {/* Left — Image (shown after text on mobile) */}
        <div data-parallax-img className="order-1 md:order-1 md:self-center">
          <Image
            src="/tipo-main-website/images/value-lives.webp"
            alt="Women of the Self Help Groups in traditional dresses"
            width={580}
            height={500}
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>

        {/* Right — Text (shown first on mobile) */}
        <div data-parallax-text className="flex flex-col gap-2 order-2 md:order-2 w-full md:max-w-[clamp(480px,33.3vw,680px)] md:self-center md:-mt-8">
          <h2 className="text-[20px] md:text-[clamp(24px,1.67vw,38px)] leading-snug text-[#D4922A]">
            <span className="tx-eyebrow block">Value lives</span>
            <span className="tx-tracked-light block">in the system</span>
          </h2>
          <div className="tx-body flex flex-col gap-2">
            <p className="text-[clamp(16px,1.11vw,22px)] leading-[1.2] md:leading-[1.25] text-brand-text">
              To keep it intact, we spent two years selecting and partnering
              with two Self Help Groups: Polo SHG (Leimekuri) and Aaradha SHG
              (Memberchuk), who are now part of the supply chain.
            </p>
            <p className="text-[clamp(16px,1.11vw,22px)] leading-[1.2] md:leading-[1.25] text-brand-text">
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
