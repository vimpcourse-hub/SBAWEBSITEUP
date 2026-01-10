import React from "react";
import { ENTITIES } from "../data/entities";
import { Link } from "react-router-dom";

const PartnerCarousel: React.FC = () => {
  const items = ENTITIES.filter(e => e.type === "partner");

  if (!items.length) return null;

  return (
    <div className="py-20 bg-white border-t border-gray-100 overflow-hidden">

      {/* TITLE */}
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between">
        <div>
          <h2 className="text-xs font-bold text-blue-900 uppercase tracking-[0.3em] mb-3">
            Strategic Partners
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-tighter">
            Engineering Alliances
          </h3>
        </div>
        <p className="text-gray-500 text-sm max-w-md mt-4 md:mt-0 font-light">
          Trusted collaborators across engineering, procurement and execution.
        </p>
      </div>

      {/* SLIDER */}
      <div className="flex overflow-hidden relative">
        <div className="flex animate-scroll-partners whitespace-nowrap py-4">

          {[...items, ...items].map((entity, i) => (
            <Link
              key={i}
              to={`/projects?group=${entity.group}`}
              className="mx-3 w-[220px] sm:w-[260px] h-28 sm:h-36 flex items-center justify-center bg-white border border-gray-100 hover:border-blue-900 transition-all duration-300 shadow-sm hover:shadow-lg px-6"
            >
              {entity.isTextOnly ? (
                <span className="text-sm font-bold text-gray-900 uppercase text-center">
                  {entity.name}
                </span>
              ) : (
                <img
                  src={`/images/entities/${entity.file}`}
                  alt={entity.name}
                  className="max-h-12 sm:max-h-14 object-contain"
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
          animation: scroll-partners 35s linear infinite;
        }
        .animate-scroll-partners:hover {
          animation-play-state: paused;
        }
      `}</style>

    </div>
  );
};

export default PartnerCarousel;
