import React from "react";
import { ENTITIES } from "../data/entities";
import { Handshake, ShieldCheck, Zap } from "lucide-react";

const Partnerships: React.FC = () => {

  const partners = ENTITIES.filter(e => e.type === "partner");

  return (
    <div className="pt-24 md:pt-32">

      {/* HERO */}
      <section className="bg-gray-900 py-32 md:py-48 text-center text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-blue-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-8">
            Collaborative Infrastructure
          </div>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter uppercase break-words">
            Partnerships.
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">

            {/* TEXT */}
            <div>
              <h2 className="text-xs font-bold text-blue-900 uppercase tracking-[0.4em] mb-6">
                Strategic Alliances
              </h2>

              <h3 className="text-3xl md:text-6xl font-bold text-gray-900 mb-8 uppercase tracking-tighter">
                The Power of Joint Ventures
              </h3>

              <p className="text-gray-600 font-light text-lg leading-relaxed mb-10">
                At SBA, we believe in the strength of collaboration. By partnering
                with industry leaders and specialized contractors, we expand our
                technical reach and execution capability.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Handshake,
                    title: "Collaborative Bidding",
                    desc: "Joint ventures enable us to execute multi-crore public and private projects.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Material Integrity",
                    desc: "Alliances with reputed suppliers ensure consistent quality standards.",
                  },
                  {
                    icon: Zap,
                    title: "Resource Scaling",
                    desc: "Shared equipment and manpower allow rapid mobilization.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start group">
                    <div className="w-12 h-12 bg-blue-50 flex items-center justify-center text-blue-900 rounded-sm mr-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-sm font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PARTNER GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {partners.map((partner, i) => (
                <div
                  key={i}
                  className="bg-gray-50 p-8 border border-gray-100 flex flex-col items-center justify-center text-center hover:bg-white hover:shadow-xl transition-all"
                >
                  {partner.isTextOnly ? (
                    <div className="text-xs font-bold text-gray-900 uppercase">
                      {partner.name}
                    </div>
                  ) : (
                    <img
                      src={`/images/entities/${partner.file}`}
                      alt={partner.name}
                      className="h-10 mb-4 object-contain"
                    />
                  )}

                  <div className="text-[9px] font-bold text-blue-900 uppercase tracking-widest">
                    Partner
                  </div>

                  <div className="text-xs font-bold text-gray-900 uppercase tracking-tight mt-1">
                    {partner.name}
                  </div>
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
