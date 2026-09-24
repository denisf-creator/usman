import { useEffect, useRef } from 'react';

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Neural silicon grid nodes representing tensor cores & photonic traces
    interface Node {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      connections: number[];
      pulsePhase: number;
      pulseSpeed: number;
      intensity: number;
    }

    let nodes: Node[] = [];

    const initNodes = () => {
      nodes = [];
      const cols = Math.max(6, Math.floor(width / 120));
      const rows = Math.max(5, Math.floor(height / 100));
      const spacingX = width / cols;
      const spacingY = height / rows;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const jitterX = (Math.random() - 0.5) * spacingX * 0.45;
          const jitterY = (Math.random() - 0.5) * spacingY * 0.45;
          const x = c * spacingX + spacingX * 0.5 + jitterX;
          const y = r * spacingY + spacingY * 0.5 + jitterY;

          nodes.push({
            x,
            y,
            baseX: x,
            baseY: y,
            connections: [],
            pulsePhase: Math.random() * Math.PI * 2,
            pulseSpeed: 0.01 + Math.random() * 0.015,
            intensity: Math.random() * 0.7 + 0.3,
          });
        }
      }

      // Compute nearest neighbor connections
      for (let i = 0; i < nodes.length; i++) {
        const dists: { index: number; dist: number }[] = [];
        for (let j = 0; j < nodes.length; j++) {
          if (i === j) continue;
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 155) {
            dists.push({ index: j, dist: d });
          }
        }
        dists.sort((a, b) => a.dist - b.dist);
        nodes[i].connections = dists.slice(0, 3).map((d) => d.index);
      }
    };

    // Ensure 1:1 pixel matching between canvas internal buffer and CSS client dimensions
    const updateDimensions = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = canvas.width = Math.round(rect.width || window.innerWidth);
      height = canvas.height = Math.round(rect.height || 700);
      initNodes();
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    // Mouse coordinates tracked smoothly and accurately
    const mouse = {
      x: width * 0.5,
      y: height * 0.42,
      targetX: width * 0.5,
      targetY: height * 0.42,
      active: true,
    };

    // Use clientX / clientY relative to canvas rect (robust against hovering any child elements)
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    let frame = 0;

    const render = () => {
      frame++;

      // Smooth, jitter-free mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.14;
      mouse.y += (mouse.targetY - mouse.y) * 0.14;

      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      // Constant physical radius emerald glow halo strictly bound to cursor
      if (mouse.active) {
        const mouseRadius = 220; // Fixed physical size: never changes when crossing elements
        const radialGradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouseRadius
        );
        radialGradient.addColorStop(0, 'rgba(118, 185, 0, 0.13)');
        radialGradient.addColorStop(0.4, 'rgba(118, 185, 0, 0.035)');
        radialGradient.addColorStop(1, 'rgba(5, 5, 5, 0)');
        ctx.fillStyle = radialGradient;
        ctx.fillRect(0, 0, width, height);
      }

      // Center focal glow for DLSS 5
      const centerGlow = ctx.createRadialGradient(
        width * 0.5,
        height * 0.42,
        30,
        width * 0.5,
        height * 0.42,
        380
      );
      centerGlow.addColorStop(0, 'rgba(118, 185, 0, 0.045)');
      centerGlow.addColorStop(0.6, 'rgba(118, 185, 0, 0.008)');
      centerGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, width, height);

      // Draw subtle microarchitecture interconnect lines
      ctx.lineWidth = 1;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Smooth continuous node parallax reaction to cursor
        if (mouse.active) {
          const dx = node.baseX - mouse.x;
          const dy = node.baseY - mouse.y;
          const distToMouse = Math.sqrt(dx * dx + dy * dy);
          const repelFactor = Math.max(0, 1 - distToMouse / 220);
          const targetX = node.baseX + (dx / (distToMouse || 1)) * repelFactor * 10;
          const targetY = node.baseY + (dy / (distToMouse || 1)) * repelFactor * 5;
          node.x += (targetX - node.x) * 0.12;
          node.y += (targetY - node.y) * 0.12;
        } else {
          node.x += (node.baseX - node.x) * 0.12;
          node.y += (node.baseY - node.y) * 0.12;
        }

        node.pulsePhase += node.pulseSpeed;

        const dxMouse = mouse.active ? node.x - mouse.x : 9999;
        const dyMouse = mouse.active ? node.y - mouse.y : 9999;
        const distToMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        for (const targetIdx of node.connections) {
          if (targetIdx < i) continue;
          const target = nodes[targetIdx];

          const pulse = (Math.sin(node.pulsePhase) + 1) * 0.5;
          const isNearMouse = distToMouse < 180;

          if (isNearMouse) {
            const proximityFactor = 1 - distToMouse / 180;
            ctx.strokeStyle = `rgba(118, 185, 0, ${0.07 + proximityFactor * 0.22})`;
          } else {
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.015 + pulse * 0.02})`;
          }

          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          ctx.stroke();

          // Sporadic photon pulse along line
          if ((frame + i * 17) % 200 === 0) {
            const t = (frame % 40) / 40;
            const px = node.x + (target.x - node.x) * t;
            const py = node.y + (target.y - node.y) * t;
            ctx.fillStyle = '#76B900';
            ctx.beginPath();
            ctx.arc(px, py, 1.4, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // Draw node dot
        const isNodeNearMouse = distToMouse < 170;
        if (isNodeNearMouse) {
          const proximity = 1 - distToMouse / 170;
          ctx.fillStyle = `rgba(140, 255, 0, ${0.2 + proximity * 0.4})`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.07)';
          ctx.beginPath();
          ctx.arc(node.x, node.y, 1.1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.85 }}
    />
  );
}
