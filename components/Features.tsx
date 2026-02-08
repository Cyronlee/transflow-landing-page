import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">核心功能</h2>
          <div className="w-16 h-1 bg-[#007AFF] mx-auto rounded-full"></div>
        </div>

        {/* Forced 2-column grid on desktop as per user request */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="feature-card bg-white p-8 rounded-2xl border border-slate-100 flex flex-col h-full hover:border-blue-100"
            >
              <h3 className="text-xl font-bold mb-4 text-slate-800 flex items-center">
                {feature.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;