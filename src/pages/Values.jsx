// src/pages/Values.jsx
import "../styles/Values.css";
import { values } from "../data/values";
import { useScrollReveal } from "../hooks/useScrollReveal";

function ValueCard({ item, delay }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className="v-card reveal"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="v-line" />
      <span className="v-icon">{item.icon}</span>
      <div className="v-title">{item.title}</div>
      <div className="v-desc">{item.desc}</div>
    </div>
  );
}

export default function Values() {
  return (
    <section className="values-section" id="values">
      <div className="section-tag">Why we're different</div>
      <h2 className="section-h2">
        Our promise to<br />every customer
      </h2>
      <p className="section-sub">
        We started Soulful Bites because we were tired of food that looked good
        but tasted like nothing. So we made rules we'll never break.
      </p>

      <div className="val-grid">
        {values.map((v, i) => (
          <ValueCard key={v.id} item={v} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
