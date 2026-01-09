import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface HeroProps {
  slides: any[];
}

const AUTO_DELAY = 6000; // 6 seconds

const Hero: React.FC<HeroProps> = ({ slides }) => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // ---------- AUTO SLIDE ----------
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_DELAY);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, isPaused, slides.length]);

  // ---------- MANUAL DOT CLICK ----------
  const goToSlide = (i: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIndex(i);
  };

  const slide = slides[index];

  return (
    <section
      className="relative h-[85vh] md:h-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* IMAGE */}
      <img
        src={slide.heroImage}
        alt={slide.title}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
      />

      {/* CONTENT */}
      <div className="absolute inset-0 flex items-end md:items-center pb-12 md:pb-0 z-10">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-full sm:max-w-xl md:max-w-3xl text-white">

            {slide.vertical && (
              <span className="inline-block bg-blue-700 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-4">
                {slide.vertical}
              </span>
            )}

            <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black leading-tight mb-4">
              {slide.title}
            </h1>

            <p className="text-sm sm:text-base md:text-xl opacity-90 mb-8">
              {slide.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to={`/projects/${slide.slug}`}
                className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 sm:px-10 sm:py-5 text-[10px] sm:text-xs font-bold uppercase tracking-widest"
              >
                View Project →
              </Link>

              <Link
                to="/projects"
                className="border border-white/50 hover:bg-white/10 transition px-6 py-3 sm:px-10 sm:py-5 text-[10px] sm:text-xs font-bold uppercase tracking-widest"
              >
                Full Portfolio
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* DOT NAVIGATION */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
