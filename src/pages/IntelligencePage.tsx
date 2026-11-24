import React, { useState } from 'react';
import { ArrowRight, FlaskConical, ShieldAlert } from 'lucide-react';
import {
  CIA_TRIAD,
  FAQ_ITEMS,
  GLOSSARY_ITEMS,
  REFERENCE_NORMS,
  SIMULATED_REPORTS,
  THREAT_LIBRARY,
} from '../lib/avakaData';
import { RoutePath } from '../lib/routes';
import { PageBanner } from '../components/layout/PageBanner';
import { FaqAccordion } from '../components/interactive/FaqAccordion';
import { WebGLLandscapeCanvas } from '../components/webgl/WebGLLandscapeCanvas';

interface IntelPageProps {
  onNavigate: (path: RoutePath) => void;
}

/* ============================================================================
   1. RELATÓRIOS E PUBLICAÇÕES
============================================================================ */
export const RelatoriosPublicacoesPage: React.FC<IntelPageProps> = ({ onNavigate }) => {
  const [selectedReport, setSelectedReport] = useState<string>(SIMULATED_REPORTS[0].id);

  return (
    <div className="bg-black text-[#e6efe8]">
      <PageBanner
        section="Intelligence"
        title="Relatórios e Publicações"
        subtitle="Estudos temáticos e cenários conceituais sobre proteção de infraestruturas corporativas, portuárias, aeronáuticas e acervos digitais."
        preset="emerald-ridge"
        notice="Todos os relatórios desta biblioteca são simulações conceituais e materiais educativos sem dados operacionais reais."
        onNavigate={onNavigate}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SIMULATED_REPORTS.map((rep) => {
            const active = selectedReport === rep.id;
            return (
              <article
                key={rep.id}
                onClick={() => setSelectedReport(rep.id)}
                className={`border p-7 transition-colors cursor-pointer ${
                  active
                    ? 'border-[#00FF41] bg-[#061108]'
                    : 'border-[#003B00] bg-[#050505] hover:border-[#008F11]'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 font-technical text-xs mb-3">
                  <span className="text-[#00FF41] uppercase tracking-wider">
                    {rep.category} · {rep.id}
                  </span>
                  <span className="text-[#ff1717]">{rep.tag}</span>
                </div>

                <h2 className="text-xl font-semibold text-white mb-2">{rep.title}</h2>
                <p className="font-technical text-xs text-[#7c9484] mb-4">{rep.date}</p>
                <p className="text-sm text-[#c7d7cc] leading-relaxed mb-5">{rep.summary}</p>

                <div className="border-t border-[#003B00]/80 pt-4 space-y-2">
                  <span className="font-technical text-xs uppercase text-[#8ea595] block">
                    Pontos-chave do estudo simulado
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#b7c9bd]">
                    {rep.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 bg-[#00FF41] mt-1.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   2. AMEAÇAS EMERGENTES
============================================================================ */
export const AmeacasEmergentesPage: React.FC<IntelPageProps> = ({ onNavigate }) => {
  const [activeId, setActiveId] = useState(THREAT_LIBRARY[0].id);
  const selected = THREAT_LIBRARY.find((t) => t.id === activeId) ?? THREAT_LIBRARY[0];

  return (
    <div className="bg-black text-[#e6efe8]">
      <PageBanner
        section="Intelligence"
        title="Ameaças Emergentes"
        subtitle="Biblioteca educativa de vetores digitais: entenda como operam os principais ataques e quais práticas reduzem a exposição."
        preset="obsidian-matrix"
        onNavigate={onNavigate}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-2">
            {THREAT_LIBRARY.map((threat) => {
              const isSelected = threat.id === selected.id;
              return (
                <button
                  key={threat.id}
                  type="button"
                  onClick={() => setActiveId(threat.id)}
                  className={`w-full text-left p-4 border transition-colors cursor-pointer ${
                    isSelected
                      ? 'border-[#00FF41] bg-[#071209]'
                      : 'border-[#003B00] bg-[#050505] hover:border-[#008F11]'
                  }`}
                >
                  <span className="font-technical text-xs text-[#ff1717] uppercase block mb-1">
                    {threat.vector}
                  </span>
                  <span className="text-base font-semibold text-white">{threat.name}</span>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-8 border border-[#003B00] bg-[#050505] p-8 lg:p-10 space-y-8">
            <div className="flex items-start justify-between gap-4 border-b border-[#003B00] pb-6">
              <div>
                <span className="font-technical text-xs uppercase tracking-widest text-[#00FF41]">
                  {selected.vector}
                </span>
                <h2 className="text-3xl font-semibold text-white mt-1">{selected.name}</h2>
              </div>
              <ShieldAlert className="w-7 h-7 text-[#ff1717] shrink-0" />
            </div>

            <div>
              <h3 className="font-technical text-xs uppercase tracking-wider text-[#00FF41] mb-2">
                Conceito Técnico
              </h3>
              <p className="text-base text-[#d1e0d5] leading-relaxed">{selected.concept}</p>
            </div>

            <div className="border border-[#003B00] bg-black p-5">
              <h3 className="font-technical text-xs uppercase tracking-wider text-[#ff1717] mb-2">
                Exemplo Ilustrativo de Risco
              </h3>
              <p className="text-sm text-[#c7d7cc] leading-relaxed">{selected.riskExample}</p>
            </div>

            <div>
              <h3 className="font-technical text-xs uppercase tracking-wider text-[#00FF41] mb-3">
                Medidas de Prevenção Recomendadas
              </h3>
              <ul className="space-y-3">
                {selected.prevention.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-[#c7d7cc]">
                    <span className="font-technical text-xs text-[#00FF41] tabular-nums mt-0.5">
                      0{i + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   3. ANÁLISES DE SEGURANÇA (CENTRO DE CONHECIMENTO EDUCATIVO)
============================================================================ */
export const AnalisesSegurancaPage: React.FC<IntelPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-black text-[#e6efe8]">
      <PageBanner
        section="Intelligence"
        title="Análises de Segurança & Centro de Conhecimento"
        subtitle="Fundamentos de cibersegurança, Tríade CIA, boas práticas essenciais, glossário técnico e perguntas frequentes."
        preset="emerald-ridge"
        onNavigate={onNavigate}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* O que é e por que importa */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 border border-[#003B00] bg-[#050505] p-8">
            <span className="font-technical text-xs uppercase tracking-widest text-[#00FF41] block mb-2">
              Fundamento 01
            </span>
            <h2 className="text-2xl font-semibold text-white mb-4">
              O que é Cibersegurança
            </h2>
            <p className="text-sm sm:text-base text-[#c7d7cc] leading-relaxed">
              Cibersegurança é o conjunto integrado de práticas, arquiteturas, tecnologias e processos humanos aplicados para proteger computadores, redes, servidores, sistemas operacionais e dados contra acessos não autorizados, interrupções, adulteração e furto de informações.
            </p>
          </div>

          <div className="lg:col-span-6 border border-[#003B00] bg-[#050505] p-8">
            <span className="font-technical text-xs uppercase tracking-widest text-[#ff1717] block mb-2">
              Fundamento 02
            </span>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Por que é Vital às Organizações
            </h2>
            <p className="text-sm sm:text-base text-[#c7d7cc] leading-relaxed">
              Proteger ambientes digitais garante continuidade das operações, preserva dados pessoais e estratégicos, reduz perdas financeiras, evita paralisações críticas em sistemas essenciais e sustenta a confiança institucional perante a sociedade.
            </p>
          </div>
        </div>

        {/* Tríade CIA */}
        <div>
          <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-6">
            A Tríade CIA da Segurança da Informação
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CIA_TRIAD.map((pillar) => (
              <div key={pillar.letter} className="border border-[#003B00] bg-[#050505] p-7">
                <div className="font-heading text-4xl font-bold text-[#00FF41] mb-3">
                  {pillar.letter}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-[#c7d7cc] leading-relaxed mb-4">{pillar.summary}</p>
                <p className="text-xs font-technical text-[#8ea595] border-t border-[#003B00]/80 pt-3">
                  Práticas: {pillar.measures}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Boas Práticas */}
        <div className="border border-[#003B00] bg-[#050505] p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Boas Práticas Essenciais de Higiene Digital
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              ['Senhas Fortes e Únicas', 'Evitar reutilização de credenciais e adotar gerenciadores confiáveis.'],
              ['Autenticação Multifator (MFA)', 'Adicionar segunda camada de confirmação em contas críticas.'],
              ['Atualizações Contínuas', 'Corrigir vulnerabilidades conhecidas em sistemas e aplicativos.'],
              ['Backups Isolados', 'Manter cópias testadas e protegidas contra alteração maliciosa.'],
              ['Princípio do Menor Privilégio', 'Conceder apenas os acessos estritamente necessários a cada função.'],
              ['Verificação de Solicitações', 'Confirmar pedidos urgentes ou links suspeitos por canal oficial.'],
            ].map(([title, desc]) => (
              <div key={title} className="border border-[#003B00]/80 bg-black p-5">
                <h3 className="text-sm font-semibold text-[#00FF41] mb-1.5">{title}</h3>
                <p className="text-xs text-[#9eb2a5] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Glossário & FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-2xl font-semibold text-white mb-4">Glossário Técnico</h2>
            <dl className="space-y-3">
              {GLOSSARY_ITEMS.map((g) => (
                <div key={g.term} className="border border-[#003B00] bg-[#050505] p-5">
                  <dt className="font-technical text-xs uppercase text-[#00FF41] mb-1.5">
                    {g.term}
                  </dt>
                  <dd className="text-sm text-[#c7d7cc] leading-relaxed">{g.definition}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-7">
            <h2 className="text-2xl font-semibold text-white mb-4">Perguntas Frequentes</h2>
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   4. PESQUISA E TECNOLOGIA (+ CÂMARA RESERVADA AVAKA CYBER LAB)
============================================================================ */
export const PesquisaTecnologiaPage: React.FC<IntelPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-black text-[#e6efe8]">
      <PageBanner
        section="Intelligence"
        title="Pesquisa, Tecnologia e Cyber Lab"
        subtitle="Diretrizes de pesquisa em segurança aplicada, referências normativas e área reservada para o futuro laboratório interativo Avaka Cyber Lab."
        preset="aviation-vector"
        onNavigate={onNavigate}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Normas de referência */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">
            Referências Técnicas e Normativas em Estudo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {REFERENCE_NORMS.map((norm) => (
              <div key={norm.code} className="border border-[#003B00] bg-[#050505] p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">{norm.code}</h3>
                  <span className="font-technical text-xs text-[#00FF41]">Referência</span>
                </div>
                <p className="text-xs font-medium text-[#c7d7cc] mb-2">{norm.scope}</p>
                <p className="text-xs text-[#8ea595] leading-relaxed">{norm.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reserved Area for Future Cyber Lab Minigame */}
        <section
          id="cyber-lab-slot"
          className="relative border border-[#00FF41]/50 bg-[#040705] overflow-hidden"
        >
          <div className="absolute inset-0 opacity-35 pointer-events-none">
            <WebGLLandscapeCanvas preset="obsidian-matrix" />
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 font-technical text-xs uppercase tracking-widest text-[#ff1717]">
                <FlaskConical className="w-4 h-4" />
                <span>Avaka Cyber Lab · Módulo Reservado</span>
              </div>
              <h2 className="text-3xl font-semibold text-white">
                Laboratório Interativo em Desenvolvimento
              </h2>
              <p className="text-base text-[#c7d7cc] leading-relaxed">
                Esta câmara técnica foi projetada e reservada na arquitetura do portal para receber, em uma etapa posterior do projeto, o módulo interativo educacional do Avaka Cyber Lab (HTML, CSS e JavaScript dedicados).
              </p>
              <p className="font-technical text-xs text-[#8ea595]">
                Estado atual: estrutura preparada para integração futura · Nenhuma simulação lúdica genérica foi inserida antecipadamente.
              </p>
            </div>

            <div className="lg:w-[340px] border border-[#003B00] bg-black/90 p-6 space-y-4 shrink-0">
              <div className="font-technical text-xs text-[#00FF41] uppercase tracking-wider">
                Contêiner de Integração
              </div>
              <div className="h-28 border border-dashed border-[#003B00] flex items-center justify-center p-4 text-center">
                <span className="font-technical text-xs text-[#7c9484]">
                  Área reservada · Avaka Cyber Lab
                </span>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('/intelligence/analises-seguranca')}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 border border-[#00FF41] text-[#00FF41] font-technical text-xs uppercase tracking-wider hover:bg-[#00FF41] hover:text-black transition-colors cursor-pointer"
              >
                Acessar Centro de Conhecimento
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
