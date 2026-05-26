import { motion } from "framer-motion";
import jewelry from "@/assets/industry-jewelry.jpg";
import health from "@/assets/industry-health.jpg";
import realestate from "@/assets/industry-realestate.jpg";

const tiles = [
  { img: jewelry, tag: "Luxury Retail", title: "Ethereal Collections", offset: "" },
  { img: health, tag: "Health & Tech", title: "NexGen Wellness", offset: "md:mt-20" },
  { img: realestate, tag: "Real Estate", title: "Prism Residences", offset: "" },
];

export function IndustryShowcase() {
  return (
    <section className="py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="font-serif text-4xl md:text-5xl">
            Brands we've <span className="italic text-brand-accent">elevated.</span>
          </h2>
          <p className="text-brand-muted max-w-sm text-sm">
            From boutique houses to global enterprises — every vertical, every market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tiles.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-2xl aspect-[4/5] ${t.offset}`}
            >
              <img
                src={t.img}
                alt={t.title}
                loading="lazy"
                width={800}
                height={1000}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/30 to-transparent flex flex-col justify-end p-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-brand-accent mb-2">
                  {t.tag}
                </p>
                <h3 className="text-2xl font-serif italic">{t.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
