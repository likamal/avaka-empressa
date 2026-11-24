import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SOLUTIONS_DATA } from '../../lib/avakaData';
import { RoutePath } from '../../lib/routes';
import { WebGLLandscapeCanvas } from '../webgl/WebGLLandscapeCanvas';

interface InteractiveTabsProps {
  onNavigate: (path: RoutePath) => void;
}

const TAB_KEYS = [
  'cybersecurity-corporativa',
  'aviation-security',
  'maritime-security',
  'data-infrastructure',
  'incident-response-soc',
] as const;

export const InteractiveTabs: React.FC<InteractiveTabsProps> = ({ onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardHovered, setCardHovered] = useState(false);

  const activeKey = TAB_KEYS[activeIndex];
  const activeSolution = SOLUTIONS_DATA[activeKey];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % TAB_KEYS.length);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + TAB_KEYS.length) % TAB_KEYS.length);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActiveIndex(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setActiveIndex(TAB_KEYS.length - 1);
    }
  };

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Soluções da Avaka Corporation"
        onKeyDown={handleKeyDown}
        className="flex flex-wrap border border-[#003B00] bg-[#050505]"
      >
        {TAB_KEYS.map((key, idx) => {
          const sol = SOLUTIONS_DATA[key];
          const selected = idx === activeIndex;
          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={selected}
              id={`tab-${key}`}
              aria-controls={`panel-${key}`}
              onClick={() => setActiveIndex(idx)}
              className={`flex-1 min-w-[175px] px-4 py-3.5 text-left font-technical text-xs uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 border-b md:border-b-0 md:border-r last:border-r-0 border-[#003B00] cursor-pointer ${
                selected
                  ? 'bg-[#00FF41] text-black font-semibold'
                  : 'bg-[#050505] text-[#9fb5a6] hover:text-[#00FF41] hover:bg-[#08100a]'
              }`}
            >
              <span className="opacity-65 mr-2 tabular-nums">0{idx + 1}.</span>
              {sol.title}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${activeKey}`}
        aria-labelledby={`tab-${activeKey}`}
        onMouseEnter={() => setCardHovered(true)}
        onMouseLeave={() => setCardHovered(false)}
        className="mt-4 grid grid-cols-1 lg:grid-cols-12 border border-[#003B00] bg-[#050505]"
      >
        <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-[360px] overflow-hidden border-b lg:border-b-0 lg:border-r border-[#003B00]">
          <WebGLLandscapeCanvas
            preset={activeSolution.shaderPreset}
            hovered={cardHovered}
            className="absolute inset-0"
          />
          <div className="relative z-10 h-full p-6 lg:p-8 flex flex-col justify-between bg-gradient-to-t from-black/85 via-black/35 to-black/45">
            <div className="flex items-center justify-between">
              <span className="font-technical text-xs uppercase tracking-widest text-[#00FF41]">
                {activeSolution.category}
              </span>
              <span className="h-2 w-2 bg-[#ff1717]" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-2">
                {activeSolution.title}
              </h3>
              <p className="text-sm text-[#c7d7cc] leading-relaxed">
                {activeSolution.subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 p-6 lg:p-10 flex flex-col justify-between gap-8">
          <div>
            <p className="text-base text-[#dbe8df] leading-relaxed mb-6">
              {activeSolution.heroSummary}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeSolution.capabilities.slice(0, 4).map((cap) => (
                <div
                  key={cap.title}
                  className="border border-[#003B00]/80 bg-black/70 p-4"
                >
                  <h4 className="font-medium text-sm text-[#00FF41] mb-1.5">
                    {cap.title}
                  </h4>
                  <p className="text-xs text-[#9eb2a5] leading-relaxed">
                    {cap.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#003B00]/70">
            <span className="font-technical text-xs text-[#7e9686]">
              Escopo técnico dedicado · Sem planos padronizados
            </span>
            <button
              type="button"
              onClick={() => onNavigate(activeSolution.path)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border border-[#00FF41] text-[#00FF41] font-technical text-xs uppercase tracking-wider hover:bg-[#00FF41] hover:text-black transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Explorar {activeSolution.title}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
