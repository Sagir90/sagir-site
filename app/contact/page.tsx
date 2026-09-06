import type { Metadata } from "next";
import Link from "next/link";
import ClosingCTA from "../components/ClosingCTA";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start with a 30-minute discovery call. Response within one to two business days.",
};

export default function ContactPage() {
  return (
    <>
      <main>
          <section style={{ maxWidth: "1240px", margin: "0 auto", padding: "88px 32px 64px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "56px", alignItems: "end" }}>
            <div>
              <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#00706E", margin: "0 0 24px" }}>Contact</p>
              <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(36px,4.4vw,56px)", lineHeight: "1.06", letterSpacing: "-0.02em", margin: "0" }}>Start with a 30-minute call.</h1>
            </div>
            <p style={{ fontSize: "17px", lineHeight: "1.62", color: "#4A5654", margin: "0" }}>Bring the context, the constraint and the deadline. You'll leave the call with an honest read on whether this model fits &mdash; and if it doesn't, a suggestion for what does.</p>
          </section>

          <section style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px 96px", display: "grid", gridTemplateColumns: "minmax(0,1.25fr) minmax(0,0.75fr)", gap: "56px", alignItems: "start" }}>
            <form style={{ display: "grid", gap: "26px", background: "#FFFFFF", border: "1px solid #E2DED4", padding: "40px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "26px" }}>
                <label style={{ display: "grid", gap: "8px" }}>
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#59645F" }}>Name</span>
                  <input placeholder="Full name" style={{ border: "1px solid #C9C3B4", background: "#F6F4EF", padding: "13px 14px", fontFamily: "var(--font-geist), sans-serif", fontSize: "15px", color: "#0C1211" }} />
                </label>
                <label style={{ display: "grid", gap: "8px" }}>
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#59645F" }}>Work email</span>
                  <input placeholder="name@company.com" style={{ border: "1px solid #C9C3B4", background: "#F6F4EF", padding: "13px 14px", fontFamily: "var(--font-geist), sans-serif", fontSize: "15px", color: "#0C1211" }} />
                </label>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "26px" }}>
                <label style={{ display: "grid", gap: "8px" }}>
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#59645F" }}>Organisation</span>
                  <input placeholder="Company name" style={{ border: "1px solid #C9C3B4", background: "#F6F4EF", padding: "13px 14px", fontFamily: "var(--font-geist), sans-serif", fontSize: "15px", color: "#0C1211" }} />
                </label>
                <label style={{ display: "grid", gap: "8px" }}>
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#59645F" }}>Engagement type</span>
                  <select style={{ border: "1px solid #C9C3B4", background: "#F6F4EF", padding: "13px 14px", fontFamily: "var(--font-geist), sans-serif", fontSize: "15px", color: "#0C1211" }}>
                    <option>Not sure yet</option>
                    <option>Discovery sprint (2 weeks)</option>
                    <option>MVP build (6&ndash;12 weeks)</option>
                    <option>Fractional transformation lead</option>
                    <option>Adoption &amp; change support</option>
                  </select>
                </label>
              </div>
              <label style={{ display: "grid", gap: "8px" }}>
                <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#59645F" }}>What are you trying to achieve?</span>
                <textarea rows={6} placeholder="The outcome you need, the constraint you're working against, and any date that matters." style={{ border: "1px solid #C9C3B4", background: "#F6F4EF", padding: "13px 14px", fontFamily: "var(--font-geist), sans-serif", fontSize: "15px", lineHeight: "1.6", color: "#0C1211", resize: "vertical" }}></textarea>
              </label>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
                <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#59645F", margin: "0" }}>RESPONSE WITHIN 1&ndash;2 BUSINESS DAYS</p>
                <button type="button" style={{ border: "none", background: "#00706E", color: "#FFFFFF", fontFamily: "var(--font-geist), sans-serif", fontSize: "15px", fontWeight: "500", padding: "15px 28px", display: "inline-flex", alignItems: "center", gap: "10px" }} className="hv17">Request discovery call <span style={{ fontFamily: "var(--font-geist-mono), monospace" }}>&#8594;</span></button>
              </div>
            </form>

            <div style={{ display: "grid", gap: "36px" }}>
              <div>
                <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#00706E", margin: "0 0 20px" }}>What happens next</p>
                <div style={{ display: "grid" }}>
                  <div style={{ borderTop: "1px solid #E2DED4", padding: "18px 0", display: "grid", gridTemplateColumns: "32px minmax(0,1fr)", gap: "14px" }}>
                    <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "12px", color: "#59645F" }}>01</span>
                    <span style={{ fontSize: "15px", lineHeight: "1.6" }}>A short reply confirming fit, with two or three questions if anything is unclear.</span>
                  </div>
                  <div style={{ borderTop: "1px solid #E2DED4", padding: "18px 0", display: "grid", gridTemplateColumns: "32px minmax(0,1fr)", gap: "14px" }}>
                    <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "12px", color: "#59645F" }}>02</span>
                    <span style={{ fontSize: "15px", lineHeight: "1.6" }}>A 30-minute call with the consultant who would lead the work &mdash; not a salesperson.</span>
                  </div>
                  <div style={{ borderTop: "1px solid #E2DED4", borderBottom: "1px solid #E2DED4", padding: "18px 0", display: "grid", gridTemplateColumns: "32px minmax(0,1fr)", gap: "14px" }}>
                    <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "12px", color: "#59645F" }}>03</span>
                    <span style={{ fontSize: "15px", lineHeight: "1.6" }}>A one-page proposal with scope, fee and timeline, usually within three business days.</span>
                  </div>
                </div>
              </div>
              <div style={{ background: "#0A0F0F", color: "#E6F7F7", padding: "32px 28px" }}>
                <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#7DFF7A", margin: "0 0 20px" }}>Details</p>
                <div style={{ display: "grid", gap: "18px", fontSize: "15px", lineHeight: "1.6", color: "rgba(230,247,247,0.85)" }}>
                  <p style={{ margin: "0" }}>Discovery calls run over Zoom or Teams, at a time in your zone.</p>
                  <p style={{ margin: "0" }}>Based in Hamilton, Ontario. Serving clients remotely across North America, on site when the work needs it.</p>
                  <p style={{ margin: "0" }}><Link href="mailto:hello@sagir.org" style={{ color: "#7DFF7A", borderBottom: "1px solid rgba(125,255,122,0.4)" }}>hello@sagir.org</Link></p>
                </div>
              </div>
            </div>
          </section>
        </main>
  

        {/* ============ CTA + FOOTER ============ */}
        <section style={{ background: "#0A0F0F", color: "#E6F7F7", borderTop: "1px solid rgba(230,247,247,0.1)" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "88px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "48px", alignItems: "center" }}>
            <div>
              <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#7DFF7A", margin: "0 0 20px" }}>Next step</p>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(30px,3.6vw,46px)", lineHeight: "1.08", margin: "0" }}>Bring one problem. We'll scope it in two weeks.</h2>
            </div>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "flex-end" }}>
              <Link href="/contact" style={{ background: "#7DFF7A", color: "#0A0F0F", fontSize: "15px", fontWeight: "600", padding: "16px 28px", display: "inline-flex", alignItems: "center", gap: "10px" }} className="hv18">Book a discovery call <span style={{ fontFamily: "var(--font-geist-mono), monospace" }}>&#8594;</span></Link>
              <Link href="/approach" style={{ border: "1px solid rgba(230,247,247,0.35)", color: "#E6F7F7", fontSize: "15px", fontWeight: "500", padding: "16px 28px", display: "inline-flex", alignItems: "center" }} className="hv19">Read the approach</Link>
            </div>
          </div>
        </section>
      <ClosingCTA />
    </>
  );
}
