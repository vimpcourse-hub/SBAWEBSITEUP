import React, { useMemo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/projects";

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

  /* ---------- URL FILTERS ---------- */
  const urlVertical = query.get("vertical") || "ALL";
  const urlGroup = query.get("group") || "ALL";     // ✅ NEW (logo based)
  const urlClient = query.get("client") || "ALL";   // ✅ BACKWARD COMPATIBLE

  /* ---------- STATE ---------- */
  const [selectedVertical, setSelectedVertical] = useState(urlVertical);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedGroup, setSelectedGroup] = useState(urlGroup);
  const [selectedClient, setSelectedClient] = useState(urlClient);

  /* ---------- SYNC URL ---------- */
  useEffect(() => {
    setSelectedVertical(urlVertical);
    setSelectedGroup(urlGroup);
    setSelectedClient(urlClient);
  }, [urlVertical, urlGroup, urlClient]);

  /* ---------- DROPDOWN DATA ---------- */
  const allCategories = useMemo(() => {
    const set = new Set<string>();
    PROJECTS.forEach(p => set.add(p.category.primary.toUpperCase()));
    return Array.from(set).sort();
  }, []);

  const allClients = useMemo(() => {
    const set = new Set<string>();
    PROJECTS.forEach(p => {
      set.add(p.client.name);
      p.entities?.partners?.forEach(x => set.add(x));
      p.entities?.authorities?.forEach(x => set.add(x));
      p.entities?.clients?.forEach(x => set.add(x));
    });
    return Array.from(set).sort();
  }, []);

  /* ---------- FILTER LOGIC ---------- */
  const filteredProjects = useMemo(() => {
    const sv = selectedVertical.toUpperCase();
    const sc = selectedClient.toLowerCase();

    return PROJECTS.filter(p => {
      const matchVertical =
        sv === "ALL" || p.vertical.toUpperCase() === sv;

      const matchCategory =
        selectedCategory === "ALL" ||
        p.category.primary.toUpperCase() === selectedCategory;

      /* ---------- GROUP MATCH (LOGO CLICK) ---------- */
      const matchGroup =
        selectedGroup === "ALL" ||
        p.client.group === selectedGroup ||
        p.entities?.partners?.includes(selectedGroup);

      /* ---------- NAME MATCH (DROPDOWN / OLD URL) ---------- */
      const matchClient =
        selectedClient === "ALL" ||
        p.client.name.toLowerCase() === sc ||
        p.entities?.partners?.some(x => x.toLowerCase() === sc) ||
        p.entities?.authorities?.some(x => x.toLowerCase() === sc) ||
        p.entities?.clients?.some(x => x.toLowerCase() === sc);

      return matchVertical && matchCategory && matchGroup && matchClient;
    });
  }, [
    selectedVertical,
    selectedCategory,
    selectedGroup,
    selectedClient,
  ]);

  /* ---------- CLEAR ---------- */
  const clearFilters = () => {
    setSelectedVertical("ALL");
    setSelectedCategory("ALL");
    setSelectedGroup("ALL");
    setSelectedClient("ALL");
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
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* VERTICAL */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
              Vertical
            </div>
            <select
              value={selectedVertical}
              onChange={e => setSelectedVertical(e.target.value)}
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

          {/* CLIENT (LEGACY) */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
              Client / Authority / Partner
            </div>
            <select
              value={selectedClient}
              onChange={e => setSelectedClient(e.target.value)}
              className="w-full border border-gray-200 px-4 py-3 text-sm bg-white"
            >
              <option value="ALL">ALL</option>
              {allClients.map(c => (
                <option key={c} value={c}>{c}</option>
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
