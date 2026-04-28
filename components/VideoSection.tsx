export default function VideoSection() {
  return (
    <section className="py-[clamp(86px,6vw,120px)]" style={{ backgroundColor: "#000000" }}>
      <div className="max-w-[clamp(1152px,75vw,1800px)] mx-auto px-4 sm:px-6 md:px-[clamp(40px,2.8vw,80px)] flex flex-col items-center gap-8">
        {/* Label */}
        <div className="w-full max-w-[clamp(1138px,79vw,1600px)]" style={{ marginTop: "-20px" }}>
          <span className="tx-serif-bold text-[clamp(14px,0.97vw,20px)] uppercase tracking-[0.25em] text-[#D4922A]">
            Witness the Process
          </span>
        </div>

        {/* YouTube Video */}
        <div className="w-full max-w-[clamp(1138px,79vw,1600px)]">
          <div className="relative w-full overflow-hidden rounded-[15px]" style={{ paddingBottom: "56.25%", border: "1px solid rgba(201,168,76,0.5)" }}>
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
