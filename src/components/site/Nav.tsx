export function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 lg:px-10 py-6 flex justify-between items-center mix-blend-difference">
      <a href="#" className="text-xl font-semibold tracking-tighter text-white">
        Aetheria<span className="text-brand-accent">.</span>
      </a>
      <div className="hidden md:flex gap-10 text-xs uppercase tracking-[0.2em] font-medium text-white/90">
        <a href="#work" className="hover:text-brand-accent transition-colors">Portfolio</a>
        <a href="#capabilities" className="hover:text-brand-accent transition-colors">Solutions</a>
        <a href="#intelligence" className="hover:text-brand-accent transition-colors">Intelligence</a>
        <a href="#contact" className="hover:text-brand-accent transition-colors">Connect</a>
      </div>
      <a
        href="#contact"
        className="px-5 py-2.5 bg-white text-black text-[10px] uppercase tracking-[0.2em] font-bold rounded-full hover:bg-brand-accent hover:text-white transition-colors"
      >
        Book Consultation
      </a>
    </nav>
  );
}
