import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Technology } from './components/Technology';
import { Features } from './components/Features';
import { Games } from './components/Games';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ExploreModal } from './components/ExploreModal';
import { DownloadModal } from './components/DownloadModal';

export default function App() {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] font-sans selection:bg-[#76B900]/30 selection:text-white">
      {/* Header */}
      <Header
        onOpenExplore={() => setIsExploreOpen(true)}
        onOpenDownload={() => setIsDownloadOpen(true)}
      />

      {/* Main Content Flow */}
      <main>
        {/* Cinematic Hero */}
        <Hero
          onOpenExplore={() => setIsExploreOpen(true)}
          onOpenDownload={() => setIsDownloadOpen(true)}
        />

        {/* DLSS 5 Introduction: Graphics. Reimagined by AI. */}
        <Introduction />

        {/* Technology: Powered by NVIDIA AI */}
        <Technology />

        {/* Features: AI changes what pixels can become */}
        <Features />

        {/* Games: Built for the games you love */}
        <Games />

        {/* FAQ Accordion */}
        <FAQ />
      </main>

      {/* Minimalist Footer */}
      <Footer />

      {/* Explore / Early Access Modal */}
      <ExploreModal
        isOpen={isExploreOpen}
        onClose={() => setIsExploreOpen(false)}
      />

      {/* Setup Download Modal */}
      <DownloadModal
        isOpen={isDownloadOpen}
        onClose={() => setIsDownloadOpen(false)}
      />
    </div>
  );
}
