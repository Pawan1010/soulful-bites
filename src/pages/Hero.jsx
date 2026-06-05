// src/pages/Hero.jsx
import "../styles/Hero.css";
import { buildWhatsAppURL, buildCallURL, PHONE_DISPLAY } from "../utils/helpers";

export default function Hero() {
  return (
    <section className="hero">
      {/* Left — text */}
      <div className="hero-left">
        <div className="hero-tag">Mumbai's favourite dark kitchen</div>

        <h1 className="hero-h1">
          Cooked with<br />
          <em>love,</em> delivered<br />
          to your door
        </h1>

        <p className="hero-sub">
          Real home food. No shortcuts. No compromise. Just the kind of meal
          your maa would make — every single day.
        </p>

        <div className="hero-actions">
          <a
            href={buildWhatsAppURL("Hi! I'd like to place an order 🍛")}
            className="btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            <WaIcon /> Order on WhatsApp
          </a>
          <a href={buildCallURL()} className="btn-secondary">
            <PhoneIcon /> {PHONE_DISPLAY}
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <div className="stat-num">500+</div>
            <div className="stat-label">Happy customers</div>
          </div>
          <div>
            <div className="stat-num">4.9★</div>
            <div className="stat-label">Average rating</div>
          </div>
          <div>
            <div className="stat-num">0</div>
            <div className="stat-label">Shortcuts taken</div>
          </div>
        </div>
      </div>

      {/* Right — HD image grid */}
      <div className="hero-right">
        <div className="hero-img-grid">
          <img
            className="h-img h-img-main"
            src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=90&fit=crop"
            alt="Dum Biryani"
            loading="eager"
          />
          <img
            className="h-img"
            src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=85&fit=crop"
            alt="Dal Makhani"
            loading="eager"
          />
          <img
            className="h-img"
            src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=85&fit=crop"
            alt="Paneer"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

function WaIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.558 4.136 1.535 5.874L.057 23.985l6.266-1.644A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.878 9.878 0 01-5.036-1.376l-.361-.214-3.741.981.998-3.648-.235-.374A9.856 9.856 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106S21.894 6.58 21.894 12 17.42 21.894 12 21.894z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.02 2.22 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
    </svg>
  );
}
