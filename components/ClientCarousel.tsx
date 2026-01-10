import React from "react";
import { ENTITIES } from "../data/entities";
import { Link } from "react-router-dom";

const ClientCarousel: React.FC = () => {

  // ✅ Clients + Govt PARENTS only
  const items = ENTITIES.filter(e =>
    e.type === "client" ||
    (e.type === "authority" && !e.parent) // govt parents only
  );

  return (
    <div className="py-20 bg-white overflow-hidden">
      <div className="flex animate-scroll whitespace-nowrap py-6">

        {[...items, ...items].map((entity, i) => (
          <Link
            key={`${entity.key}-${i}`}
            to={`/projects?entity=${encodeURIComponent(entity.key)}`}
            className="
              mx-3
              w-[180px] h-[110px]
              flex items-center justify-center
              bg-white
              border border-gray-100
              hover:border-blue-900
              transition
              shadow-sm hover:shadow-lg
            "
          >
            {entity.isTextOnly ? (
              <span className="text-[11px] font-bold uppercase text-center leading-tight px-2">
                {entity.name}
              </span>
            ) : (
              <img
                src={`/images/entities/${entity.file}`}
                alt={entity.name}
                className="max-h-[48px] max-w-[120px] object-contain"
              />
            )}
          </Link>
        ))}

      </div>

      {/* animation */}
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
