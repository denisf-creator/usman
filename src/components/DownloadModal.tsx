import { useState, useEffect } from 'react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'downloading' | 'completed'>('idle');
  const [progress, setProgress] = useState(0);
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      // Double rAF ensures DOM paint before transition begins
      const frame1 = requestAnimationFrame(() => {
        const frame2 = requestAnimationFrame(() => {
          setIsVisible(true);
        });
        return () => cancelAnimationFrame(frame2);
      });
      return () => cancelAnimationFrame(frame1);
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setIsRendered(false);
        setDownloadStatus('idle');
        setProgress(0);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isRendered) return null;

  const fileName = 'NVIDIA_DLSS_5_Setup_x64.exe';
  const fileSize = '142 MB';

  const handleStartDownload = () => {
    setDownloadStatus('downloading');
    setProgress(25);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          setDownloadStatus('completed');
          triggerActualFileDownload();
          return 100;
        }
        return prev + 30;
      });
    }, 200);
  };

  const triggerActualFileDownload = () => {
    const installerManifest = `==============================================================================
               NVIDIA DLSS 5.0 RUNTIME INSTALLATION PACKAGE
==============================================================================
Platform: Windows 11 / 10 (64-bit)
Architecture: 5th-Generation Tensor Core Neural Reconstruction
Date: 2026-09-23

INSTRUCTIONS:
1. Ensure your NVIDIA GeForce Game Ready Driver is up to date.
2. Run this setup utility with administrator privileges.
3. Choose "Express Installation" to activate the DLSS 5 neural runtime.
4. Launch any supported game to enable DLSS 5 in the display settings.

Visit https://www.nvidia.com/dlss for updates.
Copyright (C) 2026 NVIDIA Corporation. All rights reserved.
==============================================================================`;

    const blob = new Blob([installerManifest], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
      setDownloadStatus('idle');
      setProgress(0);
    }, 250);
  };

  return (
    <div
      onClick={handleClose}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out ${
        isVisible
          ? 'bg-black/85 backdrop-blur-xl opacity-100'
          : 'bg-black/0 backdrop-blur-none opacity-0 pointer-events-none'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative liquid-glass glass-reflection rounded-[32px] sm:rounded-[36px] max-w-md w-full p-8 sm:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-4'
        }`}
      >
        {/* Subtle Liquid Glow within modal glass */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-[#76B900]/[0.1] blur-2xl pointer-events-none rounded-full" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-[#929292] hover:text-white p-1 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#76B900] shadow-[0_0_8px_#76B900]" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#76B900]">
            Windows 64-bit
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-display tracking-tight">
          DLSS 5 Setup
        </h3>
        <p className="text-xs sm:text-sm text-[#C5C5C5] font-medium leading-relaxed mb-8">
          Official installer with neural runtime models and Tensor Core drivers for Windows 11 and 10.
        </p>

        {/* Download State Handling */}
        {downloadStatus === 'idle' && (
          <button
            onClick={handleStartDownload}
            className="w-full py-3.5 text-xs font-semibold tracking-wider uppercase text-black bg-[#76B900] hover:bg-[#8CFF00] rounded-full transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(118,185,0,0.35)] hover:shadow-[0_0_30px_rgba(140,255,0,0.55)] flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download Setup ({fileSize})</span>
          </button>
        )}

        {downloadStatus === 'downloading' && (
          <div className="space-y-3 py-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-[#929292]">Downloading...</span>
              <span className="text-[#76B900]">{progress}%</span>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#76B900] to-[#8CFF00] transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {downloadStatus === 'completed' && (
          <div className="space-y-4 pt-1">
            <div className="p-4 bg-[#76B900]/10 border border-[#76B900]/30 rounded-[20px] flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#76B900] text-black flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(118,185,0,0.4)]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-xs text-white leading-relaxed">
                Download started. Run the installer to begin setup.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
              <button
                onClick={triggerActualFileDownload}
                className="w-full sm:flex-1 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-[#76B900] hover:bg-[#8CFF00] rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(118,185,0,0.35)] hover:shadow-[0_0_30px_rgba(140,255,0,0.55)] cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download Again</span>
              </button>

              <button
                onClick={handleClose}
                className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#F5F5F5] bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/20 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98]"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
