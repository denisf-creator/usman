/**
 * НАСТРОЙКА КАРТИНОК И ИКОНОК ИГР (DLSS 5 GAMES)
 * 
 * Картинки хранятся в `/public/games/`:
 * - cyberpunk.jpg
 * - wukong.jpg
 * - alanwake.jpg
 * - starwars.jpg
 * - horizon.jpg
 * - dune.jpg
 */

export interface GameItem {
  id: string;
  title: string;
  genre: string;
  engine: string;
  features: string[];
  bannerColor: string;
  accentColor: string;
  description: string;
  image: string;
  icon?: string;
}

export const gamesList: GameItem[] = [
  {
    id: 'cyberpunk',
    title: 'Cyberpunk 2077: Phantom Liberty',
    image: '/games/cyberpunk.jpg',
    genre: 'Open World RPG',
    engine: 'REDengine 4 (RTX Direct Illumination)',
    features: ['Full Path Tracing', 'Ray Reconstruction', 'Reflex Low Latency'],
    bannerColor: 'from-[#0b101b] via-[#101b2b] to-[#05080f]',
    accentColor: '#00e5ff',
    description:
      'Experience Night City with full path tracing overdrive, resolving multi-bounce specular reflections across high-density rain streets in real-time 4K.',
  },
  {
    id: 'wukong',
    title: 'Black Myth: Wukong',
    image: '/games/wukong.jpg',
    genre: 'Action RPG',
    engine: 'Unreal Engine 5.5 (Lumen + RTX AI)',
    features: ['Neural Micro-Geometry', 'Full Caustics', 'Volumetric Scattering'],
    bannerColor: 'from-[#140f0a] via-[#241a12] to-[#0a0705]',
    accentColor: '#ff9900',
    description:
      'Explore mythological mountain sanctuaries rendered with neural alpha-geometry for foliage, path-traced river caustics, and volumetric mountain mist.',
  },
  {
    id: 'alanwake',
    title: 'Alan Wake 2',
    image: '/games/alanwake.jpg',
    genre: 'Psychological Survival Horror',
    engine: 'Northlight Engine',
    features: ['Direct Path Tracing', 'Neural Subsurface Scattering', 'Reflex'],
    bannerColor: 'from-[#12080a] via-[#1f0d11] to-[#090405]',
    accentColor: '#ff2d55',
    description:
      'Immerse yourself into the Dark Place with realistic indirect light bounces from flashlights, physical surface roughness, and hyper-detailed human character rendering.',
  },
  {
    id: 'starwars',
    title: 'Star Wars Outlaws',
    image: '/games/starwars.jpg',
    genre: 'Open-Galaxy Adventure',
    engine: 'Snowdrop Engine',
    features: ['RTX Dynamic Illumination', 'Neural Supersampling', 'Reflex Boost'],
    bannerColor: 'from-[#0a1215] via-[#11232b] to-[#050a0d]',
    accentColor: '#00ffc2',
    description:
      'Cruise across diverse planetary atmospheres with real-time global illumination, high-speed speeder motion vector reconstruction, and razor-sharp ship hulls.',
  },
  {
    id: 'horizon',
    title: 'Horizon Forbidden West',
    image: '/games/horizon.jpg',
    genre: 'Action Adventure',
    engine: 'Decima Engine',
    features: ['Micro-Facet Reflections', 'Neural Alpha Stability', 'Ultra-Wide 4K'],
    bannerColor: 'from-[#0d160f] via-[#16291a] to-[#060b07]',
    accentColor: '#76B900',
    description:
      'Battle colossal machines across vibrant tropical coasts and lush redwoods, reconstructed with razor-sharp micro-leaf clarity and dynamic water spray.',
  },
  {
    id: 'dune',
    title: 'Dune: Awakening',
    image: '/games/dune.jpg',
    genre: 'Open World Survival MMO',
    engine: 'Unreal Engine 5.5',
    features: ['Planetary Sun Angle RT', 'Optical Neural Flow 2.0', 'Zero Latency'],
    bannerColor: 'from-[#1a140a] via-[#2d2212] to-[#0c0905]',
    accentColor: '#f59e0b',
    description:
      'Survive the harsh dunes of Arrakis with physical sun caustic bounces, volumetric coriolis dust storms, and ultra-high framerate desert warfare.',
  },
];
