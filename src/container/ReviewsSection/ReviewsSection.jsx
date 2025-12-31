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
      if (row1Ref.current && row2Ref.current) {
        row1Ref.current.scrollLeft += delta * 0.7;
        row2Ref.current.scrollLeft -= delta * 0.7;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section className="bg-black text-white py-24 sm:py-28 overflow-hidden">

      {/* ===== MOVING TITLE ===== */}
      <div className="overflow-hidden whitespace-nowrap mb-20 sm:mb-28">
        <div className="flex w-max animate-[marquee_18s_linear_infinite] text-[42px] sm:text-[64px] font-bold">
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className={`mr-6 ${i % 2 === 0 ? "text-gray-500" : ""}`}
            >
              REVIEWS •
            </span>
          ))}
        </div>
      </div>

      {/* ===== ROW 1 ===== */}
      <div
        ref={row1Ref}
        className="
          flex items-center
          gap-10 sm:gap-14
          px-4 sm:px-6
          py-6
          overflow-x-hidden
          select-none
        "
      >
        {[...row1, ...row1].map((r, i) => (
          <ReviewPill key={`row1-${i}`} {...r} />
        ))}
      </div>

      {/* ===== ROW 2 ===== */}
      <div
        ref={row2Ref}
        className="
          flex items-center
          gap-10 sm:gap-14
          px-4 sm:px-6
          py-6
          mt-14 sm:mt-16
          overflow-x-hidden
          select-none
        "
      >
        {[...row2, ...row2].map((r, i) => (
          <ReviewPill key={`row2-${i}`} {...r} />
        ))}
      </div>

      {/* ===== KEYFRAMES ===== */}
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
    <div
      className="
        shrink-0

        w-[320px] sm:w-[480px] lg:w-[560px]
        min-h-[190px] sm:min-h-[210px]

        rounded-[32px] sm:rounded-[44px]
        bg-black

        px-6 sm:px-10
        py-8 sm:py-10

        border-2 border-white

        shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),_0_20px_60px_rgba(0,0,0,0.9)]

        flex flex-col justify-between

        transition-transform duration-300 ease-out
        hover:-translate-y-1
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <h4 className="text-lg sm:text-[26px] font-semibold text-white">
          {name}
        </h4>

        <div className="flex gap-1 text-lg sm:text-[22px] leading-none">
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
      <p className="text-gray-300 text-sm sm:text-[17px] leading-relaxed max-w-[480px]">
        {text}
      </p>
    </div>
  );
}
