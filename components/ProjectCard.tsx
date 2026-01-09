import React, { useState, useEffect, useRef } from 'react';
import { MapPin, ArrowUpRight, ImageIcon } from 'lucide-react';
import { Project } from '../types';
import { Link } from 'react-router-dom';
import ImagePlaceholder from './ImagePlaceholder';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(-1);
  const slideshowInterval = useRef<number | null>(null);

  const hasGallery = project.gallery && project.gallery.length > 0;

  useEffect(() => {
    if (isHovered && hasGallery) {
      setCurrentSlideIndex(0);

      slideshowInterval.current = window.setInterval(() => {
        setCurrentSlideIndex(prev => (prev + 1) % project.gallery.length);
      }, 2200);
    } else {
      if (slideshowInterval.current) {
        clearInterval(slideshowInterval.current);
      }
      setCurrentSlideIndex(-1);
    }

    return () => {
      if (slideshowInterval.current) {
        clearInterval(slideshowInterval.current);
      }
    };
  }, [isHovered, hasGallery, project.gallery]);

  /* CLEAN VALUATION */
  const displayValue =
    project.projectValue.amount > 0
      ? `₹${project.projectValue.amount} Lakhs`
      : "—";

  return (
    <Link
      to={`/projects/${project.slug}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group bg-white border border-slate-100 overflow-hidden transition-all duration-700 hover:shadow-[0_40px_100px_rgba(0,35,102,0.12)] flex flex-col h-full"
    >
      {/* IMAGE BLOCK */}
      <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">

        {/* HERO IMAGE */}
        {project.heroImage ? (
          <img
            src={project.heroImage}
            alt={project.title}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
              currentSlideIndex === -1 ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            } group-hover:scale-105`}
          />
        ) : (
          <ImagePlaceholder title={project.title} />
        )}

        {/* GALLERY PREVIEW */}
        {hasGallery &&
          project.gallery.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${project.title} view ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                idx === currentSlideIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
            />
          ))}

        {/* CATEGORY BADGE */}
        <span className="absolute top-4 left-4 bg-[#002366] text-white text-[9px] px-4 py-2 font-bold uppercase tracking-widest z-20">
          {project.category.primary}
        </span>

        {/* VERTICAL BADGE */}
        <span className="absolute top-4 right-4 bg-black/60 backdrop-blur text-white text-[9px] px-4 py-2 font-bold uppercase tracking-widest z-20">
          {project.vertical}
        </span>

        {/* GALLERY COUNTER */}
        {hasGallery && (
          <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-black/60 backdrop-blur text-white text-[8px] font-bold uppercase tracking-widest px-3 py-1.5 flex items-center">
              <ImageIcon size={10} className="mr-2 text-blue-400" />
              {currentSlideIndex === -1
                ? 'Preview'
                : `${currentSlideIndex + 1} / ${project.gallery.length}`}
            </div>
          </div>
        )}

        {/* HOVER ACTION */}
        <div className="absolute inset-0 bg-[#002366]/0 group-hover:bg-[#002366]/5 transition-all duration-700 flex items-center justify-center z-10">
          <div className="bg-white text-[#002366] p-4 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-2xl">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* CONTENT BLOCK */}
      <div className="p-10 flex flex-col flex-grow">

        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
          {project.client.name}
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-8 group-hover:text-[#002366] transition-colors uppercase leading-tight">
          {project.title}
        </h3>

        <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5 mr-2 text-[#002366]" />
            {project.location.city}
          </div>

          <span className="text-[9px] font-bold uppercase tracking-widest bg-blue-50 text-[#002366] px-3 py-1 border border-blue-100">
            {project.timeline.status}
          </span>
        </div>
      </div>

      {/* VALUATION STRIP */}
      <div className="bg-slate-50 px-10 py-6 flex justify-between items-center group-hover:bg-[#002366] group-hover:text-white transition-all duration-500 border-t border-slate-100">
        <span className="text-[9px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-70">
          Asset Valuation
        </span>
        <span className="text-sm font-bold uppercase tracking-tight">
          {displayValue}
        </span>
      </div>
    </Link>
  );
};

export default ProjectCard;
