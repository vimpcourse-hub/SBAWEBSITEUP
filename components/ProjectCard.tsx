import React from "react";
import { Link } from "react-router-dom";
import { Project } from "../types";
import { MapPin } from "lucide-react";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* IMAGE */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-100">
        <img
          src={project.heroImage}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* BADGES */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-blue-800 text-white text-[10px] px-3 py-1 uppercase font-bold tracking-widest">
            {project.category.primary}
          </span>
          <span className="bg-black text-white text-[10px] px-3 py-1 uppercase font-bold tracking-widest">
            {project.vertical}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">

        <div className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold mb-1">
          {project.client.name}
        </div>

        <h3 className="font-bold text-lg leading-snug mb-4">
          {project.title}
        </h3>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            {project.location.city}
          </div>

          <span className="border border-blue-600 text-blue-700 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
            {project.timeline.status}
          </span>
        </div>

        <div className="mt-4 text-right text-sm font-semibold">
          ₹{project.projectValue.amount} {project.projectValue.unit}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
