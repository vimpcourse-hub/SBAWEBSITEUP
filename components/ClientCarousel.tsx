import { ENTITIES } from "../data/entities";
import { Link } from "react-router-dom";
import type { EntityItem } from "../types";

const ClientCarousel = () => {
  // Clients + Authorities + Partners
  const items: EntityItem[] = ENTITIES.filter(
    (e): e is EntityItem =>
      e.type === "client" || e.type === "authority" || e.type === "partner"
  );

  return (
    <div className="py-24 bg-white border-t border-slate-100 overflow-hidden">

      {/* HEADING */}
      <div className="max-w-7xl mx-auto px-6 mb-14 flex flex-col md:flex-row md:items-end justify-between">
        <div>
          <h2 className="text-xs font-bold text-blue-900 uppercase tracking-[0.3em] mb-4">
            Clients, Government & Partners
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 uppercase tracking-tighter">
            Trusted by Industry & Public Institutions
          </h3>
        </div>
        <p className="text-gray-500 text-sm max-w-md mt-4 md:mt-0 font-light">
          Corporate leaders, infrastructure authorities and strategic partners across India.
        </p>
      </div>

      {/* SLIDER */}
      <div className="flex overflow-hidden relative">
        <div className="flex animate-scroll-clients whitespace-nowrap py-6">

          {[...items, ...items].map((e, i) => (
            <Link
              key={`${e.key}-${i}`}
              to={`/projects?entity=${e.key}`}
              className="mx-4 w-[260px] h-48 flex flex-col items-center justify-center bg-gray-50 border border-gray-100 hover:border-blue-900 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl px-6 text-center"
            >

              {/* CONTENT */}
              {e.file ? (
                <>
                  <img
                    src={`/images/entities/${e.file}`}
                    onError={(ev) => {
                      (ev.target as HTMLImageElement).style.display = "none";
                    }}
                    className="max-h-14 object-contain mb-3"
                    alt={e.name}
                    loading="lazy"
                  />

                  {/* NAME ALWAYS SHOWN */}
                  <div className="text-[11px] font-bold uppercase tracking-wide text-gray-900 leading-snug">
                    {e.name}
                  </div>

                  {e.subtitle && (
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-blue-900 mt-1">
                      {e.subtitle}
                    </div>
                  )}
                </>
              ) : (
                <>
                  {/* TEXT-ONLY CARDS */}
                  <div className="text-[13px] font-bold uppercase text-gray-900 leading-snug mb-2">
                    {e.name}
                  </div>

                  {e.subtitle && (
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-blue-900">
                      {e.subtitle}
                    </div>
                  )}
                </>
              )}

            </Link>
          ))}

        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes scroll-clients {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-clients {
          animation: scroll-clients 90s linear infinite;
        }
        .animate-scroll-clients:hover {
          animation-play-state: paused;
        }
      `}</style>

    </div>
  );
};

export default ClientCarousel;
