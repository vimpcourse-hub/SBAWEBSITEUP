import React, { useMemo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/projects";

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

  const urlGroup = query.get("group") || "ALL";

  const [selectedVertical, setSelectedVertical] = useState("ALL");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedGroup, setSelectedGroup] = useState("ALL");

  /* ✅ APPLY LOGO FILTER FROM URL */
  useEffect(() => {
    setSelectedGroup(urlGroup);
  }, [urlGroup]);

  const allCategories = useMemo(() => {
    const set = new Set<string>();
    PROJECTS.forEach(p => set.add(p.category.primary.toUpperCase()));
    return ["ALL", ...Array.from(set)];
  }, []);

  /* ✅ FINAL FILTER LOGIC */
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(p => {

      const matchVertical =
        selectedVertical === "ALL" || p.vertical === selectedVertical;

      const matchCategory =
        selectedCategory === "ALL" ||
        p.category.primary.toUpperCase() === selectedCategory;

      const matchGroup =
        selectedGroup === "ALL" ||
        p.entities?.clients?.includes(selectedGroup) ||
        p.entities?.partners?.includes(selectedGroup) ||
        p.entities?.authorities?.includes(selectedGroup);

      return matchVertical && matchCategory && matchGroup;
    });
  }, [selectedVertical, selectedCategory, selectedGroup]);

  const clearFilters = () => {
    setSelectedVertical("ALL");
    setSelectedCategory("ALL");
    setSelectedGroup("ALL");
    window.history.replaceState({}, "", "/projects");
  };

  return (
    <div className="pt-20 bg-white">

      {/* FILTER BAR */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

          <select value={selectedVertical} onChange={e => setSelectedVertical(e.target.value)}>
            {VERTICALS.map(v => <option key={v}>{v}</option>)}
          </select>

          <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
            {allCategories.map(c => <option key={c}>{c}</option>)}
          </select>

          {/* SHOW SELECTED LOGO FILTER */}
          <div className="border px-4 py-2 text-sm bg-white">
            {selectedGroup === "ALL" ? "ALL" : selectedGroup}
          </div>

          <button onClick={clearFilters}>CLEAR FILTERS</button>

        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {filteredProjects.length === 0 ? (
            <div>No projects found</div>
          ) : (
            filteredProjects.map(p => (
              <ProjectCard key={p.id} project={p} />
            ))
          )}
        </div>
      </section>

    </div>
  );
};

export default Projects;
