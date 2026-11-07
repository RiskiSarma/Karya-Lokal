"use client";
import { useEffect } from "react";

// Animasi muncul saat scroll + efek navbar. Elemen dengan atribut data-r akan "naik" saat terlihat.
export function Motion() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    document.querySelectorAll<HTMLElement>("[data-r]").forEach((el) => io.observe(el));

    // Hentikan animasi yang berjalan terus (hero, marquee) saat di luar layar supaya scroll ringan.
    const po = new IntersectionObserver((es) => es.forEach((e) => e.target.classList.toggle("off", !e.isIntersecting)));
    document.querySelectorAll(".visual,.marquee").forEach((el) => po.observe(el));

    const nav = document.querySelector(".nav");
    const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      po.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return null;
}
