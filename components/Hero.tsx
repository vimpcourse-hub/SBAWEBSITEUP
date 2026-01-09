import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type HeroProps = {
  slides: Project[];
};

const Hero: React.FC<HeroProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!slides || slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides]);

  if (!slides || slides.length === 0) {
    return (
      <section className="h-[70vh] md:h-[90vh] bg-gray-900 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
            Sri Balaji Associates
          </h1>
          <p className="text-blue-300 uppercase tracking-widest text-xs">
            Industrial & Infrastructure Contracting
          </p>
        </div>
      </section>
    );
  }

  const slide = slides[current];

  return (
    <section className="relative h-[75vh] md:h-[95vh] min-h-[520px] overflow-hidden bg-black">

      {/* Background Image */}
      <div className="absolute inset-0">
        {slide.heroImage ? (
          <img
            src={slide.heroImage}
            alt={slide.title}
            className="w-full h-full object-cover opacity-60"
          />
        ) : (
          <div className="w-full h-full bg-gray-800" />
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end pb-28 md:pb-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-4xl">

            <div className="inline-block px-4 py-1.5 bg-blue-900 text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-6 shadow-xl">
              {slide.category?.primary || 'Industrial Project'}
            </div>

            <h1 className="text-4xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-[1.05] drop-shadow-2xl break-words">
              {slide.title}
            </h1>

            {slide.description && (
              <p className="text-gray-200 max-w-2xl text-base md:text-xl font-light leading-relaxed mb-10">
                {slide.description}
              </p>
            )}

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                to={`/projects/${slide.slug}`}
                className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 font-bold uppercase tracking-widest text-[10px] transition-all shadow-xl"
              >
                View Project
                <ArrowRight className="ml-3 w-4 h-4" />
              </Link>

              <Link
                to="/projects"
                className="inline-flex items-center border border-white/40 text-white px-10 py-5 font-bold uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all backdrop-blur-md"
              >
                Full Portfolio
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-blue-600 text-white backdrop-blur-md border border-white/10 transition-all"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={() => setCurrent((current + 1) % slides.length)}
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-blue-600 text-white backdrop-blur-md border border-white/10 transition-all"
            aria-label="Next Slide"
          >
            <ChevronRight size={22} />
          </button>
        </>
      )}

    </section>
  );
};

export default Hero;
