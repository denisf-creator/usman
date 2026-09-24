interface FinalCTAProps {
  onOpenExplore: () => void;
  onOpenDownload: () => void;
}

export function FinalCTA({ onOpenExplore, onOpenDownload }: FinalCTAProps) {
  return (
    <section className="py-28 sm:py-36 bg-[#050505] relative overflow-hidden text-center px-4 sm:px-6">
      {/* Liquid Organic Blobs behind glass */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#76B900]/[0.06] blur-[140px] pointer-events-none rounded-full animate-liquid-drift" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[300px] bg-[#8CFF00]/[0.04] blur-[120px] pointer-events-none rounded-full animate-liquid-drift-slow" />

      {/* Floating Centerpiece Glass Panel */}
      <div className="relative z-10 max-w-4xl mx-auto rounded-[36px] sm:rounded-[44px] liquid-glass glass-reflection p-10 sm:p-16 md:p-20 shadow-[0_30px_70px_rgba(0,0,0,0.85)] flex flex-col items-center">
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#76B900] mb-6">
          The Future of Real-Time Graphics
        </span>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F5] font-display mb-6 text-balance">
          See what AI can become.
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-[#929292] max-w-2xl font-light leading-relaxed mb-10 text-balance">
          Experience the next generation of graphics with NVIDIA DLSS 5.
        </p>

        {/* Pill Glass Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenDownload}
            className="w-full sm:w-auto px-9 py-4 text-xs font-semibold tracking-wider uppercase text-black bg-[#76B900] hover:bg-[#8CFF00] rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(118,185,0,0.4)] hover:shadow-[0_0_45px_rgba(140,255,0,0.6)] cursor-pointer whitespace-nowrap active:scale-[0.98] flex items-center justify-center gap-2.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download</span>
          </button>

          <button
            onClick={onOpenExplore}
            className="w-full sm:w-auto px-8 py-4 text-xs font-semibold tracking-wider uppercase text-[#F5F5F5] bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-white/25 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap backdrop-blur-md active:scale-[0.98]"
          >
            Explore Overview
          </button>
        </div>
      </div>
    </section>
  );
}
