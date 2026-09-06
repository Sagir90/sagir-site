"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const CYCLE = 7000;

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const host = root.current;
    if (!host) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const slides = Array.from(host.querySelectorAll<HTMLElement>("[data-hero-slide]"));
    if (!slides.length) return;

    let index = 0;
    let paused = false;
    let timer: ReturnType<typeof setTimeout> | null = null;
    let live = true;

    const show = (n: number) => {
      index = n;
      slides.forEach((s, k) => {
        const on = k === n;
        if (!on) {
          s.style.opacity = "0";
          s.style.zIndex = "1";
          const v = s.querySelector("video");
          if (v && !v.paused) { try { v.pause(); } catch {} }
        }
        const bar = host.querySelector<HTMLElement>(`[data-hero-bar="${k}"]`);
        if (bar && !on) { bar.style.transition = "none"; bar.style.width = "0%"; }
      });

      const cur = slides[n];
      cur.style.opacity = "1";
      cur.style.zIndex = "2";

      const bar = host.querySelector<HTMLElement>(`[data-hero-bar="${n}"]`);
      if (bar) {
        bar.style.transition = "none";
        bar.style.width = "0%";
        void bar.offsetWidth;
        bar.style.transition = reduced ? "none" : `width ${CYCLE}ms linear`;
        bar.style.width = "100%";
      }

      const vid = cur.querySelector("video");
      if (vid) { vid.muted = true; vid.play().catch(() => {}); }
    };

    const schedule = () => {
      if (timer) clearTimeout(timer);
      if (reduced || !live) return;
      timer = setTimeout(() => {
        if (!live) return;
        if (paused) { schedule(); return; }
        show((index + 1) % slides.length);
        schedule();
      }, CYCLE);
    };

    const onEnter = () => { paused = true; };
    const onLeave = () => { paused = false; };
    const onClick = (e: Event) => {
      const btn = (e.target as HTMLElement).closest<HTMLElement>("[data-hero-dot]");
      if (!btn) return;
      const n = Number(btn.dataset.heroDot);
      if (Number.isNaN(n)) return;
      show(n);
      schedule();
    };

    host.addEventListener("mouseenter", onEnter);
    host.addEventListener("mouseleave", onLeave);
    host.addEventListener("click", onClick);

    show(0);
    schedule();

    return () => {
      live = false;
      if (timer) clearTimeout(timer);
      host.removeEventListener("mouseenter", onEnter);
      host.removeEventListener("mouseleave", onLeave);
      host.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <section ref={root} data-screen-label="Hero" style={{ position: "relative", height: "min(86vh,760px)", minHeight: "560px", background: "#0A0F0F", overflow: "hidden" }}>
          <div data-hero-slide="0" style={{ position: "absolute", inset: "0", opacity: "1", transition: "opacity 1.1s ease", overflow: "hidden" }}>
            <video data-hero-video="1" src="https://videos.pexels.com/video-files/3205624/3205624-hd_1920_1080_25fps.mp4" poster="https://images.pexels.com/videos/3205624/free-video-3205624.jpg?auto=compress&cs=tinysrgb&w=1600" muted loop playsInline preload="auto" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }}></video>
            <div style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg,rgba(10,15,15,0.94) 0%,rgba(10,15,15,0.78) 42%,rgba(10,15,15,0.42) 100%)" }}></div>
            <div style={{ position: "absolute", inset: "0", backgroundImage: "linear-gradient(rgba(0,179,179,0.10) 1px,transparent 1px),linear-gradient(90deg,rgba(0,179,179,0.10) 1px,transparent 1px)", backgroundSize: "52px 52px" }}></div>
            <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "0 32px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#7DFF7A", margin: "0 0 26px" }}>AI-driven transformation consulting &middot; Hamilton, ON</p>
              <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(38px,5vw,66px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#FFFFFF", margin: "0", maxWidth: "20ch", textWrap: "pretty" }}>One lead. Full accountability.<br /><span style={{ fontStyle: "italic", color: "#7DFF7A" }}>AI-accelerated delivery.</span></h1>
              <p style={{ fontSize: "17px", lineHeight: "1.62", color: "#E6F7F7", maxWidth: "54ch", margin: "26px 0 0", textWrap: "pretty" }}>A single accountable consultant &mdash; augmented by AI tooling and a vetted specialist network &mdash; owns your programme from strategy to adoption. No layered account teams. No handoff loss.</p>
            </div>
            <p style={{ position: "absolute", right: "32px", bottom: "18px", fontFamily: "var(--font-geist-mono), monospace", fontSize: "10px", letterSpacing: "0.08em", color: "rgba(230,247,247,0.75)", margin: "0" }}>Video: cottonbro studio / Pexels</p>
          </div>
          <div data-hero-slide="1" style={{ position: "absolute", inset: "0", opacity: "0", transition: "opacity 1.1s ease", overflow: "hidden" }}>
            <video data-hero-video="1" src="https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4" poster="https://images.pexels.com/videos/3255275/free-video-3255275.jpg?auto=compress&cs=tinysrgb&w=1600" muted loop playsInline preload="none" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }}></video>
            <div style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg,rgba(10,15,15,0.94) 0%,rgba(10,15,15,0.78) 42%,rgba(10,15,15,0.42) 100%)" }}></div>
            <div style={{ position: "absolute", inset: "0", backgroundImage: "linear-gradient(rgba(0,179,179,0.10) 1px,transparent 1px),linear-gradient(90deg,rgba(0,179,179,0.10) 1px,transparent 1px)", backgroundSize: "52px 52px" }}></div>
            <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "0 32px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#7DFF7A", margin: "0 0 26px" }}>Delivery model &middot; MVP first</p>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(38px,5vw,66px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#FFFFFF", margin: "0", maxWidth: "20ch", textWrap: "pretty" }}>Working software in weeks,<br /><span style={{ fontStyle: "italic", color: "#7DFF7A" }}>not quarterly status decks.</span></h2>
              <p style={{ fontSize: "17px", lineHeight: "1.62", color: "#E6F7F7", maxWidth: "54ch", margin: "26px 0 0", textWrap: "pretty" }}>Fixed-scope discovery, then one-week sprints that each close in a live demo. Scope is cut to the thinnest slice that proves value &mdash; everything after is funded against demonstrated progress.</p>
            </div>
            <p style={{ position: "absolute", right: "32px", bottom: "18px", fontFamily: "var(--font-geist-mono), monospace", fontSize: "10px", letterSpacing: "0.08em", color: "rgba(230,247,247,0.75)", margin: "0" }}>Video: fauxels / Pexels</p>
          </div>
          <div data-hero-slide="2" style={{ position: "absolute", inset: "0", opacity: "0", transition: "opacity 1.1s ease", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: "0", backgroundImage: "url('https://images.pexels.com/videos/3248067/free-video-3248067.jpg?auto=compress&cs=tinysrgb&w=1800')", backgroundSize: "cover", backgroundPosition: "center", animation: "sg-drift 26s ease-in-out infinite" }}></div>
            <div style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg,rgba(10,15,15,0.94) 0%,rgba(10,15,15,0.78) 42%,rgba(10,15,15,0.42) 100%)" }}></div>
            <div style={{ position: "absolute", inset: "0", backgroundImage: "linear-gradient(rgba(0,179,179,0.10) 1px,transparent 1px),linear-gradient(90deg,rgba(0,179,179,0.10) 1px,transparent 1px)", backgroundSize: "52px 52px" }}></div>
            <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "0 32px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#7DFF7A", margin: "0 0 26px" }}>Regulated industries &middot; fintech &amp; payments</p>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(38px,5vw,66px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#FFFFFF", margin: "0", maxWidth: "20ch", textWrap: "pretty" }}>Transformation that survives<br /><span style={{ fontStyle: "italic", color: "#7DFF7A" }}>a compliance review.</span></h2>
              <p style={{ fontSize: "17px", lineHeight: "1.62", color: "#E6F7F7", maxWidth: "54ch", margin: "26px 0 0", textWrap: "pretty" }}>Two decades inside regulated institutions: documentation discipline, explicit AI data boundaries, and a decision log your auditors can actually read.</p>
            </div>
            <p style={{ position: "absolute", right: "32px", bottom: "18px", fontFamily: "var(--font-geist-mono), monospace", fontSize: "10px", letterSpacing: "0.08em", color: "rgba(230,247,247,0.75)", margin: "0" }}>Photo: fauxels / Pexels</p>
          </div>
          <div data-hero-slide="3" style={{ position: "absolute", inset: "0", opacity: "0", transition: "opacity 1.1s ease", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: "0", backgroundImage: "url('https://images.pexels.com/videos/3249454/free-video-3249454.jpg?auto=compress&cs=tinysrgb&w=1800')", backgroundSize: "cover", backgroundPosition: "center", animation: "sg-drift 26s ease-in-out infinite" }}></div>
            <div style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg,rgba(10,15,15,0.94) 0%,rgba(10,15,15,0.78) 42%,rgba(10,15,15,0.42) 100%)" }}></div>
            <div style={{ position: "absolute", inset: "0", backgroundImage: "linear-gradient(rgba(0,179,179,0.10) 1px,transparent 1px),linear-gradient(90deg,rgba(0,179,179,0.10) 1px,transparent 1px)", backgroundSize: "52px 52px" }}></div>
            <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "0 32px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#7DFF7A", margin: "0 0 26px" }}>Adoption &middot; measured, not assumed</p>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(38px,5vw,66px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#FFFFFF", margin: "0", maxWidth: "20ch", textWrap: "pretty" }}>Adoption is a number,<br /><span style={{ fontStyle: "italic", color: "#7DFF7A" }}>not a training session.</span></h2>
              <p style={{ fontSize: "17px", lineHeight: "1.62", color: "#E6F7F7", maxWidth: "54ch", margin: "26px 0 0", textWrap: "pretty" }}>Enablement is built alongside the solution and instrumented at go-live, then tracked for sixty days &mdash; so you can see whether the change actually took.</p>
            </div>
            <p style={{ position: "absolute", right: "32px", bottom: "18px", fontFamily: "var(--font-geist-mono), monospace", fontSize: "10px", letterSpacing: "0.08em", color: "rgba(230,247,247,0.75)", margin: "0" }}>Photo: fauxels / Pexels</p>
          </div>
          <div style={{ position: "absolute", left: "0", right: "0", bottom: "0" }}>
            <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px 26px", display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-end", justifyContent: "space-between" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
                <Link href="/contact" style={{ background: "#7DFF7A", color: "#0A0F0F", fontSize: "15px", fontWeight: "600", padding: "16px 26px", display: "inline-flex", alignItems: "center", gap: "10px" }} className="hv1">Book a 30-minute discovery call <span style={{ fontFamily: "var(--font-geist-mono), monospace" }}>&#8594;</span></Link>
                <Link href="/case-studies" style={{ border: "1px solid rgba(230,247,247,0.5)", color: "#FFFFFF", fontSize: "15px", fontWeight: "500", padding: "16px 26px", display: "inline-flex", alignItems: "center" }} className="hv2">See engagement outcomes</Link>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", flex: "1 1 260px", maxWidth: "420px" }}>
              <button type="button" data-hero-dot="0" aria-label="Slide 1" style={{ border: "none", background: "none", padding: "0", cursor: "pointer", flex: "1 1 0", minWidth: "44px", height: "44px", display: "flex", alignItems: "center" }}>
                <span style={{ display: "block", width: "100%", height: "3px", background: "rgba(230,247,247,0.28)", position: "relative", overflow: "hidden" }}>
                  <span data-hero-bar="0" style={{ position: "absolute", inset: "0", width: "100%", background: "#7DFF7A", transformOrigin: "left" }}></span>
                </span>
              </button>
              <button type="button" data-hero-dot="1" aria-label="Slide 2" style={{ border: "none", background: "none", padding: "0", cursor: "pointer", flex: "1 1 0", minWidth: "44px", height: "44px", display: "flex", alignItems: "center" }}>
                <span style={{ display: "block", width: "100%", height: "3px", background: "rgba(230,247,247,0.28)", position: "relative", overflow: "hidden" }}>
                  <span data-hero-bar="1" style={{ position: "absolute", inset: "0", width: "0%", background: "#7DFF7A", transformOrigin: "left" }}></span>
                </span>
              </button>
              <button type="button" data-hero-dot="2" aria-label="Slide 3" style={{ border: "none", background: "none", padding: "0", cursor: "pointer", flex: "1 1 0", minWidth: "44px", height: "44px", display: "flex", alignItems: "center" }}>
                <span style={{ display: "block", width: "100%", height: "3px", background: "rgba(230,247,247,0.28)", position: "relative", overflow: "hidden" }}>
                  <span data-hero-bar="2" style={{ position: "absolute", inset: "0", width: "0%", background: "#7DFF7A", transformOrigin: "left" }}></span>
                </span>
              </button>
              <button type="button" data-hero-dot="3" aria-label="Slide 4" style={{ border: "none", background: "none", padding: "0", cursor: "pointer", flex: "1 1 0", minWidth: "44px", height: "44px", display: "flex", alignItems: "center" }}>
                <span style={{ display: "block", width: "100%", height: "3px", background: "rgba(230,247,247,0.28)", position: "relative", overflow: "hidden" }}>
                  <span data-hero-bar="3" style={{ position: "absolute", inset: "0", width: "0%", background: "#7DFF7A", transformOrigin: "left" }}></span>
                </span>
              </button>
              </div>
            </div>
          </div>
        </section>
  );
}
