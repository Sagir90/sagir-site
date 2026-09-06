import type { Metadata } from "next";
import Link from "next/link";
import ClosingCTA from "../components/ClosingCTA";

export const metadata: Metadata = {
  title: "Services",
  description: "Four capabilities, one accountable owner — strategy, solution design, implementation and adoption.",
};

export default function ServicesPage() {
  return (
    <>
      <main>
          <section style={{ maxWidth: "1240px", margin: "0 auto", padding: "88px 32px 56px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "56px", alignItems: "end" }}>
            <div>
              <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#00706E", margin: "0 0 24px" }}>Services</p>
              <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(36px,4.4vw,56px)", lineHeight: "1.06", letterSpacing: "-0.02em", margin: "0" }}>Four capabilities, one accountable owner.</h1>
            </div>
            <p style={{ fontSize: "17px", lineHeight: "1.62", color: "#4A5654", margin: "0" }}>We cover the full lifecycle &mdash; strategy through adoption &mdash; led by a single consultant, supported by AI tooling and specialist partners only where deep expertise earns its cost. Every engagement starts with a fixed-scope diagnostic so the commitment is small and the decision is informed.</p>
          </section>

    
          <div style={{ position: "sticky", top: "72px", zIndex: "40", background: "#FFFFFF", borderTop: "1px solid #E2DED4", borderBottom: "1px solid #E2DED4" }}>
            <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", gap: "32px", flexWrap: "wrap", alignItems: "center", height: "56px" }}>
              <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#59645F" }}>On this page</span>
              <Link href="#svc-strategy" style={{ fontSize: "14px", fontWeight: "500" }}>Strategy</Link>
              <Link href="#svc-design" style={{ fontSize: "14px", fontWeight: "500" }}>Design</Link>
              <Link href="#svc-delivery" style={{ fontSize: "14px", fontWeight: "500" }}>Delivery</Link>
              <Link href="#svc-adoption" style={{ fontSize: "14px", fontWeight: "500" }}>Adoption</Link>
              <Link href="#svc-engagements" style={{ fontSize: "14px", fontWeight: "500" }}>Engagement types</Link>
            </div>
          </div>
    

          <section id="svc-strategy" style={{ maxWidth: "1240px", margin: "0 auto", padding: "80px 32px", borderBottom: "1px solid #E2DED4", scrollMarginTop: "140px", display: "grid", gridTemplateColumns: "minmax(0,0.85fr) minmax(0,1.15fr)", gap: "56px" }}>
            <div>
              <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "12px", color: "#00706E", margin: "0 0 16px" }}>S.01</p>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(28px,3.2vw,38px)", lineHeight: "1.12", margin: "0" }}>Strategy &amp; advisory</h2>
              <p style={{ fontSize: "16px", lineHeight: "1.62", color: "#4A5654", margin: "20px 0 0" }}>Clarify the problem before spending on a solution. We frame the decision, size the opportunity, and produce a roadmap that survives a budget conversation.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "36px" }}>
              <div>
                <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#59645F", margin: "0 0 14px" }}>What you get</p>
                <ul style={{ margin: "0", paddingLeft: "18px", fontSize: "15px", lineHeight: "1.75", color: "#0C1211" }}>
                  <li>Current-state assessment and pain-point map</li>
                  <li>Target operating model and capability gaps</li>
                  <li>Business case with cost, risk and benefit ranges</li>
                  <li>Sequenced 6&ndash;12 month roadmap</li>
                </ul>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#59645F", margin: "0 0 14px" }}>How it runs</p>
                <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#0C1211", margin: "0" }}>A two-week diagnostic: 8&ndash;12 stakeholder interviews, document review with AI-assisted synthesis, and a working session to pressure-test the recommendation before it is written up.</p>
                <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#00706E", margin: "18px 0 0" }}>TYPICAL DURATION &mdash; 2 WEEKS</p>
              </div>
            </div>
          </section>

          <section id="svc-design" style={{ maxWidth: "1240px", margin: "0 auto", padding: "80px 32px", borderBottom: "1px solid #E2DED4", scrollMarginTop: "140px", display: "grid", gridTemplateColumns: "minmax(0,0.85fr) minmax(0,1.15fr)", gap: "56px" }}>
            <div>
              <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "12px", color: "#00706E", margin: "0 0 16px" }}>S.02</p>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(28px,3.2vw,38px)", lineHeight: "1.12", margin: "0" }}>Solution design &amp; architecture</h2>
              <p style={{ fontSize: "16px", lineHeight: "1.62", color: "#4A5654", margin: "20px 0 0" }}>Strategy becomes buildable artefacts. Process, data and integration design documented to the level an engineering team can pick up without a translation layer.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "36px" }}>
              <div>
                <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#59645F", margin: "0 0 14px" }}>What you get</p>
                <ul style={{ margin: "0", paddingLeft: "18px", fontSize: "15px", lineHeight: "1.75", color: "#0C1211" }}>
                  <li>To-be process flows and control points</li>
                  <li>Domain model, data contracts, integration map</li>
                  <li>Solution architecture and platform decisions</li>
                  <li>Non-functional requirements and risk register</li>
                </ul>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#59645F", margin: "0 0 14px" }}>How it runs</p>
                <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#0C1211", margin: "0" }}>Design is scoped to the thinnest MVP slice that proves value, with the rest of the target state sketched but deliberately unbuilt. AI accelerates documentation drafting; every artefact is reviewed line by line.</p>
                <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#00706E", margin: "18px 0 0" }}>TYPICAL DURATION &mdash; 1&ndash;2 WEEKS</p>
              </div>
            </div>
          </section>

          <section id="svc-delivery" style={{ maxWidth: "1240px", margin: "0 auto", padding: "80px 32px", borderBottom: "1px solid #E2DED4", scrollMarginTop: "140px", display: "grid", gridTemplateColumns: "minmax(0,0.85fr) minmax(0,1.15fr)", gap: "56px" }}>
            <div>
              <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "12px", color: "#00706E", margin: "0 0 16px" }}>S.03</p>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(28px,3.2vw,38px)", lineHeight: "1.12", margin: "0" }}>Implementation &amp; delivery</h2>
              <p style={{ fontSize: "16px", lineHeight: "1.62", color: "#4A5654", margin: "20px 0 0" }}>Build, configure and deploy in weekly increments. The same lead who set the strategy stays accountable for what ships.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "36px" }}>
              <div>
                <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#59645F", margin: "0 0 14px" }}>What you get</p>
                <ul style={{ margin: "0", paddingLeft: "18px", fontSize: "15px", lineHeight: "1.75", color: "#0C1211" }}>
                  <li>Working software or configured platform, sprint by sprint</li>
                  <li>Weekly demo and decision log</li>
                  <li>Test coverage, cutover plan, rollback path</li>
                  <li>Handover pack for your internal team</li>
                </ul>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#59645F", margin: "0 0 14px" }}>How it runs</p>
                <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#0C1211", margin: "0" }}>One-week sprints closing in a live demo, never a status report. Cloud, data engineering and QA specialists join from the partner network for defined slices of work and leave when done.</p>
                <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#00706E", margin: "18px 0 0" }}>TYPICAL DURATION &mdash; 3&ndash;8 WEEKS</p>
              </div>
            </div>
          </section>

          <section id="svc-adoption" style={{ maxWidth: "1240px", margin: "0 auto", padding: "80px 32px", borderBottom: "1px solid #E2DED4", scrollMarginTop: "140px", display: "grid", gridTemplateColumns: "minmax(0,0.85fr) minmax(0,1.15fr)", gap: "56px" }}>
            <div>
              <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "12px", color: "#00706E", margin: "0 0 16px" }}>S.04</p>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(28px,3.2vw,38px)", lineHeight: "1.12", margin: "0" }}>Adoption &amp; change management</h2>
              <p style={{ fontSize: "16px", lineHeight: "1.62", color: "#4A5654", margin: "20px 0 0" }}>Most transformation value is lost after go-live. Adoption is planned from week one and measured for 60 days after release.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "36px" }}>
              <div>
                <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#59645F", margin: "0 0 14px" }}>What you get</p>
                <ul style={{ margin: "0", paddingLeft: "18px", fontSize: "15px", lineHeight: "1.75", color: "#0C1211" }}>
                  <li>Stakeholder map and resistance assessment</li>
                  <li>Role-based enablement material and sessions</li>
                  <li>Super-user network and support model</li>
                  <li>Usage instrumentation and 60-day adoption report</li>
                </ul>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#59645F", margin: "0 0 14px" }}>How it runs</p>
                <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#0C1211", margin: "0" }}>Enablement is built alongside the solution, not after it. We instrument the workflow so adoption is a number you can see, then coach the team that owns it once we step out.</p>
                <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#00706E", margin: "18px 0 0" }}>TYPICAL DURATION &mdash; 2&ndash;4 WEEKS</p>
              </div>
            </div>
          </section>

          <section id="svc-engagements" style={{ background: "#FFFFFF", borderBottom: "1px solid #E2DED4", scrollMarginTop: "140px" }}>
            <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "88px 32px" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(28px,3.2vw,40px)", lineHeight: "1.1", margin: "0" }}>Engagement types</h2>
              <div style={{ marginTop: "48px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1px", background: "#E2DED4" }}>
                <div style={{ background: "#FFFFFF", padding: "32px 28px" }}>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", color: "#00706E", margin: "0 0 18px" }}>E.01</p>
                  <p style={{ fontSize: "20px", fontWeight: "600", margin: "0" }}>Discovery sprint</p>
                  <p style={{ fontSize: "15px", lineHeight: "1.62", color: "#4A5654", margin: "12px 0 20px" }}>Fixed scope, fixed fee. A decision-ready diagnostic and roadmap in two weeks &mdash; no commitment beyond it.</p>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#59645F", margin: "0" }}>2 WEEKS &middot; FIXED FEE</p>
                </div>
                <div style={{ background: "#FFFFFF", padding: "32px 28px" }}>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", color: "#00706E", margin: "0 0 18px" }}>E.02</p>
                  <p style={{ fontSize: "20px", fontWeight: "600", margin: "0" }}>MVP build</p>
                  <p style={{ fontSize: "15px", lineHeight: "1.62", color: "#4A5654", margin: "12px 0 20px" }}>Design through deployment of the first valuable slice, with adoption support built into the plan.</p>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#59645F", margin: "0" }}>6&ndash;12 WEEKS &middot; MILESTONE-BASED</p>
                </div>
                <div style={{ background: "#FFFFFF", padding: "32px 28px" }}>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", color: "#00706E", margin: "0 0 18px" }}>E.03</p>
                  <p style={{ fontSize: "20px", fontWeight: "600", margin: "0" }}>Fractional transformation lead</p>
                  <p style={{ fontSize: "15px", lineHeight: "1.62", color: "#4A5654", margin: "12px 0 20px" }}>Ongoing senior ownership across a portfolio of initiatives, two to three days a week.</p>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#59645F", margin: "0" }}>3&ndash;6 MONTHS &middot; RETAINER</p>
                </div>
              </div>
            </div>
          </section>
        </main>
  

        {/* ============ APPROACH ============ */}
      <ClosingCTA />
    </>
  );
}
