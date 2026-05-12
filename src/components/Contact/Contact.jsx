import { useTheme } from "../../context/ThemeContext";
import "./Contact.css";

const CONTACT_LINKS = [
  {
    icon: "✉",
    href: "mailto:akshitaahlawat0804@gmail.com",
    label: "Email",
  },
  {
    icon: "☎",
    href: "tel:+919888484660",
    label: "Phone",
  },
  {
    icon: "in",
    href: "https://www.linkedin.com/in/akshita-ahlawat-b4aa6316a",
    label: "LinkedIn",
    external: true,
  },
];

export default function Contact() {
  const { dark } = useTheme();

  return (
    <section className="section" id="contact">
      <div className="section-inner">
        <div className="reveal">
          <span className="section-label">Let's Talk</span>
        </div>
        <h2 className="section-title reveal reveal-delay-1">
          Open to <em>opportunities</em>
          <br />
          in B2B Sales & Account Management
        </h2>

        <div className="contact-inner">
          <div className="contact-text reveal reveal-delay-2">
            <p>
              I'm actively looking for internship and entry-level roles in B2B
              sales, account management, and partner success — particularly in
              APAC markets.
            </p>
            <p>
              If you're building a team that needs someone who can prospect,
              pitch, close, and manage clients end-to-end, I'd love to connect.
            </p>
            <div className="contact-links">
              {CONTACT_LINKS.map(({ icon, href, label, external }) => (
                <a
                  key={href}
                  href={href}
                  className="contact-link"
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  <div className="contact-link-icon">{icon}</div>
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className={`reveal reveal-delay-3${dark ? " dark" : ""}`}>
            <div className="contact-card">
              <div className="contact-card-title">
                Available for Internships & Full-Time
              </div>
              <p>
                Based in India. Open to hybrid, remote and on-site roles across
                APAC and EMEA markets. Graduating May 2027 — available
                immediately for internship programmes.
              </p>
              <a
                href="mailto:akshitaahlawat0804@gmail.com"
                className="btn-primary"
              >
                Send a Message →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
