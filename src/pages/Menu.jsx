// src/pages/Menu.jsx
import "../styles/Menu.css";
import { menuItems } from "../data/menuItems";
import { buildWhatsAppURL } from "../utils/helpers";
import { useScrollReveal } from "../hooks/useScrollReveal";

function MenuCard({ item }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`m-card reveal${item.featured ? " featured" : ""}`}
    >
      <div className="m-img">
        <img src={item.img} alt={item.name} loading="lazy" />
        {item.badge && <span className="m-badge">{item.badge}</span>}
      </div>
      <div className="m-info">
        <div className="m-name">{item.name}</div>
        <div className="m-desc">{item.desc}</div>
        <div className="m-foot">
          <span className="m-price">{item.price}</span>
          <a
            href={buildWhatsAppURL(item.waText)}
            className="m-order"
            target="_blank"
            rel="noreferrer"
          >
            Order this →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <section className="menu-section" id="menu">
      <div className="menu-head">
        <div>
          <div className="section-tag">What we serve</div>
          <h2 className="section-h2">
            Food that hits<br />different every time
          </h2>
        </div>
        <a
          href={buildWhatsAppURL("Hi! Can I see today's menu?")}
          className="btn-secondary"
          target="_blank"
          rel="noreferrer"
        >
          See full menu →
        </a>
      </div>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
