import { motion } from "framer-motion";

const reasons = [
  { n: "01", t: "Social Media Advertising", d: "Instagram, Facebook, YouTube & LinkedIn campaigns." },
  { n: "02", t: "Creative Design", d: "Ad creatives, branding visuals, and content design." },
  { n: "03", t: "Campaign Strategy", d: "Audience targeting, optimization, and scaling." },
  { n: "04", t: "Offline Local Advertising", d: "Hoardings, banners, pamphlets, and local visibility campaigns." },
  { n: "05", t: "Web Development", d: "Business websites, landing pages, and conversion-focused design." },
  { n: "06", t: "Newspaper Advertising", d: "Print ads in local and national newspapers for brand awareness, promotions, and announcements." },
  { n: "07", t: "TV Commercial Advertising", d: "Television commercials, regional channel ads, prime-time slots, and brand storytelling." },
  { n: "08", t: "App Development", d: "Android & iOS app development, UI/UX design, backend integration, and scalable mobile solutions." },
];

export function WhyUs() {
  return (
    <section className="py-32 px-6 lg:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-accent">
            What We Do
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 text-balance">
            Full-spectrum creative <span className="italic">services for modern brands.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-brand-bg p-10 lg:p-14 hover:bg-brand-surface transition-colors group"
            >
              <div className="flex items-baseline gap-6 mb-6">
                <span className="font-mono text-[10px] text-brand-accent">{r.n}</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl mb-4 group-hover:text-brand-accent transition-colors">
                {r.t}
              </h3>
              <p className="text-brand-muted leading-relaxed max-w-md">{r.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
