import { useEffect, useRef } from "react";

export default function AboutScrollSection() {
  const sectionRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // clamp progress between 0 → 1
      const progress = Math.min(Math.max((vh - rect.top) / vh, 0), 1);

      // IMAGE 1 → move right
      if (img1Ref.current) {
        img1Ref.current.style.transform = `translateX(${progress * 140}px)`;
      }

      // IMAGE 2 → move left
      if (img2Ref.current) {
        img2Ref.current.style.transform = `translateX(${-progress * 140}px)`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] bg-black text-white"
    >
      {/* ================= SECTION 1 ================= */}
      <div className="sticky top-0 h-screen flex items-center">
        <div className="w-full px-6 lg:px-16">
          <div className="relative flex flex-col lg:flex-row items-center gap-16">
            {/* IMAGE */}
            <div className="relative w-full lg:w-2/3 h-[70vh]">
              <div
                ref={img1Ref}
                className="absolute inset-0 rounded-[36px] border-2 border-white overflow-hidden will-change-transform"
              >
                <img
                  src="https://cdn.prod.website-files.com/6410dee2412dc599c7e61e0b/6423379bb18b6ca4aa4d4722_about1.jpg"
                  alt="Who we are"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="w-full lg:w-1/3 relative z-20">
              <h2 className="text-6xl lg:text-7xl font-bold mb-6 uppercase font-base incline-text">
                Who <br /> We Are
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed font-alt incline-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SECTION 2 ================= */}
      <div className="sticky top-0 h-screen flex items-center">
        <div className="w-full px-6 lg:px-16">
          <div className="relative flex flex-col lg:flex-row-reverse items-center gap-16">
            {/* IMAGE */}
            <div className="relative w-full lg:w-2/3 h-[70vh]">
              <div
                ref={img2Ref}
                className="absolute inset-0 rounded-[36px] border-2 border-white overflow-hidden will-change-transform"
              >
                <img
                  src="https://cdn.prod.website-files.com/6410dee2412dc599c7e61e0b/6423379ff8be2448d15a6448_about2.jpg"
                  alt="What we do"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="w-full lg:w-1/3 relative z-20">
              <h2 className="text-6xl lg:text-7xl font-bold mb-6 uppercase font-base incline-text">
                What <br /> We Do
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed font-alt incline-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== FONTS + INCLINE ===== */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Upright:wght@600;700&family=Open+Sans:wght@400;500&display=swap');

          :root {
            --font-base: 'Cormorant Upright', serif;
            --font-alt: 'Open Sans', sans-serif;
          }

          .font-base {
            font-family: var(--font-base);
          }

          .font-alt {
            font-family: var(--font-alt);
          }

          /* Incline effect */
          .incline-text {
            transform: skewX(-8deg);
            display: inline-block;
          }
        `}
      </style>
    </section>
  );
}
