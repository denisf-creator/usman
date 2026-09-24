import { useState } from 'react';

interface BenchmarkGame {
  id: string;
  name: string;
  setting: string;
  nativeFps: number;
  dlss3Fps: number;
  dlss5Fps: number;
  nativeLatency: number;
  dlss5Latency: number;
  qualityIndex: string;
}

const benchmarkData: BenchmarkGame[] = [
  {
    id: 'cyberpunk',
    name: 'Cyberpunk 2077: Phantom Liberty',
    setting: '4K · Ray Tracing Overdrive · Max Settings',
    nativeFps: 24,
    dlss3Fps: 86,
    dlss5Fps: 142,
    nativeLatency: 78,
    dlss5Latency: 28,
    qualityIndex: 'Cinematic Path Tracing',
  },
  {
    id: 'wukong',
    name: 'Black Myth: Wukong',
    setting: '4K · Full Ray Tracing Cinematic · Very High',
    nativeFps: 31,
    dlss3Fps: 94,
    dlss5Fps: 156,
    nativeLatency: 64,
    dlss5Latency: 24,
    qualityIndex: 'Neural Foliage & Volumetrics',
  },
  {
    id: 'alanwake',
    name: 'Alan Wake 2',
    setting: '4K · Path Traced Direct & Indirect · High',
    nativeFps: 28,
    dlss3Fps: 91,
    dlss5Fps: 148,
    nativeLatency: 72,
    dlss5Latency: 26,
    qualityIndex: 'Full Specular Denoising',
  },
  {
    id: 'starwars',
    name: 'Star Wars Outlaws',
    setting: '4K · RTX Dynamic Direct Lighting · Ultra',
    nativeFps: 36,
    dlss3Fps: 104,
    dlss5Fps: 168,
    nativeLatency: 58,
    dlss5Latency: 21,
    qualityIndex: 'Real-Time Planetary Caustics',
  },
];

