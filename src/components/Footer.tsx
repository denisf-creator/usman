import { NvidiaLogo } from './NvidiaLogo';

export function Footer() {
  return (
    <footer className="py-16 bg-[#050505] border-t border-white/[0.06] text-[#929292]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          {/* Left: NVIDIA Logo */}
          <div className="shrink-0">
            <NvidiaLogo />
          </div>

          {/* Links with rounded pill hover */}
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs tracking-wider">
            <a href="#top" className="hover:text-white transition-colors duration-200">
              NVIDIA
            </a>
            <a href="#dlss5" className="hover:text-white transition-colors duration-200">
              DLSS
            </a>
            <a href="#technology" className="hover:text-white transition-colors duration-200">
              Developers
            </a>
            <a href="#download" className="hover:text-white transition-colors duration-200">
              Downloads
            </a>
            <a href="#faq" className="hover:text-white transition-colors duration-200">
              Support
            </a>
            <a href="#privacy" onClick={(e) => { e.preventDefault(); }} className="hover:text-white transition-colors duration-200">
              Privacy
            </a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); }} className="hover:text-white transition-colors duration-200">
              Terms
            </a>
          </nav>
        </div>

        {/* Bottom copyright notice */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-[#929292]/70 gap-4">
          <p>© 2026 NVIDIA Corporation. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>GeForce RTX · DLSS 5 · NVIDIA Reflex</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
