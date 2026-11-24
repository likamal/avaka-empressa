export type RoutePath =
  | '/'
  | '/empresa/historia'
  | '/empresa/institucional'
  | '/empresa/missao-visao-valores'
  | '/empresa/lideranca-governanca'
  | '/solucoes/cybersecurity-corporativa'
  | '/solucoes/aviation-security'
  | '/solucoes/maritime-security'
  | '/solucoes/data-infrastructure'
  | '/solucoes/incident-response-soc'
  | '/infraestrutura/serra-de-ambar'
  | '/infraestrutura/sede-corporativa'
  | '/infraestrutura/centro-operacoes-soc'
  | '/intelligence/relatorios-publicacoes'
  | '/intelligence/ameacas-emergentes'
  | '/intelligence/analises-seguranca'
  | '/intelligence/pesquisa-tecnologia'
  | '/contato/institucional'
  | '/contato/consultoria'
  | '/contato/canais';

export interface SubMenuItem {
  label: string;
  path: RoutePath;
  description: string;
}

export interface NavCategory {
  id: string;
  label: string;
  defaultPath: RoutePath;
  items: SubMenuItem[];
}

export const NAV_CATEGORIES: NavCategory[] = [
  {
    id: 'empresa',
    label: 'Empresa',
    defaultPath: '/empresa/institucional',
    items: [
      {
        label: 'Nossa História',
        path: '/empresa/historia',
        description: 'Sete gerações da família Lica desde Whitechapel, 1916.',
      },
      {
        label: 'Informações Institucionais',
        path: '/empresa/institucional',
        description: 'Origem britânica, presença brasileira e estrutura corporativa.',
      },
      {
        label: 'Missão, Visão e Valores',
        path: '/empresa/missao-visao-valores',
        description: 'Princípios de discrição, legado e proteção contínua.',
      },
      {
        label: 'Liderança e Governança',
        path: '/empresa/lideranca-governanca',
        description: 'Direção executiva e arquitetura das dez divisões operacionais.',
      },
    ],
  },
  {
    id: 'solucoes',
    label: 'Soluções',
    defaultPath: '/solucoes/cybersecurity-corporativa',
    items: [
      {
        label: 'Cybersecurity Corporativa',
        path: '/solucoes/cybersecurity-corporativa',
        description: 'Proteção de redes, endpoints, acessos e testes de intrusão.',
      },
      {
        label: 'Aviation Security',
        path: '/solucoes/aviation-security',
        description: 'Defesa cibernética para aeroportos, companhias e navegação aérea.',
      },
      {
        label: 'Maritime Security',
        path: '/solucoes/maritime-security',
        description: 'Segurança digital para portos, cargas, embarcações e comunicações.',
      },
      {
        label: 'Data Infrastructure',
        path: '/solucoes/data-infrastructure',
        description: 'Custódia, criptografia, redundância e recuperação de desastres.',
      },
      {
        label: 'Incident Response & SOC',
        path: '/solucoes/incident-response-soc',
        description: 'Monitoramento contínuo, triagem, contenção e perícia digital.',
      },
    ],
  },
  {
    id: 'infraestrutura',
    label: 'Infraestrutura',
    defaultPath: '/infraestrutura/serra-de-ambar',
    items: [
      {
        label: 'Complexo Tecnológico Serra de Âmbar',
        path: '/infraestrutura/serra-de-ambar',
        description: 'Campus de data center e redundância crítica em Santa Aurora do Vale.',
      },
      {
        label: 'Sede Corporativa',
        path: '/infraestrutura/sede-corporativa',
        description: 'Centro executivo e laboratórios no Distrito Empresarial Horizonte Verde.',
      },
      {
        label: 'Centro de Operações SOC',
        path: '/infraestrutura/centro-operacoes-soc',
        description: 'Estrutura central de monitoramento contínuo e resposta a incidentes.',
      },
    ],
  },
  {
    id: 'intelligence',
    label: 'Intelligence',
    defaultPath: '/intelligence/relatorios-publicacoes',
    items: [
      {
        label: 'Relatórios e Publicações',
        path: '/intelligence/relatorios-publicacoes',
        description: 'Cenários simulados e estudos conceituais de riscos digitais.',
      },
      {
        label: 'Ameaças Emergentes',
        path: '/intelligence/ameacas-emergentes',
        description: 'Biblioteca técnica sobre phishing, ransomware e engenharia social.',
      },
      {
        label: 'Análises de Segurança',
        path: '/intelligence/analises-seguranca',
        description: 'Tríade CIA, fundamentos educativos, glossário e perguntas frequentes.',
      },
      {
        label: 'Pesquisa e Tecnologia',
        path: '/intelligence/pesquisa-tecnologia',
        description: 'Normas de referência e câmara reservada do Avaka Cyber Lab.',
      },
    ],
  },
  {
    id: 'contato',
    label: 'Contato',
    defaultPath: '/contato/institucional',
    items: [
      {
        label: 'Contato Institucional',
        path: '/contato/institucional',
        description: 'Endereços conceituais da sede e do complexo tecnológico.',
      },
      {
        label: 'Solicitar Consultoria',
        path: '/contato/consultoria',
        description: 'Formulário demonstrativo para avaliação de escopo técnico.',
      },
      {
        label: 'Canais de Atendimento',
        path: '/contato/canais',
        description: 'Diretório de canais ilustrativos e esclarecimento institucional.',
      },
    ],
  },
];

export interface RouteMeta {
  title: string;
  description: string;
  section: string;
}

