import React, { useMemo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/projects";
import { ENTITIES } from "../data/entities";

/* ---------- HELPERS ---------- */
const useQuery = () => new URLSearchParams(useLocation().search);

/* ---------- CONSTANTS ---------- */
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

  /* ---------- URL PARAMS ---------- */
  const urlVertical = query.get("vertical") || "ALL";
  const urlEntity = query.get("entity") || "ALL";

  /* ---------- STATE ---------- */
  const [selectedVertical, setSelectedVertical] = useState(urlVertical);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedEntity, setSelectedEntity] = useState(urlEntity);

  /* ---------- SYNC URL → STATE ---------- */
  useEffect(() => {
    setSelectedVertical(urlVertical);
    setSelectedEntity(urlEntity);
  }, [urlVertical, urlEntity]);

  /* ---------- GOVERNMENT PARENT → CHILD EXPANSION ---------- */
  const expandedAuthorityKeys = useMemo(() => {
    if (selectedEntity === "ALL") return [];

    const entity = ENTITIES.find(e => e.key === selectedEntity);
    if (!entity) return [];

    // If parent govt selected → include all children
    if (entity.type === "authority" && !entity.parent) {
      return ENTITIES
        .filter(e => e.parent === entity.key)
        .map(e => e.key);
    }

    return [];
  }, [selectedEntity]);

  /* ---------- DROPDOWNS ---------- */
  const allCategories = useMemo(() => {
    const set = new Set<string>();
    PROJECTS.forEach(p =>
      set.add(p.category.primary.toUpperCase())
    );
    return Array.from(set).sort();
  }, []);

  const allEntities = useMemo(() => {
    return ENTITIES
      .filter(e => e.type !== "authority" || e.parent) // exclude govt parents
      .map(e => ({ key: e.key, name: e.name }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  /* ---------- FILTER LOGIC ---------- */
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(p => {
      const matchVertical =
        selectedVertical === "ALL" ||
        p.vertical === selectedVertical;

      const matchCategory =
        selectedCategory === "ALL" ||
        p.category.primary.toUpperCase() === selectedCategory;

      const matchEntity =
        selectedEntity === "ALL" ||
        p.entities?.clients?.includes(selectedEntity) ||
        p.entities?.partners?.includes(selectedEntity) ||
        p.entities?.authorities?.includes(selectedEntity) ||
        expandedAuthorityKeys.some(k =>
          p.entities?.authorities?.includes(k)
        );

      return matchVertical && matchCategory && matchEntity;
    });
  }, [
    selectedVertical,
    selectedCategory,
    selectedEntity,
    expandedAuthorityKeys
  ]);

  /* ---------- CLEAR ---------- */
  const clearFilters = () => {
    setSelectedVertical("ALL");
    setSelectedCategory("ALL");
    setSelectedEntity("ALL");
    window.history.replaceState({}, "", "/projects");
  };

  return (
    <div className="pt-20 bg-white">

      {/* HEADER */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
            Project Archive
          </h1>
          <p className="text-gray-500 text-sm max-w-2xl">
            Explore our executed infrastructure and industrial projects across
            sectors, clients and authorities.
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="py-10 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* VERTICAL */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
              Vertical
            </div>
            <select
              value={selectedVertical}
              onChange={e => {
                setSelectedVertical(e.target.value);
                setSelectedEntity("ALL");
              }}
              className="w-full border border-gray-200 px-4 py-3 text-sm bg-white"
            >
              {VERTICALS.map(v => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>

          {/* CATEGORY */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
              Category
            </div>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="w-full border border-gray-200 px-4 py-3 text-sm bg-white"
            >
              <option value="ALL">ALL</option>
              {allCategories.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* ENTITY */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
              Client / Authority / Partner
            </div>
            <select
              value={selectedEntity}
              onChange={e => setSelectedEntity(e.target.value)}
              className="w-full border border-gray-200 px-4 py-3 text-sm bg-white"
            >
              <option value="ALL">ALL</option>
              {allEntities.map(e => (
                <option key={e.key} value={e.key}>{e.name}</option>
              ))}
            </select>
          </div>

          {/* CLEAR */}
          <div className="flex items-end">
            <button
              onClick={clearFilters}
              className="w-full border border-gray-300 px-4 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all"
            >
              Clear Filters
            </button>
          </div>

        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          {filteredProjects.length === 0 ? (
            <div className="text-center py-24 text-gray-400 uppercase tracking-widest text-sm">
              No projects match selected filters
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {filteredProjects.map(p => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          )}

        </div>
      </section>

    </div>
  );
};

export default Projects;
