import { useEffect, useRef } from "react";
import "./ReviewsSection.css";

const row1 = [
  { name: "William", stars: 5, text: "Delicious! It was delicious. Pure flavours, in traditional tapas. I liked that there was not a very big menu, but what was on was delicious. Everything. We were with my children, who also liked everything." },
  { name: "Megan", stars: 3, text: "Super spontaneous reception by the staff, it really gave a warm and welcome feeling. Good service and delicious dishes, we could hardly choose. In short, we will definitely come back here more often!" },
  { name: "John", stars: 5, text: "Super spontaneous reception by the staff. Amazing experience!" },
];

const row2 = [
  { name: "Emma", stars: 5, text: "Really FANTASTIC!!! If I could give 10 stars, I would. Nice, cozy place. Very friendly staff. The food was phenomenal, especially the chicken with honey." },
  { name: "John", stars: 5, text: "Super spontaneous reception by the staff, it really gave a warm and welcome feeling. Good service and delicious dishes, we could hardly choose. In short, we will definitely come back here more often!" },
  { name: "Bob", stars: 5, text: "With 6 persons Saturday evening we had a delicious dinner! Everything freshly prepared, delicious, very nice service and value for money, surprising dishes. We will definitely be back!" },
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

      {/* ===== MOVING TITLE ===== */}
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
