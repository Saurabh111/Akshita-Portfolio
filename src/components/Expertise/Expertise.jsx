import './Expertise.css';

const SERVICES = [
  {
    icon: '🎯',
    title: 'ICP-Driven Prospecting',
    desc: "I don't spray and pray. I identify the exact decision-maker profile — Sr. Marketing Managers, Partnership leads — and build a targeted pipeline using ZoomInfo and Sales Navigator before a single outreach goes out.",
  },
  {
    icon: '📞',
    title: 'Outbound Sales Execution',
    desc: "High-volume outbound across calls, InMails, and email via Salesloft. Personalised at scale — each message crafted to the prospect's role, company, and likely pain points.",
  },
  {
    icon: '🤝',
    title: 'Negotiation & Deal Closure',
    desc: 'Led end-to-end negotiations from first pitch to signed contract. Adopted pilot-first strategies to reduce buyer friction and build trust before upselling into higher-tier plans.',
  },
  {
    icon: '🌏',
    title: 'APAC & EMEA Market Navigation',
    desc: 'Worked across Singapore, ASEAN, and EMEA — understanding the cultural and commercial nuances that determine how enterprise deals get done in each region.',
  },
  {
    icon: '📊',
    title: 'Pipeline & Account Management',
    desc: 'Post-close account ownership: briefing delivery teams, running monthly review calls, tracking campaign KPIs, and identifying upsell opportunities to drive recurring revenue.',
  },
  {
    icon: '📋',
    title: 'Full-Funnel Campaign Selling',
    desc: 'Sold complex B2B marketing portfolios: BANT-qualified lead gen, intent targeting, AI-verified leads, sponsored editorial, newsletter placements, whitepapers, and theme sponsorships.',
  },
];

export default function Expertise() {
  return (
    <section className="section" id="expertise">
      <div className="section-inner">
        <div className="reveal">
          <span className="section-label">What I Bring</span>
        </div>
        <h2 className="section-title reveal reveal-delay-1">
          A <em>complete</em> sales toolkit —<br />not just one piece of it
        </h2>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div
              className={`service-card reveal reveal-delay-${Math.min((i % 3) + 1, 4)}`}
              key={s.title}
            >
              <div className="service-icon">{s.icon}</div>
              <div className="service-title">{s.title}</div>
              <div className="service-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
