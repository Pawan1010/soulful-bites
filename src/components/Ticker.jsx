// src/components/Ticker.jsx
import "../styles/Ticker.css";

const ITEMS = [
  "Home cooked with real ghee",
  "No preservatives, ever",
  "Order via WhatsApp",
  "Mumbai's soulful dark kitchen",
  "Freshly made every single day",
  "Ghar jaisa khana",
  "Quality never compromised",
  "Pocket friendly, heart full",
  "Call us: 93261 76751",
];

export default function Ticker() {
  // Duplicate for seamless loop
  const repeated = [...ITEMS, ...ITEMS];

  return (
    <div className="ticker">
      <div className="ticker-inner">
        {repeated.map((item, i) => (
          <span key={i}>✦ {item} &nbsp;</span>
        ))}
      </div>
    </div>
  );
}
