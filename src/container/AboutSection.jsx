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

      // overall scroll progress
      const progress = (vh - rect.top) / vh;

      itemRefs.current.forEach((el, index) => {
        if (!el) return;

        const p = Math.min(Math.max(progress - index, 0), 1);

        const img = el.querySelector(".image");
        const text = el.querySelector(".text");

        const isImageLeft = sections[index].imageSide === "left";

        /* ========= IMAGE MOVE ========= */
        if (img) {
          const moveX = isImageLeft
            ? -p * 25 // image slides LEFT
            : p * 25; // image slides RIGHT

          img.style.transform = `translateX(${moveX}%)`;
        }

        /* ========= TEXT REVEAL (OPPOSITE SIDE) ========= */
        if (text) {
          const startTextX = isImageLeft ? 80 : -80;
          const moveTextX = startTextX * (1 - p);

          text.style.opacity = p;
          text.style.transform = `translateX(${moveTextX}px)`;
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial state fix

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white overflow-x-hidden"
      style={{ height: `${(sections.length + 1) * 100}vh` }}
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
                  <div className="image rounded-[36px] border-2 border-white overflow-hidden will-change-transform">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[70vh] object-cover"
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
