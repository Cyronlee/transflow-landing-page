import React, { useState, useEffect, useRef } from 'react';
import { useI18n } from '../i18n';

// Step index 1 (Step 2: "not-move-to-trash") is a small dialog screenshot — render it smaller
const SMALL_IMAGE_STEPS = [1];

const SetupGuide: React.FC = () => {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Listen for custom event to open the guide from navbar
  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
    };
    window.addEventListener('open-setup-guide', handleOpen);
    return () => window.removeEventListener('open-setup-guide', handleOpen);
  }, []);

  return (
    <section
      id="setup-guide"
      ref={sectionRef}
      className="py-10 px-6 md:px-12 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* Collapsible Header */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between group cursor-pointer rounded-2xl border-2 border-slate-200 hover:border-[#007AFF] px-8 py-5 transition-all duration-200 hover:bg-blue-50/30"
        >
          <div className="text-left flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              {t.guide.sectionTitle}
            </h2>
          </div>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-180' : ''
              }`}
          >
            <svg
              className="w-5 h-5 text-slate-400 group-hover:text-[#007AFF] transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {/* Collapsible Content */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[20000px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
            }`}
        >
          <div className="space-y-3">
            {t.guide.steps.map((step, index) => {
              const isLastStep = index === t.guide.steps.length - 1;
              const isSmallImage = SMALL_IMAGE_STEPS.includes(index);
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-100 bg-white px-6 py-5"
                >
                  {/* Step Header */}
                  <div className="flex items-center mb-3">
                    <div
                      className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mr-3 ${isLastStep
                        ? 'bg-green-500 text-white'
                        : 'bg-[#007AFF] text-white'
                        }`}
                    >
                      {isLastStep ? '✓' : index + 1}
                    </div>
                    <h3 className="text-base font-semibold text-slate-800">
                      {step.title}
                    </h3>
                  </div>

                  {/* Step Content — always visible */}
                  <div>
                    <p className="text-slate-500 leading-relaxed text-[15px] mb-3">
                      {step.description}
                    </p>
                    {step.image && (
                      <div
                        className={`rounded-xl overflow-hidden bg-white inline-block ${isSmallImage ? 'max-w-xs' : 'max-w-2xl'
                          }`}
                      >
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetupGuide;
