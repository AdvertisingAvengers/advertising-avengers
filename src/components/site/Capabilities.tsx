import { motion } from "framer-motion";
import video from "@/assets/cap-video.jpg";
import brand from "@/assets/cap-brand.jpg";
import reels from "@/assets/cap-reels.jpg";
import product from "@/assets/cap-product.jpg";
import creator from "@/assets/cap-creator.jpg";
import social from "@/assets/cap-social.jpg";

const cards = [
  { img: video, title: "Video Ads", meta: "01 / Commercial film & motion" },
  { img: brand, title: "Brand Campaigns", meta: "02 / Identity & narrative" },
  { img: reels, title: "Reels & Shorts", meta: "03 / Vertical-first content" },
  { img: product, title: "Product Creatives", meta: "04 / Studio & lifestyle" },
  { img: creator, title: "Creator Marketing", meta: "05 / Influencer collab" },
  { img: social, title: "Social Campaigns", meta: "06 / Multi-channel growth" },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="py-32 px-6 lg:px-10 bg-brand-surface/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-accent">
              What We Create
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">
              Six disciplines. <span className="italic">One studio.</span>
            </h2>
          </div>
          <p className="text-brand-muted max-w-sm text-sm">
            A full-stack creative practice engineered for the velocity of the modern internet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-brand-surface aspect-[4/5]"
            >
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                width={800}
                height={600}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent" />
              <div className="relative h-full flex flex-col justify-between p-8">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                  {c.meta}
                </span>
                <div className="flex items-end justify-between">
                  <h3 className="font-serif italic text-3xl md:text-4xl">{c.title}</h3>
                  <span className="size-9 rounded-full border border-white/15 grid place-items-center group-hover:bg-brand-accent group-hover:border-brand-accent transition-colors">
                    <span className="block size-2 border-t border-r border-white -rotate-45 translate-x-[-1px]" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
