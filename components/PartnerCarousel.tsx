import React from "react";
import { ENTITIES } from "../data/entities";
import { Link } from "react-router-dom";

const PartnerCarousel: React.FC = () => {
  const items = ENTITIES.filter(e => e.type === "partner");
  if (!items.length) return null;

  return (
    <div className="py-20 bg-white border-t border-gray-100 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-900 mb-2">
            Strategic Partners
          </h2>
          <h3 className="text-3xl font-bold uppercase tracking-tighter">
            Engineering Alliances
          </h3>
        </div>
      </div>

      <div className="flex animate-scroll whitespace-nowrap py-6">
        {[...items, ...items].map((entity, i) => (
          <Link
            key={`${entity.key}-${i}`}
            to={`/projects?entity=${entity.key}`}
            className="
              mx-4 w-[220px] h-[140px]
              flex items-center justify-center
              bg-white border border-gray-100
              hover:border-blue-900
              transition shadow-sm hover:shadow-lg
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
  );
};

export default PartnerCarousel;
