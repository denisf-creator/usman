import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What distinguishes DLSS 5 from previous generations of DLSS?',
    answer:
      'DLSS 5 introduces full Neural Path Reconstruction and Optical Neural Flow 2.0. Rather than relying on hand-tuned spatial denoisers for ray tracing and separate optical flow models, DLSS 5 employs a unified multi-frame transformer that resolves direct light, indirect radiance, geometry buffers, and frame generation synchronously inside 5th-Gen Tensor Cores.',
  },
  {
    question: 'Which graphics card architectures support DLSS 5?',
    answer:
      'DLSS 5 Super Resolution and Neural Ray Reconstruction are supported across GeForce RTX 40 and 50 Series GPUs with updated GeForce Game Ready drivers. Next-generation features requiring Optical Neural Flow 2.0 and sub-millisecond tensor dispatch utilize the enhanced Tensor Core hardware found in the newest RTX architectures.',
  },
  {
    question: 'How does DLSS 5 eliminate temporal ghosting and disocclusion artifacts?',
    answer:
      'Traditional temporal anti-aliasing (TAA) and early denoisers accumulated pixel history over time, creating smearing behind moving geometry. DLSS 5 uses a bidirectional attention transformer that validates radiance across time and space, rejecting invalid history samples and reconstructing occlusion zones in a single frame.',
  },
  {
    question: 'Does enabling DLSS 5 frame generation increase controller latency?',
    answer:
      'No. DLSS 5 is architected to operate hand-in-hand with NVIDIA Reflex 2.0. By synchronizing CPU frame requests with GPU tensor pipeline execution, system latency is reduced by up to 2× compared to native rendering, ensuring crisp input response even in demanding competitive titles.',
  },
  {
    question: 'How can game developers integrate the DLSS 5 SDK?',
    answer:
      'The DLSS 5 SDK is available through the NVIDIA Developer program. It features native plug-and-play plugins for Unreal Engine 5.5+, Unity, and a lightweight C++ API for custom proprietary rendering pipelines with streamlined motion vector and depth buffer bindings.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="py-28 sm:py-36 bg-[#050505] relative overflow-hidden"
    >
      {/* Soft background ambient light */}
      <div className="absolute left-1/3 bottom-10 w-[550px] h-[350px] bg-[#76B900]/[0.035] blur-[150px] pointer-events-none rounded-full animate-liquid-drift-slow" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#76B900] block mb-3">
            Specifications & FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#F5F5F5] font-display">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Liquid Glass Accordion Card */}
        <div className="liquid-glass glass-reflection rounded-[32px] sm:rounded-[36px] p-4 sm:p-8 space-y-3 shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`group rounded-[22px] sm:rounded-[26px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isOpen
                    ? 'bg-white/[0.04] border border-[#76B900]/30 shadow-[0_12px_32px_rgba(0,0,0,0.5),0_0_25px_rgba(118,185,0,0.08)]'
                    : 'bg-transparent border border-transparent hover:bg-white/[0.025] hover:border-white/[0.08]'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-6 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    {/* Subtle glowing pill accent on active/hover */}
                    <span
                      className={`w-1.5 rounded-full transition-all duration-500 ${
                        isOpen
                          ? 'h-6 bg-[#76B900] shadow-[0_0_12px_#76B900]'
                          : 'h-1.5 bg-white/20 group-hover:bg-[#76B900]/60 group-hover:h-3'
                      }`}
                    />
                    <span
                      className={`text-lg sm:text-xl font-medium font-display transition-all duration-300 ${
                        isOpen
                          ? 'text-white'
                          : 'text-[#E0E0E0] group-hover:text-white group-hover:translate-x-0.5'
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Rotating Glass Pill Icon */}
                  <span
                    className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen
                        ? 'rotate-45 border-[#76B900] text-black bg-[#76B900] shadow-[0_0_20px_rgba(118,185,0,0.5)] scale-105'
                        : 'border-white/15 text-[#929292] bg-white/[0.02] group-hover:border-[#76B900]/50 group-hover:text-[#76B900] group-hover:bg-[#76B900]/10 group-hover:shadow-[0_0_15px_rgba(118,185,0,0.25)] group-hover:scale-105'
                    }`}
                  >
                    <svg
                      className="w-4 h-4 transition-transform duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </button>

                {/* Smooth Expansion Animation Container */}
                <div
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-6 pt-1 pl-10 sm:pl-11">
                      <p className="text-sm sm:text-base text-[#A8A8A8] font-light leading-relaxed border-t border-white/[0.05] pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
