"use client";

import { useEffect, useRef } from "react";

export default function MobileHero() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const ctaRef = useRef<HTMLAnchorElement | null>(null);
  const lockedRef = useRef(true);

  // Video autoplay
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => { video.style.display = "none"; });
      }
      const onVisibilityChange = () => {
        if (document.hidden) video.pause();
        else video.play().catch(() => {});
      };
      document.addEventListener("visibilitychange", onVisibilityChange);
      return () => document.removeEventListener("visibilitychange", onVisibilityChange);
    }
  }, []);

  // Parallax + scroll lock + re-lock on return to top
  useEffect(() => {
    if (window.innerWidth >= 768) return;

    const preventTouch = (e: TouchEvent) => {
      if (lockedRef.current) e.preventDefault();
    };
    const preventWheel = (e: WheelEvent) => {
      if (lockedRef.current) e.preventDefault();
    };
    const onScroll = () => {
      const y = window.scrollY;
      // Parallax
      const vh = window.innerHeight || 852;
      const p = Math.max(0, Math.min(1, y / vh));
      if (videoRef.current) {
        videoRef.current.style.opacity = `${1 - p * 0.85}`;
        videoRef.current.style.transform = `translateY(40px) scale(${1.2 - p * 0.04})`;
      }
      if (ctaRef.current) {
        ctaRef.current.style.opacity = `${Math.max(0, 1 - p * 1.4)}`;
        ctaRef.current.style.transform = `translateX(-50%) translateY(${p * -30}px)`;
      }
    };

    document.addEventListener("touchmove", preventTouch, { passive: false });
    document.addEventListener("wheel", preventWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      document.removeEventListener("touchmove", preventTouch);
      document.removeEventListener("wheel", preventWheel);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleDiscover = (e: React.MouseEvent) => {
    e.preventDefault();
    lockedRef.current = false;
    document.querySelector("#the-craft")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="md:hidden sticky top-0 z-[1] w-full h-[100svh] bg-black flex flex-col items-center justify-center"
    >
      <div ref={wrapRef} className="relative z-10 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/tipo-main-website/videos/reveal-video_poster.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ willChange: "transform, opacity" }}
        >
          <source src="/tipo-main-website/videos/Tipo reveal video vertical.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
      </div>

      <a
        ref={ctaRef}
        href="#the-craft"
        onClick={handleDiscover}
        className="animate-glow absolute left-1/2 bottom-[48px] z-20 inline-flex items-center justify-center gap-3 no-underline"
        style={{
          transform: "translateX(-50%)",
          minHeight: 50,
          minWidth: 169,
          padding: "13px 25px",
          fontFamily: '"Mainlux", sans-serif',
          fontWeight: 300,
          fontSize: "10pt",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "var(--color-brand-gold)",
          background: "rgba(0,0,0,0.78)",
          border: "1px solid var(--color-brand-gold)",
          borderRadius: 999,
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          boxShadow: "0 8px 30px rgba(212,146,42,0.25), inset 0 0 0 1px rgba(212,146,42,0.15)",
          willChange: "transform, opacity",
        }}
      >
        <span>Discover</span>
        <span aria-hidden="true" style={{ letterSpacing: 0 }}>»</span>
      </a>
    </section>
  );
}
