import React from 'react';
import { ArrowRight, CheckSquare } from 'lucide-react';
import { ASSETS, SOLUTIONS_DATA } from '../lib/avakaData';
import { RoutePath } from '../lib/routes';
import { PageBanner } from '../components/layout/PageBanner';
import { SignalDiagram } from '../components/interactive/SignalDiagram';
import { DefenseTimeline } from '../components/interactive/DefenseTimeline';
import { ResilientImage } from '../components/ui/ResilientImage';
import { RevealOnScroll } from '../components/interactive/RevealOnScroll';

interface SolucoesPageProps {
  slug: string;
  onNavigate: (path: RoutePath) => void;
}

const ALL_SLUGS = Object.keys(SOLUTIONS_DATA);

export const SolucoesPage: React.FC<SolucoesPageProps> = ({ slug, onNavigate }) => {
  const solution = SOLUTIONS_DATA[slug] ?? SOLUTIONS_DATA['cybersecurity-corporativa'];

  return (
    <div className="bg-black text-[#e6efe8]">
      <PageBanner
        section="Soluções"
        title={solution.title}
        subtitle={solution.subtitle}
        preset={solution.shaderPreset}
        notice="Escopo técnico e conceitual da Avaka Corporation. Os serviços são estruturados sob análise técnica dedicada, sem tabelas comerciais padronizadas."
        onNavigate={onNavigate}
      />

      {/* Solution Switcher Bar */}
      <div className="border-b border-[#003B00] bg-[#040605]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 overflow-x-auto py-3">
          {ALL_SLUGS.map((key) => {
            const item = SOLUTIONS_DATA[key];
            const active = key === solution.slug;
            return (
              <button
                key={key}
                type="button"
                onClick={() => onNavigate(item.path)}
                className={`px-3.5 py-2 font-technical text-xs uppercase tracking-wider whitespace-nowrap shrink-0 border transition-colors cursor-pointer ${
                  active
                    ? 'border-[#00FF41] bg-[#00FF41] text-black font-semibold'
                    : 'border-[#003B00] text-[#9fb5a6] hover:border-[#00FF41] hover:text-[#00FF41]'
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Hero Overview + Domain Graphic */}
        <RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-5">
              <span className="font-technical text-xs uppercase tracking-widest text-[#ff1717]">
                {solution.category}
              </span>
              <h2 className="text-3xl font-semibold text-white">
                Escopo Estratégico de Proteção
              </h2>
              <p className="text-base text-[#c7d7cc] leading-relaxed">
                {solution.heroSummary}
              </p>

              {/* 4 Architecture Layers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {solution.architectureLayers.map((layer) => (
                  <div key={layer.step} className="border border-[#003B00] bg-[#050505] p-5">
                    <span className="font-technical text-xs text-[#00FF41] tabular-nums">
                      Camada {layer.step}
                    </span>
                    <h3 className="text-base font-semibold text-white mt-1 mb-1.5">
                      {layer.label}
                    </h3>
                    <p className="text-xs text-[#9eb2a5] leading-relaxed">{layer.summary}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              {(solution.slug === 'aviation-security' || solution.slug === 'maritime-security') && (
                <ResilientImage
                  src={ASSETS.legacyModern}
                  alt={`Ilustração temática para ${solution.title}`}
                  caption="Ilustração temática conceitual — Vetores aéreos, portuários e monitoramento integrado."
                  aspectClass="aspect-video"
                />
              )}

              <div className="border border-[#003B00] bg-[#050505] p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="font-technical text-xs uppercase tracking-widest text-[#00FF41] mb-3">
                    Ambientes Atendidos
                  </h3>
                  <ul className="space-y-2.5 text-sm text-[#c7d7cc]">
                    {solution.audience.map((aud) => (
                      <li key={aud} className="flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 bg-[#ff1717] mt-2 shrink-0" />
                        <span>{aud}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 border-t border-[#003B00]">
                  <h3 className="font-technical text-xs uppercase tracking-widest text-[#00FF41] mb-3">
                    Entregáveis Técnicos
                  </h3>
                  <ul className="space-y-2.5 text-sm text-[#c7d7cc]">
                    {solution.deliverables.map((del) => (
                      <li key={del} className="flex items-start gap-2.5">
                        <CheckSquare className="w-4 h-4 text-[#00FF41] mt-0.5 shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Capabilities Grid */}
        <RevealOnScroll>
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-6">
              Capacidades e Frentes Técnicas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {solution.capabilities.map((cap, idx) => (
                <div
                  key={cap.title}
                  className="border border-[#003B00] bg-[#050505] p-6 avaka-panel-hover"
                >
                  <span className="font-technical text-xs text-[#00FF41] tabular-nums block mb-2">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2">{cap.title}</h3>
                  <p className="text-sm text-[#9eb2a5] leading-relaxed">{cap.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Interactive Signal Diagram or Timeline */}
        <RevealOnScroll>
          {solution.slug === 'incident-response-soc' ? (
            <SignalDiagram />
          ) : (
            <DefenseTimeline />
          )}
        </RevealOnScroll>

        {/* Technical Consultation CTA */}
        <div className="border border-[#003B00] bg-[#050505] p-8 lg:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="font-technical text-xs uppercase tracking-widest text-[#00FF41]">
              Avaliação Técnica Conceitual
            </span>
            <h3 className="text-2xl font-semibold text-white mt-1">
              Solicitar Estudo de Escopo para {solution.title}
            </h3>
            <p className="text-sm text-[#9eb2a5] mt-1">
              Nossa equipe avalia arquitetura, ativos envolvidos e requisitos operacionais sem pacotes genéricos.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/contato/consultoria')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00FF41] text-black font-technical text-xs font-semibold uppercase tracking-wider hover:bg-[#33ff66] transition-colors shrink-0 cursor-pointer"
          >
            Solicitar Consultoria
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
