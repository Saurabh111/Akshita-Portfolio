import { useState, useEffect, useRef } from 'react';
import { useCounter } from '../../hooks/useCounter';
import './StatsSection.css';

export default function StatsSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const deals     = useCounter(10000, 2000, visible);
  const clients   = useCounter(5,     1200, visible);
  const markets   = useCounter(2,      800, visible);
  const campaigns = useCounter(8,     1500, visible);

  const stats = [
    { value: `$${deals.toLocaleString()}`, suffix: '',  label: 'Revenue Closed (USD)' },
    { value: clients,                       suffix: '+', label: 'Enterprise Clients Won' },
    { value: markets,                       suffix: '',  label: 'Regions (APAC & EMEA)' },
    { value: campaigns,                     suffix: '+', label: 'Campaign Types Sold' },
  ];

  return (
    <div ref={ref} className="stats-bar reveal">
      {stats.map((s, i) => (
        <div className="stat-item" key={i}>
          <span className="stat-number">{s.value}{s.suffix}</span>
          <span className="stat-label">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
