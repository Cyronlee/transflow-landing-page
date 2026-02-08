import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 md:px-12 bg-white flex flex-col items-center text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-gradient">
          TransFlow
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 font-medium mb-10 leading-relaxed max-w-2xl mx-auto">
          macOS 实时语音转录与翻译 App。
          <br />
          隐私优先，释放 Apple 芯片潜能。
        </p>

        <div className="flex flex-col items-center space-y-4 mb-20">
          <button
            onClick={() => window.location.href = 'https://github.com/Cyronlee/TransFlow/releases/latest/download/TransFlow.dmg'}
            className="group relative inline-flex items-center justify-center px-12 py-4 font-bold text-white transition-all duration-300 bg-[#007AFF] rounded-xl hover:bg-[#4CAF50] shadow-xl hover:shadow-green-200/50 active:scale-95"
            role="button"
          >
            立即下载
          </button>
          <div className="text-xs text-slate-400 space-y-1">
            <p className="font-semibold">v1.2.0 • 适用于 macOS Ventura+</p>
            <p>体积不到 800KB，轻如蝉翼</p>
          </div>
        </div>

        {/* Placeholder for User's Application Screenshot */}
        <div className="relative w-full max-w-5xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#007AFF] to-[#4CAF50] rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          <div className="relative bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden aspect-[16/10] flex flex-col">
            {/* Window Header */}
            <div className="h-10 bg-slate-50 border-b border-slate-200 flex items-center px-4 space-x-2">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <span className="text-[10px] font-semibold text-slate-400 tracking-wider">TRANSFLOW</span>
              </div>
            </div>

            {/* Static Image Placeholder Area */}
            <div className="flex-1 bg-slate-50 flex items-center justify-center relative group-hover:bg-slate-100/50 transition-colors">
              <div className="flex flex-col items-center space-y-4 opacity-30 group-hover:opacity-50 transition-opacity">
                 <svg className="w-20 h-20 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                 </svg>
                 <span className="text-slate-500 font-medium tracking-wide">此处替换为 App 运行截图 (16:10)</span>
              </div>
              
              {/* Optional overlay tag */}
              <div className="absolute bottom-8 right-8 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-200 text-xs text-slate-500 font-medium shadow-sm">
                Powered by Neural Engine
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;