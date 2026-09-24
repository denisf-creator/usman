import { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';

interface SceneData {
  id: string;
  name: string;
  game: string;
  fpsBefore: number;
  fpsAfter: number;
  description: string;
  beforeDetails: string;
  afterDetails: string;
  // Canvas rendering parameters for each scene
  themeColor: string;
}

const scenes: SceneData[] = [
  {
    id: 'cyberpunk',
    name: 'Cyberpunk Boulevard: Rain Reflections',
    game: 'Night City: Overdrive',
    fpsBefore: 38,
    fpsAfter: 154,
    description: 'Path-traced indirect illumination bouncing on wet asphalt with full neural ray reconstruction.',
    beforeDetails: 'Native 1080p · Aliased light caustics · Temporal noise',
    afterDetails: 'DLSS 5 4K · Neural sub-pixel clarity · Clean multi-bounce reflections',
    themeColor: '#00D2FF',
  },
  {
    id: 'mythic',
    name: 'Temple of the Black Myth: Pine Forest',
    game: 'Ancient Highlands',
    fpsBefore: 42,
    fpsAfter: 162,
    description: 'Volumetric atmospheric fog with millions of pine needles resolved through micro-geometry AI.',
    beforeDetails: 'Native 1080p · Shadow penumbra blur · Foliage flicker',
    afterDetails: 'DLSS 5 4K · Neural micro-geometry · Accurate volumetric god rays',
    themeColor: '#FF9900',
  },
  {
    id: 'deepspace',
    name: 'Orbital Ring Reactor: Titanium Hall',
    game: 'Void Odyssey',
    fpsBefore: 32,
    fpsAfter: 146,
    description: 'Micro-facet metal specular reflections and zero-G particle plasma with instant tensor denoising.',
    beforeDetails: 'Native 1080p · Specular roughness noise · Temporal ghosting',
    afterDetails: 'DLSS 5 4K · Physical BRDF radiance · Zero-latency motion flow',
    themeColor: '#8CFF00',
  },
];

export function VisualShowcase() {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPos, setMagnifierPos] = useState({ x: 50, y: 50 });

  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasBeforeRef = useRef<HTMLCanvasElement | null>(null);
  const canvasAfterRef = useRef<HTMLCanvasElement | null>(null);

  const scene = scenes[activeSceneIndex];

  // Render procedural high-end cinematic scenes to canvas
  useEffect(() => {
    const drawBefore = (canvas: HTMLCanvasElement, sc: SceneData) => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const w = canvas.width;
      const h = canvas.height;

      // Dark futuristic atmospheric base
      const bg = ctx.createLinearGradient(0, 0, w, h);
      bg.addColorStop(0, '#0d1117');
      bg.addColorStop(0.5, '#05070a');
      bg.addColorStop(1, '#000000');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      if (sc.id === 'cyberpunk') {
        // Perspective city grid
        ctx.strokeStyle = 'rgba(0, 210, 255, 0.15)';
        ctx.lineWidth = 2;
        // Horizon
        const horizY = h * 0.45;

        // Low resolution & chromatic blur simulation for "Before"
        for (let i = -10; i <= 20; i++) {
          ctx.beginPath();
          ctx.moveTo(w * 0.5, horizY);
          ctx.lineTo(i * (w / 10), h);
          ctx.stroke();
        }

        // Distant skyscrapers with pixelated blockiness
        for (let b = 0; b < 12; b++) {
          const bw = 40 + (b % 4) * 25;
          const bh = 80 + (b % 6) * 45;
          const bx = b * 80 + 30;
          ctx.fillStyle = '#0f172a';
          ctx.fillRect(bx, horizY - bh, bw, bh);

          // Noisy windows
          ctx.fillStyle = (b % 2 === 0) ? 'rgba(255, 180, 0, 0.4)' : 'rgba(0, 210, 255, 0.35)';
          for (let wy = horizY - bh + 10; wy < horizY - 10; wy += 14) {
            for (let wx = bx + 6; wx < bx + bw - 6; wx += 14) {
              if (Math.sin(wx * wy) > 0.1) {
                // Add noise/blur
                ctx.fillRect(wx, wy, 8, 8);
              }
            }
          }
        }

        // Wet pavement reflections (noisy, unrefined)
        const puddleGrad = ctx.createLinearGradient(0, horizY, 0, h);
        puddleGrad.addColorStop(0, 'rgba(0, 210, 255, 0.08)');
        puddleGrad.addColorStop(0.6, 'rgba(255, 0, 128, 0.12)');
        puddleGrad.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
        ctx.fillStyle = puddleGrad;
        ctx.fillRect(0, horizY, w, h);

        // Aliased pixel grid overlay representing native low-res
        ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
        for (let y = 0; y < h; y += 4) {
          ctx.fillRect(0, y, w, 1);
        }
      } else if (sc.id === 'mythic') {
        // Mountain pine forest (noisy before)
        const horizY = h * 0.4;
        // Fog
        ctx.fillStyle = 'rgba(180, 160, 140, 0.12)';
        ctx.fillRect(0, 0, w, h);

        // Mountain silhouettes
        ctx.fillStyle = '#0a100d';
        ctx.beginPath();
        ctx.moveTo(0, horizY + 40);
        ctx.lineTo(w * 0.3, horizY - 80);
        ctx.lineTo(w * 0.6, horizY + 30);
        ctx.lineTo(w * 0.85, horizY - 110);
        ctx.lineTo(w, horizY + 60);
        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.fill();

        // Noisy foliage dots
        ctx.fillStyle = 'rgba(50, 90, 60, 0.3)';
        for (let i = 0; i < 200; i++) {
          const px = (i * 73) % w;
          const py = horizY + ((i * 47) % (h - horizY));
          ctx.beginPath();
          ctx.arc(px, py, 6, 0, Math.PI * 2);
          ctx.fill();
        }

        // Low-res scanlines
        ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
        for (let y = 0; y < h; y += 5) {
          ctx.fillRect(0, y, w, 2);
        }
      } else {
        // Deep space reactor hall
        const cx = w * 0.5;
        const cy = h * 0.5;

        // Concentric reactor rings (noisy in before)
        for (let r = 50; r < Math.max(w, h); r += 45) {
          ctx.strokeStyle = 'rgba(140, 255, 0, 0.08)';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Noise flecks
        ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
        for (let i = 0; i < 300; i++) {
          const rx = (i * 123) % w;
          const ry = (i * 321) % h;
          ctx.fillRect(rx, ry, 2, 2);
        }
      }
    };

    const drawAfter = (canvas: HTMLCanvasElement, sc: SceneData) => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const w = canvas.width;
      const h = canvas.height;

      // Ultra-deep, crisp high-dynamic-range atmosphere
      const bg = ctx.createLinearGradient(0, 0, w, h);
      bg.addColorStop(0, '#05070a');
      bg.addColorStop(0.5, '#020305');
      bg.addColorStop(1, '#000000');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      if (sc.id === 'cyberpunk') {
        const horizY = h * 0.45;

        // Razor-sharp path-traced perspective grid
        ctx.strokeStyle = 'rgba(0, 235, 255, 0.4)';
        ctx.lineWidth = 1;
        for (let i = -10; i <= 20; i++) {
          ctx.beginPath();
          ctx.moveTo(w * 0.5, horizY);
          ctx.lineTo(i * (w / 10), h);
          ctx.stroke();
        }

        // Crisp skyscrapers with path-traced lighting and specular glow
        for (let b = 0; b < 12; b++) {
          const bw = 40 + (b % 4) * 25;
          const bh = 80 + (b % 6) * 45;
          const bx = b * 80 + 30;

          // Building core with micro-details
          ctx.fillStyle = '#0a101d';
          ctx.fillRect(bx, horizY - bh, bw, bh);

          // Subtle neon edge glow
          ctx.strokeStyle = (b % 2 === 0) ? '#ff007f' : '#00d2ff';
          ctx.lineWidth = 1.5;
          ctx.strokeRect(bx, horizY - bh, bw, bh);

          // Sharp micro-windows with variable intensity
          for (let wy = horizY - bh + 8; wy < horizY - 10; wy += 8) {
            for (let wx = bx + 5; wx < bx + bw - 5; wx += 8) {
              if (Math.sin(wx * wy * 1.5) > -0.2) {
                ctx.fillStyle = (b % 3 === 0) ? '#76B900' : (b % 2 === 0 ? '#ffb400' : '#00e5ff');
                ctx.fillRect(wx, wy, 4, 4);
              }
            }
          }
        }

        // Ray-traced mirror reflection on wet asphalt
        const puddleGrad = ctx.createLinearGradient(0, horizY, 0, h);
        puddleGrad.addColorStop(0, 'rgba(0, 210, 255, 0.28)');
        puddleGrad.addColorStop(0.4, 'rgba(255, 0, 128, 0.22)');
        puddleGrad.addColorStop(0.7, 'rgba(118, 185, 0, 0.15)');
        puddleGrad.addColorStop(1, 'rgba(0, 0, 0, 0.95)');
        ctx.fillStyle = puddleGrad;
        ctx.fillRect(0, horizY, w, h);

        // Specular rain caustics (micro-details)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        for (let c = 0; c < 150; c++) {
          const cx = (c * 97) % w;
          const cy = horizY + ((c * 53) % (h - horizY));
          ctx.beginPath();
          ctx.arc(cx, cy, 1, 0, Math.PI * 2);
          ctx.fill();
        }

        // DLSS 5 High-res watermark trace line
        ctx.strokeStyle = 'rgba(118, 185, 0, 0.4)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, h - 2);
        ctx.lineTo(w, h - 2);
        ctx.stroke();

      } else if (sc.id === 'mythic') {
        const horizY = h * 0.4;

        // Crisp volumetric light shafts (god rays)
        const rayGrad = ctx.createRadialGradient(w * 0.5, 0, 20, w * 0.5, h, w);
        rayGrad.addColorStop(0, 'rgba(255, 230, 180, 0.35)');
        rayGrad.addColorStop(0.5, 'rgba(255, 200, 120, 0.08)');
        rayGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = rayGrad;
        ctx.fillRect(0, 0, w, h);

        // High-precision mountain geometry
        ctx.fillStyle = '#070c08';
        ctx.beginPath();
        ctx.moveTo(0, horizY + 40);
        ctx.lineTo(w * 0.3, horizY - 80);
        ctx.lineTo(w * 0.6, horizY + 30);
        ctx.lineTo(w * 0.85, horizY - 110);
        ctx.lineTo(w, horizY + 60);
        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.fill();

        // Crisp pine needle foliage with path-traced subsurface scattering
        for (let i = 0; i < 400; i++) {
          const px = (i * 73) % w;
          const py = horizY + ((i * 47) % (h - horizY));
          ctx.fillStyle = (i % 3 === 0) ? '#4ade80' : '#166534';
          ctx.fillRect(px, py, 2.5, 8);
        }

      } else {
        // Crisp deep space reactor
        const cx = w * 0.5;
        const cy = h * 0.5;

        // Razor sharp titanium concentric structures
        for (let r = 50; r < Math.max(w, h); r += 45) {
          ctx.strokeStyle = (r % 90 === 0) ? 'rgba(118, 185, 0, 0.45)' : 'rgba(255, 255, 255, 0.18)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Crisp photon plasma core
        const coreGrad = ctx.createRadialGradient(cx, cy, 5, cx, cy, 90);
        coreGrad.addColorStop(0, '#FFFFFF');
        coreGrad.addColorStop(0.3, '#8CFF00');
        coreGrad.addColorStop(0.7, '#76B900');
        coreGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = coreGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, 90, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    if (canvasBeforeRef.current) {
      canvasBeforeRef.current.width = 1280;
      canvasBeforeRef.current.height = 720;
      drawBefore(canvasBeforeRef.current, scene);
    }
    if (canvasAfterRef.current) {
      canvasAfterRef.current.width = 1280;
      canvasAfterRef.current.height = 720;
      drawAfter(canvasAfterRef.current, scene);
    }
  }, [activeSceneIndex, scene]);

  // Handle slider drag / move
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);

    // Update magnifier relative coords
    const magX = (x / rect.width) * 100;
    setMagnifierPos((prev) => ({ ...prev, x: magX }));
  };

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const magY = (y / rect.height) * 100;
    setMagnifierPos((prev) => ({ ...prev, y: Math.max(0, Math.min(100, magY)) }));

    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  return (
    <section
      id="showcase"
      className="py-32 sm:py-40 bg-[#0A0A0A] border-t border-white/[0.06] relative select-none"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#76B900] block mb-3">
              Cinematic Comparison
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F5F5] font-display">
              Visual Showcase
            </h2>
          </div>

          {/* Interactive Scene Selector Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#111111] rounded-sm border border-white/[0.08] overflow-x-auto">
            {scenes.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveSceneIndex(idx)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xs transition-colors whitespace-nowrap cursor-pointer ${
                  activeSceneIndex === idx
                    ? 'bg-white/10 text-white shadow-sm border border-white/10'
                    : 'text-[#A0A0A0] hover:text-white'
                }`}
              >
                {s.name.split(':')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Main Interactive Split-Screen Showcase Canvas Frame */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => setIsDragging(false)}
          className="relative w-full aspect-video rounded-sm overflow-hidden bg-[#111111] border border-white/[0.08] cursor-ew-resize group shadow-2xl"
        >
          {/* Layer 1: "DLSS 5" Canvas (Full background) */}
          <canvas
            ref={canvasAfterRef}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Layer 2: "Before" Canvas (Clipped by slider position) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <canvas
              ref={canvasBeforeRef}
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
            />
          </div>

          {/* Vertical Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none shadow-[0_0_10px_rgba(255,255,255,0.7)]"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Center Drag Handle */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black/80 border border-white/40 flex items-center justify-center backdrop-blur-md shadow-lg">
              <svg
                className="w-3.5 h-3.5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l-3 3m0 0l3 3m-3-3h12m0 0l-3-3m3 3l-3 3"
                />
              </svg>
            </div>
          </div>

          {/* Top Labels: "Before" vs "DLSS 5" */}
          <div className="absolute top-6 left-6 z-20 pointer-events-none">
            <div className="bg-black/80 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-xs flex items-center gap-2">
              <span className="text-xs font-bold tracking-wider uppercase text-[#A0A0A0]">
                Before
              </span>
              <span className="text-xs text-white/30">|</span>
              <span className="text-xs font-mono text-white/80 tabular-nums">
                {scene.fpsBefore} FPS
              </span>
            </div>
          </div>

          <div className="absolute top-6 right-6 z-20 pointer-events-none">
            <div className="bg-black/80 backdrop-blur-md border border-[#76B900]/40 px-3.5 py-1.5 rounded-xs flex items-center gap-2 shadow-[0_0_15px_rgba(118,185,0,0.2)]">
              <span className="text-xs font-bold tracking-wider uppercase text-[#76B900]">
                DLSS 5
              </span>
              <span className="text-xs text-white/30">|</span>
              <span className="text-xs font-mono text-[#8CFF00] font-semibold tabular-nums">
                {scene.fpsAfter} FPS
              </span>
            </div>
          </div>

          {/* Bottom Prompt / Helper */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none bg-black/70 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-[11px] text-[#A0A0A0] tracking-wider uppercase">
            Drag slider to inspect AI Neural Reconstruction
          </div>
        </div>

        {/* Scene Info and Metrics Footer */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {scene.name}
            </h3>
            <p className="text-sm text-[#A0A0A0] leading-relaxed">
              {scene.description}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#A0A0A0]">
              <div className="flex items-center gap-2">
                <span className="text-white/40">Before:</span>
                <span>{scene.beforeDetails}</span>
              </div>
              <span className="text-white/20">·</span>
              <div className="flex items-center gap-2">
                <span className="text-[#76B900] font-medium">DLSS 5:</span>
                <span className="text-white">{scene.afterDetails}</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 p-6 bg-[#111111] rounded-sm border border-white/[0.08] flex items-center justify-between">
            <div>
              <div className="text-xs text-[#A0A0A0] uppercase tracking-wider mb-1">
                Framerate Uplift
              </div>
              <div className="text-3xl font-bold text-[#76B900] tabular-nums font-display">
                +{(Math.round(((scene.fpsAfter - scene.fpsBefore) / scene.fpsBefore) * 100))}%
              </div>
            </div>

            <div className="text-right">
              <div className="text-xs text-[#A0A0A0] uppercase tracking-wider mb-1">
                Frame Time Delta
              </div>
              <div className="text-xl font-semibold text-white tabular-nums">
                26.3ms <span className="text-[#76B900]">→ 6.4ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
