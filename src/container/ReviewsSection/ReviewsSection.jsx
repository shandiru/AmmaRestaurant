import { useEffect, useRef } from "react";
import "./ReviewsSection.css";

const row1 = [
  { name: "Megan", stars: 3, text: "Warm welcome, good service and delicious dishes. Will come again!" },
  { name: "John", stars: 5, text: "Super spontaneous reception by the staff. Amazing experience!" },
  { name: "Emma", stars: 5, text: "If I could give 10 stars I would. Phenomenal food!" },
  { name: "William", stars: 5, text: "Pure flavours, cozy place, very friendly staff." },
];

const row2 = [
  { name: "Megan", stars: 3, text: "Nice place, warm welcome and tasty food." },
  { name: "John", stars: 5, text: "Good service and delicious dishes. Highly recommended!" },
  { name: "Bob", stars: 5, text: "Everything freshly prepared, great value for money!" },
  { name: "William", stars: 5, text: "Pure flavours, cozy place, very friendly staff." },
];

export default function ReviewsSection() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  // Scroll → horizontal movement
  useEffect(() => {
    const onWheel = (e) => {
      const delta = e.deltaY;
      if (row1Ref.current) row1Ref.current.scrollLeft += delta * 0.7;
      if (row2Ref.current) row2Ref.current.scrollLeft -= delta * 0.7;
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section className="reviews-section">

      {/* ===== AUTO MOVING REVIEWS TITLE ===== */}
      <div className="reviews-title-wrapper">
        <div className="reviews-title-track">
          <span className="muted">REVIEWS •</span>
          <span>REVIEWS •</span>
          <span className="muted">REVIEWS •</span>
          <span>REVIEWS •</span>
          <span className="muted">REVIEWS •</span>
          <span>REVIEWS •</span>
        </div>
      </div>

      {/* ===== ROW 1 ===== */}
      <div ref={row1Ref} className="reviews-row">
        {[...row1, ...row1].map((r, i) => (
          <ReviewCard key={i} {...r} />
        ))}
      </div>

      {/* ===== ROW 2 ===== */}
      <div ref={row2Ref} className="reviews-row second">
        {[...row2, ...row2].map((r, i) => (
          <ReviewCard key={i} {...r} />
        ))}
      </div>

    </section>
  );
}

function ReviewCard({ name, stars, text }) {
  return (
    <div className="review-card">
      <div className="review-header">
        <h4>{name}</h4>
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < stars ? "on" : "off"}>★</span>
          ))}
        </div>
      </div>
      <p>{text}</p>
    </div>
  );
}
