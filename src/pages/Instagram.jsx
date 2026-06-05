// src/pages/Instagram.jsx
import "../styles/Instagram.css";
import { instagramPosts } from "../data/instagramPosts";
import { INSTAGRAM, INSTAGRAM_URL } from "../utils/helpers";

export default function Instagram() {
  return (
    <section className="instagram-section" id="instagram">
      <div className="insta-top">
        <div className="section-tag" style={{ justifyContent: "center" }}>
          Follow our journey
        </div>
        <h2 className="section-h2" style={{ textAlign: "center" }}>
          We plate for Instagram,<br />cook for your soul
        </h2>
        <a href={INSTAGRAM_URL} className="insta-handle" target="_blank" rel="noreferrer">
          <InstaIcon /> {INSTAGRAM}
        </a>
      </div>

      <div className="insta-grid">
        {instagramPosts.map((post) => (
          <a
            key={post.id}
            className="i-item"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
          >
            <img src={post.img} alt={post.alt} loading="lazy" />
            <div className="i-over">
              <div className="i-likes">❤️ {post.likes}</div>
              <div>{post.caption}</div>
            </div>
          </a>
        ))}
      </div>

      <a href={INSTAGRAM_URL} className="insta-follow-btn" target="_blank" rel="noreferrer">
        Follow us →
      </a>
    </section>
  );
}

function InstaIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
