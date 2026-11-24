import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DOCTRINE_QUOTES } from '../../lib/avakaData';

export const DoctrineCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const current = DOCTRINE_QUOTES[index];

  const prev = () => setIndex((i) => (i - 1 + DOCTRINE_QUOTES.length) % DOCTRINE_QUOTES.length);
  const next = () => setIndex((i) => (i + 1) % DOCTRINE_QUOTES.length);

  return (
    <div className="border border-[#003B00] bg-[#050505] p-8 lg:p-12">
      <div className="flex items-center justify-between gap-4 mb-8">
        <span className="font-technical text-xs uppercase tracking-widest text-[#00FF41]">
          Princípios Históricos & Doutrina
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Citação anterior"
            className="w-10 h-10 border border-[#003B00] flex items-center justify-center text-[#9fb5a6] hover:border-[#00FF41] hover:text-[#00FF41] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Próxima citação"
            className="w-10 h-10 border border-[#003B00] flex items-center justify-center text-[#9fb5a6] hover:border-[#00FF41] hover:text-[#00FF41] transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <blockquote className="font-editorial italic text-2xl sm:text-3xl lg:text-4xl text-white leading-snug max-w-3xl mb-6">
        “{current.quote}”
      </blockquote>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#003B00]/80">
        <div className="flex items-center gap-3 text-xs font-technical">
          <span className="text-[#00FF41] uppercase tracking-wider">{current.author}</span>
          <span aria-hidden="true" className="text-[#56715e]">·</span>
          <span className="text-[#9fb5a6]">{current.context}</span>
        </div>
        <div className="flex items-center gap-2" role="tablist" aria-label="Selecionar citação">
          {DOCTRINE_QUOTES.map((q, idx) => (
            <button
              key={q.author}
              type="button"
              aria-label={`Ir para citação ${idx + 1}`}
              onClick={() => setIndex(idx)}
              className={`h-1.5 transition-all cursor-pointer ${
                idx === index ? 'w-8 bg-[#00FF41]' : 'w-3 bg-[#003B00] hover:bg-[#008F11]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
