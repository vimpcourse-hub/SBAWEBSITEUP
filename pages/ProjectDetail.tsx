import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import { 
  MapPin, Calendar, Briefcase, TrendingUp, ChevronLeft, ChevronRight
} from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { config } from '../config';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find(p => p.slug === slug);

  const [galleryIndex, setGalleryIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  const galleryTouchStart = useRef<number | null>(null);
  const galleryTouchEnd = useRef<number | null>(null);

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center pt-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tighter">
          Archive Not Found
        </h2>
        <Link
          to="/projects"
          className="text-blue-900 font-bold uppercase text-[10px] tracking-widest border-b-2 border-blue-900 pb-1"
        >
          Return to Portfolio
        </Link>
      </div>
    );
  }

  const gallery = project.gallery || [];

  const nextGalleryImg = () =>
    setGalleryIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));

  const prevGalleryImg = () =>
    setGalleryIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));

  const handleGalleryTouchStart = (e: React.TouchEvent) => {
    galleryTouchStart.current = e.targetTouches[0].clientX;
  };

  const handleGalleryTouchMove = (e: React.TouchEvent) => {
    galleryTouchEnd.current = e.targetTouches[0].clientX;
  };

  const handleGalleryTouchEnd = () => {
    if (!galleryTouchStart.current || !galleryTouchEnd.current) return;
    const distance = galleryTouchStart.current - galleryTouchEnd.current;
    if (distance > 50) nextGalleryImg();
    if (distance < -50) prevGalleryImg();
    galleryTouchStart.current = null;
    galleryTouchEnd.current = null;
  };

  /* CLEAN VALUATION */
  const displayValue =
    project.projectValue.amount > 0
      ? `₹${project.projectValue.amount} Lakhs`
      : "—";

  return (
    <div className="pt-16 md:pt-20">

      {/* HERO */}
      <section className="relative h-[65vh] md:h-[85vh] min-h-[550px] bg-black overflow-hidden flex flex-col pt-16 md:pt-24">
        <div className="absolute inset-0">
          {project.heroImage ? (
            <img 
              src={project.heroImage} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-60" 
            />
          ) : (
            <ImagePlaceholder title={project.title} />
          )}
        </div>

        <div className="relative z-20 mt-auto pb-32 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-4xl">

            {/* BADGES */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-1.5 bg-blue-900 text-white text-[10px] font-bold uppercase tracking-[0.3em] shadow-2xl">
                {project.vertical}
              </span>
              <span className="px-4 py-1.5 bg-white text-black text-[10px] font-bold uppercase tracking-[0.3em] shadow-2xl">
                {project.category.primary}
              </span>
            </div>

            <h1 className="text-4xl md:text-8xl font-bold text-white mb-6 tracking-tighter uppercase drop-shadow-2xl leading-[1.1] break-words">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* STATS RIBBON */}
      <div className="bg-blue-900 text-white py-12 relative z-40 -mt-16 mx-4 sm:mx-8 md:mx-auto max-w-7xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-12">

          <div className="flex items-center space-x-5 border-r border-white/10 last:border-0 pr-4">
            <Briefcase className="text-blue-300 w-6 h-6 md:w-10 md:h-10 flex-shrink-0" />
            <div>
              <div className="text-[9px] font-bold text-blue-200 uppercase tracking-widest mb-1 opacity-70">
                Client
              </div>
              <div className="font-bold text-xs md:text-base uppercase truncate leading-tight">
                {project.client.name}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-5 border-r border-white/10 last:border-0 pr-4">
            <MapPin className="text-blue-300 w-6 h-6 md:w-10 md:h-10 flex-shrink-0" />
            <div>
              <div className="text-[9px] font-bold text-blue-200 uppercase tracking-widest mb-1 opacity-70">
                Location
              </div>
              <div className="font-bold text-xs md:text-base uppercase leading-tight">
                {project.location.city}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-5 border-r border-white/10 last:border-0 pr-4">
            <TrendingUp className="text-blue-300 w-6 h-6 md:w-10 md:h-10 flex-shrink-0" />
            <div>
              <div className="text-[9px] font-bold text-blue-200 uppercase tracking-widest mb-1 opacity-70">
                Valuation
              </div>
              <div className="font-bold text-xs md:text-base uppercase leading-tight">
                {displayValue}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-5 border-r border-white/10 last:border-0 pr-4">
            <Calendar className="text-blue-300 w-6 h-6 md:w-10 md:h-10 flex-shrink-0" />
            <div>
              <div className="text-[9px] font-bold text-blue-200 uppercase tracking-widest mb-1 opacity-70">
                Status
              </div>
              <div className="font-bold text-xs md:text-base uppercase leading-tight">
                {project.timeline.status}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CONTENT */}
      <section className="py-20 max-w-7xl mx-auto px-6">

        <p className="max-w-3xl text-gray-700 mb-10">
          {project.description}
        </p>

        {/* TAGS */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-16">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="border border-gray-300 px-3 py-1 text-[10px] uppercase tracking-widest"
              >
                {tag.replace(/-/g, " ")}
              </span>
            ))}
          </div>
        )}

        {/* GALLERY */}
        {gallery.length > 0 && (
          <div
            className="relative"
            onTouchStart={handleGalleryTouchStart}
            onTouchMove={handleGalleryTouchMove}
            onTouchEnd={handleGalleryTouchEnd}
          >
            {/* MAIN IMAGE */}
            <div className="relative h-[420px] bg-black overflow-hidden rounded-lg">
              <img
                src={gallery[galleryIndex]}
                alt=""
                onClick={() => setZoomImage(gallery[galleryIndex])}
                className="w-full h-full object-cover cursor-zoom-in"
              />

              {gallery.length > 1 && (
                <>
                  <button
                    onClick={prevGalleryImg}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                  >
                    <ChevronLeft />
                  </button>

                  <button
                    onClick={nextGalleryImg}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                  >
                    <ChevronRight />
                  </button>
                </>
              )}
            </div>

            {/* THUMBNAILS */}
            {gallery.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setGalleryIndex(idx)}
                    className={`flex-shrink-0 border-2 transition ${
                      idx === galleryIndex
                        ? "border-blue-900"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="h-20 w-28 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

      </section>

      {/* IMAGE ZOOM MODAL */}
      {zoomImage && (
        <div
          className="fixed inset-0 bg-black/80 z-[999] flex items-center justify-center px-4"
          onClick={() => setZoomImage(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setZoomImage(null)}
              className="absolute -top-10 right-0 text-white text-3xl hover:opacity-70"
            >
              ×
            </button>

            <img
              src={zoomImage}
              alt=""
              className="w-full max-h-[85vh] object-contain rounded"
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default ProjectDetail;
