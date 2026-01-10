import React, { useMemo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/projects";
import { ENTITIES } from "../data/entities";

const useQuery = () => new URLSearchParams(useLocation().search);

const VERTICALS = [
  "ALL",
  "FMCG & Consumer Goods",
  "Automobile & Auto Ancillaries",
  "Machine & SPM",
  "Public & Government",
  "Retail & CSR",
  "Power & Energy"
];

const Projects: React.FC = () => {
  const query = useQuery();

  const urlVertical = query.get("vertical") || "ALL";
  const urlEntity = query.get("entity") || "ALL";

  const [selectedVertical, setSelectedVertical] = useState(urlVertical);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedEntity, setSelectedEntity] = useState(urlEntity);

  useEffect(() => {
    setSelectedVertical(urlVertical);
    setSelectedEntity(urlEntity);
  }, [urlVertical, urlEntity]);

  const allCategories = useMemo(() => {
    const set = new Set<string>();
    PROJECTS.forEach(p => set.add(p.category.primary.toUpperCase()));
    return Array.from(set);
  }, []);

  const allEntities = useMemo(() => {
    return ENTITIES.map(e => ({ key: e.key, name: e.name }));
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(p => {
      const matchVertical =
        selectedVertical === "ALL" || p.vertical === selectedVertical;

      const matchCategory =
        selectedCategory === "ALL" ||
        p.category.primary.toUpperCase() === selectedCategory;

      const matchEntity =
        selectedEntity === "ALL" ||
        p.entities?.clients?.includes(selectedEntity) ||
        p.entities?.authorities?.includes(selectedEntity) ||
        p.entities?.partners?.includes(selectedEntity);

      return matchVertical && matchCategory && matchEntity;
    });
  }, [selectedVertical, selectedCategory, selectedEntity]);

  return (
    <div className="pt-20 bg-white">

      <section className="py-10 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">

          <select value={selectedVertical} onChange={e => setSelectedVertical(e.target.value)}>
            {VERTICALS.map(v => <option key={v}>{v}</option>)}
          </select>

          <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
            <option value="ALL">ALL</option>
            {allCategories.map(c => <option key={c}>{c}</option>)}
          </select>

          <select value={selectedEntity} onChange={e => setSelectedEntity(e.target.value)}>
            <option value="ALL">ALL</option>
            {allEntities.map(e => (
              <option key={e.key} value={e.key}>{e.name}</option>
            ))}
          </select>

          <button onClick={() => window.location.href = "/projects"}>
            Clear Filters
          </button>

        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {filteredProjects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Projects;
