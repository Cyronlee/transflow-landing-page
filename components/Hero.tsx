import React from 'react';
import { useI18n } from '../i18n';

const DOWNLOAD_URL = 'https://github.com/Cyronlee/TransFlow/releases/download/v1.1.0/TransFlow-1.1.0.dmg';

const Hero: React.FC = () => {
  const { t } = useI18n();

  return (
    <section className="pt-28 pb-12 px-6 md:px-12 bg-white flex flex-col items-center text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-gradient">
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 font-medium mb-5 leading-relaxed max-w-2xl mx-auto">
          {t.hero.subtitle1}
          <br />
          {t.hero.subtitle2}
        </p>

        {/* Application Screenshot */}
        <div className="relative w-full max-w-5xl mx-auto mb-5">
          <img
            src="/demo-1-zh.png"
            alt="TransFlow Screenshot"
            className="w-full rounded-lg"
          />
        </div>

        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={() => window.location.href = DOWNLOAD_URL}
            className="group relative inline-flex items-center justify-center px-12 py-4 font-bold text-white transition-all duration-300 bg-[#007AFF] rounded-xl hover:bg-[#4CAF50] shadow-xl hover:shadow-green-200/50 active:scale-95"
            role="button"
          >
            {t.hero.downloadBtn}
          </button>
          <div className="text-xs text-slate-400 space-y-1">
            <p className="font-semibold">{t.hero.version} • {t.hero.compatibility}</p>
            <p>{t.hero.lightweight}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
