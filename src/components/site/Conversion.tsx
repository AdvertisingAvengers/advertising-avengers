import { motion } from "framer-motion";

export function Conversion() {
  return (
    <section id="contact" className="py-32 px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="max-w-5xl mx-auto text-center p-12 md:p-20 rounded-[40px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(62,99,255,0.2),transparent_70%)]" />

        <div className="relative">
          <span className="inline-block px-4 py-1.5 border border-white/15 rounded-full text-[10px] uppercase tracking-[0.3em] bg-white/5 backdrop-blur-sm mb-8 text-white/80">
            Begin the work
          </span>
          <h2 className="text-5xl md:text-7xl font-serif italic mb-6 text-balance">
            Evolve Your <span className="text-brand-accent">Presence.</span>
          </h2>
          <p className="text-brand-muted mb-12 text-lg max-w-xl mx-auto leading-relaxed">
            Ready to deploy the next generation of creative marketing? Let's build your growth engine.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { l: "WhatsApp", h: "#" },
              { l: "Instagram", h: "#" },
              { l: "Email Us", h: "mailto:hello@aetheria.studio" },
            ].map((c) => (
              <a
                key={c.l}
                href={c.h}
                className="px-6 py-3 border border-white/10 rounded-full text-xs uppercase tracking-[0.2em] font-medium hover:bg-white/5 hover:border-brand-accent/50 transition-colors"
              >
                {c.l}
              </a>
            ))}
          </div>

          <a
            href="#"
            className="inline-block px-12 py-5 bg-white text-black rounded-2xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-brand-accent hover:text-white transition-colors shadow-[0_20px_60px_-10px_rgba(255,255,255,0.15)]"
          >
            Book Strategy Session
          </a>
        </div>
      </motion.div>
    </section>
  );
}
