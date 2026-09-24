interface FeatureItem {
  id: string;
  num: string;
  title: string;
  description: string;
}

const featuresList: FeatureItem[] = [
  {
    id: 'faces',
    num: '01',
    title: 'Realistic Faces',
    description: 'Skin, eyes, and fine details look authentic and human without artificial smoothing.',
  },
  {
    id: 'lighting',
    num: '02',
    title: 'Natural Lighting',
    description: 'Sunbeams, reflections, and shadows behave like the real world with zero ghosting.',
  },
  {
    id: 'environments',
    num: '03',
    title: 'Richer Worlds',
    description: 'Dense grass, distant trees, and complex scenery remain crisp without pixel shimmer.',
  },
  {
    id: 'fidelity',
    num: '04',
    title: 'Sharper Detail',
    description: 'Crystal-clear 4K picture quality that looks better than native resolution.',
  },
  {
    id: 'generation',
    num: '05',
    title: 'Fluid Motion',
    description: 'Up to 4× higher framerates for silky-smooth gameplay and instant control response.',
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="py-20 sm:py-28 bg-[#050505] relative overflow-hidden"
    >
      {/* Soft Ambient Organic Blob */}
      <div className="absolute right-1/3 top-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#76B900]/[0.03] blur-[140px] pointer-events-none rounded-full animate-liquid-drift-slow" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Compact Header */}
        <div className="max-w-2xl mb-12 sm:mb-14">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#76B900] block mb-3">
            AI Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F5] font-display mb-4">
            AI changes what pixels can become.
          </h2>
          <p className="text-sm sm:text-base text-[#929292] font-light leading-relaxed">
            Five core breakthroughs delivering clearer images, realistic lighting, and higher framerates in every game.
          </p>
        </div>

        {/* 5-Column Liquid Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {featuresList.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-[26px] liquid-glass-card glass-reflection flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#76B900] mb-4">
                  <span className="font-semibold text-sm">{item.num}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#76B900] opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_#76B900]" />
                </div>
                <h3 className="text-lg font-bold text-[#F5F5F5] font-display mb-2.5 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#929292] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
