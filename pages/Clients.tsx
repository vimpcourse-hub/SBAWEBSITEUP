import React from "react";
import { ENTITIES } from "../data/entities";
import { Link } from "react-router-dom";

const Clients: React.FC = () => {
  const items = ENTITIES.filter(
    e => e.type === "client" || e.type === "authority"
  );

  return (
    <div className="pt-20 bg-white">

      <section className="py-24 border-b border-gray-100 text-center">
        <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter">
          Our Clients
        </h1>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {items.map(entity => (
            <Link
              key={entity.key}
              to={`/projects?entity=${entity.key}`}
              className="
                bg-white border border-gray-100
                hover:border-blue-900 hover:shadow-xl
                transition flex flex-col items-center
                justify-center px-6 py-10 text-center
              "
            >
              {entity.isTextOnly ? (
                <div className="text-sm font-bold uppercase">
                  {entity.name}
                </div>
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
      </section>

    </div>
  );
};

export default Clients;
