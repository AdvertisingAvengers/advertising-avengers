export function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-brand-muted uppercase tracking-[0.25em]">
      <div>© 2026 Aetheria Studios — Creative Powerhouse</div>
      <div className="flex gap-8">
        <a href="#" className="hover:text-brand-accent transition-colors">Privacy</a>
        <a href="#" className="hover:text-brand-accent transition-colors">Terms</a>
        <a href="#" className="hover:text-brand-accent transition-colors">AI Ethics</a>
      </div>
    </footer>
  );
}
