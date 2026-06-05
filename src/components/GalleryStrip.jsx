// src/components/GalleryStrip.jsx
import "../styles/GalleryStrip.css";
import { galleryImages } from "../data/instagramPosts";

export default function GalleryStrip() {
  return (
    <div className="gallery-strip">
      {galleryImages.map((img) => (
        <div className="g-item" key={img.id}>
          <img src={img.img} alt={img.alt} loading="lazy" />
        </div>
      ))}
    </div>
  );
}
