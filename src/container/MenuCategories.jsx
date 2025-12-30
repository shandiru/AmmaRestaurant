const categories = [
  {
    title: "MAINS",
    image:
      "https://cdn.prod.website-files.com/6410dee2412dc540c6e61e0d/6410dee2412dc53895e61e13_main.png",
  },
  {
    title: "SIDES",
    image:
      "https://cdn.prod.website-files.com/6410dee2412dc540c6e61e0d/6410dee2412dc53828e61e16_05.jpg",
  },
  {
    title: "DESSERTS",
    image:
      "https://cdn.prod.website-files.com/6410dee2412dc540c6e61e0d/6410dee2412dc5b553e61e12_6398c9bbcf6303ef68a32aca_13.jpeg",
  },
  {
    title: "SALADS",
    image:
      "https://cdn.prod.website-files.com/6410dee2412dc540c6e61e0d/6410dee2412dc5f2f7e61e18_02.jpg",
  },
  {
    title: "DRINKS",
    image:
      "https://cdn.prod.website-files.com/6410dee2412dc540c6e61e0d/6410dee2412dc5cd2ae61e17_03.jpg",
  },
];

export default function MenuCategories() {
  return (
    <section className="bg-black py-20 overflow-hidden">
      {/* WRAPPER */}
      <div className="mx-auto max-w-[1600px] px-6">
        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5

            gap-x-12
            gap-y-16

            place-items-center
          "
        >
          {categories.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* TITLE */}
              <h2 className="mb-8 text-[26px] font-extrabold tracking-widest text-white">
                {item.title}
              </h2>

              {/* IMAGE CARD */}
              <div
                className="
                  relative
                  w-[220px]
                  h-[400px]
                  overflow-hidden
                  rounded-[140px]
                "
              >
                {/* IMAGE */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/70" />

                {/* BORDER */}
                <div className="absolute inset-0 rounded-[140px] ring-1 ring-white/20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
