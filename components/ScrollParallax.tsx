"use client";
import { useEffect } from "react";

export default function ScrollParallax() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let rafId: number;

    const update = () => {
      if (window.innerWidth < 768) return;
      const vh = window.innerHeight;

      // Remove text parallax — reset any previously applied transforms
      document.querySelectorAll<HTMLElement>("[data-parallax-text]").forEach((el) => {
        el.style.transform = "";
      });

      // Image parallax — subtle downward lag for depth feel
      document.querySelectorAll<HTMLElement>("[data-parallax-img]").forEach((el) => {
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - vh / 2;
        el.style.transform = `translateY(${center * 0.48}px)`;
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    const onResize = () => {
      if (window.innerWidth < 768) {
        document.querySelectorAll<HTMLElement>("[data-parallax-img]").forEach(
          (el) => { el.style.transform = ""; }
        );
      } else {
        update();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
