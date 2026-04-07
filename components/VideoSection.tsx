export default function VideoSection() {
  return (
    <section className="bg-brand-silver py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-10 md:px-16 lg:px-20 flex flex-col items-center gap-8">
        {/* Label */}
        <span className="text-[14px] uppercase tracking-[0.25em] text-brand-gold font-semibold animate-glow">
          Witness the Process
        </span>

        {/* YouTube Video */}
        <div className="w-full max-w-4xl bg-[#3a3a3a] rounded-sm p-6 md:p-10">
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
