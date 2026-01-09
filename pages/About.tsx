
import React from 'react';
import { ShieldCheck, Target, CheckCircle2, Clock, Users, Building2, Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-16 md:pt-20 bg-white">
      {/* Hero Section */}
      <section id="profile" className="relative py-24 md:py-36 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-blue-400 font-bold uppercase tracking-[0.5em] text-[10px] mb-6">Corporate Profile</div>
          <h1 className="text-4xl md:text-8xl font-bold text-white mb-6 tracking-tighter uppercase leading-none drop-shadow-lg">
            Infrastructure <br className="hidden md:block" />
            <span className="text-blue-400">Legacy.</span>
          </h1>
          <p className="text-base md:text-xl max-w-2xl font-light text-gray-300 leading-relaxed">
            Delivering high-precision industrial civil works and infrastructure assets across India since 2011.
          </p>
        </div>
      </section>

      {/* Section: Why SBA? */}
      <section id="why-us" className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="text-blue-900 font-bold tracking-[0.4em] uppercase text-[11px] mb-6">Strategic Value</div>
              <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-10 leading-none uppercase tracking-tighter">Why Choose <br />SBA?</h2>
              <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed mb-12">
                In a sector where delays and quality lapses are common, Sri Balaji Associates stands as a benchmark for technical integrity and execution discipline.
              </p>
              <div className="aspect-square bg-blue-900 overflow-hidden shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale opacity-50 hover:opacity-100 transition-opacity duration-1000" alt="Construction detail" />
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-1">
              {[
                { icon: ShieldCheck, title: 'Zero-Accident Culture', desc: 'We treat safety as a core engineering parameter, not a compliance checkbox.' },
                { icon: Target, title: 'Precision Engineering', desc: 'Specialized in complex industrial foundations and technical R&D lab civil works.' },
                { icon: Clock, title: 'Time-Bound Delivery', desc: 'Proprietary project management tracking ensures milestones are met without slippage.' },
                { icon: Users, title: 'Scalable Workforce', desc: 'A permanent team of 25+ professionals supplemented by a specialized labor pool.' },
                { icon: Building2, title: 'JV Synergies', desc: 'Strategic partnerships with NSL and Shashank Constructions for multi-crore assets.' },
                { icon: CheckCircle2, title: 'Grade-A Material', desc: 'Direct procurement from TATA Steel and UltraTech guarantees structural design intent.' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 md:p-10 border border-gray-100 hover:border-blue-900 hover:shadow-xl transition-all group">
                  <item.icon className="w-8 h-8 md:w-10 md:h-10 text-blue-900 mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-4">{item.title}</h4>
                  <p className="text-gray-500 text-[11px] font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message Section */}
      <section id="founder-message" className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-50 -z-10"></div>
              <div className="aspect-[3/4] overflow-hidden shadow-2xl border-8 border-white grayscale hover:grayscale-0 transition-all duration-1000">
                <img src="https://picsum.photos/id/64/600/800" alt="Mr. C. Krishna Kumar" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-blue-900 p-8 text-white shadow-2xl hidden md:block">
                 <div className="text-2xl font-serif italic mb-2">C. Krishna Kumar</div>
                 <div className="text-[9px] font-bold uppercase tracking-[0.4em] opacity-60">Founder & Managing Director</div>
              </div>
            </div>
            <div>
              <Quote className="w-16 h-16 text-blue-900/10 mb-8" />
              <h3 className="text-blue-900 font-bold tracking-[0.5em] uppercase text-[11px] mb-6">Founder's Message</h3>
              <div className="space-y-6 text-base md:text-xl text-gray-700 font-light leading-relaxed">
                <p>"Infrastructure is the silent backbone of a nation's progress. At SBA, we don't just pour concrete; we build the foundations upon which industries flourish."</p>
                <p>"Precision is non-negotiable. Whether it's a 100-meter road or a specialized industrial yard, our commitment to technical integrity remains our primary focus."</p>
              </div>
              <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="text-xs font-bold text-gray-900 uppercase tracking-widest">Mr. C. KRISHNA KUMAR</div>
                <div className="text-[9px] text-blue-900 font-bold uppercase tracking-[0.2em] mt-1">B.E (Mech), PG in Management</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <div className="text-blue-400 font-bold tracking-[0.4em] uppercase text-[11px] mb-6">Corporate Evolution</div>
              <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter">Our History.</h2>
            </div>
            <div className="text-gray-400 max-w-sm mt-8 md:mt-0 font-light text-xs md:text-sm leading-relaxed border-l border-blue-400/30 pl-8">
              From a specialist startup in 2011 to a leading multi-state contractor with a ₹40+ Crore portfolio.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div><h4 className="text-blue-400 text-2xl font-bold mb-6">2011</h4><p className="text-gray-400 text-xs font-light leading-relaxed">Founded as an Engineering and Contracting company with a focus on specialized industrial structural works.</p></div>
            <div><h4 className="text-blue-400 text-2xl font-bold mb-6">2021</h4><p className="text-gray-400 text-xs font-light leading-relaxed">Expansion into public infrastructure and state highways, establishing full-fledged regional offices.</p></div>
            <div><h4 className="text-blue-400 text-2xl font-bold mb-6">Today</h4><p className="text-gray-400 text-xs font-light leading-relaxed">Managing large-scale industrial assets for global leaders like Wipro and Berger Paints.</p></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
