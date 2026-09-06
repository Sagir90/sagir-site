import Link from "next/link";
import ClosingCTA from "./components/ClosingCTA";
import Hero from "./components/Hero";
import Counters from "./components/Counters";

export default function HomePage() {
  return (
    <>
      <main>
          <Hero />


          <div style={{ borderTop: "1px solid #E2DED4", borderBottom: "1px solid #E2DED4", background: "#F1EEE6", overflow: "hidden", padding: "18px 0" }}>
            <div style={{ display: "flex", width: "max-content", animation: "sg-marquee 42s linear infinite" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "44px", paddingRight: "44px", fontFamily: "var(--font-geist-mono), monospace", fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#59645F", whiteSpace: "nowrap" }}>
                <span>Digital onboarding &amp; KYC</span><span style={{ color: "#00706E" }}>&#9679;</span>
                <span>Payments modernisation</span><span style={{ color: "#00706E" }}>&#9679;</span>
                <span>Operating-model design</span><span style={{ color: "#00706E" }}>&#9679;</span>
                <span>AI-assisted delivery</span><span style={{ color: "#00706E" }}>&#9679;</span>
                <span>Workflow consolidation</span><span style={{ color: "#00706E" }}>&#9679;</span>
                <span>Adoption &amp; change</span><span style={{ color: "#00706E" }}>&#9679;</span>
                <span>Regulated industries</span><span style={{ color: "#00706E" }}>&#9679;</span>
              </div>
              <div aria-hidden="true" style={{ display: "flex", alignItems: "center", gap: "44px", paddingRight: "44px", fontFamily: "var(--font-geist-mono), monospace", fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#59645F", whiteSpace: "nowrap" }}>
                <span>Digital onboarding &amp; KYC</span><span style={{ color: "#00706E" }}>&#9679;</span>
                <span>Payments modernisation</span><span style={{ color: "#00706E" }}>&#9679;</span>
                <span>Operating-model design</span><span style={{ color: "#00706E" }}>&#9679;</span>
                <span>AI-assisted delivery</span><span style={{ color: "#00706E" }}>&#9679;</span>
                <span>Workflow consolidation</span><span style={{ color: "#00706E" }}>&#9679;</span>
                <span>Adoption &amp; change</span><span style={{ color: "#00706E" }}>&#9679;</span>
                <span>Regulated industries</span><span style={{ color: "#00706E" }}>&#9679;</span>
              </div>
            </div>
          </div>

    
          <section style={{ background: "#0A0F0F", color: "#E6F7F7" }}>
            <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "64px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "48px" }}>
              <div>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "52px", lineHeight: "1", margin: "0", color: "#7DFF7A" }}><span data-count="3">3</span></p>
                <p style={{ fontSize: "14px", lineHeight: "1.5", color: "rgba(230,247,247,0.78)", margin: "12px 0 0" }}>weeks median time to a working MVP in the last four engagements</p>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "52px", lineHeight: "1", margin: "0", color: "#7DFF7A" }}><span data-count="1">1</span></p>
                <p style={{ fontSize: "14px", lineHeight: "1.5", color: "rgba(230,247,247,0.78)", margin: "12px 0 0" }}>accountable lead across strategy, build and change &mdash; from kickoff to handover</p>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "52px", lineHeight: "1", margin: "0", color: "#7DFF7A" }}><span data-count="40">40</span><span style={{ fontSize: "28px" }}>%</span></p>
                <p style={{ fontSize: "14px", lineHeight: "1.5", color: "rgba(230,247,247,0.78)", margin: "12px 0 0" }}>average reduction in manual process steps after workflow consolidation</p>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "52px", lineHeight: "1", margin: "0", color: "#7DFF7A" }}><span data-count="12">12</span><span style={{ fontSize: "28px" }}>+</span></p>
                <p style={{ fontSize: "14px", lineHeight: "1.5", color: "rgba(230,247,247,0.78)", margin: "12px 0 0" }}>fintech and regulated-industry transformation programmes led to date</p>
              </div>
            </div>
          </section>
    

          <section style={{ maxWidth: "1240px", margin: "0 auto", padding: "96px 32px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0,0.8fr) minmax(0,1.2fr)", gap: "64px", alignItems: "start" }}>
              <div style={{ position: "sticky", top: "104px" }}>
                <p data-reveal="1" style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#00706E", margin: "0 0 20px" }}>01 &mdash; Capabilities</p>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(30px,3.4vw,44px)", lineHeight: "1.1", letterSpacing: "-0.015em", margin: "0" }}>The full lifecycle, owned by one lead.</h2>
                <p style={{ fontSize: "16px", lineHeight: "1.62", color: "#4A5654", margin: "22px 0 0" }}>Most firms sell you a pyramid. We sell you the person doing the work &mdash; with AI compressing the analysis, documentation and iteration that used to justify the pyramid.</p>
                <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "26px", fontSize: "14px", fontWeight: "500", borderBottom: "1px solid #00706E", paddingBottom: "3px" }}>All services <span style={{ fontFamily: "var(--font-geist-mono), monospace" }}>&#8594;</span></Link>
              </div>
              <div style={{ display: "grid" }}>
                <Link href="/services" data-reveal="1" style={{ display: "grid", gridTemplateColumns: "56px minmax(0,1fr) 24px", gap: "20px", alignItems: "start", padding: "30px 0", borderTop: "1px solid #E2DED4", color: "#0C1211" }} className="hv3">
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "12px", color: "#00706E", paddingTop: "5px" }}>S.01</span>
                  <span>
                    <span style={{ display: "block", fontSize: "21px", fontWeight: "600", letterSpacing: "-0.01em" }}>Strategy &amp; advisory</span>
                    <span style={{ display: "block", fontSize: "15px", lineHeight: "1.6", color: "#4A5654", marginTop: "8px" }}>Problem framing, target-state definition, business case and a sequenced roadmap you can actually fund. Two-week diagnostic, decision-ready output.</span>
                  </span>
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", color: "#59645F", paddingTop: "5px" }}>&#8594;</span>
                </Link>
                <Link href="/services" data-reveal="1" style={{ display: "grid", gridTemplateColumns: "56px minmax(0,1fr) 24px", gap: "20px", alignItems: "start", padding: "30px 0", borderTop: "1px solid #E2DED4", color: "#0C1211" }} className="hv4">
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "12px", color: "#00706E", paddingTop: "5px" }}>S.02</span>
                  <span>
                    <span style={{ display: "block", fontSize: "21px", fontWeight: "600", letterSpacing: "-0.01em" }}>Solution design &amp; architecture</span>
                    <span style={{ display: "block", fontSize: "15px", lineHeight: "1.6", color: "#4A5654", marginTop: "8px" }}>Process, data and integration design translated into build-ready artefacts &mdash; API contracts, domain models, control points, non-functional requirements.</span>
                  </span>
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", color: "#59645F", paddingTop: "5px" }}>&#8594;</span>
                </Link>
                <Link href="/services" data-reveal="1" style={{ display: "grid", gridTemplateColumns: "56px minmax(0,1fr) 24px", gap: "20px", alignItems: "start", padding: "30px 0", borderTop: "1px solid #E2DED4", color: "#0C1211" }} className="hv5">
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "12px", color: "#00706E", paddingTop: "5px" }}>S.03</span>
                  <span>
                    <span style={{ display: "block", fontSize: "21px", fontWeight: "600", letterSpacing: "-0.01em" }}>Implementation &amp; delivery</span>
                    <span style={{ display: "block", fontSize: "15px", lineHeight: "1.6", color: "#4A5654", marginTop: "8px" }}>Agile build, configuration and deployment with weekly demos. Specialist partners plug in for cloud, data engineering and QA when the work demands it.</span>
                  </span>
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", color: "#59645F", paddingTop: "5px" }}>&#8594;</span>
                </Link>
                <Link href="/services" data-reveal="1" style={{ display: "grid", gridTemplateColumns: "56px minmax(0,1fr) 24px", gap: "20px", alignItems: "start", padding: "30px 0", borderTop: "1px solid #E2DED4", borderBottom: "1px solid #E2DED4", color: "#0C1211" }} className="hv6">
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "12px", color: "#00706E", paddingTop: "5px" }}>S.04</span>
                  <span>
                    <span style={{ display: "block", fontSize: "21px", fontWeight: "600", letterSpacing: "-0.01em" }}>Adoption &amp; change management</span>
                    <span style={{ display: "block", fontSize: "15px", lineHeight: "1.6", color: "#4A5654", marginTop: "8px" }}>Stakeholder mapping, role-based enablement, super-user coaching and 60-day adoption tracking &mdash; so the solution survives go-live.</span>
                  </span>
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", color: "#59645F", paddingTop: "5px" }}>&#8594;</span>
                </Link>
              </div>
            </div>
          </section>

          <section style={{ background: "#FFFFFF", borderTop: "1px solid #E2DED4", borderBottom: "1px solid #E2DED4" }}>
            <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "96px 32px" }}>
              <p data-reveal="1" style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#00706E", margin: "0 0 20px" }}>02 &mdash; Delivery model</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "56px", alignItems: "start" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(30px,3.4vw,44px)", lineHeight: "1.1", letterSpacing: "-0.015em", margin: "0" }}>Five phases. Weeks, not quarters.</h2>
                <p style={{ fontSize: "16px", lineHeight: "1.62", color: "#4A5654", margin: "0" }}>Each phase ends in a decision, not a status deck. Fixed-scope discovery de-risks the commitment; everything after it is funded against demonstrated progress.</p>
              </div>
              <div style={{ marginTop: "64px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: "1px", background: "#E2DED4" }}>
                <div data-reveal="1" style={{ background: "#FFFFFF", padding: "28px 24px 32px" }}>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#00706E", margin: "0 0 40px" }}>PHASE 01</p>
                  <p style={{ fontSize: "19px", fontWeight: "600", margin: "0" }}>Discovery</p>
                  <p style={{ fontSize: "14px", lineHeight: "1.55", color: "#4A5654", margin: "10px 0 0" }}>Stakeholder interviews, current-state mapping, opportunity sizing.</p>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#59645F", margin: "18px 0 0" }}>1&ndash;2 weeks</p>
                </div>
                <div data-reveal="1" style={{ background: "#FFFFFF", padding: "28px 24px 32px" }}>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#00706E", margin: "0 0 40px" }}>PHASE 02</p>
                  <p style={{ fontSize: "19px", fontWeight: "600", margin: "0" }}>MVP design</p>
                  <p style={{ fontSize: "14px", lineHeight: "1.55", color: "#4A5654", margin: "10px 0 0" }}>Scope cut to the thinnest slice that proves value; architecture agreed.</p>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#59645F", margin: "18px 0 0" }}>1&ndash;2 weeks</p>
                </div>
                <div data-reveal="1" style={{ background: "#FFFFFF", padding: "28px 24px 32px" }}>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#00706E", margin: "0 0 40px" }}>PHASE 03</p>
                  <p style={{ fontSize: "19px", fontWeight: "600", margin: "0" }}>Implementation</p>
                  <p style={{ fontSize: "14px", lineHeight: "1.55", color: "#4A5654", margin: "10px 0 0" }}>Build in weekly increments with a live demo closing every sprint.</p>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#59645F", margin: "18px 0 0" }}>3&ndash;8 weeks</p>
                </div>
                <div data-reveal="1" style={{ background: "#FFFFFF", padding: "28px 24px 32px" }}>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#00706E", margin: "0 0 40px" }}>PHASE 04</p>
                  <p style={{ fontSize: "19px", fontWeight: "600", margin: "0" }}>Adoption</p>
                  <p style={{ fontSize: "14px", lineHeight: "1.55", color: "#4A5654", margin: "10px 0 0" }}>Enablement, super-user coaching, usage instrumentation and tracking.</p>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#59645F", margin: "18px 0 0" }}>2&ndash;4 weeks</p>
                </div>
                <div data-reveal="1" style={{ background: "#FFFFFF", padding: "28px 24px 32px" }}>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#00706E", margin: "0 0 40px" }}>PHASE 05</p>
                  <p style={{ fontSize: "19px", fontWeight: "600", margin: "0" }}>Iteration</p>
                  <p style={{ fontSize: "14px", lineHeight: "1.55", color: "#4A5654", margin: "10px 0 0" }}>Measure against the baseline, re-prioritise, hand over or extend.</p>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#59645F", margin: "18px 0 0" }}>ongoing</p>
                </div>
              </div>
            </div>
          </section>

          <section style={{ maxWidth: "1240px", margin: "0 auto", padding: "96px 32px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "24px", flexWrap: "wrap", borderBottom: "1px solid #E2DED4", paddingBottom: "22px" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(28px,3.2vw,40px)", lineHeight: "1.1", margin: "0" }}>Selected engagements</h2>
              <Link href="/case-studies" style={{ fontSize: "14px", fontWeight: "500", display: "inline-flex", gap: "8px", alignItems: "center" }}>All case studies <span style={{ fontFamily: "var(--font-geist-mono), monospace" }}>&#8594;</span></Link>
            </div>
            <div style={{ marginTop: "44px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "40px" }}>
              <Link href="/case-studies" data-reveal="2" style={{ color: "#0C1211", display: "block" }}>
                <div style={{ aspectRatio: "16/10", background: "repeating-linear-gradient(135deg,#E8E4DA 0 10px,#F1EEE6 10px 20px)", display: "flex", alignItems: "flex-end", padding: "18px" }}>
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#59645F" }}>case imagery &mdash; 16:10</span>
                </div>
                <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#00706E", margin: "20px 0 10px" }}>Digital onboarding &middot; Fintech</p>
                <p style={{ fontSize: "23px", fontWeight: "600", lineHeight: "1.25", letterSpacing: "-0.01em", margin: "0" }}>Onboarding cycle cut from six weeks to ten days</p>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5654", margin: "12px 0 0" }}>A KYC-heavy onboarding journey rebuilt around one accountable lead, an AI-assisted documentation pipeline and a three-week MVP.</p>
              </Link>
              <Link href="/case-studies" data-reveal="2" style={{ color: "#0C1211", display: "block" }}>
                <div style={{ aspectRatio: "16/10", background: "repeating-linear-gradient(135deg,#E8E4DA 0 10px,#F1EEE6 10px 20px)", display: "flex", alignItems: "flex-end", padding: "18px" }}>
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#59645F" }}>case imagery &mdash; 16:10</span>
                </div>
                <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#00706E", margin: "20px 0 10px" }}>Operating model &middot; Payments</p>
                <p style={{ fontSize: "23px", fontWeight: "600", lineHeight: "1.25", letterSpacing: "-0.01em", margin: "0" }}>Four departments, one operating process</p>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5654", margin: "12px 0 0" }}>Fragmented handoffs consolidated into a single instrumented workflow, with 40% of manual steps removed and adoption tracked for 60 days.</p>
              </Link>
            </div>
          </section>

          <section style={{ background: "#FFFFFF", borderTop: "1px solid #E2DED4" }}>
            <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "88px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "56px" }}>
              <div>
                <p data-reveal="1" style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#00706E", margin: "0 0 20px" }}>03 &mdash; Insights</p>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(28px,3.2vw,40px)", lineHeight: "1.1", margin: "0" }}>Perspectives on lean, AI-enabled transformation.</h2>
                <Link href="/insights" style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "24px", fontSize: "14px", fontWeight: "500", borderBottom: "1px solid #00706E", paddingBottom: "3px" }}>Read all insights <span style={{ fontFamily: "var(--font-geist-mono), monospace" }}>&#8594;</span></Link>
              </div>
              <div style={{ display: "grid" }}>
                <Link href="/insights" style={{ borderTop: "1px solid #E2DED4", padding: "22px 0", color: "#0C1211", display: "block" }} className="hv7">
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#59645F", margin: "0 0 8px" }}>AI IN PRACTICE &middot; AUG 2026</p>
                  <p style={{ fontSize: "18px", fontWeight: "600", margin: "0" }}>AI-driven consulting: what actually changes in the delivery model</p>
                </Link>
                <Link href="/insights" style={{ borderTop: "1px solid #E2DED4", padding: "22px 0", color: "#0C1211", display: "block" }} className="hv8">
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#59645F", margin: "0 0 8px" }}>OPERATING MODEL &middot; JUL 2026</p>
                  <p style={{ fontSize: "18px", fontWeight: "600", margin: "0" }}>The one-lead model: why single accountability beats the pyramid</p>
                </Link>
                <Link href="/insights" style={{ borderTop: "1px solid #E2DED4", borderBottom: "1px solid #E2DED4", padding: "22px 0", color: "#0C1211", display: "block" }} className="hv9">
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#59645F", margin: "0 0 8px" }}>DELIVERY &middot; JUN 2026</p>
                  <p style={{ fontSize: "18px", fontWeight: "600", margin: "0" }}>Building MVPs faster with AI &mdash; and where it still pays to slow down</p>
                </Link>
              </div>
            </div>
          </section>
        </main>
  

        {/* ============ SERVICES ============ */}
      <Counters />
      <ClosingCTA />
    </>
  );
}
