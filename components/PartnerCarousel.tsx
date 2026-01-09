import React from "react";
import { ENTITIES } from "../data/entities";
import { Link } from "react-router-dom";

const PartnerCarousel: React.FC = () => {

  const partners = ENTITIES.filter(e => e.type === "partner");

  return (
    <div className="py-20 bg-gray-50 border-y border-gray-100 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 mb-3">
          Strategic Alliances & JV Partners
        </h2>
        <div className="h-[2px] w-16 bg-blue-900/30 mx-auto"></div>
      </div>

      <div className="flex overflow-hidden relative">
        <div className="flex animate-scroll-partners whitespace-nowrap py-4">

          {[...partners, ...partners].map((partner, i) => (
            <Link
              key={i}
              to={`/projects?entity=${encodeURIComponent(partner.name)}`}
              className="mx-14 flex flex-col items-center justify-center w-48 text-center hover:scale-105 transition-transform"
            >

              {partner.file ? (
                <>
                  <img
                    src={`/images/entities/${partner.file}`}
                    alt={partner.name}
                    className="max-h-10 object-contain mb-3"
                  />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                    {partner.name}
                  </span>
                </>
              ) : (
                <div className="text-xs font-bold uppercase tracking-widest text-gray-600">
                  {partner.name}
                </div>
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
