import React from "react";
import { ENTITIES } from "../data/entities";
import { Link } from "react-router-dom";

const PartnerCarousel: React.FC = () => {
  const items = ENTITIES.filter(e => e.type === "partner");

  if (!items.length) return null;

  return (
    <div className="py-24 bg-white border-t border-gray-100 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 mb-14 flex flex-col md:flex-row md:items-end justify-between">
        <div>
          <h2 className="text-xs font-bold text-blue-900 uppercase tracking-[0.3em] mb-4">
            Strategic Partners
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 uppercase tracking-tighter">
            Engineering Alliances
          </h3>
        </div>
        <p className="text-gray-500 text-sm max-w-md mt-4 md:mt-0 font-light">
          Trusted collaborators across engineering, procurement and execution.
        </p>
      </div>

      <div className="flex overflow-hidden relative">
        <div className="flex animate-scroll-partners whitespace-nowrap py-6">

          {[...items, ...items].map((entity, i) => (
            <Link
              key={i}
              to={`/projects?group=${entity.group}`}
              className="mx-4 w-[260px] h-36 flex items-center justify-center
                         bg-white border hover:border-blue-900 transition
                         shadow-sm hover:shadow-lg px-6"
            >
              {entity.isTextOnly ? (
                <span className="text-sm font-bold uppercase text-center">
                  {entity.name}
                </span>
              ) : (
                <img
                  src={`/images/entities/${entity.file}`}
                  alt={entity.name}
                  className="max-h-14 object-contain"
                />
              )}
            </Link>
          ))}

        </div>
      </div>

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
