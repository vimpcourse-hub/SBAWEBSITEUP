import React from "react";
import { ENTITIES } from "../data/entities";
import { Link } from "react-router-dom";

const Clients: React.FC = () => {

  const clientsAndAuthorities = ENTITIES.filter(
    e => e.type === "client" || e.type === "authority"
  );

  const partners = ENTITIES.filter(e => e.type === "partner");

  return (
    <div className="pt-20 bg-white">

      {/* HEADER */}
      <section className="py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-6">
            Our Clients & Alliances
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
            Trusted by corporate leaders, government institutions and strategic partners
            across infrastructure and industrial development.
          </p>
        </div>
      </section>

      {/* CLIENTS & AUTHORITIES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-blue-900 mb-12">
            Clients & Government Authorities
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">

            {clientsAndAuthorities.map((entity, i) => (
              <Link
                key={i}
                to={`/projects?entity=${encodeURIComponent(entity.name)}`}
                className="group bg-gray-50 border border-gray-100 hover:border-blue-900 hover:bg-white transition-all duration-300 flex flex-col items-center justify-center px-6 py-10 text-center shadow-sm hover:shadow-xl"
              >

                {entity.file ? (
                  <img
                    src={`/images/entities/${entity.file}`}
                    alt={entity.name}
                    className="max-h-[60px] max-w-[180px] object-contain mb-4"
                  />
                ) : (
                  <div className="text-sm font-bold uppercase text-gray-800 mb-2">
                    {entity.name}
                  </div>
                )}

                <div className="text-[11px] font-semibold uppercase tracking-widest text-gray-600">
                  {entity.name}
                </div>

                {entity.subtitle && (
                  <div className="text-[9px] mt-1 uppercase tracking-widest text-gray-400">
                    {entity.subtitle}
                  </div>
                )}

              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* PARTNERS & JV */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-gray-500 mb-12 text-center">
            Strategic Alliances & JV Partners
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">

            {partners.map((entity, i) => (
              <Link
                key={i}
                to={`/projects?entity=${encodeURIComponent(entity.name)}`}
                className="group bg-white border border-gray-100 hover:border-blue-900 transition-all duration-300 flex flex-col items-center justify-center px-6 py-10 text-center shadow-sm hover:shadow-xl"
              >

                {entity.file ? (
                  <img
                    src={`/images/entities/${entity.file}`}
                    alt={entity.name}
                    className="max-h-[50px] max-w-[160px] object-contain mb-4"
                  />
                ) : (
                  <div className="text-sm font-bold uppercase text-gray-800 mb-2">
                    {entity.name}
                  </div>
                )}

                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  {entity.name}
                </div>

              </Link>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
};

export default Clients;
