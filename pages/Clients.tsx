import React from "react";
import { ENTITIES } from "../data/entities";
import { Link } from "react-router-dom";

const Clients: React.FC = () => {

  // ✅ Only real clients + authority CHILDREN (exclude govt parents)
  const clientsAndAuthorities = ENTITIES.filter(e =>
    (e.type === "client") ||
    (e.type === "authority" && e.parent)
  );

  return (
    <div className="pt-20 bg-white">

      {/* HEADER */}
      <section className="py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-6">
            Our Clients
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
            Trusted by corporate leaders and government institutions
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

            {clientsAndAuthorities.map(entity => (
              <Link
                key={entity.key}
                to={`/projects?entity=${encodeURIComponent(entity.key)}`}
                className="
                  group bg-white border border-gray-100
                  hover:border-blue-900 hover:shadow-xl
                  transition-all duration-300
                  flex flex-col items-center justify-center
                  px-6 py-10 text-center
                "
              >
                {/* LOGO */}
                {entity.file ? (
                  <img
                    src={`/images/entities/${entity.file}`}
                    alt={entity.name}
                    className="max-h-[60px] max-w-[180px] object-contain mb-4"
                  />
                ) : (
                  <div className="text-sm font-bold uppercase text-gray-800 mb-4 px-2 leading-tight">
                    {entity.name}
                  </div>
                )}

                {/* NAME */}
                <div className="text-[11px] font-semibold uppercase tracking-widest text-gray-600 leading-tight text-center px-2">
                  {entity.name}
                </div>

                {/* SUBTITLE (optional, clean) */}
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

    </div>
  );
};

export default Clients;
