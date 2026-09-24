export function Introduction() {
  return (
    <section
      id="dlss5"
      className="relative pt-16 sm:pt-24 pb-28 sm:pb-36 bg-[#050505] overflow-hidden scroll-mt-20 sm:scroll-mt-24 transition-colors duration-700"
    >
      {/* Seamless Ambient Transition Bridge from Hero slide */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[220px] bg-gradient-to-b from-[#76B900]/[0.06] via-[#76B900]/[0.015] to-transparent blur-[110px] pointer-events-none rounded-full" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-[#76B900]/25 to-transparent pointer-events-none" />

      {/* Ambient liquid glow behind the section */}
      <div className="absolute right-10 top-1/3 w-[500px] h-[350px] bg-[#76B900]/[0.04] blur-[140px] pointer-events-none rounded-full animate-liquid-drift" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Asymmetric Left Block: Large Typography */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#76B900]">
              The Neural Paradigm
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F5] leading-[1.08] font-display text-balance">
              Graphics.
              <br />
              Reimagined by AI.
            </h2>
          </div>

          {/* Asymmetric Right Block: Deep Technical Prose & Proof */}
          <div className="lg:col-span-5 lg:pt-14 space-y-8">
            <p className="text-lg sm:text-xl text-[#F5F5F5] font-light leading-relaxed">
              DLSS 5 departs from conventional light calculation. Rather than brute-forcing individual rays across millions of static cycles, our next-generation neural transformer model learns the behavior of light, materials, and motion to reconstruct photorealistic worlds in real time.
            </p>

            <p className="text-sm sm:text-base text-[#929292] font-light leading-relaxed">
              Trained on supercomputers using millions of high-resolution training frames, DLSS 5 synthesizes pristine image details, solves complex radiance caches, and anticipates temporal motion vectors — achieving fidelity that exceeds raw native rendering while drastically reducing GPU power consumption.
            </p>

            {/* Metrics Breakdown in Liquid Glass Pills */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-2 gap-4">
              <div className="group relative liquid-glass p-5 rounded-[24px] cursor-pointer overflow-hidden transition-all duration-300 ease-out hover:border-[#76B900]/45 hover:bg-[rgba(26,26,26,0.75)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.7),0_0_30px_rgba(118,185,0,0.2)]">
                {/* Emerald ambient glow aura on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#76B900]/[0.14] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#76B900]/[0.15] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-full" />

                <div className="relative z-10 text-3xl sm:text-4xl font-bold tracking-tight text-white tabular-nums font-display transition-colors duration-300">
                  16<span className="text-[#76B900] group-hover:text-[#8CFF00] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(118,185,0,0.7)]">×</span>
                </div>
                <div className="relative z-10 text-xs text-[#929292] group-hover:text-[#E0E0E0] mt-1 tracking-wide transition-colors duration-300">
                  Sub-pixel Reconstruction
                </div>
              </div>

              <div className="group relative liquid-glass p-5 rounded-[24px] cursor-pointer overflow-hidden transition-all duration-300 ease-out hover:border-[#76B900]/45 hover:bg-[rgba(26,26,26,0.75)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.7),0_0_30px_rgba(118,185,0,0.2)]">
                {/* Emerald ambient glow aura on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#76B900]/[0.14] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#76B900]/[0.15] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-full" />

                <div className="relative z-10 text-3xl sm:text-4xl font-bold tracking-tight text-white tabular-nums font-display transition-colors duration-300">
                  &lt;0.8<span className="text-[#76B900] group-hover:text-[#8CFF00] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(118,185,0,0.7)]">ms</span>
                </div>
                <div className="relative z-10 text-xs text-[#929292] group-hover:text-[#E0E0E0] mt-1 tracking-wide transition-colors duration-300">
                  Tensor Inference Latency
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Liquid Glass Architecture Banner */}
        <div className="mt-20">
          <div className="relative rounded-[32px] sm:rounded-[36px] liquid-glass glass-reflection p-8 sm:p-12 md:p-14 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#76B900]/[0.05] blur-3xl pointer-events-none rounded-full" />

            <div className="max-w-3xl">
              <div className="text-xs font-semibold tracking-widest uppercase text-[#76B900] mb-3">
                Architectural Shift
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#F5F5F5] mb-4 font-display">
                From Rasterization to Generative Neural Realism
              </h3>
              <p className="text-sm sm:text-base text-[#929292] font-light leading-relaxed mb-8">
                Traditional rendering processes pixels as isolated mathematical coordinates. DLSS 5 operates as an intelligent neural visual engine: parsing geometry buffers, optical motion vectors, and ray-traced radiance to continuously regenerate cinematic realism at native display refresh rates.
              </p>

              {/* Step Flow in 3 Rounded Glass Tiles */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-white/[0.08]">
                <div className="liquid-glass-card rounded-[22px] p-5">
                  <div className="text-xs text-[#76B900] font-mono tracking-wider mb-1">
                    01. INPUT
                  </div>
                  <div className="text-sm font-semibold text-white mb-1.5">
                    Raw Low-Res Radiance
                  </div>
                  <div className="text-xs text-[#929292] font-light leading-relaxed">
                    Sparse rays, motion vectors & depth buffers sampled in real time.
                  </div>
                </div>

                <div className="liquid-glass-card rounded-[22px] p-5">
                  <div className="text-xs text-[#76B900] font-mono tracking-wider mb-1">
                    02. SYNTHESIS
                  </div>
                  <div className="text-sm font-semibold text-white mb-1.5">
                    Transformer Neural Matrix
                  </div>
                  <div className="text-xs text-[#929292] font-light leading-relaxed">
                    5th-Gen Tensor Cores resolve noise, indirect bounces, and surface caustics.
                  </div>
                </div>

                <div className="liquid-glass-card rounded-[22px] p-5">
                  <div className="text-xs text-[#76B900] font-mono tracking-wider mb-1">
                    03. OUTPUT
                  </div>
                  <div className="text-sm font-semibold text-white mb-1.5">
                    Photorealistic 4K Frame
                  </div>
                  <div className="text-xs text-[#929292] font-light leading-relaxed">
                    Crystal-clear subpixel clarity with smooth multi-frame continuity.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
