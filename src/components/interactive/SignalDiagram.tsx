import React, { useEffect, useState } from 'react';

interface SignalNode {
  id: string;
  title: string;
  domain: string;
  detail: string;
}

const SIGNAL_NODES: SignalNode[] = [
  {
    id: 'edge',
    title: '01. Superfície & Perímetro',
    domain: 'Redes · Aeroportos · Portos',
    detail: 'Sensores de borda e segmentação isolam redes corporativas de infraestruturas operacionais.',
  },
  {
    id: 'telemetry',
    title: '02. Telemetria Criptografada',
    domain: 'Coleta Unificada',
    detail: 'Logs de servidores, endpoints e links de comunicação seguem cifrados para correlação.',
  },
  {
    id: 'soc',
    title: '03. Avaka SOC 24h',
    domain: 'Triagem & Análise',
    detail: 'Correlação contínua separa ruído operacional de anomalias reais de intrusão.',
  },
  {
    id: 'contain',
    title: '04. Contenção & Resposta',
    domain: 'Erradicação & Perícia',
    detail: 'Isolamento imediato de vetores comprometidos, análise forense e retomada segura.',
  },
];

export const SignalDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const id = window.setInterval(() => {
      setActiveStep((prev) => (prev + 1) % SIGNAL_NODES.length);
    }, 2400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="border border-[#003B00] bg-[#040605] p-6 lg:p-8">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-4 border-b border-[#003B00]/80">
        <div>
          <p className="font-technical text-xs uppercase tracking-widest text-[#00FF41]">
            Arquitetura de Fluxo de Sinais
          </p>
          <p className="text-sm text-[#9fb5a6] mt-1">
            Visualização conceitual do percurso entre detecção de eventos e contenção coordenada.
          </p>
        </div>
        <span className="font-technical text-xs text-[#7e9686]">
          Modelo Demonstrativo
        </span>
      </div>

      {/* Animated SVG Signal Rail */}
      <div className="relative mb-6 hidden md:block" aria-hidden="true">
        <svg viewBox="0 0 900 44" className="w-full h-11 overflow-visible">
          <line x1="80" y1="22" x2="820" y2="22" stroke="#003B00" strokeWidth="2" />
          <line
            x1="80"
            y1="22"
            x2={80 + activeStep * 246}
            y2="22"
            stroke="#00FF41"
            strokeWidth="2"
            className="transition-all duration-500"
          />
          {SIGNAL_NODES.map((n, idx) => {
            const cx = 80 + idx * 246;
            const isActive = idx === activeStep;
            const isPassed = idx < activeStep;
            return (
              <g key={n.id}>
                <rect
                  x={cx - 8}
                  y={14}
                  width="16"
                  height="16"
                  fill={isActive ? '#00FF41' : isPassed ? '#005917' : '#050505'}
                  stroke={isActive ? '#00FF41' : '#008F11'}
                  strokeWidth="1.5"
                />
                {isActive && (
                  <rect
                    x={cx - 3}
                    y={19}
                    width="6"
                    height="6"
                    fill="#ff1717"
                  />
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {SIGNAL_NODES.map((node, idx) => {
          const isActive = idx === activeStep;
          return (
            <button
              key={node.id}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`text-left p-5 border transition-colors cursor-pointer ${
                isActive
                  ? 'border-[#00FF41] bg-[#071209]'
                  : 'border-[#003B00] bg-black/75 hover:border-[#008F11]'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-technical text-xs text-[#00FF41] uppercase tracking-wider">
                  {node.domain}
                </span>
                <span
                  className={`h-2 w-2 ${isActive ? 'bg-[#ff1717]' : 'bg-[#003B00]'}`}
                  aria-hidden="true"
                />
              </div>
              <h4 className="text-base font-semibold text-white mb-2">
                {node.title}
              </h4>
              <p className="text-xs text-[#9eb2a5] leading-relaxed">
                {node.detail}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};
