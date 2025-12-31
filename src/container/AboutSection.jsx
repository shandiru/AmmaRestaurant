import { useEffect, useRef } from "react";

const sections = [
  {
    title: "Who We Are",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    image:
      "https://cdn.prod.website-files.com/6410dee2412dc599c7e61e0b/6423379bb18b6ca4aa4d4722_about1.jpg",
    imageSide: "left",
  },
  {
    title: "What We Do",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    image:
      "https://cdn.prod.website-files.com/6410dee2412dc599c7e61e0b/6423379ff8be2448d15a6448_about2.jpg",
    imageSide: "right",
  },
];

export default function AboutScrollSection() {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = (vh - rect.top) / vh;

      itemRefs.current.forEach((el, index) => {
        if (!el) return;

        const p = Math.min(Math.max(progress - index, 0), 1);

        const img = el.querySelector("img");
        const text = el.querySelector(".text");

        const isImageLeft = sections[index].imageSide === "left";

        /* ========= IMAGE (INNER PARALLAX – NO CUT) ========= */
        if (img) {
          const move = isImageLeft ? -p * 10 : p * 10; // very subtle
          img.style.transform = `translateX(${move}%) scale(1.05)`;
        }

        /* ========= TEXT (OPPOSITE SIDE REVEAL) ========= */
        if (text) {
          const startX = isImageLeft ? 80 : -80;
          const moveX = startX * (1 - p);

          text.style.opacity = p;
          text.style.transform = `translateX(${moveX}px)`;
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white overflow-x-hidden"
      style={{ height: `${sections.length * 100}vh` }}
    >
      {sections.map((item, i) => {
        const isImageLeft = item.imageSide === "left";

        return (
          <div
            key={i}
            ref={(el) => (itemRefs.current[i] = el)}
            className="sticky top-0 h-screen flex items-center"
          >
            <div className="w-full px-6 lg:px-16">
              <div
                className={`flex flex-col ${
                  isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-16`}
              >
                {/* IMAGE */}
                <div className="w-full lg:w-2/3">
                  <div className="rounded-[36px] border-2 border-white overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[70vh] object-cover will-change-transform"
                    />
                  </div>
                </div>

                {/* TEXT */}
                <div
                  className="text w-full lg:w-1/3 opacity-0 will-change-transform"
                  style={{
                    transform: `translateX(${isImageLeft ? "80px" : "-80px"})`,
                  }}
                >
                  <h2 className="text-6xl lg:text-7xl font-bold mb-6 uppercase">
                    {item.title.split(" ").map((word, idx) => (
                      <span key={idx} className="block">
                        {word}
                      </span>
                    ))}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
