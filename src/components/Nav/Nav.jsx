import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import "./Nav.css";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#story", label: "Story" },
  { href: "#expertise", label: "Expertise" },
  { href: "#results", label: "Results" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const { dark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <a href="#about" className="nav-logo">
        Akshita<span>.</span>
      </a>

      <ul className={`nav-links${mobileOpen ? " mobile-open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setMobileOpen(false)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <button
          className={`theme-btn${dark ? " dark-on" : ""}`}
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={dark ? "Switch to light" : "Switch to dark"}
        />
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Menu"
        >
          <span
            style={
              mobileOpen ? { transform: "translateY(7px) rotate(45deg)" } : {}
            }
          />
          <span style={mobileOpen ? { opacity: 0 } : {}} />
          <span
            style={
              mobileOpen ? { transform: "translateY(-7px) rotate(-45deg)" } : {}
            }
          />
        </button>
      </div>
    </nav>
  );
}
