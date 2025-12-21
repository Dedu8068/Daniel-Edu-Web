"use client";

import { useMemo, useState } from "react";

const SECTIONS = [
  { key: "acting", label: "Acting" },
  { key: "monologues", label: "Monologues" },
  { key: "scenes", label: "Scenes" },
  { key: "vertical", label: "Vertical Reel" },
  { key: "clips", label: "Clips" },
];

// ✅ Your updated filenames
const VIDEOS = {
  acting: ["Acting Demo Reel.mp4"],
  monologues: ["Fresh Prince Monologue 1.mp4"],
  scenes: ["Trevor_LakehouseM_DanielEdu.mov"],
  vertical: [
    "MAX STEEL.MP4",
    "EmojiManTears.MOV","HTPYR Reel 4.MOV","HTPYR Reel 3.MOV","HTPYR Reel 1.MOV",
  ],
  clips: ["Dreamboy Insta.mp4", "Kill the Ego Final (_).mov"],
};

function PhoneVideoCard({ src, label = "Vertical Reel" }) {
  return (
   <div className="snap-center shrink-0 px-3 md:px-0">
      {/* “Phone” size on desktop */}
      <div className="mx-auto w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px]">
        <div className="relative aspect-[9/16] overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
          <span className="absolute top-3 left-3 z-10 rounded-full bg-black/60 px-3 py-1 text-xs text-white/90 backdrop-blur border border-white/10">
            {label}
          </span>

          <video
            controls
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={src} />

            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default function ReelsPage() {
  const [active, setActive] = useState("acting");
  const activeVideos = useMemo(() => VIDEOS[active] ?? [], [active]);

  return (
    <main className="min-h-screen bg-royal text-white">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-16">
        {/* Header */}
        <header className="mb-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
  Daniel Ikechukwu Edu — Reels
</h1>

          <p className="mt-3 text-white/70 max-w-2xl">
            Featured acting reel + scenes, monologues, vertical reels, and clips.
            Updated regularly.
          </p>
        </header>

        {/* Featured Reel */}
        <section className="mb-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6 shadow-2xl">
            <div className="flex items-center justify-between gap-4 mb-4">
              <h2 className="font-heading text-2xl md:text-3xl">
                Featured Acting Reel
              </h2>
              <span className="text-xs md:text-sm text-gold border border-gold/30 bg-gold/10 px-3 py-1 rounded-full">
                Casting-ready
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
              <video controls playsInline preload="metadata" className="w-full h-auto">
                <source
                  src={encodeURI("/reels/acting/Acting Demo Reel.mp4")}
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-xl bg-gold px-6 py-3 font-semibold text-black hover:bg-softgold transition"
              >
                Book / Contact
              </a>
              <a
                href="/portfolio"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
              >
                View Photos
              </a>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-6">
          {SECTIONS.map((s) => {
            const isActive = s.key === active;
            return (
              <button
                key={s.key}
                onClick={() => setActive(s.key)}
                className={[
                  "rounded-full px-5 py-2 text-sm font-semibold transition border",
                  isActive
                    ? "bg-gold text-black border-gold"
                    : "bg-white/5 text-white border-white/15 hover:border-gold/40 hover:bg-white/10",
                ].join(" ")}
              >
                {s.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        {activeVideos.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-white/70">
            No videos in this section yet. Add files to{" "}
            <span className="text-gold font-semibold">
              /public/reels/{active}/
            </span>{" "}
            and list them in the <span className="text-white">VIDEOS</span> array.
          </div>
        ) : active === "vertical" ? (
  <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6 shadow-xl">
    <div className="flex items-center justify-between gap-4 mb-4">
      <h3 className="font-heading text-2xl">Vertical Reels</h3>
      <span className="text-xs text-white/70">
        Mobile = swipe • Desktop = grid
      </span>
    </div>

    {/* MOBILE: scroll-snap carousel */}
    <div
      className="
        no-scrollbar
        flex overflow-x-auto snap-x snap-mandatory
        scroll-smooth
        pb-4
        px-1
        md:hidden
      "
      style={{
        WebkitOverflowScrolling: "touch",
        scrollPaddingLeft: "24px",
        scrollPaddingRight: "24px",
      }}
    >
      {activeVideos.map((file) => {
        const src = encodeURI(`/reels/vertical/${file}`);
        return <PhoneVideoCard key={src} src={src} />;
      })}
    </div>

    {/* DESKTOP: wrapped grid (no horizontal scrolling) */}
    <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {activeVideos.map((file) => {
        const src = encodeURI(`/reels/vertical/${file}`);
        return (
          <div key={src} className="w-full max-w-[340px]">
            {/* Reuse PhoneVideoCard sizing/style */}
            <PhoneVideoCard src={src} />
            <div className="mt-2 text-sm text-white/60 break-all px-3">
              {file}
            </div>
          </div>
        );
      })}
    </div>

    <div className="mt-3 text-sm text-white/60">
      Tip: On desktop, you can click any video directly. On mobile, swipe through
      the carousel.
    </div>
  </div>
) : (

          <div className="grid gap-6 md:grid-cols-2">
            {activeVideos.map((file) => {
              const src = encodeURI(`/reels/${active}/${file}`);
              return (
                <div
                  key={src}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl hover:border-gold/40 transition"
                >
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
                    <video controls playsInline preload="metadata" className="w-full">
                      <source src={src} />

                    </video>
                  </div>

                  <div className="mt-3 text-sm text-white/70 break-all">
                    {file}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom CTA */}
        <section className="mt-14">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-gold/10 p-8">
            <h3 className="font-heading text-2xl mb-2">
              Want a specific type?
            </h3>
            <p className="text-white/70 mb-5 max-w-2xl">
              I can share additional scenes, comedy/drama selects, self-tape style reads,
              and brand/UGC examples on request.
            </p>
            <a
              href="/contact"
              className="inline-flex rounded-xl bg-gold px-7 py-3.5 font-semibold text-black hover:bg-softgold transition"
            >
              Contact Me →
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
