import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import {
  ASSETS,
  INSTITUTIONAL,
  OPERATIONAL_DIVISIONS,
  REFERENCE_NORMS,
  SEVEN_GENERATIONS,
} from '../lib/avakaData';
import { RoutePath } from '../lib/routes';
import { PageBanner } from '../components/layout/PageBanner';
import { WebGLLandscapeCanvas } from '../components/webgl/WebGLLandscapeCanvas';
import { ResilientImage } from '../components/ui/ResilientImage';
import { DoctrineCarousel } from '../components/interactive/DoctrineCarousel';
import { RevealOnScroll } from '../components/interactive/RevealOnScroll';

interface EmpresaPageProps {
  onNavigate: (path: RoutePath) => void;
}

/* ============================================================================
   1. NOSSA HISTÓRIA — THE LEGACY (SEVEN GENERATIONS CINEMATIC TIMELINE)
============================================================================ */
export const HistoriaLegacyPage: React.FC<EmpresaPageProps> = ({ onNavigate }) => {
  const [activeGen, setActiveGen] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const timelineContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = timelineContainerRef.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        const total = Math.max(1, rect.height - window.innerHeight * 0.5);
        const passed = Math.max(0, -rect.top + window.innerHeight * 0.25);
        setScrollProgress(Math.min(100, Math.max(0, (passed / total) * 100)));
      }

      const mid = window.innerHeight * 0.42;
      let closestIdx = 0;
      let minDiff = Infinity;
      sectionRefs.current.forEach((el, idx) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const diff = Math.abs(r.top - mid);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = idx;
        }
      });
      setActiveGen(closestIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const jumpToGeneration = (idx: number) => {
    const el = sectionRefs.current[idx];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-black text-[#e6efe8]">
      <PageBanner
        section="Empresa"
        title="Nossa História — The Legacy"
        subtitle="Sete gerações da família Lica e a travessia do caderno preto: da oficina de relojoaria em Whitechapel (1916) à proteção digital de infraestruturas críticas."
        preset="amber-vault"
        notice="Narrativa ficcional e conceitual. Todas as imagens históricas abaixo são ilustrações temáticas ou simulações generativas, não fotografias históricas autênticas."
        onNavigate={onNavigate}
      />

      {/* Sticky Progress & Generation Jump Rail */}
      <div className="sticky top-[74px] sm:top-[84px] z-30 bg-black/95 border-b border-[#003B00] backdrop-blur-md">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
            {SEVEN_GENERATIONS.map((gen, idx) => {
              const isActive = idx === activeGen;
              return (
                <button
                  key={gen.index}
                  type="button"
                  onClick={() => jumpToGeneration(idx)}
                  className={`px-3 py-1.5 font-technical text-xs whitespace-nowrap shrink-0 border transition-colors cursor-pointer ${
                    isActive
                      ? 'border-[#00FF41] bg-[#00FF41] text-black font-semibold'
                      : 'border-[#003B00] text-[#9fb5a6] hover:border-[#00FF41] hover:text-[#00FF41]'
                  }`}
                >
                  <span className="tabular-nums mr-1.5">{gen.index}</span>
                  <span>{gen.period}</span>
                </button>
              );
            })}
          </div>
          <div className="h-[2px] w-full bg-[#002200]">
            <div
              className="h-full bg-[#00FF41] transition-all duration-150"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Central Narrative Motif: O Caderno Preto */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="border border-[#003B00] bg-[#050505] p-6 lg:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4 max-w-3xl">
            <BookOpen className="w-6 h-6 text-[#ff1717] shrink-0 mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-white mb-1">
                O Fio Condutor: O Caderno Preto de 1916
              </h2>
              <p className="text-sm text-[#b9cbbd] leading-relaxed">
                Iniciado em Whitechapel para registrar objetos confiados por famílias antes da guerra, o caderno preto atravessa as sete gerações da família Lica como símbolo físico da memória, da discrição e do compromisso inquebrável de custódia.
              </p>
            </div>
          </div>
          <div className="font-technical text-xs text-[#00FF41] shrink-0">
            1916 → 2026 · 7 GERAÇÕES
          </div>
        </div>
      </section>

      {/* Vertical Cinematic Timeline */}
      <div
        ref={timelineContainerRef}
        className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative"
      >
        {/* Vertical timeline track on desktop */}
        <div
          className="hidden lg:block absolute left-[calc(2rem+18px)] top-16 bottom-16 w-[1px] bg-[#003B00]"
          aria-hidden="true"
        >
          <div
            className="w-full bg-[#00FF41] transition-all duration-200"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>

        <div className="space-y-16 lg:space-y-24">
          {SEVEN_GENERATIONS.map((gen, idx) => {
            const isCurrent = idx === activeGen;
            return (
              <article
                key={gen.index}
                ref={(el) => {
                  sectionRefs.current[idx] = el;
                }}
                className="scroll-mt-36 relative lg:pl-16"
              >
                {/* Node marker on vertical rail */}
                <div
                  className={`hidden lg:flex absolute left-0 top-2 w-9 h-9 border items-center justify-center font-technical text-xs tabular-nums transition-colors ${
                    isCurrent
                      ? 'border-[#00FF41] bg-[#00FF41] text-black font-semibold'
                      : 'border-[#003B00] bg-black text-[#00FF41]'
                  }`}
                  aria-hidden="true"
                >
                  {gen.index}
                </div>

                <RevealOnScroll>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border border-[#003B00] bg-[#050505]">
                    {/* Narrative Column */}
                    <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 font-technical text-xs uppercase tracking-wider text-[#00FF41] mb-3">
                          <span>{gen.generation}</span>
                          <span aria-hidden="true" className="text-[#56715e]">·</span>
                          <span className="text-white tabular-nums">{gen.period}</span>
                          <span aria-hidden="true" className="text-[#56715e]">·</span>
                          <span className="text-[#9fb5a6]">{gen.location}</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
                          {gen.leader} — {gen.title}
                        </h2>
                        <p className="text-sm font-medium text-[#00FF41]/90 mb-5">
                          {gen.summary}
                        </p>

                        <div className="space-y-4 text-sm sm:text-base text-[#c7d7cc] leading-relaxed max-w-prose">
                          {gen.narrative.map((paragraph, pIdx) => (
                            <p key={pIdx}>{paragraph}</p>
                          ))}
                        </div>

                        {gen.quote && (
                          <blockquote className="mt-6 py-4 border-y border-[#003B00] font-editorial italic text-xl sm:text-2xl text-white">
                            “{gen.quote}”
                          </blockquote>
                        )}
                      </div>

                      <div className="space-y-3 pt-4 border-t border-[#003B00]/80">
                        <div className="text-xs text-[#9fb5a6]">
                          <span className="font-technical uppercase tracking-wider text-[#ff1717] mr-2">
                            Registro no Caderno Preto:
                          </span>
                          {gen.notebookRole}
                        </div>
                        {gen.sourceNote && (
                          <p className="text-xs font-technical text-[#7d9585]">
                            {gen.sourceNote}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Visual Column */}
                    <div className="lg:col-span-5 p-6 bg-[#030403] border-t lg:border-t-0 lg:border-l border-[#003B00] flex flex-col justify-between">
                      {gen.image ? (
                        <ResilientImage
                          src={gen.image}
                          alt={gen.imageCaption}
                          caption={gen.imageCaption}
                          aspectClass="aspect-[4/3]"
                        />
                      ) : (
                        <figure className="w-full">
                          <div className="relative aspect-[4/3] border border-[#003B00] overflow-hidden bg-black">
                            <WebGLLandscapeCanvas
                              preset={gen.shaderPreset}
                              timeOffset={idx * 4.2}
                              hovered={isCurrent}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25 pointer-events-none" />
                            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-technical text-xs text-[#00FF41]">
                              <span>GERAÇÃO {gen.index}</span>
                              <span>{gen.period}</span>
                            </div>
                          </div>
                          <figcaption className="mt-2.5 font-technical text-xs text-[#8aa392] leading-relaxed">
                            {gen.imageCaption}
                          </figcaption>
                        </figure>
                      )}

                      <div className="mt-6 pt-4 border-t border-[#003B00]/70 flex items-center justify-between font-technical text-xs text-[#7c9484]">
                        <span>Marco {gen.index} de 07</span>
                        <span>{gen.leader}</span>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              </article>
            );
          })}
        </div>

        {/* Closing Legacy CTA */}
        <div className="mt-20 border border-[#003B00] bg-[#050505] p-8 lg:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="font-technical text-xs uppercase tracking-widest text-[#00FF41]">
              Continuidade Atual
            </span>
            <h3 className="text-2xl font-semibold text-white mt-1">
              Conheça a Liderança Contemporânea e Nossas Divisões
            </h3>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/empresa/lideranca-governanca')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00FF41] text-black font-technical text-xs font-semibold uppercase tracking-wider hover:bg-[#33ff66] transition-colors shrink-0 cursor-pointer"
          >
            Liderança e Governança
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   2. INFORMAÇÕES INSTITUCIONAIS
============================================================================ */
export const InstitucionalPage: React.FC<EmpresaPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-black text-[#e6efe8]">
      <PageBanner
        section="Empresa"
        title="Informações Institucionais"
        subtitle="Identidade corporativa, origem britânica em 1916, consolidação brasileira a partir de 1951 e posicionamento em proteção de infraestruturas críticas."
        preset="emerald-ridge"
        notice="Nota institucional: a Avaka Corporation é um projeto fictício de caráter educacional e conceitual."
        onNavigate={onNavigate}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-5">
            <span className="font-technical text-xs uppercase tracking-widest text-[#00FF41]">
              Perfil Corporativo
            </span>
            <h2 className="text-3xl font-semibold text-white">
              De Whitechapel ao Brasil: Mais de Um Século de Custódia
            </h2>
            <p className="text-base text-[#c7d7cc] leading-relaxed">
              A Avaka Corporation foi idealizada com raízes em Londres, no ano de 1916, iniciando sua trajetória na guarda física de objetos de valor pessoal e documentos confiados por famílias. Em 1951, com a chegada de Guilherme Lica III ao litoral paulista e a abertura do escritório em Santos, a instituição consolidou sua identidade brasileira.
            </p>
            <p className="text-base text-[#c7d7cc] leading-relaxed">
              Com a transição tecnológica das décadas seguintes, evoluiu para o armazenamento magnético, estruturas de servidores, monitoramento contínuo (SOC) e proteção especializada de sistemas corporativos, aeronáuticos e marítimos.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/empresa/historia')}
                className="px-5 py-2.5 bg-[#00FF41] text-black font-technical text-xs font-semibold uppercase tracking-wider hover:bg-[#33ff66] transition-colors cursor-pointer"
              >
                Ver Linha do Tempo Completa
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/empresa/missao-visao-valores')}
                className="px-5 py-2.5 border border-[#003B00] text-white font-technical text-xs uppercase tracking-wider hover:border-[#00FF41] hover:text-[#00FF41] transition-colors cursor-pointer"
              >
                Missão, Visão e Valores
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 border border-[#003B00] bg-[#050505] p-6 sm:p-8">
            <div className="mb-6 pb-4 border-b border-[#003B00] flex items-center justify-between">
              <img src={ASSETS.logo} alt="Avaka Corporation" className="h-8 w-auto" />
              <span className="font-technical text-xs text-[#00FF41]">DESDE 1916</span>
            </div>
            <dl className="divide-y divide-[#003B00]/70 text-sm">
              {[
                ['Nome institucional', INSTITUTIONAL.name],
                ['Fundação', '1916 · Whitechapel, Londres, Reino Unido'],
                ['Chegada ao Brasil', '1951 · Porto de Santos, São Paulo'],
                ['Sede conceitual atual', 'São Paulo, SP, Brasil'],
                ['Liderança narrativa', INSTITUTIONAL.currentLeader],
                ['Segmentos principais', 'Corporativo, Aeronáutico, Marítimo, Dados e SOC'],
              ].map(([k, v]) => (
                <div key={k} className="py-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <dt className="font-technical text-xs text-[#8ea595] uppercase">{k}</dt>
                  <dd className="text-white sm:text-right font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Positioning Norms (Explicitly NOT awarded certifications) */}
        <section className="border-t border-[#003B00] pt-14">
          <div className="max-w-2xl mb-8">
            <span className="font-technical text-xs uppercase tracking-widest text-[#ff1717]">
              Normas e Referências de Posicionamento
            </span>
            <h3 className="text-2xl font-semibold text-white mt-2 mb-3">
              Frameworks que Orientam Nossas Diretrizes Conceituais
            </h3>
            <p className="text-sm text-[#95aa9c] leading-relaxed">
              As normas listadas abaixo atuam como referências técnicas de estudo e alinhamento metodológico dentro do projeto. Não representam certificações formalmente auditadas ou conquistadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {REFERENCE_NORMS.map((norm) => (
              <div key={norm.code} className="border border-[#003B00] bg-[#050505] p-6">
                <span className="font-technical text-xs text-[#00FF41] block mb-2">
                  Referência Metodológica
                </span>
                <h4 className="text-lg font-semibold text-white mb-1">{norm.code}</h4>
                <p className="text-xs font-medium text-[#b9cbbd] mb-3">{norm.scope}</p>
                <p className="text-xs text-[#8ea595] leading-relaxed">{norm.note}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

/* ============================================================================
   3. MISSÃO, VISÃO E VALORES
============================================================================ */
export const MissaoVisaoValoresPage: React.FC<EmpresaPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-black text-[#e6efe8]">
      <PageBanner
        section="Empresa"
        title="Missão, Visão e Valores"
        subtitle="Os pilares institucionais que conectam a herança de confiança de 1916 às exigências tecnológicas do século XXI."
        preset="obsidian-matrix"
        onNavigate={onNavigate}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-[#003B00] bg-[#050505] p-8 lg:p-10">
            <span className="font-technical text-xs uppercase tracking-widest text-[#00FF41] block mb-3">
              Missão Institucional
            </span>
            <p className="text-xl lg:text-2xl font-medium text-white leading-relaxed">
              {INSTITUTIONAL.mission}
            </p>
          </div>

          <div className="border border-[#003B00] bg-[#050505] p-8 lg:p-10">
            <span className="font-technical text-xs uppercase tracking-widest text-[#ff1717] block mb-3">
              Visão de Futuro
            </span>
            <p className="text-xl lg:text-2xl font-medium text-white leading-relaxed">
              {INSTITUTIONAL.vision}
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-8">
            Seis Valores Inegociáveis
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSTITUTIONAL.values.map((val, idx) => (
              <div
                key={val.title}
                className="border border-[#003B00] bg-[#050505] p-6 avaka-panel-hover"
              >
                <span className="font-technical text-xs text-[#00FF41] tabular-nums block mb-2">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-semibold text-white mb-2">{val.title}</h3>
                <p className="text-sm text-[#9eb2a5] leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

        <DoctrineCarousel />
      </div>
    </div>
  );
};

/* ============================================================================
   4. LIDERANÇA E GOVERNANÇA
============================================================================ */
export const LiderancaGovernancaPage: React.FC<EmpresaPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-black text-[#e6efe8]">
      <PageBanner
        section="Empresa"
        title="Liderança e Governança"
        subtitle="Estrutura executiva fictícia sob a presidência de Guilherme Lica VII e organização das dez divisões operacionais da Avaka Corporation."
        preset="emerald-ridge"
        notice="Organograma conceitual: não utiliza retratos nem identidades de profissionais reais."
        onNavigate={onNavigate}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Executive Leadership Highlight */}
        <div className="border border-[#003B00] bg-[#050505] p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-technical text-xs uppercase tracking-widest text-[#00FF41]">
              Presidência Narrativa · Sétima Geração
            </span>
            <h2 className="text-3xl font-semibold text-white">
              Guilherme Lica VII
            </h2>
            <p className="text-base text-[#c7d7cc] leading-relaxed">
              Assumiu o comando da Avaka Corporation em 2021, sucedendo Guilherme Lica VI. Sua gestão conceitual integra proteção corporativa, infraestruturas de data center e segurança de ativos aeronáuticos e marítimos sob uma governança unificada de risco.
            </p>
            <p className="text-sm text-[#95aa9c] leading-relaxed">
              Composição completa de diretoria executiva, quadros individuais de gestores e números de colaboradores permanecem propositalmente em aberto no dossiê conceitual, evitando a criação de identidades fictícias paralelas não documentadas.
            </p>
          </div>
          <div className="lg:col-span-4 border border-[#003B00] bg-black p-6 space-y-3">
            <span className="font-technical text-xs uppercase tracking-wider text-[#ff1717]">
              Juramento de Liderança
            </span>
            <p className="font-editorial italic text-2xl text-white">
              “{INSTITUTIONAL.promise}”
            </p>
            <p className="font-technical text-xs text-[#7c9484]">
              Preservado desde 1916
            </p>
          </div>
        </div>

        {/* 10 Operational Divisions */}
        <div>
          <div className="mb-8">
            <span className="font-technical text-xs uppercase tracking-widest text-[#00FF41] block mb-2">
              Estrutura Operacional
            </span>
            <h3 className="text-2xl lg:text-3xl font-semibold text-white">
              As Dez Divisões da Avaka Corporation
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {OPERATIONAL_DIVISIONS.map((div, idx) => (
              <div
                key={div.name}
                className="border border-[#003B00] bg-[#050505] p-6 flex items-start gap-4 avaka-panel-hover"
              >
                <span className="font-technical text-xs text-[#00FF41] tabular-nums border border-[#003B00] px-2.5 py-1 bg-black shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div>
                  <h4 className="text-base font-semibold text-white mb-1">{div.name}</h4>
                  <p className="text-sm text-[#9eb2a5] leading-relaxed">{div.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
