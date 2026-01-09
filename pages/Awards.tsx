
import React from 'react';
import { Award, ShieldCheck, Trophy, CheckCircle, FileCheck } from 'lucide-react';

const Awards: React.FC = () => {
  const certifications = [
    { title: 'ISO 9001:2015', agency: 'Quality Management Systems', desc: 'Certified for consistent high-quality execution in industrial civil works.' },
    { title: 'ISO 45001:2018', agency: 'OH&S Management', desc: 'Recognized for world-class occupational health and safety standards on-site.' },
    { title: 'ISO 14001:2015', agency: 'Environmental Systems', desc: 'Awarded for ecological responsibility in infrastructure development.' },
  ];

  return (
    <div className="pt-24 md:pt-32 bg-white">
      <section className="bg-gray-900 py-32 md:py-48 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-24 opacity-[0.03] select-none pointer-events-none">
           <Trophy size={500} className="text-blue-400" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-blue-400 font-bold uppercase tracking-[0.5em] text-[10px] mb-8">Trust & Standards</div>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter uppercase break-words">Awards & <br /><span className="text-blue-400">Recognition.</span></h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <h2 className="text-blue-900 font-bold tracking-[0.4em] uppercase text-[11px] mb-6">Technical Validation</h2>
              <h3 className="text-3xl md:text-6xl font-bold text-gray-900 mb-8 uppercase tracking-tighter">Certified Excellence</h3>
              <p className="text-gray-600 font-light text-lg leading-relaxed mb-10">
                Our commitment to engineering integrity is validated by global auditing bodies. We maintain strict adherence to ISO standards in every foundation we lay.
              </p>
              <div className="grid grid-cols-1 gap-6">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-start p-8 bg-gray-50 border border-gray-100 group hover:border-blue-900 transition-all">
                    <div className="w-12 h-12 bg-white flex items-center justify-center text-blue-900 shadow-sm mr-6">
                      <FileCheck size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 uppercase tracking-widest text-sm mb-1">{cert.title}</h4>
                      <p className="text-blue-900 text-[10px] font-bold uppercase tracking-widest mb-3">{cert.agency}</p>
                      <p className="text-gray-500 text-xs font-light leading-relaxed">{cert.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-100 overflow-hidden shadow-2xl border-8 border-white">
                <img src="https://images.unsplash.com/photo-1579548122060-da852cc51227?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale opacity-80" alt="Milestone" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-blue-900 p-12 text-white shadow-2xl hidden md:block">
                <ShieldCheck size={48} className="text-blue-300 mb-6" />
                <div className="text-3xl font-bold mb-2 uppercase tracking-tighter">Zero LTI</div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60">2M+ Man Hours Achievement</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              { icon: Award, title: 'Outstanding Contractor', year: '2023', body: 'Infrastructure Excellence Awards' },
              { icon: Trophy, title: 'Safety Milestone', year: '2022', body: 'Berger Paints Safety Summit' },
              { icon: CheckCircle, title: 'Best Lab Facility', year: '2021', body: 'Wipro Real Estate Awards' },
            ].map((award, i) => (
              <div key={i} className="bg-white p-12 border border-gray-100 text-center hover:shadow-2xl transition-all group">
                <award.icon className="mx-auto mb-8 text-blue-900/30 group-hover:text-blue-900 transition-colors" size={48} />
                <div className="text-blue-900 font-bold text-3xl mb-2">{award.year}</div>
                <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4">{award.title}</h4>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{award.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Awards;
