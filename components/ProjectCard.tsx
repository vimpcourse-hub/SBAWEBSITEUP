import React from "react";
import { Project } from "../types";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block border border-gray-100 hover:shadow-xl transition bg-white"
    >

      {/* IMAGE */}
      <div className="relative h-[230px] overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* BADGES */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-blue-900 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
            {project.category.primary}
          </span>
          <span className="bg-black text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
            {project.vertical}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">

        <div className="text-[11px] uppercase tracking-widest text-gray-400 mb-2">
          {project.client.name}
        </div>

        <h3 className="text-lg font-bold leading-snug mb-4">
          {project.title}
        </h3>

        <div className="flex items-center justify-between text-sm text-gray-500">

          <div className="flex items-center gap-1">
            <MapPin size={14} />
            {project.location.city}
          </div>

          <span className="border border-blue-200 text-blue-700 text-[10px] px-3 py-1 font-bold uppercase">
            {project.timeline.status}
          </span>

        </div>

        {/* VALUE (HIDE IF 0) */}
        {project.projectValue.amount > 0 && (
          <div className="mt-4 text-sm font-semibold">
            ₹{project.projectValue.amount} {project.projectValue.unit}
          </div>
        )}

      </div>

    </Link>
  );
};

export default ProjectCard;
