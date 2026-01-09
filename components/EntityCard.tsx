import React, { useEffect, useState } from 'react';

interface Props {
  name: string;
  file: string;
}

const EntityCard: React.FC<Props> = ({ name, file }) => {
  const isText = file.endsWith('.txt');
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    if (isText) {
      fetch(`/images/entities/${file}`)
        .then(r => r.text())
        .then(t => setLines(t.split('\n')));
    }
  }, [file, isText]);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 border border-gray-100 p-8 w-[280px] h-44 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-500 text-center">
      {isText ? (
        <>
          <div className="text-sm font-bold text-gray-900 uppercase tracking-wide">
            {lines[0]}
          </div>
          <div className="text-[10px] mt-2 font-semibold uppercase tracking-widest text-gray-400">
            {lines[1]}
          </div>
        </>
      ) : (
        <>
          <img
            src={`/images/entities/${file}`}
            alt={name}
            className="max-h-16 max-w-[200px] object-contain mb-4 grayscale hover:grayscale-0 transition"
          />
          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
            {name}
          </div>
        </>
      )}
    </div>
  );
};

export default EntityCard;
