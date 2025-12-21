"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/** -----------------------------
 *  Config (easy to update)
 * ------------------------------ */

const CATEGORIES = [
  { key: "commercial", label: "Commercial" },
  { key: "animation", label: "Animation" },
  { key: "singing", label: "Singing" },
];


// Put your reel file in: /public/voiceover/reel/
const FEATURED_REEL_FILE = ""; // e.g. "VO_Reel.mp3" or "VO_Reel.m4a" or "VO_Reel.mp4"

// Put your samples in: /public/voiceover/<category>/
const VO_FILES = {
  commercial: [],
  animation: [],
  singing: ["One two three….m4a"],
};


/** -----------------------------
 *  Helpers
 * ------------------------------ */

// Format seconds -> m:ss
function formatDuration(sec) {
  if (!sec || Number.isNaN(sec) || sec === Infinity) return "--:--";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60);
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

// Decorative gold waveform
function GoldWaveform() {
  const bars = [8, 14, 10, 18, 12, 22, 14, 26, 16, 22, 12, 18, 10, 14, 8];

  return (
    <div className="flex items-end gap-[6px]">
      {bars.map((h, i) => (
        <div
          key={i}
          className="w-[6px] rounded-full bg-gold/80 shadow-[0_0_14px_rgba(245,199,122,0.35)] animate-pulse"
          style={{
            height: `${h}px`,
            animationDelay: `${i * 70}ms`,
          }}
        />
      ))}
    </div>
  );
}

/** -----------------------------
 *  Components
 * ------------------------------ */

function AudioCard({ title, src, filename }) {
  const audioRef = useRef(null);
  const [duration, setDuration] = useState(null);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    const onLoaded = () => setDuration(el.duration);
    el.addEventListener("loadedmetadata", onLoaded);

    return () => el.removeEventListener("loadedmetadata", onLoaded);
  }, [src]);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl hover:border-gold/40 transition">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="min-w-0">
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-white/60 break-all">{filename}</div>
        </div>

        <div className="shrink-0 flex items-center gap-3">
          <span className="text-xs text-white/70 border border-white/15 bg-white/5 px-3 py-1 rounded-full">
            {formatDuration(duration)}
          </span>

          <a
            href={src}
            download
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:border-white/25 transition"
            title="Download"
          >
            Download
          </a>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
        <div className="flex items-center justify-between gap-4 mb-3">
          <GoldWaveform />
          <span className="text-xs text-gold/90 border border-gold/25 bg-gold/10 px-3 py-1 rounded-full">
            Audio
          </span>
        </div>

        <audio ref={audioRef} controls preload="metadata" className="w-full">
          <source src={src} />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}

/** -----------------------------
 *  Page
 * ------------------------------ */

export default function VoiceOverPage() {
  const [active, setActive] = useState("commercial");

  // ✅ Define featuredSrc BEFORE any effect uses it
  const featuredSrc = FEATURED_REEL_FILE
    ? `/voiceover/reel/${FEATURED_REEL_FILE}`
    : null;

  // Featured duration
  const featuredAudioRef = useRef(null);
  const [featuredDuration, setFeaturedDuration] = useState(null);

  useEffect(() => {
    const el = featuredAudioRef.current;
    if (!el) return;

    // reset duration when file changes
    setFeaturedDuration(null);

    const onLoaded = () => setFeaturedDuration(el.duration);
    el.addEventListener("loadedmetadata", onLoaded);

    return () => el.removeEventListener("loadedmetadata", onLoaded);
  }, [featuredSrc]);

  const files = useMemo(() => VO_FILES[active] ?? [], [active]);

  return (
    <main className="min-h-screen bg-royal text-white">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-16">
        {/* Header */}
        <header className="mb-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            Voice Over
          </h1>
          <p className="mt-3 text-white/70 max-w-2xl">
            Commercial reads, character work, and a casting-ready VO reel.
          </p>
        </header>

        {/* Featured VO Reel */}
        <section className="mb-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6 shadow-2xl">
            <div className="flex items-center justify-between gap-4 mb-4">
              <h2 className="font-heading text-2xl md:text-3xl">
                Featured VO Reel
              </h2>
              <span className="text-xs md:text-sm text-gold border border-gold/30 bg-gold/10 px-3 py-1 rounded-full">
                Casting-ready
              </span>
            </div>

            {featuredSrc ? (
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <GoldWaveform />
                  <span className="text-xs text-white/70 border border-white/15 bg-white/5 px-3 py-1 rounded-full">
                    {formatDuration(featuredDuration)}
                  </span>
                </div>

                <audio
                  ref={featuredAudioRef}
                  controls
                  preload="metadata"
                  className="w-full"
                >
                  <source src={featuredSrc} />
                  Your browser does not support the audio element.
                </audio>

                <div className="mt-3 text-sm text-white/60 break-all">
                  {FEATURED_REEL_FILE}
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-white/70">
                No featured reel uploaded yet. When you’re ready:
                <div className="mt-3 text-sm">
                  1) Add your file to{" "}
                  <span className="text-gold font-semibold">
                    /public/voiceover/reel/
                  </span>
                  <br />
                  2) Set{" "}
                  <span className="text-white font-semibold">
                    FEATURED_REEL_FILE
                  </span>{" "}
                  at the top of this page
                </div>

                <div className="mt-4 text-sm text-white/60">
                  Recommended formats: <span className="text-white">.mp3</span>{" "}
                  or <span className="text-white">.m4a</span> (mp4 works too).
                </div>
              </div>
            )}

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-xl bg-gold px-6 py-3 font-semibold text-black hover:bg-softgold transition"
              >
                Book / Contact
              </a>
              <a
                href="/reels"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
              >
                Acting Reels
              </a>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
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

        {/* Audio grid */}
        {files.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <h3 className="font-heading text-2xl mb-2">
              No {active} samples yet
            </h3>
            <p className="text-white/70 max-w-2xl">
              Add audio/video files to{" "}
              <span className="text-gold font-semibold">
                /public/voiceover/{active}/
              </span>{" "}
              and list their filenames in the{" "}
              <span className="text-white">VO_FILES</span> array at the top of
              this page.
            </p>

            <div className="mt-6 grid md:grid-cols-2 gap-4 text-sm text-white/70">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="text-white font-semibold mb-2">Naming tip</div>
                <ul className="list-disc list-inside space-y-1">
                  <li>VO_Commercial_01.mp3</li>
                  <li>VO_Animation_Character_01.m4a</li>
                  <li>VO_Commercial_02.mp4</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="text-white font-semibold mb-2">
                  Fast add steps
                </div>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Drop file into the folder</li>
                  <li>Add filename to VO_FILES</li>
                  <li>Refresh the page</li>
                </ol>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {files.map((file) => {
              const src = `/voiceover/${active}/${file}`;
              const niceTitle =
  active === "commercial"
    ? "Commercial Sample"
    : active === "animation"
    ? "Animation Sample"
    : "Singing Sample";


              return (
                <AudioCard
                  key={src}
                  title={niceTitle}
                  src={src}
                  filename={file}
                />
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
