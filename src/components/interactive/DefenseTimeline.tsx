import React, { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

interface DefenseStage {
  step: string;
  title: string;
  description: string;
  focus: string;
}

const DEFENSE_STAGES: DefenseStage[] = [
  {
    step: '01',
    title: 'Identificação de Ativos',
    description:
      'Inventário completo de sistemas críticos, dados sensíveis, dependências portuárias, aeroportuárias e corporativas.',
    focus: 'Visibilidade estrutural',
  },
  {
    step: '02',
    title: 'Análise de Riscos',
    description:
      'Mapeamento de ameaças, exposição de acessos e impacto operacional para priorização racional de controles.',
    focus: 'Priorização técnica',
  },
  {
    step: '03',
    title: 'Prevenção e Blindagem',
    description:
      'Segmentação de redes, criptografia, autenticação multifator e testes controlados de intrusão antes da exploração.',
    focus: 'Redução de superfície',
  },
  {
    step: '04',
    title: 'Detecção Contínua',
    description:
      'Vigilância no Avaka SOC com correlação de sinais em servidores, nuvem, endpoints e links operacionais.',
    focus: 'Telemetria ativa',
  },
  {
    step: '05',
    title: 'Resposta e Contenção',
    description:
      'Atuação imediata para isolar comprometimentos, preservar evidências forenses e interromper propagação lateral.',
    focus: 'Contenção precisa',
  },
  {
    step: '06',
    title: 'Recuperação Resiliente',
    description:
      'Restauração validada via backups imutáveis e planos de continuidade sem perda de integridade histórica.',
    focus: 'Continuidade garantida',
  },
];

export const DefenseTimeline: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => setIsVisible(Boolean(entries[0]?.isIntersecting)),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !autoPlay || !isVisible) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % DEFENSE_STAGES.length);
    }, 3400);

    return () => window.clearInterval(timer);
  }, [autoPlay, isVisible]);

  const scrubToClientX = (clientX: number) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(0.999, (clientX - rect.left) / rect.width));
    const idx = Math.floor(ratio * DEFENSE_STAGES.length);
    setActiveIndex(idx);
    setAutoPlay(false);
  };

  const current = DEFENSE_STAGES[activeIndex];
  const progressPct = ((activeIndex + 1) / DEFENSE_STAGES.length) * 100;

  return (
    <div ref={containerRef} className="border border-[#003B00] bg-[#050505] p-6 lg:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <span className="font-technical text-xs uppercase tracking-widest text-[#00FF41]">
            Ciclo de Proteção Digital
          </span>
          <h3 className="text-xl lg:text-2xl font-semibold text-white mt-1">
            Como Funciona a Defesa em Camadas
          </h3>
        </div>
        <button
          type="button"
          onClick={() => setAutoPlay((p) => !p)}
          className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#003B00] text-xs font-technical text-[#9fb5a6] hover:border-[#00FF41] hover:text-[#00FF41] transition-colors cursor-pointer"
        >
          {autoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          {autoPlay ? 'Pausar avanço' : 'Retomar avanço'}
        </button>
      </div>

      {/* Interactive scrubbable progress rail */}
      <div
        ref={trackRef}
        role="slider"
        aria-label="Linha do tempo do ciclo de defesa digital"
        aria-valuemin={1}
        aria-valuemax={DEFENSE_STAGES.length}
        aria-valuenow={activeIndex + 1}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') {
            setAutoPlay(false);
            setActiveIndex((p) => Math.min(DEFENSE_STAGES.length - 1, p + 1));
          } else if (e.key === 'ArrowLeft') {
            setAutoPlay(false);
            setActiveIndex((p) => Math.max(0, p - 1));
          }
        }}
        onPointerDown={(e) => {
          draggingRef.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          scrubToClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (draggingRef.current) scrubToClientX(e.clientX);
        }}
        onPointerUp={() => {
          draggingRef.current = false;
        }}
        className="relative h-8 flex items-center cursor-ew-resize select-none mb-6"
      >
        <div className="w-full h-1 bg-[#002900] relative">
          <div
            className="h-full bg-[#00FF41] transition-all duration-300"
            style={{ width: `${progressPct}%` }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-[#ff1717] border border-black transition-all duration-300"
            style={{ left: `${progressPct}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
        {DEFENSE_STAGES.map((stage, idx) => {
          const active = idx === activeIndex;
          return (
            <button
              key={stage.step}
              type="button"
              onClick={() => {
                setAutoPlay(false);
                setActiveIndex(idx);
              }}
              className={`p-3 border text-left transition-colors cursor-pointer ${
                active
                  ? 'border-[#00FF41] bg-[#08150b] text-white'
                  : 'border-[#003B00]/80 bg-black/70 text-[#88a090] hover:text-[#00FF41]'
              }`}
            >
              <span className="block font-technical text-xs text-[#00FF41] tabular-nums mb-1">
                {stage.step}
              </span>
              <span className="block text-xs font-medium leading-snug">
                {stage.title}
              </span>
            </button>
          );
        })}
      </div>

      <div className="border-t border-[#003B00]/80 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 font-technical text-xs uppercase tracking-widest text-[#00FF41] mb-2">
            <span>Etapa {current.step}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#ff1717]">{current.focus}</span>
          </div>
          <h4 className="text-xl font-semibold text-white mb-2">
            {current.title}
          </h4>
          <p className="text-sm text-[#c7d7cc] leading-relaxed">
            {current.description}
          </p>
        </div>
        <div className="font-technical text-xs text-[#7e9686] shrink-0">
          Clique ou arraste a barra acima para inspecionar cada etapa
        </div>
      </div>
    </div>
  );
};
