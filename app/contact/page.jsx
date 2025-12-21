"use client";

const CONTACT_EMAIL = "dedu8068@gmail.com";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqwjkoy";

const LINKS = {
  actorsAccess: "https://resumes.actorsaccess.com/1872847-5308081",
  backstage: "https://www.backstage.com/tal/daniel-edu/",
  castingNetworks:
    "https://app.castingnetworks.com/talent/public-profile/d0d4dafc-96d1-11f0-84db-053f9c9348ac",
};

function prettyDomain(url) {
  try {
    const u = new URL(url);
    return u.hostname.replace("www.", "");
  } catch {
    return url;
  }
}

function LogoLink({ href, src, alt, label }) {
  const domain = prettyDomain(href);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        group flex items-center gap-4
        rounded-2xl border border-white/10 bg-white/5
        px-5 py-4
        hover:bg-white/10 hover:border-gold/40
        transition
      "
    >
      {/* Logo */}
      <div
        className="
          h-12 w-12 shrink-0
          rounded-2xl border border-white/10
          bg-black/20
          flex items-center justify-center
          overflow-hidden
        "
      >
        <img
          src={src}
          alt={alt}
          className="h-8 w-8 object-contain opacity-90 group-hover:opacity-100 transition"
        />
      </div>

      {/* Text */}
      <div className="min-w-0">
        <div className="font-semibold text-white leading-tight">{label}</div>
        <div className="mt-1 text-sm text-white/60 truncate">{domain}</div>
      </div>

      {/* CTA */}
      <div className="ml-auto flex items-center gap-2 text-sm text-white/70 group-hover:text-gold transition">
        <span className="hidden sm:inline">View</span>
        <span className="text-lg leading-none">→</span>
      </div>
    </a>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-royal text-white">
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-16">
        {/* Header */}
        <header className="mb-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Contact</h1>
          <p className="mt-3 text-white/70 max-w-2xl">
            For collaborations, bookings, and general inquiries, send a message below.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* LEFT: Contact Form */}
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-2xl">
            <h2 className="font-heading text-2xl md:text-3xl mb-2">
              Send a message
            </h2>
            <p className="text-white/70 mb-6">
              This form will send directly to{" "}
              <span className="text-white font-semibold">{CONTACT_EMAIL}</span>.
            </p>

            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-4">
              {/* Helps Formspree route replies */}
              <input type="hidden" name="_replyto" value={CONTACT_EMAIL} />

              <div>
                <label className="block text-sm text-white/70 mb-2">Name</label>
                <input
                  name="name"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-gold/50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-gold/50"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">
                  What is this regarding?
                </label>
                <select
                  name="inquiry_type"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-gold/50"
                  defaultValue="General"
                >
                  <option>General</option>
                  <option>UGC / Brand Deal</option>
                  <option>Commercial</option>
                  <option>Theatrical (Film / TV)</option>
                  <option>Voiceover</option>
                  <option>Modeling / Print</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-gold/50"
                  placeholder="Tell me about the project, dates, usage, and budget if applicable."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-gold px-6 py-3 font-semibold text-black hover:bg-softgold transition"
              >
                Send Message →
              </button>

              {/* Backup: direct email */}
              <p className="text-sm text-white/60 text-center">
                Prefer email?{" "}
                <a
                  className="text-gold font-semibold hover:underline"
                  href={`mailto:${CONTACT_EMAIL}`}
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </form>
          </section>

          {/* RIGHT: Agent + Pro Links */}
          <aside className="space-y-8">
            {/* Agent box */}
            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-2xl">
              <h2 className="font-heading text-2xl md:text-3xl mb-3">
                Representation
              </h2>

              <p className="text-white/70">
                For large-scale professional project inquiries, please contact my agent:
              </p>

              <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="font-semibold text-white">Avant Artists, LLC (CA)</div>
                <div className="mt-2 text-white/70 text-sm leading-relaxed">
                  Theatrical (Film / TV), Commercial, Theatre, Voiceover, Modeling, Print
                  <br />
                  <span className="text-white">Phone:</span> (818) 609-1556
                  <br />
                  <span className="text-white">Email:</span>{" "}
                  <a
                    className="text-gold font-semibold hover:underline"
                    href="mailto:info@avantartists.com"
                  >
                    info@avantartists.com
                  </a>
                  <br />
                  <span className="text-white">Address:</span> 21255 Burbank Blvd,
                  Suite 120, Los Angeles, CA 91367
                </div>
              </div>

              <p className="mt-4 text-white/70 text-sm">
                For other inquiries, you can contact me directly at{" "}
                <a
                  className="text-gold font-semibold hover:underline"
                  href={`mailto:${CONTACT_EMAIL}`}
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </section>

            {/* Casting profile links w/ logos */}
            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-2xl">
              <h2 className="font-heading text-2xl md:text-3xl mb-4">
                Casting Profiles
              </h2>

              <div className="grid gap-4">
                <LogoLink
                  href={LINKS.actorsAccess}
                  src="/logos/actorsaccesslogo.png"
                  alt="Actors Access"
                  label="Actors Access"
                />
                <LogoLink
                  href={LINKS.backstage}
                  src="/logos/backstagelogo.png"
                  alt="Backstage"
                  label="Backstage"
                />
                <LogoLink
                  href={LINKS.castingNetworks}
                  src="/logos/castingnetworkslogo.png"
                  alt="Casting Networks"
                  label="Casting Networks"
                />
              </div>

              <p className="mt-4 text-xs text-white/50">
                Logos live in <span className="text-white/70">/public/logos</span>.
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
