import { useLocation } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import { ENTITIES } from "../data/entities";
import { useMemo, useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

const useQuery = () => new URLSearchParams(useLocation().search);

const Projects = () => {
  const query = useQuery();
  const urlEntity = query.get("entity") || "ALL";
  const [entity, setEntity] = useState(urlEntity);

  useEffect(() => setEntity(urlEntity), [urlEntity]);

  const expanded = useMemo(() => {
    const e = ENTITIES.find(x => x.key === entity);
    if (!e || e.parent) return [];
    return ENTITIES.filter(x => x.parent === e.key).map(x => x.key);
  }, [entity]);

  const filtered = useMemo(() => {
    if (entity === "ALL") return PROJECTS;
    return PROJECTS.filter(p =>
      p.entities?.clients?.includes(entity) ||
      p.entities?.partners?.includes(entity) ||
      p.entities?.authorities?.includes(entity) ||
      expanded.some(k => p.entities?.authorities?.includes(k))
    );
  }, [entity, expanded]);

  return (
    <div className="pt-20">
      <section className="py-10 px-6 bg-gray-50">
        <select value={entity} onChange={e => setEntity(e.target.value)}>
          <option value="ALL">ALL</option>
          {ENTITIES.map(e => (
            <option key={e.key} value={e.key}>{e.name}</option>
          ))}
        </select>
      </section>

      <section className="py-20 px-6 grid md:grid-cols-3 gap-10">
        {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
      </section>
    </div>
  );
};

export default Projects;