export function Performance() {
  const [selectedGame, setSelectedGame] = useState(0);
  const game = benchmarkData[selectedGame];

  // Scale max FPS for visual bar sizing
  const maxFps = 180;

  return (
    <section
      id="performance"
      className="py-32 sm:py-40 bg-[#0A0A0A] border-t border-white/[0.06] relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#76B900] block mb-3">
            Efficiency & Scalability
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F5F5] font-display mb-6">
            More detail. More intelligence.
          </h2>
          <p className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed">
            Neural reconstruction shifts the computational burden from brute-force hardware brute cycles to specialized Tensor calculations, delivering exponential framerate scaling with superior image clarity.
          </p>
        </div>

        {/* Minimalist Game Benchmark Selector */}
        <div className="flex items-center gap-2 p-1.5 bg-[#111111] rounded-sm border border-white/[0.08] mb-12 overflow-x-auto">
          {benchmarkData.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelectedGame(index)}
              className={`px-4 py-2 text-xs font-medium rounded-xs transition-all whitespace-nowrap cursor-pointer ${
                selectedGame === index
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'text-[#A0A0A0] hover:text-white'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Minimalist Visual Storytelling Chart Frame */}
        <div className="bg-[#111111] border border-white/[0.08] rounded-sm p-8 sm:p-12 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#76B900]/[0.03] blur-3xl pointer-events-none" />

          {/* Test setting subtitle */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-10 border-b border-white/[0.06] gap-4">
            <div>
              <span className="text-xs text-[#A0A0A0] uppercase tracking-wider block mb-1">
                Resolution & Presets
              </span>
              <span className="text-sm font-medium text-white">
                {game.setting}
              </span>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs text-[#A0A0A0] uppercase tracking-wider block mb-1">
                Visual Fidelity Profile
              </span>
              <span className="text-sm font-semibold text-[#76B900]">
                {game.qualityIndex}
              </span>
            </div>
          </div>

          {/* Performance Comparison Visual Bars */}
          <div className="space-y-8 max-w-4xl">
            {/* 1. DLSS 5 (Hero Bar) */}
            <div>
              <div className="flex items-center justify-between text-xs font-semibold mb-2">
                <span className="text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#76B900]" />
                  DLSS 5 Neural Reconstruction
                </span>
                <span className="text-xl font-bold font-mono text-[#8CFF00] tabular-nums">
                  {game.dlss5Fps} FPS
                </span>
              </div>
              <div className="h-6 w-full bg-white/[0.04] rounded-xs overflow-hidden relative p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-[#76B900] to-[#8CFF00] rounded-xs transition-all duration-700 ease-out relative"
                  style={{ width: `${(game.dlss5Fps / maxFps) * 100}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#A0A0A0] mt-1.5">
                <span>Full Neural Reconstruction + Optical Frame Generation</span>
                <span className="text-[#76B900] font-mono">
                  {(game.dlss5Fps / game.nativeFps).toFixed(1)}× performance scaling
                </span>
              </div>
            </div>

            {/* 2. DLSS 3 */}
            <div>
              <div className="flex items-center justify-between text-xs font-semibold mb-2">
                <span className="text-[#A0A0A0] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white/30" />
                  DLSS 3 Frame Generation
                </span>
                <span className="text-base font-bold font-mono text-white/80 tabular-nums">
                  {game.dlss3Fps} FPS
                </span>
              </div>
              <div className="h-4 w-full bg-white/[0.04] rounded-xs overflow-hidden p-0.5">
                <div
                  className="h-full bg-white/30 rounded-xs transition-all duration-700 ease-out"
                  style={{ width: `${(game.dlss3Fps / maxFps) * 100}%` }}
                />
              </div>
              <div className="text-[11px] text-[#A0A0A0] mt-1">
                Standard Optical Flow + TAA Denoiser
              </div>
            </div>

            {/* 3. Native 4K */}
            <div>
              <div className="flex items-center justify-between text-xs font-semibold mb-2">
                <span className="text-[#A0A0A0] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white/10" />
                  Native 4K (No DLSS)
                </span>
                <span className="text-base font-bold font-mono text-white/50 tabular-nums">
                  {game.nativeFps} FPS
                </span>
              </div>
              <div className="h-4 w-full bg-white/[0.04] rounded-xs overflow-hidden p-0.5">
                <div
                  className="h-full bg-white/15 rounded-xs transition-all duration-700 ease-out"
                  style={{ width: `${(game.nativeFps / maxFps) * 100}%` }}
                />
              </div>
              <div className="text-[11px] text-[#A0A0A0] mt-1">
                Raw Shader Core Brute Force
              </div>
            </div>
          </div>

          {/* Visual Storytelling Metrics Footer */}
          <div className="mt-14 pt-8 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <span className="text-xs text-[#A0A0A0] uppercase tracking-wider block mb-1">
                System Latency Drop
              </span>
              <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums font-display">
                {game.nativeLatency}ms <span className="text-[#76B900]">→ {game.dlss5Latency}ms</span>
              </div>
              <p className="text-xs text-[#A0A0A0] mt-1">
                Reflex 2.0 silicon synchrony eliminates frame queue lag.
              </p>
            </div>

            <div>
              <span className="text-xs text-[#A0A0A0] uppercase tracking-wider block mb-1">
                Watt per Frame Efficiency
              </span>
              <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums font-display">
                3.4<span className="text-[#76B900]">×</span>
              </div>
              <p className="text-xs text-[#A0A0A0] mt-1">
                Lower thermal output and reduced total system energy consumption.
              </p>
            </div>

            <div>
              <span className="text-xs text-[#A0A0A0] uppercase tracking-wider block mb-1">
                Image Reconstruction Index
              </span>
              <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums font-display">
                100<span className="text-[#76B900]">%</span>
              </div>
              <p className="text-xs text-[#A0A0A0] mt-1">
                Zero loss in microscopic edge fidelity or texture texture maps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
