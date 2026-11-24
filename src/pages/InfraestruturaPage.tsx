import React, { useEffect, useState } from 'react';
import { ArrowRight, RefreshCw } from 'lucide-react';
import { ASSETS } from '../lib/avakaData';
import { RoutePath } from '../lib/routes';
import { PageBanner } from '../components/layout/PageBanner';
import { ResilientImage } from '../components/ui/ResilientImage';
import { SignalDiagram } from '../components/interactive/SignalDiagram';
import { AnimatedCounter } from '../components/interactive/AnimatedCounter';

interface InfraPageProps {
  onNavigate: (path: RoutePath) => void;
}

/* ============================================================================
   1. COMPLEXO TECNOLÓGICO SERRA DE ÂMBAR
============================================================================ */
export const SerraAmbarPage: React.FC<InfraPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-black text-[#e6efe8]">
      <PageBanner
        section="Infraestrutura"
        title="Complexo Tecnológico Serra de Âmbar"
        subtitle="Campus conceitual de data centers e operações críticas localizado na região fictícia de Santa Aurora do Vale, São Paulo."
        preset="amber-vault"
        notice="Instalação fictícia criada para o universo conceitual da Avaka Corporation. Não representa um empreendimento físico real."
        onNavigate={onNavigate}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">
        <ResilientImage
          src={ASSETS.serraAmbar}
          alt="Ilustração conceitual aérea do Complexo Tecnológico Serra de Âmbar"
          caption="Ilustração conceitual — Campus de alta segurança Serra de Âmbar com edifícios de data center, refrigeração e perímetro monitorado."
          aspectClass="aspect-video"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <span className="font-technical text-xs uppercase tracking-widest text-[#00FF41]">
              Arquitetura de Custódia Física e Digital
            </span>
            <h2 className="text-3xl font-semibold text-white">
              Engenharia de Continuidade em Múltiplas Camadas
            </h2>
            <p className="text-base text-[#c7d7cc] leading-relaxed">
              O Complexo Tecnológico Serra de Âmbar representa a materialização contemporânea da antiga casa de custódia da Avaka: múltiplos blocos independentes de servidores projetados para manter integridade de dados e operação contínua mesmo diante de falhas externas severas.
            </p>
            <p className="text-sm text-[#95aa9c] leading-relaxed">
              De acordo com o dossiê institucional, capacidades numéricas absolutas de armazenamento e contratos operacionais não são divulgados no universo conceitual, mantendo-se o sigilo técnico como princípio.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['Edifícios Modulares', 'Múltiplos blocos isolados para processamento e custódia redundante.'],
              ['Energia e Geradores', 'Subestações dedicadas com geração autônoma para continuidade elétrica.'],
              ['Refrigeração Crítica', 'Sistemas de climatização redundante para estabilidade térmica contínua.'],
              ['Perímetro Monitorado', 'Controle de acesso físico em camadas e vigilância integrada ao SOC.'],
            ].map(([title, desc]) => (
              <div key={title} className="border border-[#003B00] bg-[#050505] p-5">
                <h3 className="text-sm font-semibold text-[#00FF41] mb-1.5">{title}</h3>
                <p className="text-xs text-[#9eb2a5] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   2. SEDE CORPORATIVA — HORIZONTE VERDE
============================================================================ */
export const SedeCorporativaPage: React.FC<InfraPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-black text-[#e6efe8]">
      <PageBanner
        section="Infraestrutura"
        title="Sede Corporativa — Distrito Empresarial Horizonte Verde"
        subtitle="Centro administrativo, diretoria executiva, engenharia de software e laboratórios de pesquisa em São Paulo, Brasil."
        preset="obsidian-matrix"
        notice="Endereço e edifício fictícios integrantes da narrativa institucional da Avaka Corporation."
        onNavigate={onNavigate}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">
        <ResilientImage
          src={ASSETS.sedeHorizonte}
          alt="Ilustração conceitual da Sede Corporativa no Distrito Empresarial Horizonte Verde"
          caption="Ilustração conceitual — Sede Corporativa em São Paulo com andares executivos, laboratórios de cibersegurança e P&D."
          aspectClass="aspect-video"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              zone: 'Ala Executiva & Governança',
              title: 'Diretoria e Estratégia Global',
              text: 'Espaço da presidência conduzida por Guilherme Lica VII, reuniões institucionais reservadas e preservação do acervo histórico do caderno preto.',
            },
            {
              zone: 'Engenharia & Laboratórios',
              title: 'Pesquisa, Desenvolvimento e Ofensiva',
              text: 'Andares dedicados à programação defensiva, análise controlada de vulnerabilidades, testes de intrusão e simulações aeronáuticas e marítimas.',
            },
            {
              zone: 'Capacitação & Atendimento',
              title: 'Auditório e Salas de Treinamento',
              text: 'Infraestrutura para workshops educativos de conscientização, simulações de resposta a crises e recepção técnica institucional.',
            },
          ].map((wing) => (
            <div key={wing.title} className="border border-[#003B00] bg-[#050505] p-6">
              <span className="font-technical text-xs uppercase tracking-widest text-[#ff1717] block mb-2">
                {wing.zone}
              </span>
              <h3 className="text-xl font-semibold text-white mb-2">{wing.title}</h3>
              <p className="text-sm text-[#9eb2a5] leading-relaxed">{wing.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   3. CENTRO DE OPERAÇÕES SOC (PAINEL DEMONSTRATIVO SIMULADO)
============================================================================ */
interface SimulatedEvent {
  id: string;
  domain: 'Corporativo' | 'Aeronáutico' | 'Marítimo' | 'Dados';
  vector: string;
  action: string;
  stage: string;
}

const SIMULATED_SCENARIOS: SimulatedEvent[] = [
  {
    id: 'SIM-104',
    domain: 'Aeronáutico',
    vector: 'Tentativa anômala de autenticação em gateway de despacho',
    action: 'Sessão bloqueada e isolada preventivamente',
    stage: 'Contido (Simulação)',
  },
  {
    id: 'SIM-108',
    domain: 'Marítimo',
    vector: 'Varredura incomum na interface de telemetria portuária',
    action: 'Segmento isolado e tráfego redirecionado para análise',
    stage: 'Triagem Concluída (Simulação)',
  },
  {
    id: 'SIM-112',
    domain: 'Corporativo',
    vector: 'Campanha de phishing direcionada identificada em caixa externa',
    action: 'Domínio remetente bloqueado e alerta emitido às equipes',
    stage: 'Mitigado (Simulação)',
  },
  {
    id: 'SIM-119',
    domain: 'Dados',
    vector: 'Solicitação fora de janela para alteração de política de backup',
    action: 'Bloqueio automático por imutabilidade e verificação dupla',
    stage: 'Protegido (Simulação)',
  },
];

export const CentroOperacoesSocPage: React.FC<InfraPageProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<string>('Todos');
  const [cycle, setCycle] = useState(1);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const id = window.setInterval(() => {
      setCycle((c) => (c % 4) + 1);
    }, 3500);
    return () => window.clearInterval(id);
  }, []);

  const visibleEvents =
    filter === 'Todos'
      ? SIMULATED_SCENARIOS
      : SIMULATED_SCENARIOS.filter((e) => e.domain === filter);

  return (
    <div className="bg-black text-[#e6efe8]">
      <PageBanner
        section="Infraestrutura"
        title="Centro de Operações SOC"
        subtitle="Estrutura central de monitoramento contínuo, triagem de alertas, investigação técnica e contenção coordenada de incidentes."
        preset="maritime-sonar"
        notice="AVISO IMPORTANTE: Todos os indicadores, contadores e registros de eventos exibidos abaixo são SIMULAÇÕES DEMONSTRATIVAS conceituais, sem conexão com ambientes reais."
        onNavigate={onNavigate}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">
        {/* Simulated Telemetry Console */}
        <div className="border border-[#003B00] bg-[#040605] p-6 lg:p-8 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#003B00] pb-5">
            <div>
              <span className="font-technical text-xs uppercase tracking-widest text-[#ff1717]">
                Painel Visual Demonstrativo · Dados Simulados
              </span>
              <h2 className="text-2xl font-semibold text-white mt-1">
                Fluxo de Triagem Avaka SOC
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {['Todos', 'Corporativo', 'Aeronáutico', 'Marítimo', 'Dados'].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setFilter(tab)}
                  className={`px-3 py-1.5 font-technical text-xs uppercase border transition-colors cursor-pointer ${
                    filter === tab
                      ? 'border-[#00FF41] bg-[#00FF41] text-black font-semibold'
                      : 'border-[#003B00] text-[#9fb5a6] hover:border-[#00FF41]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* 3 Simulated Conceptual Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="border border-[#003B00] bg-black p-5">
              <span className="font-technical text-xs text-[#8ea595] uppercase block mb-1">
                Regime de Vigilância (Conceitual)
              </span>
              <div className="text-3xl font-semibold text-[#00FF41]">
                <AnimatedCounter target={24} suffix=" / 7" />
              </div>
              <span className="text-xs text-[#7c9484]">Cobertura contínua em turnos</span>
            </div>

            <div className="border border-[#003B00] bg-black p-5">
              <span className="font-technical text-xs text-[#8ea595] uppercase block mb-1">
                Frentes Integradas (Simulação)
              </span>
              <div className="text-3xl font-semibold text-white">
                <AnimatedCounter target={4} />
              </div>
              <span className="text-xs text-[#7c9484]">Corporativo, Aéreo, Naval e Dados</span>
            </div>

            <div className="border border-[#003B00] bg-black p-5">
              <span className="font-technical text-xs text-[#8ea595] uppercase block mb-1">
                Ciclo Demonstrativo Ativo
              </span>
              <div className="text-3xl font-semibold text-white flex items-center gap-3 tabular-nums">
                <span>0{cycle}</span>
                <RefreshCw className="w-4 h-4 text-[#00FF41]" />
              </div>
              <span className="text-xs text-[#7c9484]">Cenário ilustrativo rotativo</span>
            </div>
          </div>

          {/* Simulated Event Table */}
          <div className="overflow-x-auto border border-[#003B00]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#003B00] bg-black font-technical text-xs uppercase text-[#00FF41]">
                  <th className="py-3.5 px-4">ID Simulado</th>
                  <th className="py-3.5 px-4">Domínio</th>
                  <th className="py-3.5 px-4">Cenário Demonstrativo</th>
                  <th className="py-3.5 px-4">Ação Conceitual</th>
                  <th className="py-3.5 px-4">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#003B00]/70 text-sm">
                {visibleEvents.map((ev) => (
                  <tr key={ev.id} className="hover:bg-[#071009] transition-colors">
                    <td className="py-4 px-4 font-technical text-xs text-white tabular-nums">
                      {ev.id}
                    </td>
                    <td className="py-4 px-4 font-technical text-xs text-[#00FF41]">
                      {ev.domain}
                    </td>
                    <td className="py-4 px-4 text-[#d1e0d5]">{ev.vector}</td>
                    <td className="py-4 px-4 text-[#9fb5a6]">{ev.action}</td>
                    <td className="py-4 px-4 font-technical text-xs text-[#ff1717]">
                      {ev.stage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <SignalDiagram />

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => onNavigate('/solucoes/incident-response-soc')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00FF41] text-black font-technical text-xs font-semibold uppercase tracking-wider hover:bg-[#33ff66] transition-colors cursor-pointer"
          >
            Ver Solução Incident Response & SOC
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
