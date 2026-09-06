import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#050808", color: "rgba(230,247,247,0.7)" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "64px 32px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "40px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#E6F7F7" }}>
              <span style={{ width: "14px", height: "14px", background: "#7DFF7A", display: "block" }}></span>
              <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "0.14em" }}>SAGIR</span>
            </div>
            <p style={{ fontSize: "14px", lineHeight: "1.6", margin: "18px 0 0", maxWidth: "34ch" }}>One-lead, AI-driven consulting for faster, focused outcomes. Hamilton, Ontario.</p>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(230,247,247,0.45)", margin: "0 0 16px" }}>Site</p>
            <div style={{ display: "grid", gap: "10px", fontSize: "14px" }}>
              <Link href="/services" style={{ color: "rgba(230,247,247,0.8)" }} className="hv22">Services</Link>
              <Link href="/approach" style={{ color: "rgba(230,247,247,0.8)" }} className="hv23">Approach</Link>
              <Link href="/team" style={{ color: "rgba(230,247,247,0.8)" }} className="hv24">Team</Link>
            </div>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(230,247,247,0.45)", margin: "0 0 16px" }}>Work &amp; thinking</p>
            <div style={{ display: "grid", gap: "10px", fontSize: "14px" }}>
              <Link href="/case-studies" style={{ color: "rgba(230,247,247,0.8)" }} className="hv25">Case studies</Link>
              <Link href="/insights" style={{ color: "rgba(230,247,247,0.8)" }} className="hv26">Insights</Link>
              <Link href="/contact" style={{ color: "rgba(230,247,247,0.8)" }} className="hv27">Contact</Link>
            </div>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(230,247,247,0.45)", margin: "0 0 16px" }}>Get in touch</p>
            <div style={{ display: "grid", gap: "10px", fontSize: "14px" }}>
              <Link href="mailto:hello@sagir.org" style={{ color: "rgba(230,247,247,0.8)" }} className="hv28">hello@sagir.org</Link>
              <span>Zoom &middot; Teams &middot; on site when needed</span>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "24px 32px 40px", borderTop: "1px solid rgba(230,247,247,0.12)", display: "flex", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
          <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "rgba(230,247,247,0.45)", margin: "0" }}>&copy; 2026 SAGIR CONSULTING. ALL RIGHTS RESERVED.</p>
          <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "rgba(230,247,247,0.45)", margin: "0" }}>PRIVACY &middot; TERMS</p>
        </div>
      </footer>
  );
}