export const ROUTE_META: Record<RoutePath, RouteMeta> = {
  '/': {
    title: 'Avaka Corporation — Cibersegurança e Infraestruturas Críticas desde 1916',
    description:
      'Há mais de um século, protegendo o que importa. Cibersegurança corporativa, segurança aeronáutica, marítima, custódia de dados e operações SOC.',
    section: 'Home',
  },
  '/empresa/historia': {
    title: 'Nossa História — Sete Gerações | Avaka Corporation',
    description:
      'Linha do tempo cinematográfica das sete gerações da família Lica e do caderno preto, de Whitechapel em 1916 à defesa digital contemporânea.',
    section: 'Empresa',
  },
  '/empresa/institucional': {
    title: 'Informações Institucionais | Avaka Corporation',
    description:
      'Identidade corporativa, origem britânica em 1916, chegada ao Brasil em 1951 e estrutura conceitual da Avaka Corporation.',
    section: 'Empresa',
  },
  '/empresa/missao-visao-valores': {
    title: 'Missão, Visão e Valores | Avaka Corporation',
    description:
      'Os pilares éticos da Avaka Corporation: confiança, discrição, legado, responsabilidade, evolução contínua e humanidade.',
    section: 'Empresa',
  },
  '/empresa/lideranca-governanca': {
    title: 'Liderança e Governança | Avaka Corporation',
    description:
      'Governança executiva sob Guilherme Lica VII e organização das dez divisões operacionais da Avaka Corporation.',
    section: 'Empresa',
  },
  '/solucoes/cybersecurity-corporativa': {
    title: 'Cybersecurity Corporativa | Avaka Corporation',
    description:
      'Proteção de redes, endpoints, gestão de vulnerabilidades, testes de intrusão e consultoria em segurança corporativa.',
    section: 'Soluções',
  },
  '/solucoes/aviation-security': {
    title: 'Aviation Security | Avaka Corporation',
    description:
      'Proteção especializada para sistemas aeroportuários, operações aéreas, telemetria e comunicações aeronáuticas.',
    section: 'Soluções',
  },
  '/solucoes/maritime-security': {
    title: 'Maritime Security | Avaka Corporation',
    description:
      'Segurança cibernética para infraestrutura portuária, navios, rastreamento de cargas e comunicações marítimas.',
    section: 'Soluções',
  },
  '/solucoes/data-infrastructure': {
    title: 'Data Infrastructure | Avaka Corporation',
    description:
      'Custódia de dados, arquitetura de backup, criptografia, redundância física e recuperação de desastres.',
    section: 'Soluções',
  },
  '/solucoes/incident-response-soc': {
    title: 'Incident Response & SOC | Avaka Corporation',
    description:
      'Monitoramento 24 horas, triagem de alertas, contenção de incidentes, forense digital e continuidade operacional.',
    section: 'Soluções',
  },
  '/infraestrutura/serra-de-ambar': {
    title: 'Complexo Tecnológico Serra de Âmbar | Avaka Corporation',
    description:
      'Especificação conceitual do campus de data centers e operações críticas em Santa Aurora do Vale, São Paulo.',
    section: 'Infraestrutura',
  },
  '/infraestrutura/sede-corporativa': {
    title: 'Sede Corporativa Horizonte Verde | Avaka Corporation',
    description:
      'Centro administrativo, laboratórios de pesquisa e desenvolvimento e auditório executivo em São Paulo.',
    section: 'Infraestrutura',
  },
  '/infraestrutura/centro-operacoes-soc': {
    title: 'Centro de Operações SOC | Avaka Corporation',
    description:
      'Painel demonstrativo e arquitetura operacional do Avaka Security Operations Center.',
    section: 'Infraestrutura',
  },
  '/intelligence/relatorios-publicacoes': {
    title: 'Relatórios e Publicações | Avaka Intelligence',
    description:
      'Estudos simulados, análises conceituais e tendências de proteção para infraestruturas críticas.',
    section: 'Intelligence',
  },
  '/intelligence/ameacas-emergentes': {
    title: 'Ameaças Emergentes | Avaka Intelligence',
    description:
      'Biblioteca educativa sobre phishing, malware, ransomware, engenharia social, força bruta e vazamento de dados.',
    section: 'Intelligence',
  },
  '/intelligence/analises-seguranca': {
    title: 'Análises de Segurança e Centro de Conhecimento | Avaka Intelligence',
    description:
      'Fundamentos da cibersegurança, Tríade CIA, boas práticas, glossário técnico e perguntas frequentes.',
    section: 'Intelligence',
  },
  '/intelligence/pesquisa-tecnologia': {
    title: 'Pesquisa, Tecnologia e Cyber Lab | Avaka Intelligence',
    description:
      'Normas de referência em estudo pela Avaka e espaço reservado para o futuro laboratório interativo Cyber Lab.',
    section: 'Intelligence',
  },
  '/contato/institucional': {
    title: 'Contato Institucional | Avaka Corporation',
    description:
      'Localizações conceituais da Avaka Corporation no Brasil e orientações institucionais.',
    section: 'Contato',
  },
  '/contato/consultoria': {
    title: 'Solicitar Consultoria | Avaka Corporation',
    description:
      'Canal demonstrativo para solicitação de análise técnica conceitual junto às equipes da Avaka Corporation.',
    section: 'Contato',
  },
  '/contato/canais': {
    title: 'Canais de Atendimento | Avaka Corporation',
    description:
      'Canais demonstrativos de contato e notas sobre o caráter ficcional e educacional do projeto Avaka Corporation.',
    section: 'Contato',
  },
};

export function isValidRoute(path: string): path is RoutePath {
  return path in ROUTE_META;
}
