"use client";

import { useMemo, useState } from "react";

const CATEGORIES = [
  { key: "headshots", label: "Headshots" },
  { key: "editorial", label: "Editorial" },
  { key: "commercial", label: "Commercial" },
  { key: "digitals", label: "Raw Digitals" },
  { key: "print", label: "Print" },
  { key: "stills", label: "Stills" },
];

// ✅ Add your image filenames here (these live in /public/portfolio/<category>/...)
const IMAGES = {
  headshots: ["DanielEduHeadshotTwistpSmile-min.JPG","BadboyHeadshot.JPEG","Daniel_Headshot_1.PNG","DanielEdu_Juice.jpg","FootballHeadshot.JPEG"],
  editorial: ["DESweater.JPG"],
  commercial: [],
  digitals: ["DanielEduSelfie.JPG"],
  print: ["DEsuitglasses.jpg"],
  stills: ["DEemojimanS1.jpg"],
};

export default function PortfolioPage() {
  const [active, setActive] = useState("headshots");
  const [lightboxSrc, setLightboxSrc] = useState(null);

  const activeImages = useMemo(() => IMAGES[active] ?? [], [active]);

  return (
    <main className="min-h-screen bg-royal text-white">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-16">
        <header className="mb-8">
         <h1 className="font-heading text-4xl font-bold">
  Daniel Ikechukwu Edu — Portfolio
</h1>

          <p className="mt-3 text-white/70 max-w-2xl">
            Explore headshots, editorial, commercial work, digitals, and print.
            Click any image to view full size.
          </p>
        </header>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {CATEGORIES.map((c) => {
            const isActive = c.key === active;
            return (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={[
                  "rounded-full px-5 py-2 text-sm font-semibold transition",
                  "border",
                  isActive
                    ? "bg-gold text-black border-gold"
                    : "bg-white/5 text-white border-white/15 hover:border-gold/40 hover:bg-white/10",
                ].join(" ")}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        {activeImages.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-white/70">
            No images in this category yet. Add photos to{" "}
            <span className="text-gold font-semibold">
              /public/portfolio/{active}/
            </span>{" "}
            and list their filenames in the code.
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {activeImages.map((file) => {
              const src = `/portfolio/${active}/${file}`;
              return (
                <button
                  key={src}
                  onClick={() => setLightboxSrc(src)}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl hover:border-gold/40 transition"
                >
                  <img
                    src={src}
                    alt={`${active} - ${file}`}
                    className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />
                  <div className="absolute bottom-3 left-3 text-sm text-white/80">
                    Click to enlarge
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setLightboxSrc(null)}
        >
          <div className="max-w-5xl w-full">
            <div className="flex justify-end mb-3">
              <button
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm hover:bg-white/15 transition"
                onClick={() => setLightboxSrc(null)}
              >
                Close ✕
              </button>
            </div>
            <img
              src={lightboxSrc}
              alt="Enlarged"
              className="w-full max-h-[80vh] object-contain rounded-2xl border border-white/10 bg-black"
            />
          </div>
        </div>
      )}
    </main>
  );
}
