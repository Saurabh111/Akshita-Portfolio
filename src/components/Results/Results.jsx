import './Results.css';

const RESULTS = [
  {
    number: '$10,000',
    desc: (
      <>In pilot campaign deals closed across <strong>Seagate Technologies APAC</strong> and <strong>Pax8 EMEA</strong> — two USD $5,000 contracts negotiated and confirmed independently.</>
    ),
  },
  {
    number: '5',
    desc: (
      <>Enterprise clients converted including <strong>Snowflake Singapore, Sophos, Fortinet, Seagate</strong>, and <strong>Pax8</strong> — each through a structured, personalised sales process.</>
    ),
  },
  {
    number: '2',
    desc: (
      <>Global regions covered — <strong>APAC</strong> (Singapore, ASEAN markets) and <strong>EMEA</strong> — managing different stakeholder expectations and deal dynamics in each.</>
    ),
  },
  {
    number: 'TechExpo',
    desc: (
      <><strong>Singapore</strong> — attended in person, executed pre-event outreach, held executive-level meetings, and converted a client on-site within a 3-day conference window.</>
    ),
  },
  {
    number: '9.23',
    desc: (
      <>CGPA at Maharashtra Institute of Technology, BBA (Marketing & HR) — demonstrating academic rigour alongside real-world commercial results.</>
    ),
  },
  {
    number: '6 mo',
    desc: (
      <>All of the above accomplished within a <strong>single 6-month tenure</strong> at TechInformed — a complete sales cycle from first contact to ongoing account management.</>
    ),
  },
];

export default function Results() {
  return (
    <section className="section" id="results">
      <div className="section-inner">
        <div className="reveal">
          <span className="section-label">Proof of Work</span>
        </div>
        <h2 className="section-title reveal reveal-delay-1">
          Results that <em>speak</em><br />for themselves
        </h2>
        <div className="results-grid">
          {RESULTS.map((r, i) => (
            <div
              className={`result-card reveal reveal-delay-${Math.min((i % 3) + 1, 4)}`}
              key={r.number}
            >
              <div className="result-number">{r.number}</div>
              <div className="result-desc">{r.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
