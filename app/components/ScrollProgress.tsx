"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = bar.current;
      if (!el) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      el.style.width = pct.toFixed(2) + "%";
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 2, zIndex: 60, pointerEvents: "none" }}>
      <div
        ref={bar}
        style={{ height: "100%", width: "0%", background: "linear-gradient(90deg,var(--teal),var(--signal))", transformOrigin: "left" }}
      />
    </div>
  );
}
