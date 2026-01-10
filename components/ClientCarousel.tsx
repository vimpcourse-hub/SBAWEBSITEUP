import React from "react";
import { ENTITIES } from "../data/entities";
import { Link } from "react-router-dom";

const ClientCarousel: React.FC = () => {
  const items = ENTITIES.filter(e =>
    e.type === "client" || e.type === "authority"
  );

  return (
    <div className="py-20 bg-white overflow-hidden">
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
                className="max-h-[80px] max-w-[180px] object-contain"
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
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ClientCarousel;
