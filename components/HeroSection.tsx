"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function HeroSection() {

  useEffect(() => {
    const discover = document.getElementById("discover-btn");
    if (discover) {
      const onClick = (e: Event) => {
        e.preventDefault();
        const start = window.scrollY;
        // Scroll exactly one viewport height so the sticky video is fully covered by the Himalaya section
        const end = window.innerHeight;
        const distance = end - start;
        const duration = 800;
        const startTime = performance.now();
        // easeInOutQuart — slow start, fast middle, slow end (dramatic jump feeling)
        const ease = (t: number) =>
          t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
        // Disable CSS smooth-scroll so our RAF loop isn't fought by the browser
        document.documentElement.style.scrollBehavior = "auto";
        const tick = (now: number) => {
          const t = Math.min(1, (now - startTime) / duration);
          window.scrollTo(0, start + distance * ease(t));
          if (t < 1) {
            requestAnimationFrame(tick);
          } else {
            document.documentElement.style.scrollBehavior = "";
          }
        };
        requestAnimationFrame(tick);
      };
      discover.addEventListener("click", onClick);
      return () => discover.removeEventListener("click", onClick);
    }
  }, []);

  useEffect(() => {
    const video = document.getElementById("bgVideo") as HTMLVideoElement;
    if (video) {
      // Try to play
          const playPromise = video.play();

          if (playPromise !== undefined) {
              playPromise.catch(error => {
                  // Autoplay was prevented
                  console.log('Autoplay prevented:', error);

                  // Show poster image instead
                  video.style.display = 'none';
              });
          }

          // Optional: Pause video when tab is not visible (saves battery/bandwidth)
          document.addEventListener('visibilitychange', function() {
              if (document.hidden) {
                  video.pause();
              } else {
                  video.play();
              }
          });
    }


  }, []);

  return (
    <section className="relative w-full">
      {/* Discover button — z-30 so it's above the Himalaya section (z-20) and clickable */}
      <a
        id="discover-btn"
        href="#the-craft"
        className="pointer-events-auto absolute tx-serif-light text-[10pt] uppercase tracking-[0.25em] text-brand-gold whitespace-nowrap hover:text-brand-goldlight transition-colors duration-300 cursor-pointer animate-glow inline-flex items-center justify-center gap-2 left-1/2 -translate-x-1/2 z-[30] top-[calc(50svh-82px)] md:top-[calc(100svh-150px)] border border-brand-gold md:border-0"
        style={{
          padding: "12px 22px",
          background: "rgba(0,0,0,0.78)",
          borderRadius: 999,
          backdropFilter: "blur(6px)",
          boxShadow: "0 8px 30px rgba(212,146,42,0.25), inset 0 0 0 1px rgba(212,146,42,0.15)",
        }}
      >
        Discover &gt;&gt;
      </a>

      {/* Video — sticky so Himalaya section slides up over it on scroll */}
      <div className="sticky top-0 z-10 w-full bg-black">
        <div className="relative w-full flex flex-col items-center justify-center">
        <div className="relative z-10 flex flex-col items-center w-full">
            <div className="video-background relative w-full h-[100svh] overflow-hidden" >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/tipo-main-website/videos/reveal-video_poster.jpg"
                    id="bgVideo"
                    className="absolute inset-0 w-full h-full object-cover object-top" >
                    {/* Mobile-optimized source (served to narrow viewports) */}
                    <source
                      src="/tipo-main-website/videos/reveal-video_bg_mobile.mp4"
                      type="video/mp4"
                      media="(max-width: 767px)"
                    />
                    {/* WebM for better compression (Chrome, Firefox) */}
                    <source src="/tipo-main-website/videos/reveal-video_bg_high.webm" type="video/webm" />
                    {/* MP4 fallback (Safari, older browsers) */}
                    <source src="/tipo-main-website/videos/reveal-video_bg_high.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Dark overlay for text readability */}
                <div className="video-overlay absolute inset-0 bg-black/20 pointer-events-none"></div>
                {/* Bottom fade — blends video into the Himalaya section below */}
                <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
          </div>
        </div>
      </div>
      </div>

      {/* Himalaya background with built-in shape divider cutout */}
      <div id="the-craft" className="w-full relative z-20 -mt-[160px] overflow-hidden" style={{ minHeight: "clamp(700px, 61vw, 950px)" }}>
        {/* Himalaya new image — black cutout at top blends seamlessly with hero.
            Height capped at 90% of the wrapper so the image is vertically
            cropped from the bottom (top anchor preserved for bottle blend). */}
        <div className="absolute top-[180px] inset-x-0 h-[calc(100%+80px)]">
          <Image
            src="/tipo-main-website/images/Himalaya no cutout.webp"
            alt="Eastern Himalayas"
            fill
            className="object-cover [object-position:center_35%]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.45) 20%, rgba(0,0,0,0.69) 45%, rgba(0,0,0,0.90) 70%, rgba(0,0,0,0.98) 100%)",
            }}
          />
        </div>

        {/* Text content — positioned over the himalaya image.
            pl values match Discover's left offsets so text shares the
            same vertical axis (x=180 mobile, x=80 desktop). */}
        <div data-parallax-text className="relative z-10 pt-10 md:pt-[280px] pb-10 md:pb-52">
          <div className="max-w-[clamp(1152px,75vw,1800px)] mx-auto px-10 md:px-[clamp(64px,5.5vw,120px)]">
          <div className="max-w-[clamp(420px,29.2vw,600px)] text-left">
            {/* THE CRAFT label */}
            <span className="tx-serif-light block text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-3">
              The Craft
            </span>

            {/* Subtitle — descriptive line */}
            <p className="tx-serif-light text-brand-gold text-[18px] md:text-[clamp(22px,1.67vw,36px)] leading-[1.15] mb-0">
              Born at the Foothills of the
            </p>

            {/* Main heading — emphasized phrase */}
            <h1 className="tx-heading text-brand-gold text-[18px] md:text-[clamp(22px,1.67vw,36px)] uppercase leading-[1.15] mb-6 md:mb-3">
              Eastern Himalayas
            </h1>

            {/* Intro paragraphs */}
            <div className="tx-body flex flex-col gap-4 md:gap-2 max-w-[420px]">
              <p className="text-[clamp(16px,1.11vw,22px)] leading-[1.55] md:leading-[1.25] text-brand-text">
                Po:ro Apong is born where the Eastern Himalayan foothills spill into
                Assam&apos;s Brahmaputra Valley.
              </p>
              <p className="text-[clamp(16px,1.11vw,22px)] leading-[1.55] md:leading-[1.25] text-brand-text">
                From this landscape emerges a living library of
                flavour&mdash;60+ forest botanicals, each shaped by soil,
                climate and time. Herbs are gathered from the mountains; rice rises
                from the river&apos;s alluvial fields.
              </p>
              <p className="text-[clamp(16px,1.11vw,22px)] leading-[1.55] md:leading-[1.25] text-brand-text">
                Every year the valley resets
                itself&mdash;flood, monsoon, heat and generous
                humidity&mdash;creating one of India&apos;s richest biodiversities.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
