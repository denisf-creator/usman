import { useState } from 'react';
import { gamesList, GameItem } from '../config/games';

export type { GameItem };

interface GamesProps {
  onSelectGame?: (game: GameItem) => void;
}

export function Games({ onSelectGame }: GamesProps) {
  const [activeModalGame, setActiveModalGame] = useState<GameItem | null>(null);

  const handleCardClick = (game: GameItem) => {
    setActiveModalGame(game);
    if (onSelectGame) onSelectGame(game);
  };

  return (
    <section
      id="games"
      className="py-28 sm:py-36 bg-[#050505] relative overflow-hidden"
    >
      {/* Ambient liquid glow behind games grid */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#76B900]/[0.035] blur-[150px] pointer-events-none rounded-full animate-liquid-drift" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#76B900] block mb-3">
              Ecosystem & Support
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F5F5] font-display">
              Built for the games you love.
            </h2>
          </div>
          <p className="text-sm text-[#929292] font-light max-w-sm">
            Over 500 games and applications are accelerated by RTX AI technology, with DLSS 5 support integrating directly into major commercial engines.
          </p>
        </div>

        {/* Premium Liquid Glass Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gamesList.map((game) => (
            <div
              key={game.id}
              onClick={() => handleCardClick(game)}
              className="group relative rounded-[28px] sm:rounded-[32px] liquid-glass-card glass-reflection p-4 cursor-pointer flex flex-col justify-between"
            >
              {/* Image / Cinematic Artwork Container */}
              <div className="relative aspect-video w-full overflow-hidden rounded-[22px] bg-black">
                {/* Fallback stylized background simulation */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${game.bannerColor}`}
                />

                {/* Primary Game Image / Cover (Customizable in public/games/ or src/config/games.ts) */}
                {game.image && (
                  <img
                    src={game.image}
                    alt={game.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => {
                      // Gracefully fallback to stylized gradient if file is missing
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                )}

                {/* Subtle dark vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/35 pointer-events-none" />

                {/* DLSS 5 Enabled status indicator (Top Right Glass Pill) */}
                <div className="absolute top-3.5 right-3.5 z-10">
                  <div className="bg-[#050505]/75 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center gap-1.5 transition-colors group-hover:border-[#76B900]/50 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#76B900] shadow-[0_0_8px_#76B900]" />
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-white/90">
                      DLSS 5 Enabled
                    </span>
                  </div>
                </div>

                {/* Bottom genre pill and optional mini-icon */}
                <div className="absolute bottom-3.5 left-3.5 z-10 flex items-center gap-2">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-[#929292] bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/[0.08]">
                    {game.genre}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors font-display line-clamp-1">
                    {game.title}
                  </h3>
                  <p className="text-xs text-[#929292] font-light leading-relaxed line-clamp-2 mb-6">
                    {game.description}
                  </p>
                </div>

                {/* Features metadata row */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#929292]">
                  <span className="truncate max-w-[200px]">
                    {game.features.join(' · ')}
                  </span>
                  <span className="text-[#76B900] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 shrink-0 font-medium">
                    Details
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Game Tech Inspection */}
        {activeModalGame && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in">
            <div className="liquid-glass rounded-[32px] max-w-lg w-full p-8 sm:p-10 relative shadow-2xl glass-reflection">
              <button
                onClick={() => setActiveModalGame(null)}
                className="absolute top-6 right-6 text-[#929292] hover:text-white p-1 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#76B900] shadow-[0_0_8px_#76B900]" />
                <span className="text-xs font-semibold tracking-widest uppercase text-[#76B900]">
                  DLSS 5 Verified Integration
                </span>
              </div>

              {/* Preview image in modal */}
              {activeModalGame.image && (
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-5 border border-white/10">
                  <img
                    src={activeModalGame.image}
                    alt={activeModalGame.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2 font-display">
                {activeModalGame.title}
              </h3>
              <p className="text-xs font-mono text-[#929292] mb-6">
                Engine: {activeModalGame.engine}
              </p>

              <p className="text-sm text-[#929292] font-light leading-relaxed mb-6">
                {activeModalGame.description}
              </p>

              <div className="space-y-2 mb-8">
                <div className="text-xs font-semibold uppercase tracking-wider text-white mb-2">
                  Active RTX Technologies
                </div>
                {activeModalGame.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs text-[#929292]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#76B900]" />
                    <span className="text-white">{feat}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setActiveModalGame(null)}
                className="w-full py-3 text-xs font-semibold tracking-wider uppercase text-black bg-[#76B900] hover:bg-[#8CFF00] rounded-full transition-colors cursor-pointer shadow-[0_0_20px_rgba(118,185,0,0.3)]"
              >
                Close Specification
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
