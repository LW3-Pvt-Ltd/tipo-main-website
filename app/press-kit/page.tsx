import Image from "next/image";
import BackButton from "@/components/BackButton";

export const metadata = {
  title: "Press Kit — TI:PO Po:Ro Apong",
  description: "Press resources for TI:PO Po:Ro Apong — traditional Indian rice wine from the Brahmaputra Valley.",
};

export default function PressKitPage() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-offwhite flex flex-col">
      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{
          background: "linear-gradient(to right, #090909 0%, #0E0C0D 50%, #151314 100%)",
          borderBottomColor: "rgba(255,255,255,0.04)",
        }}
      >
        <div className="flex items-center justify-between px-6 md:px-16 lg:px-20 py-5">
          {/* Back arrow */}
          <BackButton />

          {/* Logo — centred */}
          <a href="/#contact" className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/images/logo.webp"
              alt="TI:PO Po:Ro Apong logo"
              width={80}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </a>

          {/* Spacer */}
          <div className="w-[80px]" />
        </div>
      </nav>

      {/* Page content */}
      <main className="flex-1 flex flex-col items-center justify-center pt-24 pb-20 px-6">
        <div className="max-w-[clamp(480px,38vw,720px)] text-center flex flex-col items-center gap-6">
          {/* Motif */}
          <Image
            src="/images/motif-latest.webp"
            alt=""
            aria-hidden
            width={600}
            height={60}
            className="h-[18px] w-auto block"
            style={{
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 50%, transparent 100%)",
              maskImage: "linear-gradient(to right, transparent 0%, black 50%, transparent 100%)",
            }}
          />

          <div className="flex flex-col gap-2">
            <span className="tx-serif-light block text-[11px] uppercase tracking-[0.3em] text-brand-gold">
              TI:PO
            </span>
            <h1 className="tx-heading text-brand-gold text-[clamp(28px,2.5vw,52px)] uppercase leading-[1.1] m-0">
              Press Kit
            </h1>
            <p className="tx-tracked-light text-[clamp(16px,1.2vw,24px)] text-brand-gold leading-snug">
              Media &amp; Press Resources
            </p>
          </div>

          <p className="tx-body text-[clamp(14px,0.97vw,18px)] leading-[1.8] text-brand-text max-w-[480px]">
            More coming soon.
          </p>

          {/* Motif */}
          <Image
            src="/images/motif-latest.webp"
            alt=""
            aria-hidden
            width={600}
            height={60}
            className="h-[18px] w-auto block mt-4"
            style={{
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 50%, transparent 100%)",
              maskImage: "linear-gradient(to right, transparent 0%, black 50%, transparent 100%)",
            }}
          />
        </div>
      </main>
    </div>
  );
}
