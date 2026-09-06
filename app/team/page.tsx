import type { Metadata } from "next";
import Link from "next/link";
import ClosingCTA from "../components/ClosingCTA";

export const metadata: Metadata = {
  title: "Team",
  description: "One accountable lead, backed by a vetted network of cloud, data, product and change specialists.",
};

export default function TeamPage() {
  return (
    <>
      <main>
          <section style={{ maxWidth: "1240px", margin: "0 auto", padding: "88px 32px 56px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "56px", alignItems: "end" }}>
            <div>
              <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#00706E", margin: "0 0 24px" }}>Team</p>
              <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(36px,4.4vw,56px)", lineHeight: "1.06", letterSpacing: "-0.02em", margin: "0" }}>One lead you'll actually work with.</h1>
            </div>
            <p style={{ fontSize: "17px", lineHeight: "1.62", color: "#4A5654", margin: "0" }}>Every engagement is led by a single consultant, end to end. Behind that lead sits a vetted partner network with deep expertise in cloud, data, product and change &mdash; brought in for defined slices of work and priced transparently.</p>
          </section>

          <section style={{ maxWidth: "1240px", margin: "0 auto", padding: "56px 32px 88px", borderBottom: "1px solid #E2DED4", display: "grid", gridTemplateColumns: "minmax(0,0.62fr) minmax(0,1fr)", gap: "56px", alignItems: "start" }}>
            <div style={{ aspectRatio: "4/5", background: "repeating-linear-gradient(135deg,#E8E4DA 0 10px,#F1EEE6 10px 20px)", display: "flex", alignItems: "flex-end", padding: "20px" }}>
              <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#59645F" }}>portrait &mdash; Raghava Sagi, 4:5</span>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#00706E", margin: "0 0 14px" }}>Principal consultant</p>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(30px,3.4vw,42px)", lineHeight: "1.08", margin: "0" }}>Raghava Sagi</h2>
              <p style={{ fontSize: "17px", lineHeight: "1.68", color: "#4A5654", margin: "22px 0 0", maxWidth: "60ch" }}>Fintech and IT transformation leader specialising in lean, AI-enabled consulting models. Two decades across payments, onboarding and core platform modernisation &mdash; most of it spent inside regulated institutions where the constraint is rarely the technology.</p>
              <p style={{ fontSize: "16px", lineHeight: "1.68", color: "#4A5654", margin: "18px 0 0", maxWidth: "60ch" }}>SAGIR exists because the traditional pyramid stopped making sense: the analysis and documentation it staffed for is now largely AI-assisted, and what clients still need is one senior person who owns the outcome.</p>
              <div style={{ marginTop: "36px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "32px" }}>
                <div>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#59645F", margin: "0 0 12px" }}>Focus areas</p>
                  <ul style={{ margin: "0", paddingLeft: "18px", fontSize: "15px", lineHeight: "1.7" }}>
                    <li>Digital onboarding &amp; KYC journeys</li>
                    <li>Payments and core platform modernisation</li>
                    <li>Operating-model &amp; workflow consolidation</li>
                    <li>AI-assisted delivery practice</li>
                  </ul>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#59645F", margin: "0 0 12px" }}>How engagements run</p>
                  <p style={{ fontSize: "15px", lineHeight: "1.7", margin: "0" }}>Direct access, no account layer. One weekly demo, one decision log, one person answerable for the result &mdash; from the discovery call through to handover.</p>
                </div>
              </div>
            </div>
          </section>

          <section style={{ background: "#FFFFFF", borderBottom: "1px solid #E2DED4" }}>
            <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "88px 32px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "24px", flexWrap: "wrap" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: "400", fontSize: "clamp(28px,3.2vw,40px)", lineHeight: "1.1", margin: "0" }}>The partner network</h2>
                <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#59645F", margin: "0" }}>Engaged per slice &middot; priced transparently</p>
              </div>
              <div style={{ marginTop: "48px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1px", background: "#E2DED4" }}>
                <div style={{ background: "#FFFFFF", padding: "30px 26px" }}>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#00706E", margin: "0 0 16px" }}>N.01</p>
                  <p style={{ fontSize: "19px", fontWeight: "600", margin: "0" }}>Cloud architect</p>
                  <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#4A5654", margin: "10px 0 0" }}>Migration strategy, landing-zone design, cost and resilience review for regulated workloads.</p>
                </div>
                <div style={{ background: "#FFFFFF", padding: "30px 26px" }}>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#00706E", margin: "0 0 16px" }}>N.02</p>
                  <p style={{ fontSize: "19px", fontWeight: "600", margin: "0" }}>Data engineer</p>
                  <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#4A5654", margin: "10px 0 0" }}>Pipelines, data modelling and reporting layers that make the new process measurable.</p>
                </div>
                <div style={{ background: "#FFFFFF", padding: "30px 26px" }}>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#00706E", margin: "0 0 16px" }}>N.03</p>
                  <p style={{ fontSize: "19px", fontWeight: "600", margin: "0" }}>Product &amp; UX specialist</p>
                  <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#4A5654", margin: "10px 0 0" }}>Journey design, usability testing and interface work for customer-facing slices.</p>
                </div>
                <div style={{ background: "#FFFFFF", padding: "30px 26px" }}>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "#00706E", margin: "0 0 16px" }}>N.04</p>
                  <p style={{ fontSize: "19px", fontWeight: "600", margin: "0" }}>Change management lead</p>
                  <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#4A5654", margin: "10px 0 0" }}>Large-population enablement, communications and adoption tracking at scale.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
  

        {/* ============ CASE STUDIES ============ */}
      <ClosingCTA />
    </>
  );
}
