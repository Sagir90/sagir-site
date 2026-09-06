import Link from "next/link";

export default function ClosingCTA() {
  return (
      <section style={{ background: "#0A0F0F", color: "#E6F7F7", borderTop: "1px solid rgba(230,247,247,0.1)" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "88px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "48px", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#7DFF7A", margin: "0 0 20px" }}>Next step</p>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(30px,3.6vw,46px)", lineHeight: "1.08", margin: "0" }}>Bring one problem. We'll scope it in two weeks.</h2>
          </div>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "flex-end" }}>
            <Link href="/contact" style={{ background: "#7DFF7A", color: "#0A0F0F", fontSize: "15px", fontWeight: "600", padding: "16px 28px", display: "inline-flex", alignItems: "center", gap: "10px" }} className="hv20">Book a discovery call <span style={{ fontFamily: "var(--font-geist-mono), monospace" }}>&#8594;</span></Link>
            <Link href="/approach" style={{ border: "1px solid rgba(230,247,247,0.35)", color: "#E6F7F7", fontSize: "15px", fontWeight: "500", padding: "16px 28px", display: "inline-flex", alignItems: "center" }} className="hv21">Read the approach</Link>
          </div>
        </div>
      </section>
  );
}
