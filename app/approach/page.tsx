import type { Metadata } from "next";
import Link from "next/link";
import ClosingCTA from "../components/ClosingCTA";

export const metadata: Metadata = {
  title: "Approach",
  description: "Five phases in weeks, not quarters. Fixed-scope discovery, then delivery funded against demonstrated progress.",
};

export default function ApproachPage() {
  return (
    <>
      <main>
          <section style={{ maxWidth: "1240px", margin: "0 auto", padding: "88px 32px 56px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "56px", alignItems: "end" }}>
            <div>
              <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#00706E", margin: "0 0 24px" }}>Our approach</p>
              <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(36px,4.4vw,56px)", lineHeight: "1.06", letterSpacing: "-0.02em", margin: "0" }}>A lean model, built for regulated environments.</h1>
            </div>
            <p style={{ fontSize: "17px", lineHeight: "1.62", color: "#4A5654", margin: "0" }}>One accountable consultant, AI as a force multiplier, and specialist partners engaged only for defined slices of work. The result is senior attention at a mid-market cost structure &mdash; with the documentation discipline a regulated programme still requires.</p>
          </section>

    
          <div style={{ position: "sticky", top: "72px", zIndex: "40", background: "#FFFFFF", borderTop: "1px solid #E2DED4", borderBottom: "1px solid #E2DED4" }}>
            <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", gap: "32px", flexWrap: "wrap", alignItems: "center", height: "56px" }}>
              <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#59645F" }}>On this page</span>
              <Link href="#ap-principles" style={{ fontSize: "14px", fontWeight: "500" }}>Principles</Link>
              <Link href="#ap-ai" style={{ fontSize: "14px", fontWeight: "500" }}>AI in practice</Link>
              <Link href="#ap-governance" style={{ fontSize: "14px", fontWeight: "500" }}>Governance</Link>
              <Link href="#ap-notfor" style={{ fontSize: "14px", fontWeight: "500" }}>When we're not the fit</Link>
            </div>
          </div>
    

          <section id="ap-principles" style={{ maxWidth: "1240px", margin: "0 auto", padding: "80px 32px", borderBottom: "1px solid #E2DED4", scrollMarginTop: "140px" }}>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(28px,3.2vw,40px)", lineHeight: "1.1", margin: "0 0 48px" }}>Three operating principles</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "44px" }}>
              <div>
                <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#00706E", margin: "0 0 16px" }}>P.01</p>
                <p style={{ fontSize: "21px", fontWeight: "600", margin: "0" }}>Single point of accountability</p>
                <p style={{ fontSize: "15px", lineHeight: "1.68", color: "#4A5654", margin: "14px 0 0" }}>You always know who owns the outcome. No engagement manager relaying decisions to a delivery team you never meet, and no context lost between phases &mdash; the person who framed the problem is the person who ships the fix.</p>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#00706E", margin: "0 0 16px" }}>P.02</p>
                <p style={{ fontSize: "21px", fontWeight: "600", margin: "0" }}>AI as a force multiplier</p>
                <p style={{ fontSize: "15px", lineHeight: "1.68", color: "#4A5654", margin: "14px 0 0" }}>AI compresses document review, requirement drafting, test-case generation and iteration &mdash; the work that traditionally justified a large team. Judgement, stakeholder management and architectural decisions stay human.</p>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#00706E", margin: "0 0 16px" }}>P.03</p>
                <p style={{ fontSize: "21px", fontWeight: "600", margin: "0" }}>MVP first, always</p>
                <p style={{ fontSize: "15px", lineHeight: "1.68", color: "#4A5654", margin: "14px 0 0" }}>Scope is cut to the thinnest slice that proves value in front of real users. Everything after that is funded against demonstrated progress rather than a business case written twelve months earlier.</p>
              </div>
            </div>
          </section>

          <section id="ap-ai" style={{ background: "#0A0F0F", color: "#E6F7F7", scrollMarginTop: "140px" }}>
            <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "88px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "56px", alignItems: "start" }}>
              <div>
                <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#7DFF7A", margin: "0 0 22px" }}>AI in practice</p>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(28px,3.2vw,40px)", lineHeight: "1.12", margin: "0" }}>Where AI earns its place &mdash; and where it doesn't.</h2>
                <p style={{ fontSize: "16px", lineHeight: "1.65", color: "rgba(230,247,247,0.75)", margin: "22px 0 0" }}>We are explicit about tooling because regulated clients ask. No client data enters a public model without a signed agreement, and every AI-drafted artefact is reviewed by the lead before it leaves.</p>
              </div>
              <div style={{ display: "grid", gap: "1px", background: "rgba(230,247,247,0.14)" }}>
                <div style={{ background: "#0A0F0F", padding: "22px 0 22px 24px" }}>
                  <p style={{ fontSize: "16px", fontWeight: "600", margin: "0", color: "#E6F7F7" }}>Synthesis &amp; analysis</p>
                  <p style={{ fontSize: "14px", lineHeight: "1.6", color: "rgba(230,247,247,0.7)", margin: "8px 0 0" }}>Interview transcripts, process documentation and system exports summarised into a reviewable current-state picture in days, not weeks.</p>
                </div>
                <div style={{ background: "#0A0F0F", padding: "22px 0 22px 24px" }}>
                  <p style={{ fontSize: "16px", fontWeight: "600", margin: "0", color: "#E6F7F7" }}>Documentation &amp; artefacts</p>
                  <p style={{ fontSize: "14px", lineHeight: "1.6", color: "rgba(230,247,247,0.7)", margin: "8px 0 0" }}>Requirements, user stories, test cases and runbooks drafted from agreed design decisions, then edited to your standards and templates.</p>
                </div>
                <div style={{ background: "#0A0F0F", padding: "22px 0 22px 24px" }}>
                  <p style={{ fontSize: "16px", fontWeight: "600", margin: "0", color: "#E6F7F7" }}>Iteration &amp; prototyping</p>
                  <p style={{ fontSize: "14px", lineHeight: "1.6", color: "rgba(230,247,247,0.7)", margin: "8px 0 0" }}>Clickable prototypes and thin functional slices produced inside a sprint, so stakeholders react to something real.</p>
                </div>
                <div style={{ background: "#0A0F0F", padding: "22px 0 22px 24px" }}>
                  <p style={{ fontSize: "16px", fontWeight: "600", margin: "0", color: "rgba(230,247,247,0.6)" }}>Not automated</p>
                  <p style={{ fontSize: "14px", lineHeight: "1.6", color: "rgba(230,247,247,0.7)", margin: "8px 0 0" }}>Architecture trade-offs, vendor selection, regulatory interpretation, and any conversation where an organisation's politics decide the outcome.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="ap-governance" style={{ maxWidth: "1240px", margin: "0 auto", padding: "88px 32px", borderBottom: "1px solid #E2DED4", scrollMarginTop: "140px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "56px", alignItems: "start" }}>
              <div>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(28px,3.2vw,40px)", lineHeight: "1.12", margin: "0" }}>Governance without theatre</h2>
                <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#4A5654", margin: "20px 0 0" }}>A lean team does not mean loose control. The cadence is deliberately small and fixed, so oversight costs you an hour a week rather than a steering committee.</p>
              </div>
              <div style={{ display: "grid" }}>
                <div style={{ borderTop: "1px solid #E2DED4", padding: "20px 0", display: "grid", gridTemplateColumns: "150px minmax(0,1fr)", gap: "24px" }}>
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#59645F" }}>Weekly</span>
                  <span style={{ fontSize: "15px", lineHeight: "1.6" }}>Live demo of what was built, decisions needed, and the next sprint's scope in one 45-minute session.</span>
                </div>
                <div style={{ borderTop: "1px solid #E2DED4", padding: "20px 0", display: "grid", gridTemplateColumns: "150px minmax(0,1fr)", gap: "24px" }}>
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#59645F" }}>Continuous</span>
                  <span style={{ fontSize: "15px", lineHeight: "1.6" }}>A single shared decision log and risk register &mdash; open to your team, updated as decisions are made, not before a review.</span>
                </div>
                <div style={{ borderTop: "1px solid #E2DED4", padding: "20px 0", display: "grid", gridTemplateColumns: "150px minmax(0,1fr)", gap: "24px" }}>
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#59645F" }}>Per phase</span>
                  <span style={{ fontSize: "15px", lineHeight: "1.6" }}>A go / no-go checkpoint with the evidence attached. Stopping is a legitimate outcome and is priced as one.</span>
                </div>
                <div style={{ borderTop: "1px solid #E2DED4", borderBottom: "1px solid #E2DED4", padding: "20px 0", display: "grid", gridTemplateColumns: "150px minmax(0,1fr)", gap: "24px" }}>
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#59645F" }}>At handover</span>
                  <span style={{ fontSize: "15px", lineHeight: "1.6" }}>Documentation, instrumentation and a named internal owner &mdash; the engagement ends with your team able to run it.</span>
                </div>
              </div>
            </div>
          </section>

          <section id="ap-notfor" style={{ background: "#FFFFFF", borderBottom: "1px solid #E2DED4", scrollMarginTop: "140px" }}>
            <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "80px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "56px" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(26px,3vw,36px)", lineHeight: "1.12", margin: "0" }}>When we're not the right fit</h2>
              <div style={{ display: "grid", gap: "18px" }}>
                <p style={{ fontSize: "15px", lineHeight: "1.68", color: "#4A5654", margin: "0" }}>Programmes needing 30 consultants on site from day one. Multi-year integrations with a fixed vendor mandate. Situations where the deliverable is a brand-name logo on the cover of a board deck.</p>
                <p style={{ fontSize: "15px", lineHeight: "1.68", color: "#0C1211", margin: "0" }}>We will say so in the first call and, where we can, point you to someone better suited. It costs less than finding out in month three.</p>
              </div>
            </div>
          </section>
        </main>
  

        {/* ============ TEAM ============ */}
      <ClosingCTA />
    </>
  );
}
