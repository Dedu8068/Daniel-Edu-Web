"use client";

import { useMemo, useState } from "react";

/**
 * 1) Drop vertical videos into: /public/ugc/<category>/
 * 2) Add filenames to UGC_VIDEOS below
 * 3) Refresh /ugc
 */

// ✅ Update these with your real links
const SOCIAL = {
  instagram: "https://www.instagram.com/d_edu_/",
  tiktok: "https://www.tiktok.com/@d_edu_",
};

const CATEGORIES = [
  { key: "brand", label: "Brand Ads / Reviews" },
  { key: "business", label: "Business Reviews" },
  { key: "lifestyle", label: "Lifestyle / Storytelling" },
  { key: "demos", label: "Product Demos / Unboxings" },
  { key: "voiceover", label: "Voiceover / ASMR" },
];

// ✅ Add your filenames here (keep them exactly as the file name in /public)
const UGC_VIDEOS = {
  brand: [],
  business: ["Thai Corner UGC.mov"],
  lifestyle: [],
  demos: [],
  voiceover: [],
};

function PhoneVerticalVideo({ src, badge = "UGC" }) {
  return (
    <div className="snap-center shrink-0 px-3 md:px-0">
      <div className="mx-auto w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px]">
        <div className="relative aspect-[9/16] overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
          <span className="absolute top-3 left-3 z-10 rounded-full bg-black/60 px-3 py-1 text-xs text-white/90 backdrop-blur border border-white/10">
            {badge}
          </span>

          <video
            controls
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          >
            {/* Don't force type — helps with .mov */}
            <source src={src} />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

function SocialButton({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:border-gold/40 transition"
    >
      {label} →
    </a>
  );
}

export default function UGCPage() {
  const [active, setActive] = useState("brand");
  const files = useMemo(() => UGC_VIDEOS[active] ?? [], [active]);

  return (
    <main className="min-h-screen bg-royal text-white">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-16">
        {/* Header */}
        <header className="mb-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            UGC Content
          </h1>
          <p className="mt-3 text-white/70 max-w-2xl">
            Short-form vertical content built for brands — ads, reviews, and
            storytelling designed to convert on TikTok & Instagram Reels.
          </p>

          {/* Social links */}
          <div className="mt-5 flex flex-wrap gap-3">
            <SocialButton href={SOCIAL.instagram} label="Instagram" />
            <SocialButton href={SOCIAL.tiktok} label="TikTok" />
            <a
              href="/contact"
              className="rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-black hover:bg-softgold transition"
            >
              Book UGC
            </a>
          </div>
          <p className="mt-3 text-sm text-white/70">
  For collaborations & UGC inquiries →{" "}
  <a
    href="/contact"
    className="text-gold font-semibold hover:underline"
  >
    Email me
  </a>
</p>

        </header>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-3 mb-6">
          {CATEGORIES.map((c) => {
            const isActive = c.key === active;
            return (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={[
                  "rounded-full px-5 py-2 text-sm font-semibold transition border",
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

        {/* Empty state */}
        {files.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <h2 className="font-heading text-2xl mb-2">
              No videos in “{CATEGORIES.find((c) => c.key === active)?.label}”
              yet
            </h2>
            <p className="text-white/70 max-w-3xl">
              Add vertical videos to{" "}
              <span className="text-gold font-semibold">
                /public/ugc/{active}/
              </span>{" "}
              then list the filenames in <span className="text-white">UGC_VIDEOS</span>.
            </p>

            <div className="mt-6 grid md:grid-cols-2 gap-4 text-sm text-white/70">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="text-white font-semibold mb-2">
                  Suggested formats
                </div>
                <ul className="list-disc list-inside space-y-1">
                  <li>UGC_Brand_01.mp4</li>
                  <li>UGC_Business_01.mov</li>
                  <li>UGC_Demo_01.mp4</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="text-white font-semibold mb-2">
                  Quick add steps
                </div>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Drop the file into the folder</li>
                  <li>Add the filename to UGC_VIDEOS</li>
                  <li>Refresh the page</li>
                </ol>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* MOBILE: swipe carousel */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6 shadow-xl md:hidden">
              <div className="flex items-center justify-between gap-4 mb-4">
                <h2 className="font-heading text-2xl">
                  {CATEGORIES.find((c) => c.key === active)?.label}
                </h2>
                <span className="text-xs text-white/70">Swipe →</span>
              </div>

              <div
                className="no-scrollbar flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-1"
                style={{
                  WebkitOverflowScrolling: "touch",
                  scrollPaddingLeft: "24px",
                  scrollPaddingRight: "24px",
                }}
              >
                {files.map((file) => {
                  const src = encodeURI(`/ugc/${active}/${file}`);
                  return (
                    <PhoneVerticalVideo
                      key={src}
                      src={src}
                      badge={active.toUpperCase()}
                    />
                  );
                })}
              </div>
            </div>

            {/* DESKTOP: grid wrap */}
            <div className="hidden md:block">
              <div className="flex items-center justify-between gap-4 mb-4">
                <h2 className="font-heading text-2xl">
                  {CATEGORIES.find((c) => c.key === active)?.label}
                </h2>
                <span className="text-xs text-white/70">
                  Desktop layout (click any video)
                </span>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {files.map((file, idx) => {
                  const src = encodeURI(`/ugc/${active}/${file}`);
                  return (
                    <div key={src} className="w-full max-w-[340px]">
                      <PhoneVerticalVideo
                        src={src}
                        badge={active.toUpperCase()}
                      />
                      <div className="mt-2 text-sm text-white/60 px-1">
                        UGC {idx + 1}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {/* Bottom CTA */}
        <section className="mt-14">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-gold/10 p-8">
            <h3 className="font-heading text-2xl mb-2">
              UGC packages available
            </h3>
            <p className="text-white/70 mb-5 max-w-2xl">
              I can deliver concepts + scripts, raw & edited deliverables, hook
              variations, and multiple aspect exports for Reels/TikTok. Fast
              turnaround available.
            </p>
            <a
              href="/contact"
              className="inline-flex rounded-xl bg-gold px-7 py-3.5 font-semibold text-black hover:bg-softgold transition"
            >
              Contact for UGC →
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
