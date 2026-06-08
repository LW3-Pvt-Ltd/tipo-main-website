export default function MobileCraft() {
  return (
    <section
      id="mobile-the-craft"
      className="md:hidden relative w-full"
      style={{
        minHeight: 540,
        backgroundImage: "url('/images/Himalaya no cutout.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center 20%",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 18%, rgba(0,0,0,0.55) 42%, rgba(0,0,0,0.95) 100%)",
        }}
      />
      <div className="relative z-10 px-6 pt-[100px] pb-0">
        <span className="animate-glow-drl tx-eyebrow inline-block text-[11px] uppercase tracking-[0.3em] text-brand-gold border-b border-brand-gold pb-0.5 mb-5">
          The Craft
        </span>
        <p className="tx-serif-light text-brand-gold text-[22px] leading-[1.2] m-0">
          Born at the Foothills of the
        </p>
        <h1 className="tx-heading text-brand-gold text-[22px] uppercase leading-[1.2] mt-0 mb-5">
          Eastern Himalayas
        </h1>
        <div className="tx-body flex flex-col gap-[21px]">
          <p className="text-[13px] leading-[1] text-brand-text m-0">
            Po:ro Apong is born where the Eastern Himalayan foothills spill into
            Assam&apos;s Brahmaputra Valley.
          </p>
          <p className="text-[13px] leading-[1] text-brand-text m-0">
            From this landscape emerges a living library of flavour &mdash; 60+
            forest botanicals, each shaped by soil, climate and time. Herbs are
            gathered from the mountains; rice rises from the river&apos;s
            alluvial fields.
          </p>
          <p className="text-[13px] leading-[1] text-brand-text m-0">
            Every year the valley resets itself &mdash; flood, monsoon, heat and
            generous humidity &mdash; creating one of India&apos;s richest
            biodiversities.
          </p>
          <p className="text-[13px] leading-[1] text-brand-text m-0">
            Together, these forces compose a natural signature that cannot be replicated
            elsewhere: the Brahmaputra written into aroma and taste. For generations, the
            Mising community has lived to the river&apos;s rhythm, turning landscape into
            language&mdash;and language into Po:ro Apong.
          </p>
        </div>
      </div>
    </section>
  );
}
