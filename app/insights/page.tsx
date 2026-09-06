import type { Metadata } from "next";
import Link from "next/link";
import ClosingCTA from "../components/ClosingCTA";

export const metadata: Metadata = {
  title: "Insights",
  description: "Perspectives on lean, AI-enabled transformation and the one-lead delivery model.",
};

export default function InsightsPage() {
  return (
    <>
      <main>
          <section style={{ maxWidth: "1240px", margin: "0 auto", padding: "88px 32px 56px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "56px", alignItems: "end" }}>
            <div>
              <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#00706E", margin: "0 0 24px" }}>Insights</p>
              <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(36px,4.4vw,56px)", lineHeight: "1.06", letterSpacing: "-0.02em", margin: "0" }}>Field notes on lean, AI-enabled transformation.</h1>
            </div>
            <p style={{ fontSize: "17px", lineHeight: "1.62", color: "#4A5654", margin: "0" }}>Written from live engagements rather than a research desk &mdash; what worked, what the AI tooling actually saved, and where the model has limits.</p>
          </section>

          <section style={{ maxWidth: "1240px", margin: "0 auto", padding: "32px 32px 80px", borderBottom: "1px solid #E2DED4" }}>
            <Link href="#top" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "48px", alignItems: "center", color: "#0C1211", background: "#FFFFFF", padding: "40px", border: "1px solid #E2DED4" }} className="hv10">
              <div>
                <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#00706E", margin: "0 0 16px" }}>Featured &middot; AI in practice &middot; Aug 2026</p>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(26px,3vw,36px)", lineHeight: "1.12", margin: "0" }}>AI-driven consulting: what actually changes in the delivery model</p>
                <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5654", margin: "16px 0 0" }}>A breakdown of where AI removed effort across four engagements &mdash; synthesis, requirements, test cases &mdash; and the two places it created new review burden instead of removing it.</p>
                <p style={{ fontSize: "14px", fontWeight: "500", margin: "22px 0 0", borderBottom: "1px solid #00706E", display: "inline-block", paddingBottom: "3px" }}>Read the piece &#8594;</p>
              </div>
              <div style={{ aspectRatio: "4/3", background: "repeating-linear-gradient(135deg,#E8E4DA 0 10px,#F1EEE6 10px 20px)", display: "flex", alignItems: "flex-end", padding: "18px" }}>
                <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#59645F" }}>article imagery &mdash; 4:3</span>
              </div>
            </Link>
          </section>

          <section style={{ maxWidth: "1240px", margin: "0 auto", padding: "72px 32px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "24px", flexWrap: "wrap", borderBottom: "1px solid #E2DED4", paddingBottom: "20px" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(24px,2.6vw,32px)", margin: "0" }}>All pieces</h2>
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#59645F" }}>
                <span style={{ color: "#0C1211", borderBottom: "1px solid #00706E", paddingBottom: "2px" }}>All</span>
                <span>AI in practice</span>
                <span>Operating model</span>
                <span>Delivery</span>
                <span>Regulated industries</span>
              </div>
            </div>
            <div style={{ marginTop: "12px", display: "grid" }}>
              <Link href="#top" style={{ borderBottom: "1px solid #E2DED4", padding: "26px 0", display: "grid", gridTemplateColumns: "minmax(0,1fr) 180px", gap: "32px", alignItems: "baseline", color: "#0C1211" }} className="hv11">
                <span>
                  <span style={{ display: "block", fontSize: "20px", fontWeight: "600" }}>The one-lead model: why single accountability beats the pyramid</span>
                  <span style={{ display: "block", fontSize: "15px", lineHeight: "1.6", color: "#4A5654", marginTop: "8px", maxWidth: "76ch" }}>Where multi-tier consulting structures lose information, what that costs in elapsed time, and the engagement sizes where a single lead genuinely cannot scale.</span>
                </span>
                <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#59645F", textAlign: "right" }}>Operating model<br />Jul 2026</span>
              </Link>
              <Link href="#top" style={{ borderBottom: "1px solid #E2DED4", padding: "26px 0", display: "grid", gridTemplateColumns: "minmax(0,1fr) 180px", gap: "32px", alignItems: "baseline", color: "#0C1211" }} className="hv12">
                <span>
                  <span style={{ display: "block", fontSize: "20px", fontWeight: "600" }}>Building MVPs faster with AI &mdash; and where it still pays to slow down</span>
                  <span style={{ display: "block", fontSize: "15px", lineHeight: "1.6", color: "#4A5654", marginTop: "8px", maxWidth: "76ch" }}>A practical account of compressing an eight-week design phase into two, and the three review gates we added back after the first attempt.</span>
                </span>
                <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#59645F", textAlign: "right" }}>Delivery<br />Jun 2026</span>
              </Link>
              <Link href="#top" style={{ borderBottom: "1px solid #E2DED4", padding: "26px 0", display: "grid", gridTemplateColumns: "minmax(0,1fr) 180px", gap: "32px", alignItems: "baseline", color: "#0C1211" }} className="hv13">
                <span>
                  <span style={{ display: "block", fontSize: "20px", fontWeight: "600" }}>Using AI on client data in a regulated institution</span>
                  <span style={{ display: "block", fontSize: "15px", lineHeight: "1.6", color: "#4A5654", marginTop: "8px", maxWidth: "76ch" }}>The tooling agreement, data-handling boundary and review discipline we bring to every engagement &mdash; and the questions procurement teams should be asking.</span>
                </span>
                <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#59645F", textAlign: "right" }}>Regulated industries<br />May 2026</span>
              </Link>
              <Link href="#top" style={{ borderBottom: "1px solid #E2DED4", padding: "26px 0", display: "grid", gridTemplateColumns: "minmax(0,1fr) 180px", gap: "32px", alignItems: "baseline", color: "#0C1211" }} className="hv14">
                <span>
                  <span style={{ display: "block", fontSize: "20px", fontWeight: "600" }}>Adoption is a number, not a training session</span>
                  <span style={{ display: "block", fontSize: "15px", lineHeight: "1.6", color: "#4A5654", marginTop: "8px", maxWidth: "76ch" }}>How to instrument a new workflow so post-launch adoption is measurable, and what the 60-day curve usually tells you about the design.</span>
                </span>
                <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#59645F", textAlign: "right" }}>Delivery<br />Apr 2026</span>
              </Link>
              <Link href="#top" style={{ borderBottom: "1px solid #E2DED4", padding: "26px 0", display: "grid", gridTemplateColumns: "minmax(0,1fr) 180px", gap: "32px", alignItems: "baseline", color: "#0C1211" }} className="hv15">
                <span>
                  <span style={{ display: "block", fontSize: "20px", fontWeight: "600" }}>Scoping the thinnest slice that proves value</span>
                  <span style={{ display: "block", fontSize: "15px", lineHeight: "1.6", color: "#4A5654", marginTop: "8px", maxWidth: "76ch" }}>A repeatable method for cutting a twelve-month roadmap down to a three-week MVP without losing the business case behind it.</span>
                </span>
                <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#59645F", textAlign: "right" }}>Operating model<br />Mar 2026</span>
              </Link>
            </div>
          </section>

          <section style={{ background: "#FFFFFF", borderTop: "1px solid #E2DED4", borderBottom: "1px solid #E2DED4" }}>
            <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "72px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "48px", alignItems: "center" }}>
              <div>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(24px,2.8vw,34px)", lineHeight: "1.12", margin: "0" }}>One note a month, from live engagements.</h2>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5654", margin: "14px 0 0" }}>No newsletter cadence for its own sake &mdash; it goes out when there is something worth writing down.</p>
              </div>
              <form style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <input placeholder="Work email" style={{ flex: "1 1 220px", border: "1px solid #C9C3B4", background: "#F6F4EF", padding: "14px 16px", fontFamily: "var(--font-geist), sans-serif", fontSize: "15px", color: "#0C1211" }} />
                <button type="button" style={{ border: "none", background: "#0C1211", color: "#F6F4EF", fontFamily: "var(--font-geist), sans-serif", fontSize: "14px", fontWeight: "500", padding: "14px 24px" }} className="hv16">Subscribe</button>
              </form>
            </div>
          </section>
        </main>
  

        {/* ============ CONTACT ============ */}
      <ClosingCTA />
    </>
  );
}
