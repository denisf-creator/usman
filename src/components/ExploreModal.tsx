import { useState, useEffect, FormEvent } from 'react';

interface ExploreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ExploreModal({ isOpen, onClose }: ExploreModalProps) {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'gamer' | 'developer' | 'creator'>('gamer');
  const [submitted, setSubmitted] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
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
        className={`relative liquid-glass glass-reflection rounded-[32px] sm:rounded-[36px] max-w-lg w-full p-8 sm:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-4'
        }`}
      >
        {/* Subtle Liquid Glow Accent */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-[#76B900]/[0.1] blur-2xl pointer-events-none rounded-full" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-[#929292] hover:text-white p-1 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#76B900] shadow-[0_0_8px_#76B900]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#76B900]">
                Early Access & Updates
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-display">
              Explore NVIDIA DLSS 5
            </h3>

            <p className="text-sm text-[#929292] font-light leading-relaxed mb-6">
              Get notified the moment DLSS 5 GeForce Game Ready Drivers deploy and receive early SDK previews for Unreal Engine 5.5 and DirectX 12 Agility.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#929292] mb-2">
                  Select Profile
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['gamer', 'developer', 'creator'] as const).map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      className={`py-2 text-xs font-medium rounded-full border capitalize transition-all cursor-pointer ${
                        role === r
                          ? 'border-[#76B900] bg-[#76B900]/15 text-white shadow-[0_0_12px_rgba(118,185,0,0.2)]'
                          : 'border-white/10 text-[#929292] hover:border-white/20'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="email-input" className="block text-xs font-semibold uppercase tracking-wider text-[#929292] mb-2">
                  Work or Personal Email
                </label>
                <input
                  id="email-input"
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-3.5 bg-black/60 border border-white/15 focus:border-[#76B900] focus:outline-none rounded-full text-sm text-white placeholder-white/25 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 text-xs font-semibold tracking-wider uppercase text-black bg-[#76B900] hover:bg-[#8CFF00] rounded-full transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(118,185,0,0.35)] hover:shadow-[0_0_30px_rgba(140,255,0,0.55)] active:scale-[0.98]"
              >
                Request Access
              </button>

              <p className="text-[11px] text-[#929292]/60 text-center">
                By subscribing, you agree to receive technical updates from NVIDIA Corporation.
              </p>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#76B900]/20 border border-[#76B900] flex items-center justify-center mx-auto text-[#76B900] shadow-[0_0_15px_rgba(118,185,0,0.3)]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-white font-display">
              You're On The List
            </h3>

            <p className="text-sm text-[#929292] max-w-sm mx-auto leading-relaxed">
              We've registered <span className="text-white font-mono">{email}</span> for the DLSS 5 {role} preview rollout. We'll send your access credentials as soon as the first driver phase unlocks.
            </p>

            <button
              onClick={handleClose}
              className="mt-4 px-8 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-white/[0.05] border border-white/20 hover:border-white/50 rounded-full transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
