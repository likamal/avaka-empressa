import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Plane, Anchor, Shield } from 'lucide-react';
import { ASSETS, INSTITUTIONAL } from '../lib/avakaData';
import { RoutePath } from '../lib/routes';
import { PrismHeroCanvas } from '../components/webgl/PrismHeroCanvas';
import { WebGLLandscapeCanvas } from '../components/webgl/WebGLLandscapeCanvas';
import { SectorMarquee } from '../components/interactive/SectorMarquee';
import { AnimatedCounter } from '../components/interactive/AnimatedCounter';
import { InteractiveTabs } from '../components/interactive/InteractiveTabs';
import { SignalDiagram } from '../components/interactive/SignalDiagram';
import { DefenseTimeline } from '../components/interactive/DefenseTimeline';
import { RevealOnScroll } from '../components/interactive/RevealOnScroll';
import { ResilientImage } from '../components/ui/ResilientImage';

interface HomePageProps {
  onNavigate: (path: RoutePath) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="bg-black text-[#e6efe8]">
      {/* 1. HERO — Interactive 3D WebGL2 Prism */}
      <section className="relative min-h-screen pt-20 sm:pt-24 flex items-center overflow-hidden border-b border-[#003B00]">
        <div className="absolute inset-0 z-0">
          <PrismHeroCanvas />
        </div>

