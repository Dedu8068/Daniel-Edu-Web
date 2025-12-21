export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-royal/90 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Name */}
        <a href="/" className="text-2xl font-heading font-bold tracking-wide">
          Daniel <span className="text-gold">Edu</span>
        </a>

        {/* Navigation Links */}
        <div className="flex gap-6 md:gap-8 text-sm uppercase tracking-wider">

          <a href="/portfolio" className="hover:text-gold transition">Portfolio</a>
          <a href="/reels" className="hover:text-gold transition">Reels</a>
          <a href="/voiceover" className="hover:text-gold transition">Voice</a>
          <a href="/ugc" className="hover:text-gold transition">UGC</a>
          <a href="/contact" className="hover:text-gold transition">Contact</a>
        </div>

      </div>
    </nav>
  );
}
