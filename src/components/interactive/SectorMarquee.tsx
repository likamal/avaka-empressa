import React from 'react';

const MARQUEE_DOMAINS = [
  'WHITECHAPEL · 1916',
  'PORTO DE SANTOS · 1951',
  'CIBERSEGURANÇA CORPORATIVA',
  'AVIATION SECURITY',
  'MARITIME SECURITY',
  'DATA INFRASTRUCTURE',
  'AVAKA SOC · MONITORAMENTO 24H',
  'REFERÊNCIA ISO/IEC 27001',
  'REFERÊNCIA NIST CSF',
  'REFERÊNCIA LGPD',
  'REFERÊNCIA ISO 22301',
];

export const SectorMarquee: React.FC = () => {
  return (
    <div
      className="marquee-container relative w-full overflow-hidden border-y border-[#003B00] bg-[#040605] py-4"
      aria-label="Domínios operacionais e referências conceituais da Avaka Corporation"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="animate-avaka-marquee flex items-center gap-10 whitespace-nowrap">
        {[...MARQUEE_DOMAINS, ...MARQUEE_DOMAINS].map((item, idx) => (
          <div key={`${item}-${idx}`} className="flex items-center gap-10">
            <span className="font-technical text-xs tracking-[0.16em] text-[#9fb5a6] hover:text-[#00FF41] transition-colors">
              {item}
            </span>
            <span className="h-1.5 w-1.5 bg-[#ff1717]/75 inline-block shrink-0" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
};
