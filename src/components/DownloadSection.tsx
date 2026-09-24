interface DownloadSectionProps {
  onOpenDownload: () => void;
}

export function DownloadSection({ onOpenDownload }: DownloadSectionProps) {
  return (
    <section
      id="download"
      className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden"
    >
      {/* Soft ambient organic glow behind the glass card */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-[#76B900]/[0.045] blur-[150px] pointer-events-none rounded-full animate-liquid-drift" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="liquid-glass glass-reflection rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3 text-xs font-semibold tracking-widest uppercase text-[#76B900]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#76B900] shadow-[0_0_8px_#76B900]" />
              <span>Official Software Package</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F5] font-display mb-3">
              Download DLSS 5 Setup
            </h2>
            <p className="text-sm sm:text-base text-[#929292] font-light leading-relaxed mb-6">
              Get the latest official installer with 5th-Gen Tensor Core runtime models, Optical Neural Flow 2.0 drivers, and Reflex low-latency integration.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#929292]">
              <span>Windows 11 / 10 (64-bit)</span>
              <span className="text-white/20">·</span>
              <span>142 MB</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <button
              onClick={onOpenDownload}
              className="px-8 py-4 text-xs font-semibold tracking-wider uppercase text-black bg-[#76B900] hover:bg-[#8CFF00] rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(118,185,0,0.35)] hover:shadow-[0_0_40px_rgba(140,255,0,0.55)] cursor-pointer flex items-center justify-center gap-2.5 whitespace-nowrap active:scale-[0.98]"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
