"use client";
import { useEffect, useRef } from "react";

export default function CursorEffects() {
  const rafRef = useRef<number>(0);
  const posRef = useRef({ x: -2000, y: -2000 });
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const MAGNIFY_SELECTOR = [
      "#desktop-site img",
      "#desktop-site h1",
      "#desktop-site h2",
      "#desktop-site h3",
      "#desktop-site p",
      "#desktop-site span",
      "#desktop-site a",
      "#desktop-site li",
      "#desktop-site .video-background",
      "nav a",
      "nav img",
    ].join(", ");
    const MAX_DIST = 300;
    const MAX_SCALE = 1.1;
    let targets: HTMLElement[] = [];

    // Cache targets after layout settles
    const cacheTargets = () => {
      targets = Array.from(document.querySelectorAll<HTMLElement>(MAGNIFY_SELECTOR));
      targets.forEach((el) => {
        el.style.transition = "transform 0.2s ease-out";
        el.style.willChange = "transform";
      });
    };
    setTimeout(cacheTargets, 600);

    const update = () => {
      const { x, y } = posRef.current;

      // Spotlight overlay
      if (overlayRef.current) {
        overlayRef.current.style.background = `radial-gradient(circle 510px at ${x}px ${y}px, transparent 0%, rgba(0,0,0,0.21) 100%)`;
      }

      // Proximity magnify
      targets.forEach((el) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dist = Math.hypot(x - cx, y - cy);
        const t = Math.max(0, 1 - dist / MAX_DIST);
        const scale = 1 + (MAX_SCALE - 1) * t;
        el.style.transform = `scale(${scale})`;
      });
    };

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    const onLeave = () => {
      posRef.current = { x: -2000, y: -2000 };
      if (overlayRef.current) overlayRef.current.style.background = "rgba(0,0,0,0)";
      targets.forEach((el) => { el.style.transform = "scale(1)"; });
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 pointer-events-none hidden md:block"
      style={{ zIndex: 45, background: "rgba(0,0,0,0)", transition: "background 0.05s linear" }}
    />
  );
}
