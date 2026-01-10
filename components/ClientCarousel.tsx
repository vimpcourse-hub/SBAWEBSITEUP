import React from "react";
import { ENTITIES } from "../data/entities";
import { Link } from "react-router-dom";

const ClientCarousel: React.FC = () => {
  const items = ENTITIES.filter(e => e.type === "client");

  return (
    <div className="py-20 bg-white overflow-hidden">
      <div className="flex animate-scroll whitespace-nowrap py-6">

        {[...items, ...items].map((entity, i) => (
          <Link
            key={i}
            to={`/projects?group=${entity.group}`}
            className="mx-4 w-[260px] h-36 flex items-center justify-center
                       bg-white border border-gray-100 hover:border-blue-900
                       transition shadow-sm hover:shadow-lg px-6"
          >
            {entity.isTextOnly ? (
              <span className="text-sm font-bold text-center uppercase">
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
