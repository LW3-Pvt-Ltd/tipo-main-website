export default function VideoSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto px-6 md:px-10 lg:px-14 flex flex-col items-center gap-8">
        {/* Label */}
        <span className="text-[14px] uppercase tracking-[0.25em] text-brand-gold font-semibold animate-glow" style={{ marginTop: "-20px" }}>
          Witness the Process
        </span>

        {/* YouTube Video */}
        <div className="w-full max-w-[1350px]">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/QipHkYuCm74"
              title="Po:ro Apong — The Process"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
