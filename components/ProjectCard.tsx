import React from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { Project } from "../types";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const showValue =
    project.projectValue.amount > 0 &&
    project.projectValue.unit !== "CSR";

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="block border border-gray-100 hover:shadow-xl transition bg-white"
    >
      <div className="relative h-60 overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-blue-900 text-white text-[10px] px-3 py-1 uppercase">
            {project.category.primary}
          </span>
          <span className="bg-black text-white text-[10px] px-3 py-1 uppercase">
            {project.vertical}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="text-[11px] text-gray-400 uppercase mb-1">
          {project.client.name}
        </div>

        <h3 className="font-bold text-lg mb-4">
          {project.title}
        </h3>

        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <div className="flex gap-2 items-center">
            <MapPin size={14} />
            {project.location.city}
          </div>

          <span className="border border-blue-600 text-blue-600 text-[10px] px-3 py-1 uppercase">
            {project.timeline.status}
          </span>
        </div>

        {showValue && (
          <div className="pt-4 border-t text-sm flex justify-between">
            <span className="text-gray-400 uppercase text-[11px]">
              Asset Valuation
            </span>
            <span className="font-bold">
              ₹{project.projectValue.amount} {project.projectValue.unit}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProjectCard;
