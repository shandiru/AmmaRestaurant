import { useEffect, useRef } from "react";

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

  useEffect(() => {
    const onWheel = (e) => {
      const delta = e.deltaY;
      row1Ref.current.scrollLeft += delta * 0.7;
      row2Ref.current.scrollLeft -= delta * 0.7;
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section className="bg-black text-white py-24 overflow-hidden">

      {/* ===== AUTO MOVING TITLE ===== */}
      <div className="overflow-hidden whitespace-nowrap mb-24">
        <div className="flex w-max animate-[marquee_18s_linear_infinite] text-[64px] font-bold">
          <span className="mr-6 text-gray-500">REVIEWS •</span>
          <span className="mr-6">REVIEWS •</span>
          <span className="mr-6 text-gray-500">REVIEWS •</span>
          <span className="mr-6">REVIEWS •</span>
          <span className="mr-6 text-gray-500">REVIEWS •</span>
          <span className="mr-6">REVIEWS •</span>
          <span className="mr-6 text-gray-500">REVIEWS •</span>
          <span className="mr-6">REVIEWS •</span>
          <span className="mr-6 text-gray-500">REVIEWS •</span>
          <span className="mr-6">REVIEWS •</span>
        </div>
      </div>

      {/* ===== ROW 1 ===== */}
      <div
        ref={row1Ref}
        className="flex items-center gap-12 h-[140px] overflow-x-hidden select-none"
      >
        {[...row1, ...row1].map((r, i) => (
          <ReviewPill key={i} {...r} />
        ))}
      </div>

      {/* ===== ROW 2 ===== */}
      <div
        ref={row2Ref}
        className="flex items-center gap-12 h-[140px] mt-16 overflow-x-hidden select-none"
      >
        {[...row2, ...row2].map((r, i) => (
          <ReviewPill key={i} {...r} />
        ))}
      </div>

      {/* INLINE KEYFRAMES */}
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}
      </style>

    </section>
  );
}


function ReviewPill({ name, stars, text }) {
  return (
    <div className="
      shrink-0
      w-[520px]
      rounded-[36px]
      border-2 border-white
      p-8
      bg-black
      flex
      flex-col
      justify-between
    ">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-xl font-semibold">{name}</h4>
        <div className="text-xl">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={i < stars ? "text-yellow-400" : "text-gray-600"}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Text */}
      <p className="text-gray-300 text-base leading-relaxed">
        {text}
      </p>
    </div>
  );
}