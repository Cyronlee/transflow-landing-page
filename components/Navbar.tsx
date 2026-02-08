
import React from 'react';

const Navbar: React.FC = () => {
  const handleDownload = () => {
    // In a real scenario, this would trigger a direct download link.
    // For demonstration, we log it.
    console.log('Downloading TransFlow...');
    window.location.href = 'https://github.com/Cyronlee/TransFlow/releases/latest/download/TransFlow.dmg';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-[60px] border-b border-slate-200/50 flex items-center px-6 md:px-12 transition-all duration-300">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#007AFF] to-[#4CAF50] rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm">
            TF
          </div>
          <span className="text-xl font-bold text-gradient">TransFlow</span>
        </div>

        <button
          onClick={handleDownload}
          className="bg-[#007AFF] text-white px-5 py-2 rounded-lg font-medium text-sm transition-all hover:bg-[#4CAF50] shadow-sm active:scale-95"
        >
          下载
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
