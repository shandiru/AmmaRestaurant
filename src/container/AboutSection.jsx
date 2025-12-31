import { useEffect, useRef } from "react";

export default function AboutScrollSection() {
  const sectionRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // progress: 0 → 2
      const progress = (vh - rect.top) / vh;

      /* ========= IMAGE 1 ========= */
      if (img1Ref.current) {
        const move = Math.min(Math.max(progress * 40, 0), 40);
        img1Ref.current.style.transform = `translateX(${move}%)`;
      }

      /* ========= TEXT 1 ========= */
      if (text1Ref.current) {
        const opacity = Math.min(Math.max(progress * 1.2, 0), 1);
        const translate = Math.max(30 - progress * 30, 0);
        text1Ref.current.style.opacity = opacity;
        text1Ref.current.style.transform = `translateY(${translate}px)`;
      }

      /* ========= IMAGE 2 ========= */
      if (img2Ref.current) {
        const move = Math.min(Math.max((progress - 1) * 40, 0), 40);
        img2Ref.current.style.transform = `translateX(${-move}%)`;
      }

      /* ========= TEXT 2 ========= */
      if (text2Ref.current) {
        const p = progress - 1;
        const opacity = Math.min(Math.max(p * 1.2, 0), 1);
        const translate = Math.max(30 - p * 30, 0);
        text2Ref.current.style.opacity = opacity;
        text2Ref.current.style.transform = `translateY(${translate}px)`;
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
      {/* ===== SECTION 1 ===== */}
      <div className="sticky top-0 h-screen flex items-center">
        <div className="w-full px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* IMAGE */}
            <div className="w-full lg:w-2/3">
              <div
                ref={img1Ref}
                className="rounded-[36px] border-2 border-white overflow-hidden will-change-transform"
              >
                <img
                  src="https://cdn.prod.website-files.com/6410dee2412dc599c7e61e0b/6423379bb18b6ca4aa4d4722_about1.jpg"
                  alt="Who we are"
                  className="w-full h-[70vh] object-cover"
                />
              </div>
            </div>

            {/* TEXT */}
            <div
              ref={text1Ref}
              className="w-full lg:w-1/3 transition-all duration-300"
              style={{ opacity: 1 }}
            >
              <h2 className="text-6xl lg:text-7xl font-bold mb-6 uppercase">
                Who <br /> We Are
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SECTION 2 ===== */}
      <div className="sticky top-0 h-screen flex items-center">
        <div className="w-full px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            {/* IMAGE */}
            <div className="w-full lg:w-2/3">
              <div
                ref={img2Ref}
                className="rounded-[36px] border-2 border-white overflow-hidden will-change-transform"
              >
                <img
                  src="https://cdn.prod.website-files.com/6410dee2412dc599c7e61e0b/6423379ff8be2448d15a6448_about2.jpg"
                  alt="What we do"
                  className="w-full h-[70vh] object-cover"
                />
              </div>
            </div>

            {/* TEXT */}
            <div
              ref={text2Ref}
              className="w-full lg:w-1/3 transition-all duration-300 opacity-0"
            >
              <h2 className="text-6xl lg:text-7xl font-bold mb-6 uppercase">
                What <br /> We Do
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
