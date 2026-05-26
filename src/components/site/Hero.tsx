import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/40 via-transparent to-brand-bg" />
      </motion.div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block px-4 py-1.5 border border-white/15 rounded-full text-[10px] uppercase tracking-[0.3em] bg-white/5 backdrop-blur-sm mb-10 text-white/80"
        >
          The AI Creative Powerhouse
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-6xl md:text-8xl lg:text-[9.5rem] leading-[0.9] tracking-tight mb-8 text-balance"
        >
          Advertising for the <br />
          Modern <span className="text-brand-accent">Universe.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="text-base md:text-lg text-brand-muted max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          High-performance creative campaigns powered by proprietary AI workflows
          for brands that demand cinematic excellence and measurable scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="px-9 py-4 bg-brand-accent text-white rounded-xl font-semibold text-sm tracking-wide transition-transform hover:scale-[1.03] shadow-[0_10px_40px_-10px_rgba(62,99,255,0.6)]"
          >
            Start Your Campaign
          </a>
          <a
            href="#work"
            className="px-9 py-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl font-semibold text-sm tracking-wide hover:bg-white/10 transition-colors"
          >
            View Portfolio
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-muted">
        <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
