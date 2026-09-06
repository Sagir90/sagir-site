import type { Metadata } from "next";
import Link from "next/link";
import ClosingCTA from "../components/ClosingCTA";

export const metadata: Metadata = {
  title: "Case studies",
  description: "Outcomes from fintech and regulated-industry transformation engagements.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <main>
          <section style={{ maxWidth: "1240px", margin: "0 auto", padding: "88px 32px 56px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "56px", alignItems: "end" }}>
            <div>
              <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#00706E", margin: "0 0 24px" }}>Case studies</p>
              <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(36px,4.4vw,56px)", lineHeight: "1.06", letterSpacing: "-0.02em", margin: "0" }}>Outcomes, with the numbers attached.</h1>
            </div>
            <p style={{ fontSize: "17px", lineHeight: "1.62", color: "#4A5654", margin: "0" }}>Client names are withheld under NDA; context, approach and measured results are not. Each engagement below was led end to end by a single consultant with partner specialists engaged for defined slices.</p>
          </section>

    
          <div style={{ position: "sticky", top: "72px", zIndex: "40", background: "#FFFFFF", borderTop: "1px solid #E2DED4", borderBottom: "1px solid #E2DED4" }}>
            <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", gap: "32px", flexWrap: "wrap", alignItems: "center", height: "56px" }}>
              <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#59645F" }}>On this page</span>
              <Link href="#cs-onboarding" style={{ fontSize: "14px", fontWeight: "500" }}>Digital onboarding</Link>
              <Link href="#cs-operating" style={{ fontSize: "14px", fontWeight: "500" }}>Operating model</Link>
              <Link href="#cs-snapshots" style={{ fontSize: "14px", fontWeight: "500" }}>Shorter engagements</Link>
            </div>
          </div>
    

          <section id="cs-onboarding" style={{ maxWidth: "1240px", margin: "0 auto", padding: "80px 32px", borderBottom: "1px solid #E2DED4", scrollMarginTop: "140px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "56px", alignItems: "start" }}>
              <div>
                <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#00706E", margin: "0 0 16px" }}>Fintech &middot; onboarding &amp; KYC</p>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(28px,3.2vw,40px)", lineHeight: "1.1", margin: "0" }}>Onboarding cycle cut from six weeks to ten days</h2>
                <div style={{ aspectRatio: "16/10", marginTop: "32px", background: "repeating-linear-gradient(135deg,#E8E4DA 0 10px,#F1EEE6 10px 20px)", display: "flex", alignItems: "flex-end", padding: "18px" }}>
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#59645F" }}>case imagery &mdash; 16:10</span>
                </div>
              </div>
              <div style={{ display: "grid", gap: "28px" }}>
                <div>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#59645F", margin: "0 0 10px" }}>Context</p>
                  <p style={{ fontSize: "16px", lineHeight: "1.68", margin: "0" }}>A mid-market lender's commercial onboarding ran across four systems and three teams, with manual document chase driving a six-week median. Two prior vendor attempts had stalled at requirements sign-off.</p>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#59645F", margin: "0 0 10px" }}>Approach</p>
                  <p style={{ fontSize: "16px", lineHeight: "1.68", margin: "0" }}>A two-week diagnostic reframed the problem as sequencing rather than tooling. Requirements and test cases were AI-drafted from the interview corpus and reviewed in working sessions, taking sign-off from months to nine days. An MVP covering the two highest-volume client types shipped in three weeks.</p>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#59645F", margin: "0 0 14px" }}>Outcome</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))", gap: "1px", background: "#E2DED4" }}>
                    <div style={{ background: "#F6F4EF", padding: "20px 18px" }}>
                      <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "34px", lineHeight: "1", margin: "0", color: "#00706E" }}>10</p>
                      <p style={{ fontSize: "13px", lineHeight: "1.45", color: "#4A5654", margin: "8px 0 0" }}>day median onboarding, from 6 weeks</p>
                    </div>
                    <div style={{ background: "#F6F4EF", padding: "20px 18px" }}>
                      <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "34px", lineHeight: "1", margin: "0", color: "#00706E" }}>3</p>
                      <p style={{ fontSize: "13px", lineHeight: "1.45", color: "#4A5654", margin: "8px 0 0" }}>weeks to a working MVP in production</p>
                    </div>
                    <div style={{ background: "#F6F4EF", padding: "20px 18px" }}>
                      <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "34px", lineHeight: "1", margin: "0", color: "#00706E" }}>1</p>
                      <p style={{ fontSize: "13px", lineHeight: "1.45", color: "#4A5654", margin: "8px 0 0" }}>lead across strategy, build and adoption</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="cs-operating" style={{ maxWidth: "1240px", margin: "0 auto", padding: "80px 32px", borderBottom: "1px solid #E2DED4", scrollMarginTop: "140px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "56px", alignItems: "start" }}>
              <div>
                <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#00706E", margin: "0 0 16px" }}>Payments &middot; operating model</p>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(28px,3.2vw,40px)", lineHeight: "1.1", margin: "0" }}>Four departments, one operating process</h2>
                <div style={{ aspectRatio: "16/10", marginTop: "32px", background: "repeating-linear-gradient(135deg,#E8E4DA 0 10px,#F1EEE6 10px 20px)", display: "flex", alignItems: "flex-end", padding: "18px" }}>
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#59645F" }}>case imagery &mdash; 16:10</span>
                </div>
              </div>
              <div style={{ display: "grid", gap: "28px" }}>
                <div>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#59645F", margin: "0 0 10px" }}>Context</p>
                  <p style={{ fontSize: "16px", lineHeight: "1.68", margin: "0" }}>A payments operations group had grown into four departments running near-identical exception handling in four different ways, with reconciliation performed twice and no shared view of throughput.</p>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#59645F", margin: "0 0 10px" }}>Approach</p>
                  <p style={{ fontSize: "16px", lineHeight: "1.68", margin: "0" }}>Process mining across the four variants produced a single target flow, consolidated in weekly increments with the operations leads in the room. A data-engineering partner instrumented the new workflow so adoption and cycle time were visible from day one; enablement ran in parallel with the build.</p>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#59645F", margin: "0 0 14px" }}>Outcome</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))", gap: "1px", background: "#E2DED4" }}>
                    <div style={{ background: "#F6F4EF", padding: "20px 18px" }}>
                      <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "34px", lineHeight: "1", margin: "0", color: "#00706E" }}>40<span style={{ fontSize: "20px" }}>%</span></p>
                      <p style={{ fontSize: "13px", lineHeight: "1.45", color: "#4A5654", margin: "8px 0 0" }}>fewer manual steps in the consolidated flow</p>
                    </div>
                    <div style={{ background: "#F6F4EF", padding: "20px 18px" }}>
                      <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "34px", lineHeight: "1", margin: "0", color: "#00706E" }}>4&rarr;1</p>
                      <p style={{ fontSize: "13px", lineHeight: "1.45", color: "#4A5654", margin: "8px 0 0" }}>departmental processes unified</p>
                    </div>
                    <div style={{ background: "#F6F4EF", padding: "20px 18px" }}>
                      <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "34px", lineHeight: "1", margin: "0", color: "#00706E" }}>60</p>
                      <p style={{ fontSize: "13px", lineHeight: "1.45", color: "#4A5654", margin: "8px 0 0" }}>days of tracked post-launch adoption</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="cs-snapshots" style={{ background: "#FFFFFF", borderBottom: "1px solid #E2DED4", scrollMarginTop: "140px" }}>
            <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "80px 32px" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(26px,3vw,36px)", lineHeight: "1.1", margin: "0 0 44px" }}>Shorter engagements</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "40px" }}>
                <div>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#00706E", margin: "0 0 12px" }}>2-week diagnostic</p>
                  <p style={{ fontSize: "18px", fontWeight: "600", margin: "0" }}>Core platform replacement, re-scoped</p>
                  <p style={{ fontSize: "15px", lineHeight: "1.62", color: "#4A5654", margin: "10px 0 0" }}>A planned full replacement was reduced to two integration slices after the diagnostic showed 70% of the pain sat in handoffs, not the platform.</p>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#00706E", margin: "0 0 12px" }}>6-week MVP</p>
                  <p style={{ fontSize: "18px", fontWeight: "600", margin: "0" }}>Broker portal for a specialty lender</p>
                  <p style={{ fontSize: "15px", lineHeight: "1.62", color: "#4A5654", margin: "10px 0 0" }}>Submission and status tracking for 40 broker partners, live in six weeks with weekly demos to the broker advisory group.</p>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#00706E", margin: "0 0 12px" }}>4-month fractional lead</p>
                  <p style={{ fontSize: "18px", fontWeight: "600", margin: "0" }}>Transformation portfolio triage</p>
                  <p style={{ fontSize: "15px", lineHeight: "1.62", color: "#4A5654", margin: "10px 0 0" }}>Eleven in-flight initiatives reduced to five funded workstreams with named owners and measurable milestones.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
  

        {/* ============ INSIGHTS ============ */}
      <ClosingCTA />
    </>
  );
}
