import React from "react";
import { ENTITIES } from "../data/entities";
import { Link } from "react-router-dom";

const PartnerCarousel: React.FC = () => {
  const items = ENTITIES.filter(e => e.type === "partner");
  if (!items.length) return null;

  return (
    <div className="py-24 bg-white border-t border-gray-100 overflow-hidden">

      {/* HEADING */}
      <div className="max-w-7xl mx-auto px-6 mb-14 flex justify-between items-end">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-900 mb-2">
            Strategic Partners
          </h2>
          <h3 className="text-3xl font-bold uppercase tracking-tighter">
            Engineering Alliances
          </h3>
        </div>
      </div>

      {/* SLIDER */}
      <div className="flex overflow-hidden relative">
        <div className="flex animate-scroll-partners whitespace-nowrap py-6">

          {[...items, ...items].map((entity, i) => (
            <Link
              key={`${entity.key}-${i}`}
              to={`/projects?entity=${entity.key}`}
              className="
                mx-4 w-[240px] h-[150px]
                flex items-center justify-center
                bg-gray-50 border border-gray-100
                hover:border-blue-900 hover:bg-white
                transition-all duration-500
                shadow-sm hover:shadow-xl
              "
            >
              {entity.isTextOnly ? (
                <span className="text-sm font-bold uppercase text-center px-3">
                  {entity.name}
                </span>
              ) : (
                <img
                  src={`/images/entities/${entity.file}`}
                  alt={entity.name}
                  className="max-h-[70px] max-w-[160px] object-contain"
                />
              )}
            </Link>
          ))}

        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes scroll-partners {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-partners {
          animation: scroll-partners 40s linear infinite;
        }
        .animate-scroll-partners:hover {
          animation-play-state: paused;
        }
      `}</style>

    </div>
  );
};

export default PartnerCarousel;
