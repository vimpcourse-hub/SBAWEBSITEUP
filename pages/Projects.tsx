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
  "Power & Energy",
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
    return Array.from(
      new Set(PROJECTS.map(p => p.category.primary.toUpperCase()))
    ).sort();
  }, []);

  const allEntities = useMemo(() => {
    return ENTITIES.map(e => ({ key: e.key, name: e.name }))
      .sort((a, b) => a.name.localeCompare(b.name));
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

  const clearFilters = () => {
    setSelectedVertical("ALL");
    setSelectedCategory("ALL");
    setSelectedEntity("ALL");
    window.history.replaceState({}, "", "/projects");
  };

  return (
    <div className="pt-20 bg-white">
      {/* FILTER BAR */}
      <section className="py-10 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">

          <select value={selectedVertical}
            onChange={e => setSelectedVertical(e.target.value)}
            className="border px-4 py-3">
            {VERTICALS.map(v => <option key={v}>{v}</option>)}
          </select>

          <select value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="border px-4 py-3">
            <option>ALL</option>
            {allCategories.map(c => <option key={c}>{c}</option>)}
          </select>

          <select value={selectedEntity}
            onChange={e => setSelectedEntity(e.target.value)}
            className="border px-4 py-3">
            <option value="ALL">ALL</option>
            {allEntities.map(e => (
              <option key={e.key} value={e.key}>{e.name}</option>
            ))}
          </select>

          <button onClick={clearFilters}
            className="border font-bold uppercase text-xs">
            Clear Filters
          </button>

        </div>
      </section>

      {/* GRID */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        {filteredProjects.length === 0 ? (
          <div className="text-center text-gray-400">No projects found</div>
        ) : (
          <div className="grid md:grid-cols-3 gap-12">
            {filteredProjects.map(p => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Projects;