        {/* Contrast gradient scrim on left side for crisp readability while leaving prism bright on right */}
        <div
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black/92 via-black/65 to-transparent lg:via-black/50"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 z-10 bg-gradient-to-t from-black to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-20 w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 pointer-events-none">
          <div className="max-w-2xl pointer-events-auto">
            <div className="flex items-center gap-3 font-technical text-xs uppercase tracking-[0.2em] text-[#00FF41] mb-6">
              <span>Avaka Corporation</span>
              <span aria-hidden="true" className="text-[#ff1717]">·</span>
              <span>Londres 1916 — São Paulo</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.06] mb-6">
              {INSTITUTIONAL.sloganPrimary}
            </h1>

            <p className="text-base sm:text-lg text-[#c7d7cc] leading-relaxed max-w-xl mb-9">
              {INSTITUTIONAL.synthesis} Evoluímos da custódia física em Whitechapel à proteção digital de ambientes corporativos, aeronáuticos, marítimos e infraestruturas críticas.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/solucoes/cybersecurity-corporativa')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#00FF41] text-black font-technical text-xs font-semibold uppercase tracking-wider hover:bg-[#33ff66] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Explorar Soluções
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('/empresa/historia')}
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#003B00] bg-black/75 text-white font-technical text-xs uppercase tracking-wider hover:border-[#00FF41] hover:text-[#00FF41] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Conhecer o Legado 1916
              </button>
            </div>

            <p className="mt-10 font-technical text-xs text-[#738d7c]">
              Interação óptica: mova o cursor ou clique sobre o prisma para alterar o eixo de refração.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MARQUEE & BREVE APRESENTAÇÃO INSTITUCIONAL */}
      <SectorMarquee />

      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 border-b border-[#003B00]/70">
        <RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
            <div className="lg:col-span-5">
              <span className="font-technical text-xs uppercase tracking-widest text-[#00FF41] block mb-3">
                Identidade Institucional
              </span>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white leading-tight">
                Tradição de custódia aplicada à defesa cibernética contemporânea.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <p className="text-base text-[#c7d7cc] leading-relaxed">
                Fundada em Londres em 1916 e estabelecida no Brasil desde 1951, a Avaka Corporation atravessa sete gerações preservando um único compromisso: proteger aquilo que não pode ser perdido.
              </p>
              <p className="text-sm text-[#95aa9c] leading-relaxed">
                Este portal apresenta a arquitetura institucional, as soluções de segurança crítica e a narrativa conceitual da Avaka. Todos os ambientes, indicadores e contatos são demonstrativos para fins educacionais.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/empresa/institucional')}
                  className="inline-flex items-center gap-1.5 font-technical text-xs uppercase tracking-wider text-[#00FF41] hover:underline cursor-pointer"
                >
                  Ler perfil institucional completo
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* 4-column tabular KPI row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border border-[#003B00] bg-[#040605]">
            <div className="p-6 border-b lg:border-b-0 border-r border-[#003B00]">
              <div className="text-3xl lg:text-4xl font-semibold text-white mb-1">
                <AnimatedCounter target={1916} />
              </div>
              <p className="font-technical text-xs text-[#00FF41] uppercase tracking-wider">
                Fundação em Londres
              </p>
              <p className="text-xs text-[#8ea595] mt-1">Whitechapel · Origem britânica</p>
            </div>

            <div className="p-6 border-b lg:border-b-0 lg:border-r border-[#003B00]">
              <div className="text-3xl lg:text-4xl font-semibold text-white mb-1">
                <AnimatedCounter target={7} />
              </div>
              <p className="font-technical text-xs text-[#00FF41] uppercase tracking-wider">
                Gerações da Família Lica
              </p>
              <p className="text-xs text-[#8ea595] mt-1">Da relojoaria à era digital</p>
            </div>

            <div className="p-6 border-r border-[#003B00]">
              <div className="text-3xl lg:text-4xl font-semibold text-white mb-1">
                <AnimatedCounter target={1951} />
              </div>
              <p className="font-technical text-xs text-[#00FF41] uppercase tracking-wider">
                Chegada ao Brasil
              </p>
              <p className="text-xs text-[#8ea595] mt-1">Porto de Santos e São Paulo</p>
            </div>

            <div className="p-6">
              <div className="text-3xl lg:text-4xl font-semibold text-white mb-1">
                <AnimatedCounter target={24} suffix="h" />
              </div>
              <p className="font-technical text-xs text-[#ff1717] uppercase tracking-wider">
                Avaka SOC Conceitual
              </p>
              <p className="text-xs text-[#8ea595] mt-1">Vigilância em terra, ar e mar</p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 3. SOLUÇÕES EM ABAS + DESTAQUE AERONÁUTICO E MARÍTIMO */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 border-b border-[#003B00]/70">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="font-technical text-xs uppercase tracking-widest text-[#00FF41] block mb-2">
                Principais Áreas de Atuação
              </span>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white">
                Arquitetura de Defesa por Domínio
              </h2>
            </div>
            <p className="text-sm text-[#95aa9c] max-w-md">
              Selecione cada frente abaixo para explorar escopos técnicos dedicados. Navegação compatível com teclado.
            </p>
          </div>

          <InteractiveTabs onNavigate={onNavigate} />
        </RevealOnScroll>

        {/* Aviation & Maritime Highlight */}
        <RevealOnScroll delayMs={100} className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border border-[#003B00] bg-[#050505]">
            <div className="lg:col-span-6 p-6 lg:p-10 flex flex-col justify-between gap-8">
              <div>
                <span className="font-technical text-xs uppercase tracking-widest text-[#ff1717] block mb-3">
                  Infraestruturas Críticas · Ar & Mar
                </span>
                <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                  Segurança Aeronáutica e Marítima
                </h3>
                <p className="text-sm sm:text-base text-[#c7d7cc] leading-relaxed mb-6">
                  Expandida pela sexta geração e consolidada pela liderança atual, a divisão crítica da Avaka protege a integridade digital onde qualquer falha impacta rotas reais.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => onNavigate('/solucoes/aviation-security')}
                    className="text-left p-5 border border-[#003B00] bg-black hover:border-[#00FF41] transition-colors cursor-pointer group"
                  >
                    <Plane className="w-5 h-5 text-[#ff1717] mb-3" />
                    <h4 className="text-base font-semibold text-white group-hover:text-[#00FF41] transition-colors mb-1">
                      Aviation Security
                    </h4>
                    <p className="text-xs text-[#95aa9c] leading-relaxed">
                      Sistemas aeroportuários, telemetria de torre, despacho de voos e proteção de solo.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate('/solucoes/maritime-security')}
                    className="text-left p-5 border border-[#003B00] bg-black hover:border-[#00FF41] transition-colors cursor-pointer group"
                  >
                    <Anchor className="w-5 h-5 text-[#00FF41] mb-3" />
                    <h4 className="text-base font-semibold text-white group-hover:text-[#00FF41] transition-colors mb-1">
                      Maritime Security
                    </h4>
                    <p className="text-xs text-[#95aa9c] leading-relaxed">
                      Terminais portuários, embarcações conectadas, rastreamento de cargas e links navio-terra.
                    </p>
                  </button>
                </div>
              </div>

              <div className="font-technical text-xs text-[#7c9484]">
                Continuidade operacional inspirada na atuação portuária desde 1951.
              </div>
            </div>

            <div className="lg:col-span-6 p-6 lg:p-6 flex items-center bg-[#030403] border-t lg:border-t-0 lg:border-l border-[#003B00]">
              <ResilientImage
                src={ASSETS.legacyModern}
                alt="Ilustração conceitual de centro de segurança aeronáutica e marítima da Avaka"
                caption="Ilustração temática conceitual — Monitoramento integrado de vetores aéreos e corredores marítimos."
                aspectClass="aspect-video lg:h-full"
              />
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 4. AVAKA SOC & TECNOLOGIA EM CAMADAS */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 border-b border-[#003B00]/70 space-y-12">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <span className="font-technical text-xs uppercase tracking-widest text-[#00FF41] block mb-2">
                Avaka SOC & Engenharia Defensiva
              </span>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white">
                Vigilância Contínua e Resposta Coordenada
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/infraestrutura/centro-operacoes-soc')}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#003B00] text-xs font-technical uppercase tracking-wider text-[#00FF41] hover:border-[#00FF41] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Abrir Painel Demonstrativo do SOC
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <SignalDiagram />
        </RevealOnScroll>

        <RevealOnScroll delayMs={100}>
          <DefenseTimeline />
        </RevealOnScroll>
      </section>

      {/* 5. CHAMADA PARA A HISTÓRIA (1916) + ACESSO ÀS PÁGINAS INTERNAS */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border border-[#003B00] bg-[#050505] mb-12">
            <div className="lg:col-span-5 p-6 lg:p-6 border-b lg:border-b-0 lg:border-r border-[#003B00]">
              <ResilientImage
                src={ASSETS.legacyLondon}
                alt="Ilustração conceitual da bancada de relojoaria e caderno preto em 1916"
                caption="Ilustração temática conceitual — Whitechapel, 1916 e o caderno preto."
                aspectClass="aspect-[4/3] lg:h-full"
              />
            </div>
            <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center">
              <span className="font-technical text-xs uppercase tracking-widest text-[#ff1717] mb-3">
                The Legacy · Sete Gerações
              </span>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
                “Alguém confiou, e nós não vamos falhar.”
              </h2>
              <p className="text-base text-[#c7d7cc] leading-relaxed mb-6">
                De uma oficina em Whitechapel durante a Primeira Guerra Mundial, passando pela Blitz de 1940, o escritório no Porto de Santos em 1951 e os mainframes da Mooca, conheça a linha do tempo cinematográfica das sete gerações conectadas pelo caderno preto.
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => onNavigate('/empresa/historia')}
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#00FF41] text-black font-technical text-xs font-semibold uppercase tracking-wider hover:bg-[#33ff66] transition-colors cursor-pointer"
                >
                  Explorar Timeline Histórica
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* 3 Gateway Cards with live WebGL shaders on hover */}
        <RevealOnScroll delayMs={120}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: 'amber',
                kicker: 'Infraestrutura Crítica',
                title: 'Complexo Serra de Âmbar',
                desc: 'Campus conceitual de data centers com subestações, redundância e perímetro monitorado.',
                path: '/infraestrutura/serra-de-ambar' as RoutePath,
                preset: 'amber-vault' as const,
              },
              {
                id: 'hq',
                kicker: 'Sede Administrativa',
                title: 'Horizonte Verde — São Paulo',
                desc: 'Centro executivo, laboratórios de pesquisa e desenvolvimento e auditório institucional.',
                path: '/infraestrutura/sede-corporativa' as RoutePath,
                preset: 'obsidian-matrix' as const,
              },
              {
                id: 'intel',
                kicker: 'Avaka Intelligence',
                title: 'Ameaças & Cyber Lab',
                desc: 'Biblioteca de riscos digitais, relatórios simulados, Tríade CIA e câmara de pesquisa.',
                path: '/intelligence/ameacas-emergentes' as RoutePath,
                preset: 'emerald-ridge' as const,
              },
            ].map((card) => (
              <button
                key={card.id}
                type="button"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onFocus={() => setHoveredCard(card.id)}
                onBlur={() => setHoveredCard(null)}
                onClick={() => onNavigate(card.path)}
                className="relative overflow-hidden text-left border border-[#003B00] bg-[#050505] p-7 min-h-[230px] flex flex-col justify-between group cursor-pointer hover:border-[#00FF41] transition-colors"
              >
                <div className="absolute inset-0 opacity-45 group-hover:opacity-75 transition-opacity">
                  <WebGLLandscapeCanvas
                    preset={card.preset}
                    hovered={hoveredCard === card.id}
                  />
                </div>
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-technical text-xs uppercase tracking-widest text-[#00FF41]">
                    {card.kicker}
                  </span>
                  <Shield className="w-4 h-4 text-[#ff1717]" />
                </div>
                <div className="relative z-10 mt-8">
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#00FF41] transition-colors mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#c7d7cc] leading-relaxed mb-4">
                    {card.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-technical text-xs uppercase tracking-wider text-white">
                    Acessar página
                    <ArrowRight className="w-3.5 h-3.5 text-[#00FF41]" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
};
