import { ENTITIES } from "../data/entities";
import { Link } from "react-router-dom";

const Clients = () => {
  const items = ENTITIES.filter(
    e => e.type === "client" || e.type === "authority"
  );

  return (
    <div className="pt-20">
      <section className="py-24 text-center">
        <h1 className="text-5xl font-bold uppercase">Our Clients</h1>
      </section>

      <section className="py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
          {items.map(e => (
            <Link
              key={e.key}
              to={`/projects?entity=${e.key}`}
              className="border p-6 text-center hover:border-blue-900"
            >
              {e.file && !e.isTextOnly ? (
                <img src={`/images/entities/${e.file}`} className="mx-auto mb-4 max-h-[70px]" />
              ) : (
                <div className="font-bold text-sm">{e.name}</div>
              )}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Clients;
