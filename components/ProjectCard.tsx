import React from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { Project } from "../types";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const showValue =
    project.projectValue.amount > 0 &&
    project.projectValue.unit !== "CSR";

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="block border border-gray-100 hover:shadow-xl transition-all bg-white"
    >
      {/* IMAGE */}
      <div className="relative h-60 bg-gray-100 overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />

        {/* CATEGORY */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-blue-900 text-white text-[10px] px-3 py-1 uppercase tracking-wider">
            {project.category.primary.toUpperCase()}
          </span>
          <span className="bg-black text-white text-[10px] px-3 py-1 uppercase tracking-wider">
            {project.vertical.toUpperCase()}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <div className="text-[11px] text-gray-400 uppercase tracking-widest mb-1">
          {project.client.name}
        </div>

        <h3 className="font-bold text-lg leading-snug mb-4">
          {project.title}
        </h3>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            {project.location.city}
          </div>

          <span className="border border-blue-600 text-blue-600 text-[10px] px-3 py-1 font-bold uppercase tracking-wider">
            {project.timeline.status}
          </span>
        </div>

        {/* VALUE — HIDE IF 0 or CSR */}
        {showValue && (
          <div className="pt-4 border-t text-sm flex justify-between">
            <span className="text-gray-400 uppercase text-[11px] tracking-wider">
              Asset Valuation
            </span>
            <span className="font-bold text-black">
              ₹{project.projectValue.amount} {project.projectValue.unit}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProjectCard;
