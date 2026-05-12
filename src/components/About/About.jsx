import StatsSection from "../StatsSection/StatsSection";
import "./About.css";

const TAGS = [
  "Full-Cycle B2B Sales",
  "APAC Markets",
  "Client Acquisition",
  "Account Management",
  "Negotiation",
  "Campaign Strategy",
  "Data-Driven Outreach",
  "Stakeholder Management",
];

const SALES_STACK = [
  { tool: "LinkedIn Sales Navigator", desc: "ICP targeting & InMail" },
  { tool: "ZoomInfo", desc: "Contact & company intelligence" },
  { tool: "Salesloft", desc: "Outbound sequences & call tracking" },
  { tool: "Excel / Google Sheets", desc: "Pipeline & funnel reporting" },
  { tool: "Power BI", desc: "KPI dashboards & analytics" },
  { tool: "SQL", desc: "Data querying & analysis" },
];

const CURRENTLY = [
  "MBA – Business Analytics, UPES (2025-2027)",
  "Open to B2B Sales & Account Management roles",
  "Targeting APAC & EMEA markets",
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-inner">
        <div className="reveal">
          <span className="section-label">Who I Am</span>
        </div>
        <h2 className="section-title reveal reveal-delay-1">
          I turn <em>cold leads</em> into
          <br />
          long-term partners
        </h2>

        <div className="about-grid">
          <div className="about-text reveal reveal-delay-2">
            <p>
              I'm a <strong>B2B sales professional and MBA candidate</strong>{" "}
              with hands-on experience running the full sales cycle — from
              identifying the right decision-maker to closing the deal and
              managing the account long after.
            </p>
            <p>
              At TechInformed (iResearch Services), I wasn't handed leads. I
              built the pipeline from scratch — using{" "}
              <strong>LinkedIn Sales Navigator, ZoomInfo, and Salesloft</strong>{" "}
              to find Sr. Marketing Managers at enterprise tech companies, craft
              personalised outreach, and convert them into paying clients.
            </p>
            <p>
              I attended <strong>TechExpo Singapore</strong>, closed deals worth{" "}
              <strong>USD $10,000</strong>, and managed client relationships
              across APAC and EMEA — all within a 6-month tenure.
            </p>
            <div className="about-tags">
              {TAGS.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-3">
            <div className="about-card">
              <div className="about-card-title">Sales Stack</div>
              <ul className="tool-list">
                {SALES_STACK.map(({ tool, desc }) => (
                  <li key={tool}>
                    <strong>{tool}</strong> — {desc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="about-card">
              <div className="about-card-title">Currently</div>
              <ul className="tool-list">
                {CURRENTLY.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <StatsSection />
      </div>
    </section>
  );
}
