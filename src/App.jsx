// src/App.jsx
import "./styles/globals.css";

import Navbar from "./components/Navbar";
import Ticker from "./components/Ticker";
import GalleryStrip from "./components/GalleryStrip";
import FloatingCTA from "./components/FloatingCTA";
import Toast from "./components/Toast";

import Hero from "./pages/Hero";
import Menu from "./pages/Menu";
import Values from "./pages/Values";
import HowToOrder from "./pages/HowToOrder";
import Reviews from "./pages/Reviews";
import Instagram from "./pages/Instagram";

import { useToast } from "./hooks/useToast";
import { buildWhatsAppURL, buildCallURL, PHONE_DISPLAY, INSTAGRAM, INSTAGRAM_URL } from "./utils/helpers";

function Footer() {
  return (
    <>
      <footer style={{
        background: "var(--brown)",
        color: "rgba(250,246,239,0.45)",
        padding: "3rem 5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1.5rem",
      }}>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 700, color: "#fff" }}>
            Soulful <span style={{ color: "var(--gold)" }}>Bites</span>
          </div>
          <div style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", fontSize: "0.9rem", color: "rgba(250,246,239,0.4)", marginTop: "0.15rem" }}>
            Cooked with love. Delivered with care.
          </div>
        </div>

        <div style={{ textAlign: "center", fontSize: "0.82rem", color: "rgba(250,246,239,0.3)", lineHeight: 1.8 }}>
          Mumbai's home-style dark kitchen<br />
          <span style={{ fontSize: "0.75rem", opacity: 0.6 }}>Mon–Sat · 11am – 10pm</span>
        </div>

        <div style={{ textAlign: "right" }}>
          {[
            { href: buildWhatsAppURL(), label: `💬 WhatsApp: ${PHONE_DISPLAY}` },
            { href: buildCallURL(), label: `📞 Call: ${PHONE_DISPLAY}` },
            { href: INSTAGRAM_URL, label: `📸 ${INSTAGRAM}` },
          ].map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer" style={{
              display: "block",
              color: "rgba(250,246,239,0.65)",
              textDecoration: "none",
              fontSize: "0.88rem",
              marginBottom: "0.3rem",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => e.target.style.color = "var(--gold)"}
              onMouseLeave={e => e.target.style.color = "rgba(250,246,239,0.65)"}
            >
              {link.label}
            </a>
          ))}
        </div>
      </footer>

      <div style={{
        background: "var(--brown)",
        borderTop: "0.5px solid rgba(250,246,239,0.07)",
        textAlign: "center",
        padding: "0.9rem 5rem",
        fontSize: "0.74rem",
        color: "rgba(250,246,239,0.2)",
      }}>
        © 2025 Soulful Bites · Mumbai · All rights reserved
      </div>
    </>
  );
}

export default function App() {
  const { visible, message, showToast } = useToast(3200);

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Ticker />
        <GalleryStrip />
        <Menu />
        <Values />
        <HowToOrder />
        <Reviews onReviewSubmit={() => showToast("🎉 Review received — thank you!")} />
        <Instagram />
      </main>

      <Footer />
      <FloatingCTA />
      <Toast visible={visible} message={message} />
    </>
  );
}
