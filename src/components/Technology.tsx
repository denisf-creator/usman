import { useState } from 'react';

export function Technology() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const techCards = [
    {
      id: 1,
      num: "01",
      title: "AI Rendering",
      tagline: "Intelligent image generation and reconstruction.",
      description:
        "DLSS 5 utilizes an advanced multi-frame neural transformer that replaces hand-tuned denoisers with an AI model trained to reconstruct ray-traced pixels with sub-pixel clarity and zero ghosting.",
      details: [
        "Neural Denoising across all light bounces",
        "Sub-pixel geometric edge reconstruction",
        "Spatial and temporal coherence verification",
      ],
      diagramType: "neural",
    },
    {
      id: 2,
      num: "02",
      title: "Cinematic Detail",
      tagline: "More realistic lighting, materials and environments.",
      description:
        "By solving full path-traced indirect illumination, subsurface scattering in skin, and micro-surface roughness, DLSS 5 reproduces physical lighting interactions previously reserved for offline cinema render farms.",
      details: [
        "Full path-traced direct and indirect illumination",
        "Micro-facet bidirectional reflectance (BRDF)",
        "Volumetric mist, smoke and liquid caustics",
      ],
      diagramType: "light",
    },
    {
      id: 3,
      num: "03",
      title: "Performance",
      tagline: "High visual fidelity without sacrificing smooth gameplay.",
      description:
        "Harnessing dedicated 5th-Generation Tensor Cores, DLSS 5 achieves up to 4× higher framerates while simultaneously lowering end-to-end system latency through integrated NVIDIA Reflex 2.0 synchrony.",
      details: [
        "Up to 4× framerate multiplier over native",
        "Ultra-low latency with hardware Reflex integration",
        "Dynamic thermal and power envelope optimization",
      ],
      diagramType: "performance",
    },
  ];

  return (
    <section
      id="technology"
      className="py-28 sm:py-36 bg-[#050505] relative overflow-hidden"
    >
      {/* Soft Ambient Organic Blob behind cards */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#76B900]/[0.035] blur-[150px] pointer-events-none rounded-full animate-liquid-drift" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#76B900] block mb-4">
            Under The Hood
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F5F5] font-display mb-6">
            Powered by NVIDIA AI
          </h2>
          <p className="text-base sm:text-lg text-[#929292] font-light leading-relaxed">
            Three foundational neural breakthroughs operating harmoniously on RTX Tensor Cores to pioneer the next era of visual computing.
          </p>
        </div>

        {/* 3 Rounded Liquid Glass Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {techCards.map((card, idx) => {
            const isHovered = activeCard === idx;
            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
                className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-[28px] sm:rounded-[32px] liquid-glass-card glass-reflection cursor-default"
              >
                {/* Subtle emerald light spot inside card glass */}
                <div
                  className={`absolute -top-10 -right-10 w-44 h-44 bg-[#76B900]/[0.08] blur-2xl rounded-full transition-opacity duration-500 pointer-events-none ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div>
                  {/* Numerical index and subtle status */}
                  <div className="flex items-center justify-between text-xs text-[#929292] mb-8">
                    <span className="font-mono text-[#76B900] tracking-wider text-sm">
                      {card.num}
                    </span>
                    <span className="tracking-widest uppercase text-[11px] opacity-70 group-hover:text-white transition-colors">
                      NVIDIA TENSOR ENGINE
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] mb-3 group-hover:text-white transition-colors font-display">
                    {card.title}
                  </h3>

                  <p className="text-sm font-medium text-[#76B900] mb-5 leading-relaxed">
                    {card.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#929292] font-light leading-relaxed mb-8">
                    {card.description}
                  </p>
                </div>

                <div>
                  {/* Schematic Interactive Element */}
                  <div className="py-4 px-4 bg-black/40 rounded-[18px] border border-white/[0.05] mb-6">
                    {card.diagramType === 'neural' && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-[11px] font-mono text-[#929292]">
                          <span>NEURAL RECONSTRUCTION</span>
                          <span className="text-[#76B900]">100% COHERENT</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#76B900] to-[#8CFF00] transition-all duration-700"
                            style={{ width: isHovered ? '98%' : '85%' }}
                          />
                        </div>
                      </div>
                    )}

                    {card.diagramType === 'light' && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-[11px] font-mono text-[#929292]">
                          <span>PATH TRACE BOUNCES</span>
                          <span className="text-[#76B900]">INFINITE CAUSTICS</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#76B900] to-[#8CFF00] transition-all duration-700"
                            style={{ width: isHovered ? '100%' : '90%' }}
                          />
                        </div>
                      </div>
                    )}

                    {card.diagramType === 'performance' && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-[11px] font-mono text-[#929292]">
                          <span>FRAME MULTIPLIER</span>
                          <span className="text-[#76B900]">4.2× NATIVE</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#76B900] to-[#8CFF00] transition-all duration-700"
                            style={{ width: isHovered ? '95%' : '80%' }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bullet specs */}
                  <ul className="space-y-2 pt-2 border-t border-white/[0.05]">
                    {card.details.map((detail, dIdx) => (
                      <li
                        key={dIdx}
                        className="text-xs text-[#929292] flex items-center gap-2 group-hover:text-[#F5F5F5] transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#76B900] shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
