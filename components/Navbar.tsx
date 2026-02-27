
import React from 'react';
import { useI18n } from '../i18n';
import { version } from '../version.json';

const DOWNLOAD_URL = `https://github.com/Cyronlee/TransFlow/releases/download/v${version}/TransFlow-${version}.dmg`;

const Navbar: React.FC = () => {
  const { locale, t, toggleLocale } = useI18n();

  const handleDownload = () => {
    window.location.href = DOWNLOAD_URL;
  };

  const handleGuideClick = () => {
    // Dispatch custom event to open the guide
    window.dispatchEvent(new CustomEvent('open-setup-guide'));
    // Scroll to the guide section
    setTimeout(() => {
      const el = document.getElementById('setup-guide');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-[60px] border-b border-slate-200/50 flex items-center px-6 md:px-12 transition-all duration-300">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="TransFlow" className="w-8 h-8 rounded-lg shadow-sm" />
          <span className="text-xl font-bold text-gradient">TransFlow</span>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={handleGuideClick}
            className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all border border-slate-200"
          >
            {t.nav.guide}
          </button>
          <button
            onClick={toggleLocale}
            className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all border border-slate-200"
            title={locale === 'zh' ? 'Switch to English' : '切换到中文'}
          >
            {locale === 'zh' ? 'EN' : '中文'}
          </button>
          <button
            onClick={handleDownload}
            className="bg-[#007AFF] text-white px-5 py-2 rounded-lg font-medium text-sm transition-all hover:bg-[#4CAF50] shadow-sm active:scale-95"
          >
            {t.nav.download}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
