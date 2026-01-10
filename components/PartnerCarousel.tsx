import React from "react";
import { ENTITIES } from "../data/entities";
import { Link } from "react-router-dom";

const PartnerCarousel: React.FC = () => {
  const items = ENTITIES.filter(e => e.type === "partner");

  return (
    <div className="py-20 bg-white overflow-hidden">
      <div className="flex animate-scroll whitespace-nowrap py-6">

        {[...items, ...items].map((entity, i) => (
          <Link
            key={i}
            to={`/projects?group=${entity.group}`}
            className="mx-4 w-[220px] h-28 flex items-center justify-center bg-gray-50 border hover:border-blue-900 transition"
          >
            {entity.isTextOnly ? (
              <span className="text-sm font-bold text-center">{entity.name}</span>
            ) : (
              <img
                src={`/images/entities/${entity.file}`}
                alt={entity.name}
                className="max-h-12 object-contain"
              />
            )}
          </Link>
        ))}

      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PartnerCarousel;
