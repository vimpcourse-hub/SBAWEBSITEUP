
import React from 'react';
import { Quote, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

const Testimonials: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32">
      <section className="bg-gray-900 py-32 md:py-48 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Quote size={400} className="absolute -top-20 -left-20 rotate-12 text-blue-400" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-blue-400 font-bold uppercase tracking-[0.5em] text-[10px] mb-8">Client Success Stories</div>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter uppercase break-words">Testimonials.</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 gap-y-12">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-gray-50 p-12 border border-gray-100 relative group hover:bg-white hover:shadow-[0_40px_100px_rgba(0,35,102,0.1)] transition-all duration-700">
                <MessageSquare className="text-blue-900/5 group-hover:text-blue-900/10 absolute top-8 right-8 w-32 h-32 transition-colors" />
                <div className="relative z-10">
                  <div className="h-12 mb-10 overflow-hidden">
                    <img src={t.logo} alt={t.company} className="h-full grayscale group-hover:grayscale-0 transition-all duration-700 object-contain" />
                  </div>
                  <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-12 italic">
                    "{t.quote}"
                  </p>
                  <div className="pt-10 border-t border-gray-200">
                    <div className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-2">{t.author}</div>
                    <div className="text-[10px] text-blue-900 font-bold uppercase tracking-[0.3em]">{t.designation} <br /> {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
