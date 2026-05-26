import { motion } from "framer-motion";

export function Intelligence() {
  return (
    <section id="intelligence" className="py-32 px-6 lg:px-10 bg-brand-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(62,99,255,0.15),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-0 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-accent">
            Intelligence Layer
          </span>
          <h2 className="text-4xl md:text-5xl font-serif italic mt-3 mb-8 text-balance">
            Where cinematic art meets{" "}
            <span className="text-brand-accent">data intelligence.</span>
          </h2>
          <div className="space-y-4">
            {[
              {
                t: "AI-Assisted Precision",
                d: "Proprietary models predict creative resonance before the first frame is rendered.",
                accent: true,
              },
              {
                t: "Scalable Production",
                d: "From one hero commercial to 1,000 localized variants in minutes — without losing soul.",
              },
              {
                t: "Real-Time Optimization",
                d: "Campaigns adapt mid-flight based on engagement signals from every touchpoint.",
              },
            ].map((item) => (
              <div
                key={item.t}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex items-start gap-5"
              >
                <div
                  className={`w-1 h-12 rounded-full shrink-0 ${
                    item.accent ? "bg-brand-accent" : "bg-white/20"
                  }`}
                />
                <div>
                  <h4 className="text-lg font-semibold mb-1">{item.t}</h4>
                  <p className="text-brand-muted text-sm leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cinematic dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative p-8 rounded-3xl border border-white/10 bg-black/60 backdrop-blur-2xl shadow-[0_30px_80px_-20px_rgba(62,99,255,0.3)]"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/30 border border-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30 border border-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50" />
            </div>
            <span className="text-[9px] uppercase tracking-[0.25em] font-mono text-brand-muted">
              Aetheria_Engine / v2.4
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="h-28 bg-brand-accent/5 rounded-xl border border-brand-accent/20 flex flex-col justify-center p-4">
              <span className="text-[9px] text-brand-muted uppercase tracking-widest mb-2">
                Campaign ROI
              </span>
              <span className="text-3xl font-serif italic">14.2×</span>
            </div>
            <div className="h-28 bg-white/5 rounded-xl border border-white/10 flex flex-col justify-center p-4">
              <span className="text-[9px] text-brand-muted uppercase tracking-widest mb-2">
                Retention
              </span>
              <span className="text-3xl font-serif italic">88%</span>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 mb-4">
            <div className="flex justify-between mb-3">
              <span className="text-[9px] uppercase tracking-widest font-mono text-brand-muted">
                Engagement / 30d
              </span>
              <span className="text-[9px] uppercase tracking-widest font-mono text-brand-accent">
                +127%
              </span>
            </div>
            <div className="flex items-end gap-1 h-20">
              {[30, 45, 38, 60, 52, 70, 65, 82, 75, 90, 85, 100].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className="flex-1 bg-gradient-to-t from-brand-accent/40 to-brand-accent rounded-sm"
                />
              ))}
            </div>
          </div>

          <div className="space-y-2.5">
            {[70, 90, 45].map((w, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-[9px] font-mono text-brand-muted w-16">
                  CH_{String(i + 1).padStart(2, "0")}
                </span>
                <div className="h-1 bg-white/10 rounded-full flex-1 overflow-hidden">
                  <div
                    className="h-full bg-brand-accent shadow-[0_0_20px_rgba(62,99,255,0.5)]"
                    style={{ width: `${w}%` }}
                  />
                </div>
                <span className="text-[9px] font-mono text-white/60 w-10 text-right">
                  {w}%
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
