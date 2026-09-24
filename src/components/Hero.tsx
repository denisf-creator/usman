import { useState } from 'react';
import { HeroCanvas } from './HeroCanvas';

interface HeroProps {
  onOpenExplore: () => void;
  onOpenDownload: () => void;
}

export function Hero({ onOpenExplore, onOpenDownload }: HeroProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadClick = () => {
    setIsDownloading(true);
    setTimeout(() => {
      onOpenDownload();
      setIsDownloading(false);
    }, 280);
  };
  return (
    <section
      id="top"
      className="relative w-full px-4 sm:px-6 pt-24 sm:pt-28 pb-14 sm:pb-16 overflow-hidden bg-[#050505] flex flex-col items-center"
    >
      {/* Background Interactive Neural Silicon Canvas */}
      <HeroCanvas />

      {/* Static Atmospheric Liquid Light Blobs (Zero keyframe vertical motion to keep hero stationary) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-[#76B900]/[0.07] blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 w-[350px] h-[250px] bg-[#8CFF00]/[0.04] blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[200px] bg-[#76B900]/[0.03] blur-[90px] pointer-events-none rounded-full" />

      {/* Main Liquid Glass Panel (Dead stationary: zero translateY, zero margin change, pure box-shadow/opacity glow) */}
      <div className="dlss-hero-card group relative z-10 w-full max-w-4xl mx-auto rounded-[28px] sm:rounded-[36px] liquid-glass p-6 sm:p-10 md:p-12 text-center flex flex-col items-center glass-reflection shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-[border-color,box-shadow,background-color] duration-500 ease-out hover:border-[#76B900]/35 hover:bg-[rgba(24,24,24,0.65)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_50px_rgba(118,185,0,0.18)]">
        {/* Emerald Glow Halo (Strictly opacity/box-shadow only: no position or size changes) */}
        <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-b from-[#76B900]/[0.09] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Subtle Liquid Glow Accent within Glass */}
        <div className="absolute top-0 right-1/4 w-64 h-24 bg-[#76B900]/[0.08] blur-2xl pointer-events-none rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Subtle, unboxed category anchor */}
        <div className="relative z-10 flex items-center gap-2 text-[11px] font-semibold tracking-[0.25em] uppercase text-[#76B900] mb-4">
          <span>NVIDIA RTX ARCHITECTURE</span>
          <span className="text-white/20">/</span>
          <span className="text-[#929292]">NEURAL GRAPHICS 5.0</span>
        </div>

        {/* Main Display Title */}
        <h1 className="relative z-10 text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tight text-[#F5F5F5] leading-none mb-4 select-none font-display drop-shadow-[0_8px_20px_rgba(0,0,0,0.7)] group-hover:text-white transition-colors duration-500">
          DLSS 5
        </h1>

        {/* Subtitle */}
        <p className="relative z-10 text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-[#F5F5F5] mb-3 max-w-2xl text-balance">
          The next generation of AI-powered graphics.
        </p>

        {/* Descriptive Body */}
        <p className="relative z-10 text-sm sm:text-base text-[#929292] max-w-xl font-light leading-relaxed mb-7 text-balance">
          Experience cinematic realism, intelligent rendering and unprecedented
          visual fidelity powered by NVIDIA AI.
        </p>

        {/* CTAs (Compact Rounded Pill Glass-Style) */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          {/* Primary Pill Button with smooth fluid click animation */}
          <button
            onClick={handleDownloadClick}
            className={`group relative overflow-hidden w-full sm:w-auto px-7 py-3 text-xs font-semibold tracking-wider uppercase text-black bg-[#76B900] hover:bg-[#8CFF00] rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(118,185,0,0.35)] hover:shadow-[0_0_35px_rgba(140,255,0,0.55)] cursor-pointer whitespace-nowrap flex items-center justify-center gap-2 active:scale-95 ${
              isDownloading ? 'scale-95 bg-[#8CFF00] shadow-[0_0_45px_rgba(140,255,0,0.7)]' : ''
            }`}
          >
            {/* Outward Shockwave Ripple on click */}
            {isDownloading && (
              <span className="absolute inset-0 rounded-full border-2 border-[#8CFF00] animate-button-ripple pointer-events-none" />
            )}

            {/* Subtle light shimmer sweep */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] pointer-events-none" />

            {/* Icon with smooth bounce/drop on click */}
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                isDownloading ? 'translate-y-1 scale-110' : 'group-hover:translate-y-0.5'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="relative z-10 transition-transform duration-200">Download</span>
          </button>

          {/* Secondary Pill Button - Smooth slide navigation to DLSS 5 */}
          <a
            href="#dlss5"
            className="w-full sm:w-auto px-7 py-3 text-xs font-semibold tracking-wider uppercase text-[#F5F5F5] bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-white/25 rounded-full transition-all duration-300 text-center whitespace-nowrap cursor-pointer backdrop-blur-md active:scale-95 inline-flex items-center justify-center gap-1.5"
          >
            <span>Explore DLSS 5</span>
            <svg className="w-3.5 h-3.5 text-[#76B900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>

          {/* Minimalist Link */}
          <a
            href="#technology"
            className="w-full sm:w-auto px-5 py-3 text-xs font-semibold tracking-wider uppercase text-[#929292] hover:text-white transition-all duration-300 text-center whitespace-nowrap"
          >
            Technology
          </a>
        </div>

        {/* Unboxed Metadata Proof Row */}
        <div className="relative z-10 mt-8 pt-5 border-t border-white/[0.06] w-full max-w-2xl flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] tracking-wider text-[#929292]">
          <span>Path Tracing Reconstruction</span>
          <span className="text-white/20">·</span>
          <span>Optical Neural Flow 2.0</span>
          <span className="text-white/20">·</span>
          <span>Tensor Core 5.0</span>
          <span className="text-white/20">·</span>
          <span>Reflex Latency Sync</span>
        </div>
      </div>

      {/* Bottom atmospheric gradient fade into section#dlss5 */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-transparent pointer-events-none z-[5]" />

      {/* Optical glowing beam seam connecting the two slides */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-[#76B900]/30 to-transparent pointer-events-none z-[6]" />
    </section>
  );
}
