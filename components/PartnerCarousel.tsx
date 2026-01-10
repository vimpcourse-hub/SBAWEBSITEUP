import React from "react";
import { ENTITIES } from "../data/entities";
import { Link } from "react-router-dom";

const PartnerCarousel: React.FC = () => {
  const items = ENTITIES.filter(e => e.type === "partner");
  if (!items.length) return null;

  return (
    <div className="py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="flex animate-scroll whitespace-nowrap gap-6 px-6">

        {[...items, ...items].map((entity, i) => (
          <Link
            key={`${entity.key}-${i}`}
            to={`/projects?entity=${entity.key}`}
            className="
              w-[220px] h-[120px]
              flex items-center justify-center
              bg-white border border-gray-100
              hover:border-blue-900 hover:shadow-xl
              transition
            "
          >
            {entity.isTextOnly ? (
              <span className="text-sm font-bold uppercase text-center px-4">
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
