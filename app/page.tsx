export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-royal text-white">
      {/* Ambient gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-electric/40 blur-3xl" />
        <div className="absolute -bottom-48 -right-48 h-[620px] w-[620px] rounded-full bg-gold/25 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        {/* subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      {/* Hero */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 pt-8 pb-16 md:pt-16 md:pb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 mb-6">
                <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_18px_rgba(245,199,122,0.9)]" />
                Los Angeles • Available for Commercial / Theatrical / VO / Print /UGC
              </div>

              <h1 className="text-6xl font-heading font-bold mb-4">
  Daniel Ikechukwu Edu
</h1>
<p className="text-sm text-white/60 mt-2">
  Professionally credited as <span className="text-white">Daniel Edu</span>
</p>

<p className="text-xl text-gold mb-6">
  Actor • Model • Voice Artist
</p>
<p className="mt-6 text-xs text-white/50">
  Updated regularly • Los Angeles
</p>



              <p className="mt-5 text-lg md:text-xl text-white/80 max-w-xl">
                Bold, story-driven performances for stage and screen — with a
                premium, modern brand presence built for casting.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/reels"
                  className="group relative inline-flex items-center justify-center rounded-xl bg-gold px-7 py-3.5 font-semibold text-black shadow-lg shadow-gold/20 transition hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="relative z-10">Watch Acting Reel</span>
                  {/* shine */}
                  <span className="absolute inset-0 overflow-hidden rounded-xl">
                    <span className="absolute -left-1/2 top-0 h-full w-1/2 skew-x-[-20deg] bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />
                  </span>
                </a>

                <a
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10 hover:border-white/40"
                >
                  View Portfolio
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-gold/40 bg-gold/10 px-7 py-3.5 font-semibold text-gold transition hover:bg-gold/15"
                >
                  Contact
                </a>
              </div>

              {/* Quick links row */}
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
                <a
                  href="https://resumes.actorsaccess.com/1872847-5308081"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 hover:border-gold/40 hover:text-white transition"
                >
                  Actors Access
                </a>
                <a
                  href="https://www.backstage.com/tal/daniel-edu/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 hover:border-gold/40 hover:text-white transition"
                >
                  Backstage
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 hover:border-gold/40 hover:text-white transition"
                >
                  Reel (YouTube)
                </a>
              </div>
            </div>

            {/* Right (Poster image) */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-gold/25 via-white/10 to-electric/30 blur-2xl" />
              <div className="relative rounded-[28px] border border-white/15 bg-white/5 p-3 shadow-2xl">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/DanielEduHeadshotTwistpSmile-min.JPG"
                    alt="Daniel Edu Headshot"
                    className="w-full h-[520px] object-cover transition duration-700 hover:scale-[1.03]"
                  />
                </div>

                {/* mini caption bar */}
                <div className="mt-3 flex items-center justify-between text-sm text-white/70 px-1">
                  <span>Headshots • Editorial • Commercial</span>
                  <span className="text-gold">Scroll for more ↓</span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured blocks */}
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition">
              <h3 className="font-heading text-xl mb-2">Featured Reel</h3>
              <p className="text-white/70 mb-4">
                Watch my acting reel and explore scenes, monologues, and clips.
              </p>
              <a href="/reels" className="text-gold font-semibold hover:opacity-90">
                Go to Reels →
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition">
              <h3 className="font-heading text-xl mb-2">Portfolio</h3>
              <p className="text-white/70 mb-4">
                Headshots, editorial, commercial, digitals, and print.
              </p>
              <a href="/portfolio" className="text-gold font-semibold hover:opacity-90">
                View Portfolio →
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition">
              <h3 className="font-heading text-xl mb-2">Voice + UGC</h3>
              <p className="text-white/70 mb-4">
                Commercial VO, animation, and UGC content — updated often.
              </p>
              <a href="/voiceover" className="text-gold font-semibold hover:opacity-90">
                Explore Voice →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
