// src/components/Navbar.jsx
import { useState } from "react";
import "../styles/Navbar.css";
import { buildWhatsAppURL, buildCallURL, PHONE_DISPLAY } from "../utils/helpers";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <nav className="navbar">
        <a href="#" className="nav-logo">
          Soulful <span>Bites</span>
        </a>

        <ul className="nav-links">
          <li><a href="#menu">Menu</a></li>
          <li><a href="#values">Values</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#instagram">Instagram</a></li>
          <li>
            <a
              href={buildWhatsAppURL("Hi! I'd like to place an order 🍛")}
              className="nav-cta"
              target="_blank"
              rel="noreferrer"
            >
              Order Now
            </a>
          </li>
        </ul>

        <button
          className="hamburger"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        <a href="#menu" onClick={close}>Menu</a>
        <a href="#values" onClick={close}>Our Values</a>
        <a href="#reviews" onClick={close}>Reviews</a>
        <a href="#instagram" onClick={close}>Instagram</a>
        <a
          href={buildWhatsAppURL("Hi! I'd like to place an order 🍛")}
          className="mobile-menu-wa"
          target="_blank"
          rel="noreferrer"
          onClick={close}
        >
          Order on WhatsApp 🍛
        </a>
        <a
          href={buildCallURL()}
          className="mobile-menu-call"
          onClick={close}
        >
          📞 {PHONE_DISPLAY}
        </a>
      </div>
    </>
  );
}
