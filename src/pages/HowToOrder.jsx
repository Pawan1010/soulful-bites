// src/pages/HowToOrder.jsx
import "../styles/HowToOrder.css";
import { buildWhatsAppURL, buildCallURL, PHONE_DISPLAY } from "../utils/helpers";
import { useScrollReveal } from "../hooks/useScrollReveal";

const STEPS = [
  { num: 1, title: "Browse our menu", desc: "Check daily specials on WhatsApp or Instagram stories" },
  { num: 2, title: "WhatsApp or call us", desc: "Drop us a message or call — we respond within minutes" },
  { num: 3, title: "Confirm your order", desc: "Tell us your address, we'll give you delivery time and price" },
  { num: 4, title: "Eat & enjoy 🎉", desc: "Hot, fresh food delivered straight to your door" },
];

function Step({ step, delay }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="o-step reveal" style={{ transitionDelay: `${delay}s` }}>
      <div className="o-num">{step.num}</div>
      <div className="o-title">{step.title}</div>
      <div className="o-desc">{step.desc}</div>
    </div>
  );
}

export default function HowToOrder() {
  return (
    <section className="order-section" id="order">
      <div className="section-tag">Super simple</div>
      <h2 className="section-h2">How to order</h2>
      <p className="section-sub">
        No app, no long waits. Just two taps and hot food on its way.
      </p>

      <div className="ord-steps">
        {STEPS.map((step, i) => (
          <Step key={step.num} step={step} delay={i * 0.1} />
        ))}
      </div>

      <div className="ord-ctas">
        <a
          href={buildWhatsAppURL("Hi! I'd like to place an order from Soulful Bites 🍛")}
          className="btn-whatsapp"
          target="_blank"
          rel="noreferrer"
        >
          <WaIcon /> WhatsApp: 93261 76751
        </a>
        <a href={buildCallURL()} className="btn-call">
          <PhoneIcon /> Call: {PHONE_DISPLAY}
        </a>
      </div>
    </section>
  );
}

function WaIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.558 4.136 1.535 5.874L.057 23.985l6.266-1.644A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.878 9.878 0 01-5.036-1.376l-.361-.214-3.741.981.998-3.648-.235-.374A9.856 9.856 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106S21.894 6.58 21.894 12 17.42 21.894 12 21.894z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.02 2.22 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
    </svg>
  );
}
