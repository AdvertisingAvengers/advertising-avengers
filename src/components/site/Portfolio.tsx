import { motion } from "framer-motion";
import fashion from "@/assets/work-fashion.jpg";
import auto from "@/assets/work-auto.jpg";
import beauty from "@/assets/work-beauty.jpg";
import fintech from "@/assets/work-fintech.jpg";

const works = [
  {
    img: fashion,
    title: "Vogue Digital Identity",
    sub: "AI-Generated Content & High-Fashion Direction",
    year: "2025",
    chip: { label: "Conv. Lift", value: "+142%" },
    offset: "",
  },
  {
    img: auto,
    title: "Apex Automotive",
    sub: "Cinematic Reels & Multi-Channel Campaigns",
    year: "2025",
    chip: { label: "Reach", value: "12.4M" },
    offset: "md:translate-y-24",
  },
  {
    img: beauty,
    title: "Lumière Beauty",
    sub: "Product Creatives & Creator Network",
    year: "2024",
    chip: { label: "Engagement", value: "9.8%" },
    offset: "",
  },
  {
    img: fintech,
    title: "Meridian Capital",
    sub: "Brand System & Global Campaign",
    year: "2024",
    chip: { label: "Pipeline", value: "$24M" },
    offset: "md:translate-y-24",
  },
];

export function Portfolio() {
  return (
    <section id="work" className="py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <h2 className="text-5xl md:text-6xl font-serif">
            Selected <span className="text-brand-accent italic">Artifacts</span>
          </h2>
          <p className="text-brand-muted max-w-xs text-sm">
            A glimpse into the digital narratives we construct for market leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-8 md:pb-32">
          {works.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.1 }}
              className={`space-y-6 ${w.offset}`}
            >
              <div className="relative overflow-hidden rounded-2xl bg-brand-surface group">
                <img
                  src={w.img}
                  alt={w.title}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="w-full aspect-[3/2] object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Floating analytics chip */}
                <div className="absolute top-5 right-5 bg-black/70 backdrop-blur-xl border border-white/10 rounded-xl p-3.5 min-w-[140px]">
                  <p className="text-[9px] font-mono uppercase tracking-widest text-brand-muted mb-1">
                    {w.chip.label}
                  </p>
                  <div className="flex items-end justify-between gap-3">
                    <span className="text-xl font-serif italic">{w.chip.value}</span>
                    <div className="flex items-end gap-0.5 h-5">
                      {[40, 60, 50, 80, 100].map((h, idx) => (
                        <div
                          key={idx}
                          style={{ height: `${h}%` }}
                          className="w-1 bg-brand-accent rounded-sm"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-medium">{w.title}</h4>
                  <p className="text-brand-muted text-sm mt-1">{w.sub}</p>
                </div>
                <span className="text-brand-accent font-mono text-xs">{w.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
