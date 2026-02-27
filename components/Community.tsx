import React, { useState } from 'react';
import { useI18n } from '../i18n';

const Community: React.FC = () => {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="community"
      className="pt-4 pb-10 px-6 md:px-12 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* Collapsible Header */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between group cursor-pointer rounded-2xl border-2 border-slate-200 hover:border-[#007AFF] px-8 py-5 transition-all duration-200 hover:bg-blue-50/30"
        >
          <div className="text-left flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              {t.community.sectionTitle}
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
          <div className="rounded-2xl border border-slate-100 bg-white px-6 py-5">
            <p className="text-slate-500 leading-relaxed text-[15px] mb-4">
              {t.community.description}
            </p>
            <div className="rounded-xl overflow-hidden bg-white inline-block max-w-xs">
              <img
                src="/wxqr.jpg"
                alt="WeChat QR Code"
                className="w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
