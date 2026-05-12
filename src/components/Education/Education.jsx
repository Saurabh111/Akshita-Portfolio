import "./Education.css";

const EDU = [
  {
    degree: "MBA — Business Analytics",
    school: "UPES, Dehradun",
    year: "Graduating May 2027",
    badge: null,
  },
  {
    degree: "BBA — Marketing & HR (Dual)",
    school: "Maharashtra Institute of Technology, Pune",
    year: "Graduated Jun 2021",
    badge: "CGPA 9.23",
  },
];

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="section-inner">
        <div className="reveal">
          <span className="section-label">Education</span>
        </div>
        <h2 className="section-title reveal reveal-delay-1">
          Academic <em>foundation</em>
        </h2>
        <div className="edu-grid">
          {EDU.map((e, i) => (
            <div
              className={`edu-card reveal reveal-delay-${i + 1}`}
              key={e.degree}
            >
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-year">{e.year}</div>
              {e.badge && <span className="edu-badge">{e.badge}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
