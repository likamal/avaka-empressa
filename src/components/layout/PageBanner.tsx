import React from 'react';
import { ChevronRight } from 'lucide-react';
import { RoutePath } from '../../lib/routes';
import { LandscapePreset } from '../../lib/webglEngine';
import { WebGLLandscapeCanvas } from '../webgl/WebGLLandscapeCanvas';

interface PageBannerProps {
  section: string;
  title: string;
  subtitle: string;
  preset?: LandscapePreset;
  notice?: string;
  onNavigate: (path: RoutePath) => void;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  section,
  title,
  subtitle,
  preset = 'emerald-ridge',
  notice,
  onNavigate,
}) => {
  return (
    <section className="relative overflow-hidden border-b border-[#003B00] bg-black">
      <div className="absolute inset-0 opacity-45 pointer-events-none">
        <WebGLLandscapeCanvas preset={preset} speed={0.75} />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 lg:pt-32 lg:pb-20">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-technical text-xs text-[#8ea595] mb-5">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="hover:text-[#00FF41] transition-colors cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-[#008F11]" />
          <span className="text-[#00FF41]">{section}</span>
          <ChevronRight className="w-3.5 h-3.5 text-[#008F11]" />
          <span className="text-white truncate max-w-[260px]">{title}</span>
        </nav>

        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-[#c7d7cc] leading-relaxed">
            {subtitle}
          </p>
          {notice && (
            <p className="mt-5 font-technical text-xs text-[#8ea595] border-t border-[#003B00]/80 pt-4">
              {notice}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
