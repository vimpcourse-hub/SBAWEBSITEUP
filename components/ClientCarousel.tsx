import { ENTITIES } from "../data/entities";
import { Link } from "react-router-dom";

const ClientCarousel = () => {
  const items = ENTITIES.filter(e => e.type === "client");

  return (
    <div className="py-20 overflow-hidden bg-white">
      <div className="flex animate-scroll whitespace-nowrap">
        {[...items, ...items].map((e, i) => (
          <Link
            key={e.key + i}
            to={`/projects?entity=${e.key}`}
            className="mx-4 w-[220px] h-[130px] flex items-center justify-center border hover:border-blue-900"
          >
            {e.file ? (
              <img src={`/images/entities/${e.file}`} className="max-h-[70px]" />
            ) : (
              <span className="font-bold text-sm">{e.name}</span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ClientCarousel;
