
import React from 'react';
import { Target, Eye, ShieldCheck, Zap, Rocket, Shield, CheckCircle2, TrendingUp } from 'lucide-react';

const MissionVision: React.FC = () => {
  return (
    <div className="pt-28 md:pt-36 bg-white">
      {/* Hero Header */}
      <section className="bg-gray-900 py-32 md:py-48 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-blue-900 mix-blend-multiply"></div>
          <img src="https://images.unsplash.com/photo-1541976590-71394168159b?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale" alt="Vision" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="text-blue-400 font-bold uppercase tracking-[0.5em] text-[10px] mb-8">Guiding Principles</div>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter uppercase leading-none break-words">
            Purpose & <br />
            <span className="text-blue-400">Direction.</span>
          </h1>
          <div className="w-24 h-1 bg-blue-900 mx-auto mt-12 opacity-50"></div>
        </div>
      </section>

      {/* Primary Statement */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="text-blue-900 font-bold tracking-[0.4em] uppercase text-[11px] mb-6">Our Mandate</div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-none uppercase tracking-tighter mb-10">
                Building For <br />The Future.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-2xl md:text-3xl font-light text-gray-600 leading-tight">
                Sri Balaji Associates operates with a clear mandate: to deliver technical integrity in every structure, ensuring that India’s infrastructure remains resilient for generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Split Grid */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Vision */}
            <div className="py-24 pr-0 md:pr-12 lg:pr-24 border-b md:border-b-0 md:border-r border-gray-200">
              <div className="flex items-center space-x-4 mb-10">
                <div className="p-3 bg-blue-900 rounded-sm">
                  <Eye className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xs font-black text-gray-900 uppercase tracking-[0.4em]">Corporate Vision</h3>
              </div>
              <p className="text-3xl font-bold text-gray-900 uppercase tracking-tighter mb-10 leading-none">
                The primary benchmark for industrial civil works.
              </p>
              <div className="space-y-6">
                <p className="text-gray-600 font-light leading-relaxed">
                  We aim to be the standard-bearer for operational excellence, reaching a ₹200 Crore valuation by 2030 through strategic growth and unyielding quality benchmarks.
                </p>
                <div className="flex items-center space-x-3 pt-6 border-t border-gray-200">
                   <TrendingUp className="text-blue-900 w-5 h-5" />
                   <span className="text-[10px] font-bold text-blue-900 uppercase tracking-widest">Target: ₹200 Cr / 2030</span>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="py-24 pl-0 md:pl-12 lg:pl-24">
              <div className="flex items-center space-x-4 mb-10">
                <div className="p-3 bg-blue-900 rounded-sm">
                  <Target className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xs font-black text-gray-900 uppercase tracking-[0.4em]">Core Mission</h3>
              </div>
              <ul className="space-y-8">
                {[
                  { title: "Empowerment", desc: "Build a strong future ensuring increased revenues and enhanced support to our engineering associates." },
                  { title: "Standardization", desc: "Provide consistent grade-A construction services under strictly controlled safe site environments." },
                  { title: "Evolution", desc: "Encourage innovation, technical integrity, and rapid up-gradation of civil knowledge." }
                ].map((item, i) => (
                  <li key={i} className="group">
                    <h4 className="text-[10px] font-black text-blue-900 uppercase tracking-widest mb-2 flex items-center">
                      <div className="w-4 h-[2px] bg-blue-900 mr-3 group-hover:w-8 transition-all"></div>
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm font-light leading-relaxed pl-7">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <div className="text-blue-900 font-bold tracking-[0.5em] uppercase text-[10px] mb-6">Foundational Pillars</div>
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 uppercase tracking-tighter">Our Core Values.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {[
              { title: 'Integrity', desc: 'Acting fairly whilst maintaining client best interest as priority.', icon: ShieldCheck },
              { title: 'Excellence', desc: 'Building on a proven track record through continuous calibration.', icon: TrendingUp },
              { title: 'Innovation', desc: 'Applying specialized creativity supported by technical knowledge.', icon: Zap },
              { title: 'Safety First', desc: 'Treating workforce well-being as a non-negotiable metric.', icon: Shield },
              { title: 'Technology', desc: 'Deploying modern engineering advancements with respect for environment.', icon: Rocket },
              { title: 'Diligence', desc: 'Serving clients faithfully with technical skill and faithfulness.', icon: CheckCircle2 },
            ].map((value, i) => (
              <div key={i} className="bg-white p-12 border border-gray-100 hover:border-blue-900 hover:shadow-2xl transition-all duration-700 group relative">
                <div className="absolute top-0 left-0 w-1 h-0 bg-blue-900 group-hover:h-full transition-all duration-500"></div>
                <value.icon className="w-12 h-12 text-blue-900 mb-8 group-hover:scale-110 transition-transform" strokeWidth={1} />
                <h4 className="text-sm font-black text-gray-900 mb-4 uppercase tracking-[0.3em]">{value.title}</h4>
                <p className="text-gray-400 text-xs font-light leading-relaxed group-hover:text-gray-600 transition-colors">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;
