// src/pages/Reviews.jsx
import { useState } from "react";
import "../styles/Reviews.css";
import { reviews } from "../data/reviews";
import { buildWhatsAppURL, renderStars } from "../utils/helpers";
import { useScrollReveal } from "../hooks/useScrollReveal";

function ReviewCard({ review, delay }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`r-card reveal${review.featured ? " big" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="r-stars">{renderStars(review.stars)}</div>
      <p className="r-quote">"{review.quote}"</p>
      <div className="reviewer">
        <div className="r-av" style={{ background: review.color }}>
          {review.initials}
        </div>
        <div>
          <div className="r-name">{review.name}</div>
          <div className="r-info">{review.location}</div>
        </div>
      </div>
    </div>
  );
}

function ReviewForm({ onSubmit }) {
  const ref = useScrollReveal();
  const [stars, setStars] = useState(0);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!name || !text || !stars) {
      alert("Please add your name, stars, and review!");
      return;
    }
    const msg = `⭐ NEW REVIEW from ${name}:\n${"★".repeat(stars)}\n"${text}"`;
    window.open(buildWhatsAppURL(msg), "_blank");
    setName("");
    setText("");
    setStars(0);
    onSubmit();
  };

  return (
    <div ref={ref} className="r-form-card reveal" style={{ transitionDelay: "0.3s" }}>
      <div className="r-form-title">Loved your meal? ❤️</div>
      <div className="r-form-sub">Leave a review and help others find us</div>

      <div className="star-row">
        {[1, 2, 3, 4, 5].map((n) => (
          <button key={n} className={`sb${stars >= n ? " on" : ""}`} onClick={() => setStars(n)}>
            ★
          </button>
        ))}
      </div>

      <input
        className="r-input"
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        className="r-input r-ta"
        placeholder="Tell us about your experience..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="r-submit" onClick={handleSubmit}>
        Share your review →
      </button>
    </div>
  );
}

export default function Reviews({ onReviewSubmit }) {
  return (
    <section className="reviews-section" id="reviews">
      <div className="section-tag">Real love from real people</div>
      <h2 className="section-h2">What our customers say</h2>
      <p className="section-sub">
        No fake reviews. Just honest words from people who've eaten with us.
      </p>

      <div className="rev-grid">
        {reviews.map((r, i) => (
          <ReviewCard key={r.id} review={r} delay={i * 0.1} />
        ))}
        <ReviewForm onSubmit={onReviewSubmit} />
      </div>
    </section>
  );
}
