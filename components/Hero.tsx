import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface HeroProps {
  slides: any[];
}

const AUTO_DELAY = 6000;
const SWIPE_THRESHOLD = 60; // px

const Hero: React.FC<HeroProps> = ({ slides }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const timerRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  // ---------- AUTO SLIDE ----------
  useEffect(() => {
    if (paused || slides.length <= 1) return;

    timerRef.current = window.setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_DELAY);

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [index, paused, slides.length]);

  // ---------- MANUAL DOT ----------
  const goTo = (i: number) => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    setIndex(i);
  };

  // ---------- SWIPE ----------
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) {
        // swipe left → next
        setIndex((prev) => (prev + 1) % slides.length);
      } else {
        // swipe right → prev
        setIndex((prev) =>
          prev === 0 ? slides.length - 1 : prev - 1
        );
      }
    }

    touchStartX.current = null;
  };

  if (!slides.length) return null;

  const slide = slides[index];

  return (
    <section
      className="relative h-[75vh] sm:h-[85vh] md:h-screen overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* IMAGE */}
      <img
        src={slide.heroImage}
        alt={slide.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* CONTENT */}
      <div className="absolute inset-0 flex items-end md:items-center z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full pb-10 md:pb-0">
          <div className="max-w-full sm:max-w-xl md:max-w-3xl text-white">

            {slide.vertical && (
              <span className="inline-block bg-blue-600 text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-3">
                {slide.vertical}
              </span>
            )}

            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-3">
              {slide.title}
            </h1>

            <p className="text-xs sm:text-sm md:text-lg opacity-90 mb-6 max-w-2xl">
              {slide.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to={`/projects/${slide.slug}`}
                className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 sm:px-8 sm:py-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-center"
              >
                View Project →
              </Link>

              <Link
                to="/projects"
                className="border border-white/60 hover:bg-white/10 transition px-6 py-3 sm:px-8 sm:py-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-center"
              >
                Full Portfolio
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* DOTS (PAUSE ONLY HERE) */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === index ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
