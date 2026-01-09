
import React from 'react';

interface ImagePlaceholderProps {
  className?: string;
  title?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ className = "w-full h-full", title }) => {
  return (
    <div className={`relative bg-blue-950 flex items-center justify-center overflow-hidden ${className}`}>
      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: 'linear-gradient(#ffffff 0.5px, transparent 0.5px), linear-gradient(90deg, #ffffff 0.5px, transparent 0.5px)',
        backgroundSize: '10px 10px'
      }}></div>

      {/* Branded Centerpiece */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <div className="flex flex-col mb-4">
          <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-none">SBA</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-blue-300 mt-2">Sri Balaji Associates</span>
        </div>
        <div className="w-12 h-[1px] bg-blue-400 mb-4 opacity-50"></div>
        <div className="text-[9px] font-bold text-white/40 uppercase tracking-[0.3em]">
          {title ? `Visuals for ${title} Pending` : 'Technical Documentation in Progress'}
        </div>
      </div>

      {/* Stylized Corner Marks */}
      <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-white/20"></div>
      <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-white/20"></div>
      <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-white/20"></div>
      <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-white/20"></div>
    </div>
  );
};

export default ImagePlaceholder;
