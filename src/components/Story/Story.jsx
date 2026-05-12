import { experiences } from '../../data/experiences';
import './Story.css';

export default function Story() {
  return (
    <section className="section" id="story">
      <div className="section-inner">
        <div className="reveal">
          <span className="section-label">Career Journey</span>
        </div>
        <h2 className="section-title reveal reveal-delay-1">
          The <em>story</em> behind<br />the numbers
        </h2>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div
              className={`timeline-item reveal reveal-delay-${Math.min(i + 1, 4)}`}
              key={exp.company}
            >
              <div className={`timeline-dot${exp.active ? ' active' : ''}`} />
              <div className="timeline-date">{exp.date}</div>
              <div className="timeline-company">{exp.company}</div>
              <div className="timeline-role">{exp.role}</div>
              <div className="timeline-body">
                <ul className="timeline-highlights">
                  {exp.highlights.map((h, j) => <li key={j}>{h}</li>)}
                </ul>
                {exp.clients.length > 0 && (
                  <div className="timeline-clients">
                    {exp.clients.map(c => <span className="tag" key={c}>{c}</span>)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
