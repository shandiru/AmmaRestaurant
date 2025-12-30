import { motion } from "framer-motion";

/* ================= IMAGE COLUMNS ================= */

const columns = [
  {
    images: [
      "https://cdn.prod.website-files.com/6410dee2412dc599c7e61e0b/64232ca2581e251cebdb9fdc_1.jpg",
      "https://cdn.prod.website-files.com/6410dee2412dc599c7e61e0b/64232cb9581e25286edba12d_2.jpg",
    ],
    direction: "up",
    opacity: 0.7,
  },
  {
    images: [
      "https://cdn.prod.website-files.com/6410dee2412dc599c7e61e0b/64232d4d65a47e62402fd307_3.jpg",
      "https://cdn.prod.website-files.com/6410dee2412dc599c7e61e0b/64232d55afa3b682bae8f45a_4.jpg",
    ],
    direction: "down",
    opacity: 0.7,
  },
  {
    images: [
      "https://cdn.prod.website-files.com/6410dee2412dc599c7e61e0b/64232d8020c255e8047a2f29_5.jpg",
      "https://cdn.prod.website-files.com/6410dee2412dc599c7e61e0b/64232dacf0322a572f7ae5dd_6.jpg",
    ],
    direction: "up",
    opacity: 0.7,
  },
  {
    images: [
      "https://cdn.prod.website-files.com/6410dee2412dc599c7e61e0b/64232db0f56021549390a3b3_7.jpg",
      "https://cdn.prod.website-files.com/6410dee2412dc599c7e61e0b/64232ddf44af58a813e456bb_8-1.jpg",
    ],
    direction: "down",
    opacity: 0.7,
  },
];

/* ================= HERO ================= */

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">

      {/* BACKGROUND IMAGE COLUMNS */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute left-1/2 top-[60%]
            -translate-x-1/2 -translate-y-1/2
            flex rotate-[-12deg]
          "
        >

          {/* LEFT SIDE (2 COLUMNS) */}
          <div className="flex gap-14">
            {columns.slice(0, 2).map((col, i) => (
              <TubeColumn key={i} {...col} />
            ))}
          </div>

          {/* CENTER GAP */}
          <div className="w-[350px]" />

          {/* RIGHT SIDE (2 COLUMNS) */}
          <div className="flex gap-14">
            {columns.slice(2).map((col, i) => (
              <TubeColumn key={i} {...col} />
            ))}
          </div>

        </div>
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* CENTER CONTENT */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="font-serif text-[clamp(3.5rem,8vw,7rem)] tracking-wide">
          RESTURANTO
        </h1>

        <div className="mt-8 space-y-2 text-sm uppercase tracking-widest text-white/80">
          <p>ADDRESS →</p>
          <p>WORKING HOURS →</p>
        </div>
      </div>

    </section>
  );
}

/* ================= COLUMN COMPONENT ================= */

function TubeColumn({ images, direction, opacity }) {
  const startY = direction === "up" ? "-33.333%" : "0%";
  const endY = direction === "up" ? "0%" : "-33.333%";

  return (
    <div className="w-[200px] overflow-hidden" style={{ opacity }}>
      <motion.div
        className="flex flex-col gap-6"
        initial={{ y: startY }}
        animate={{ y: endY }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...images, ...images, ...images].map((src, i) => (
          <div
            key={i}
            className="h-80 overflow-hidden rounded-2xl shadow-2xl"
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
