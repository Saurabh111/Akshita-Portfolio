import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-text">SALES</div>
      <div className="hero-eyebrow">B2B Sales Professional</div>
      <h1 className="hero-name">
        Akshita<br /><em>Ahlawat</em>
      </h1>
      <p className="hero-sub">
        MBA candidate with a proven record of converting enterprise clients across APAC and EMEA —
        from cold outreach to signed deals, and from pilot campaigns to lasting partnerships.
      </p>
      <div className="hero-cta">
        <a href="#story" className="btn-primary">View My Story ↓</a>
        <a href="#contact" className="btn-outline">Get in Touch</a>
      </div>
      <div className="hero-scroll">
        <div className="scroll-line" />
        Scroll to explore
      </div>
    </section>
  );
}
