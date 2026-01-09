
import React from 'react';
import { PARTNERS } from '../data/partners';
import { Handshake, ShieldCheck, Zap, Layers } from 'lucide-react';

const Partnerships: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32">
      <section className="bg-gray-900 py-32 md:py-48 text-center text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-blue-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-8">Collaborative Infrastructure</div>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter uppercase break-words">Partnerships.</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <h2 className="text-xs font-bold text-blue-900 uppercase tracking-[0.4em] mb-6">Strategic Alliances</h2>
              <h3 className="text-3xl md:text-6xl font-bold text-gray-900 mb-8 uppercase tracking-tighter">The Power of Joint Ventures</h3>
              <p className="text-gray-600 font-light text-lg leading-relaxed mb-10">
                At SBA, we believe in the strength of collaboration. By partnering with industry giants and specialized construction firms, we expand our technical reach.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Handshake, title: 'Collaborative Bidding', desc: 'Joint ventures allow us to tackle multi-crore public projects with shared expertise.' },
                  { icon: ShieldCheck, title: 'Material Integrity', desc: 'Direct alliances with TATA Steel and UltraTech ensure grade-A raw materials.' },
                  { icon: Zap, title: 'Resource Scaling', desc: 'Access to shared machinery enables rapid mobilization across South India.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start group">
                    <div className="w-12 h-12 bg-blue-50 flex items-center justify-center text-blue-900 rounded-sm mr-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-2">{item.title}</h4>
                      <p className="text-gray-500 text-sm font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {PARTNERS.map((partner) => (
                <div key={partner.id} className="bg-gray-50 p-10 border border-gray-100 flex flex-col items-center justify-center text-center hover:bg-white hover:shadow-xl transition-all">
                  <img src={partner.logo} alt={partner.name} className="h-10 mb-6 grayscale hover:grayscale-0 transition-all" />
                  <div className="text-[9px] font-bold text-blue-900 uppercase tracking-widest mb-2">{partner.type}</div>
                  <div className="text-xs font-bold text-gray-900 uppercase tracking-tight">{partner.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;
