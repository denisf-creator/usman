import { useState, useEffect } from 'react';
import { NvidiaLogo } from './NvidiaLogo';

interface HeaderProps {
  onOpenExplore: () => void;
  onOpenDownload: () => void;
}

export function Header({ onOpenExplore, onOpenDownload }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadClick = () => {
    setIsDownloading(true);
    setTimeout(() => {
      onOpenDownload();
      setIsDownloading(false);
    }, 280);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-4 sm:top-5 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      <div
        className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-500 ${
          isScrolled
            ? 'liquid-glass-nav py-2.5 px-5 sm:px-6 shadow-[0_15px_35px_rgba(0,0,0,0.85)]'
            : 'liquid-glass-nav py-3 px-6 sm:px-8 shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
        } flex items-center justify-between gap-4`}
      >
        {/* Brand Zone */}
        <a
          href="#top"
          className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-90 shrink-0"
          aria-label="NVIDIA DLSS 5"
        >
          <NvidiaLogo />
        </a>

        {/* Centered Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium tracking-wide text-[#929292]">
          <a
            href="#dlss5"
            className="hover:text-white transition-colors duration-300"
          >
            DLSS 5
          </a>
          <a
            href="#technology"
            className="hover:text-white transition-colors duration-300"
          >
            Technology
          </a>
          <a
            href="#features"
            className="hover:text-white transition-colors duration-300"
          >
            Features
          </a>
          <a
            href="#games"
            className="hover:text-white transition-colors duration-300"
          >
            Games
          </a>
          <button
            onClick={onOpenDownload}
            className="hover:text-white transition-colors duration-300 cursor-pointer"
          >
            Download
          </button>
          <a
            href="#faq"
            className="hover:text-white transition-colors duration-300"
          >
            FAQ
          </a>
        </nav>

        {/* Action Buttons (Pill Glass Style) */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handleDownloadClick}
            className={`group relative overflow-hidden px-4 py-2 text-xs font-semibold tracking-wider uppercase text-black bg-[#76B900] hover:bg-[#8CFF00] rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(118,185,0,0.35)] hover:shadow-[0_0_30px_rgba(140,255,0,0.55)] cursor-pointer flex items-center gap-1.5 whitespace-nowrap active:scale-[0.95] ${
              isDownloading ? 'scale-95 bg-[#8CFF00] shadow-[0_0_35px_rgba(140,255,0,0.7)]' : ''
            }`}
          >
            {/* Outward Shockwave Ripple on click */}
            {isDownloading && (
              <span className="absolute inset-0 rounded-full border-2 border-[#8CFF00] animate-button-ripple pointer-events-none" />
            )}

            {/* Shimmer sweep */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] pointer-events-none" />

            <svg
              className={`w-3.5 h-3.5 transition-transform duration-300 ${
                isDownloading ? 'translate-y-0.5 scale-110' : 'group-hover:translate-y-0.5'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="relative z-10">Download</span>
          </button>

          <button
            onClick={onOpenExplore}
            className="hidden sm:inline-flex px-4 py-2 text-xs font-medium tracking-wide text-[#F5F5F5] bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-full transition-all duration-300 whitespace-nowrap hover:text-white cursor-pointer active:scale-[0.97]"
          >
            Explore
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#929292] hover:text-white p-1.5 rounded-full hover:bg-white/5 transition-colors"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Floating Glass */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-16 left-4 right-4 liquid-glass-nav rounded-[24px] p-6 shadow-2xl space-y-3 md:hidden">
          <a
            href="#dlss5"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-[#929292] hover:text-white transition-colors"
          >
            DLSS 5
          </a>
          <a
            href="#technology"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-[#929292] hover:text-white transition-colors"
          >
            Technology
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-[#929292] hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#games"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-[#929292] hover:text-white transition-colors"
          >
            Games
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDownload();
            }}
            className="block w-full text-left py-2 text-sm text-[#929292] hover:text-white transition-colors cursor-pointer"
          >
            Download
          </button>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-[#929292] hover:text-white transition-colors"
          >
            FAQ
          </a>
        </div>
      )}
    </header>
  );
}
