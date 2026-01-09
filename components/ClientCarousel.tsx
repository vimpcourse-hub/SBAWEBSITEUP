import React from "react";
import { ENTITIES } from "../data/entities";
import { Link } from "react-router-dom";

const ClientCarousel: React.FC = () => {

  const items = ENTITIES.filter(e => e.type === "client" || e.type === "authority");

  return (
    <div className="py-24 bg-white border-t border-gray-100 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 mb-14 flex flex-col md:flex-row md:items-end justify-between">
        <div>
          <h2 className="text-xs font-bold text-blue-900 uppercase tracking-[0.3em] mb-4">
            Clients & Government Authorities
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 uppercase tracking-tighter">
            Trusted by Industry & Government
          </h3>
        </div>
        <p className="text-gray-500 text-sm max-w-md mt-4 md:mt-0 font-light">
          Corporate houses, infrastructure boards and public sector institutions.
        </p>
      </div>

      <div className="flex overflow-hidden relative">
        <div className="flex animate-scroll-clients whitespace-nowrap py-6">

          {[...items, ...items].map((entity, i) => (
            <Link
              key={i}
              to={`/projects?client=${encodeURIComponent(entity.name)}`}
              className="mx-4 w-[280px] h-44 flex flex-col items-center justify-center bg-gray-50 border border-gray-100 hover:border-blue-900 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl px-6 text-center"
            >
              {entity.isTextOnly ? (
                <>
                  <div className="text-sm font-bold text-gray-900 uppercase">
                    {entity.name}
                  </div>
                  {entity.subtitle && (
                    <div className="text-[10px] mt-2 uppercase tracking-widest text-gray-400">
                      {entity.subtitle}
                    </div>
                  )}
                </>
              ) : (
                <>
                  <img
                    src={`/images/entities/${entity.file}`}
                    alt={entity.name}
                    className="max-h-14 object-contain mb-5"
                  />
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    {entity.name}
                  </div>
                </>
              )}
            </Link>
          ))}

        </div>
      </div>

      <style>{`
        @keyframes scroll-clients {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-clients {
          animation: scroll-clients 45s linear infinite;
        }
        .animate-scroll-clients:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ClientCarousel;
