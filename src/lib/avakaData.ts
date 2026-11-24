import { RoutePath } from './routes';
import { LandscapePreset } from './webglEngine';

export const ASSETS = {
  logo: '/assets/aistudio/avaka-logo_67dbca8c.png',
  favicon: '/assets/aistudio/avaka-favicon_6b6d57b8.png',
  serraAmbar: '/src/assets/images/serra_ambar_datacenter_1795545559675.jpg',
  sedeHorizonte: '/src/assets/images/sede_horizonte_verde_1795545559812.jpg',
  legacyLondon: '/src/assets/images/legacy_1916_london_1795545559582.jpg',
  legacyMagnetic: '/src/assets/images/legacy_1975_magnetic_1795545560402.jpg',
  legacyModern: '/src/assets/images/legacy_modern_critical_1795545560808.jpg',
} as const;

export const INSTITUTIONAL = {
  name: 'Avaka Corporation',
  foundedYear: 1916,
  originCity: 'Whitechapel, Londres, Inglaterra',
  brazilArrivalYear: 1951,
  hqCity: 'São Paulo, Brasil',
  currentLeader: 'Guilherme Lica VII',
  sloganPrimary: 'Há mais de um século, protegendo o que importa.',
  sloganAlternative: 'Há mais de cem anos, guardamos o que importa.',
  synthesis: 'Da custódia de objetos à proteção do mundo digital.',
  promise: 'Alguém confiou, e nós não vamos falhar.',
  educationalNotice:
    'A Avaka Corporation é uma empresa fictícia criada para fins educacionais e conceituais. História, personagens, instalações, indicadores, relatórios e canais de contato são elementos demonstrativos e não representam fatos, empresas ou operações reais.',
  mission:
    'Proteger ativos digitais de empresas e instituições por meio de tecnologia, discrição e responsabilidade, preservando a confiança construída desde 1916.',
  vision:
    'Ser referência em cibersegurança na América Latina, reconhecida pela excelência na proteção de infraestruturas críticas em terra, no ar e no mar.',
  values: [
    {
      title: 'Confiança',
      description:
        'A relação de custódia começa quando alguém entrega o que tem de mais sensível sob nossa guarda.',
    },
    {
      title: 'Discrição',
      description:
        'Atuação silenciosa, rigor operacional e respeito absoluto ao sigilo das informações protegidas.',
    },
    {
      title: 'Legado',
      description:
        'Continuidade de princípios transmitidos por sete gerações desde os registros manuscritos do caderno preto.',
    },
    {
      title: 'Responsabilidade',
      description:
        'Precisão técnica diante de sistemas corporativos, aeronáuticos, marítimos e estruturas de dados.',
    },
    {
      title: 'Evolução Contínua',
      description:
        'Adaptação constante da custódia física ao armazenamento magnético, nuvem e defesa cibernética.',
    },
    {
      title: 'Humanidade',
      description:
        'Por trás de cada rede, servidor ou coordenada de navegação existem pessoas que dependem de segurança real.',
    },
  ],
};

export interface GenerationChapter {
  index: string;
  generation: string;
  period: string;
  location: string;
  leader: string;
  title: string;
  summary: string;
  narrative: string[];
  notebookRole: string;
  quote?: string;
  sourceNote?: string;
  image?: string;
  imageCaption: string;
  shaderPreset: LandscapePreset;
}

export const SEVEN_GENERATIONS: GenerationChapter[] = [
  {
    index: '01',
    generation: 'Primeira Geração',
    period: '1916',
    location: 'Whitechapel, Londres — Reino Unido',
    leader: 'Guilherme Lica I',
    title: 'A Bancada do Relojoeiro e o Caderno Preto',
    summary:
      'Fundação em Whitechapel durante a Primeira Guerra Mundial, iniciando a custódia de pertences pessoais e memórias familiares.',
    narrative: [
      'Em 1916, no bairro de Whitechapel, em Londres, o relojoeiro Guilherme Lica I passou a guardar objetos de famílias cujos entes queridos partiam para a guerra: alianças, cartas lacradas, medalhas, retratos e até um violino confiado antes do embarque.',
      'Cada item e o nome de seu proprietário eram anotados à mão em um caderno preto de capa gasta. O nome Avaka nasceu inspirado em uma palavra sussurrada por sua avó, cujo significado exato jamais foi revelado por ele.',
    ],
    notebookRole:
      'Abertura do primeiro caderno preto como inventário de honra entre proprietário e guardião.',
    quote: 'Aquilo que não pode ser perdido exige mais do que uma fechadura: exige palavra.',
    image: ASSETS.legacyLondon,
    imageCaption: 'Ilustração temática conceitual — Bancada de relojoaria e caderno preto (Whitechapel, 1916).',
    shaderPreset: 'amber-vault',
  },
  {
    index: '02',
    generation: 'Segunda Geração',
    period: '1930–1945 / 1957',
    location: 'Londres — Reino Unido',
    leader: 'Guilherme Lica II',
    title: 'Da Gaveta ao Cofre Durante a Depressão e a Blitz',
    summary:
      'Consolidação da estrutura física de custódia e travessia dos bombardeios de 1940 sem perder um único registro.',
    narrative: [
      'Guilherme Lica II transformou a antiga oficina em um cofre reforçado e, posteriormente, em uma casa dedicada à custódia. Durante a Grande Depressão, devolveu pertences sem cobrança a famílias em extrema dificuldade financeira.',
      'Em 1940, durante a Blitz sobre Londres, manteve a integridade do acervo confiado mesmo sob bombardeios sucessivos. Os registros indicam seu falecimento em 1957.',
    ],
    notebookRole:
      'Atualização das folhas de devolução sem ônus e proteção física do caderno no subsolo reforçado.',
    sourceNote:
      'Nota editorial preservada: as fontes registram o intervalo de liderança como 1930–1945 ou 1930–1957, mantendo-se ambas as referências até consolidação definitiva.',
    imageCaption: 'Simulação visual generativa — Câmaras reforçadas e geometria de contenção (1930–1957).',
    shaderPreset: 'obsidian-matrix',
  },
  {
    index: '03',
    generation: 'Terceira Geração',
    period: '1946–1974',
    location: 'Londres → Porto de Santos, Brasil',
    leader: 'Guilherme Lica III',
    title: 'A Travessia Atlântica e as Raízes Brasileiras',
    summary:
      'Mudança para o Brasil em 1951 e abertura do escritório de custódia portuária em Santos.',
    narrative: [
      'Após perder a esposa durante o parto, Guilherme Lica III embarcou para o Brasil em 1951 levando a família e o caderno preto. Em Santos, no litoral paulista, abriu um escritório voltado à custódia documental e patrimonial de comerciantes e exportadores.',
      'A mudança estabeleceu a ponte definitiva entre a tradição britânica de confiabilidade e a operação brasileira que moldaria os rumos da Avaka até 1974, ano de seu falecimento.',
    ],
    notebookRole:
      'Travessia marítima como símbolo de continuidade e início dos registros comerciais no litoral paulista.',
    imageCaption: 'Simulação visual generativa — Rotas atlânticas e topografia portuária de Santos (1951).',
    shaderPreset: 'maritime-sonar',
  },
  {
    index: '04',
    generation: 'Quarta Geração',
    period: '1975–1992',
    location: 'Mooca, São Paulo — Brasil',
    leader: 'Guilherme Lica IV',
    title: 'A Era Magnética no Galpão da Mooca',
    summary:
      'Transição dos documentos em papel para fitas magnéticas, discos e estruturas iniciais de data center.',
    narrative: [
      'Guilherme Lica IV percebeu antes do mercado local que os ativos mais valiosos das empresas estavam migrando do papel para suportes magnéticos. Em um galpão adaptado na Mooca, em São Paulo, ergueu câmaras com geradores próprios e controle físico para fitas, discos e arquivos corporativos.',
      'Afastou-se posteriormente por questões de saúde, deixando consolidada a passagem da custódia material para a guarda da informação.',
    ],
    notebookRole:
      'O caderno deixa de listar apenas objetos físicos e passa a catalogar acervos magnéticos corporativos.',
    quote: 'Antes guardávamos o que as pessoas tinham. Agora guardamos o que as pessoas são.',
    image: ASSETS.legacyMagnetic,
    imageCaption: 'Ilustração temática conceitual — Galpão na Mooca e acervos em fita magnética (1975–1992).',
    shaderPreset: 'emerald-ridge',
  },
  {
    index: '05',
    generation: 'Quinta Geração',
    period: '1993–2008',
    location: 'São Paulo — Brasil',
    leader: 'Guilherme Lica V',
    title: 'O Ponto de Inflexão de 1998 e a Cibersegurança',
    summary:
      'Após um ataque sofrido por um grande cliente em 1998, a Avaka estrutura times de defesa e resposta a incidentes.',
    narrative: [
      'Com a expansão das redes corporativas e da internet na década de 1990, Guilherme Lica V identificou novas formas de invasão e furto digital. Em 1998, um ataque severo contra um grande cliente transformou definitivamente a vocação da empresa.',
      'A Avaka contratou analistas especializados, estruturou protocolos formais de resposta a incidentes e converteu sua experiência de custódia em cibersegurança ativa. Em 2008, aos 61 anos, transferiu a liderança e o caderno preto à filha.',
    ],
    notebookRole:
      'Transição geracional em 2008: a guarda da promessa passa às mãos da sexta geração.',
    imageCaption: 'Simulação visual generativa — Topologia de redes e contenção de intrusões (1998–2008).',
    shaderPreset: 'emerald-ridge',
  },
  {
    index: '06',
    generation: 'Sexta Geração',
    period: '2009–2021',
    location: 'Operações Integradas — Brasil e Rotas Globais',
    leader: 'Guilherme Lica VI',
    title: 'Nuvem, Aviação e Segurança Marítima',
    summary:
      'Liderança feminina preservando o nome Guilherme por tradição familiar; expansão para nuvem e infraestruturas críticas aéreas e navais.',
    narrative: [
      'Sexta geração da linhagem, uma mulher que manteve o nome Guilherme por tradição familiar conduziu a Avaka na era da computação em nuvem e dos ambientes altamente conectados.',
      'Sob sua direção, a empresa ampliou a proteção para sistemas aeronáuticos, torres de comunicação, aeroportos, portos e navegação marítima de cargas. Em 2021, transferiu o comando ao sobrinho.',
    ],
    notebookRole:
      'Registro das primeiras arquiteturas críticas conectadas em terra, no ar e no mar.',
    sourceNote:
      'Nota editorial preservada: a narrativa consolidada mantém a especificação de que Guilherme Lica VI é uma mulher que conserva o nome familiar por tradição.',
    imageCaption: 'Simulação visual generativa — Vetores aeronáuticos e corredores marítimos (2009–2021).',
    shaderPreset: 'aviation-vector',
  },
  {
    index: '07',
    generation: 'Sétima Geração',
    period: '2021–Atualidade',
    location: 'São Paulo — Atuação Internacional Conceitual',
    leader: 'Guilherme Lica VII',
    title: 'Infraestruturas Críticas e Compromisso Centenário',
    summary:
      'Liderança contemporânea da narrativa, unindo proteção corporativa, data centers, aeroportos, portos e operação SOC contínua.',
    narrative: [
      'Ao assumir a presidência em 2021, Guilherme Lica VII abriu novamente o antigo caderno preto de 1916 para reafirmar que a tecnologia muda de escala, mas a natureza da responsabilidade permanece idêntica.',
      'Hoje, dentro do universo conceitual da Avaka Corporation, sua atuação conecta inteligência de ameaças, monitoramento contínuo SOC, infraestrutura de dados e defesa para sistemas aeronáuticos e marítimos.',
    ],
    notebookRole:
      'O caderno preto permanece preservado como símbolo vivo da promessa originada em Whitechapel.',
    quote: 'Alguém confiou, e nós não vamos falhar.',
    image: ASSETS.legacyModern,
    imageCaption: 'Ilustração temática conceitual — Centro de operações críticas aéreas e marítimas.',
    shaderPreset: 'aviation-vector',
  },
];

export interface SolutionDetail {
  path: RoutePath;
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  heroSummary: string;
  shaderPreset: LandscapePreset;
  capabilities: { title: string; detail: string }[];
  architectureLayers: { step: string; label: string; summary: string }[];
  audience: string[];
  deliverables: string[];
}

export const SOLUTIONS_DATA: Record<string, SolutionDetail> = {
  'cybersecurity-corporativa': {
    path: '/solucoes/cybersecurity-corporativa',
    slug: 'cybersecurity-corporativa',
    category: 'Defesa Corporativa',
    title: 'Cybersecurity Corporativa',
    subtitle: 'Proteção estrutural para redes, endpoints, identidades e aplicações empresariais.',
    heroSummary:
      'Desenhada para organizações que exigem blindagem contínua da superfície de ataque sem comprometer o ritmo operacional.',
    shaderPreset: 'emerald-ridge',
    capabilities: [
      {
        title: 'Proteção de Redes e Segmentação',
        detail:
          'Arquitetura de perímetro, inspeção de tráfego e isolamento lateral para conter movimentações não autorizadas.',
      },
      {
        title: 'Testes de Intrusão (Pentest)',
        detail:
          'Avaliações ofensivas controladas sobre aplicações web, APIs e redes internas para identificar falhas antes da exploração.',
      },
      {
        title: 'Gestão Contínua de Vulnerabilidades',
        detail:
          'Inventário de ativos, priorização por criticidade técnica e plano estruturado de remediação.',
      },
      {
        title: 'Proteção de Endpoints e Acessos',
        detail:
          'Endurecimento de estações, controle de privilégios e fortalecimento de autenticação corporativa.',
      },
      {
        title: 'Consultoria de Conformidade e Governança',
        detail:
          'Alinhamento conceitual a frameworks internacionais como ISO 27001, NIST Cybersecurity Framework e diretrizes da LGPD.',
      },
      {
        title: 'Treinamento e Conscientização',
        detail:
          'Capacitação prática de equipes administrativas e técnicas contra phishing e engenharia social.',
      },
    ],
    architectureLayers: [
      { step: '01', label: 'Mapeamento de Superfície', summary: 'Inventário de domínios, redes e identidades expostas.' },
      { step: '02', label: 'Hardening e Controle', summary: 'Segmentação de acessos e redução de privilégios.' },
      { step: '03', label: 'Validação Ofensiva', summary: 'Simulações controladas para testar defesas reais.' },
      { step: '04', label: 'Vigilância Contínua', summary: 'Integração direta com telemetria e alertas do Avaka SOC.' },
    ],
    audience: [
      'Organizações corporativas com múltiplas unidades e trabalho remoto.',
      'Equipes de tecnologia em expansão de nuvem e sistemas internos.',
      'Instituições que tratam dados sensíveis e exigem governança formal.',
    ],
    deliverables: [
      'Matriz priorizada de riscos e vulnerabilidades',
      'Relatórios executivos e técnicos de testes de intrusão',
      'Plano de adequação a controles de segurança e acesso',
      'Treinamento orientado contra fraude e engenharia social',
    ],
  },
  'aviation-security': {
    path: '/solucoes/aviation-security',
    slug: 'aviation-security',
    category: 'Infraestrutura Crítica Aérea',
    title: 'Aviation Security',
    subtitle: 'Resiliência digital para aeroportos, operações aéreas, telemetria e comunicações.',
    heroSummary:
      'Proteção concebida para ambientes aeroportuários e sistemas aeronáuticos onde disponibilidade, integridade e coordenação de torre são vitais.',
    shaderPreset: 'aviation-vector',
    capabilities: [
      {
        title: 'Sistemas Aeroportuários Integrados',
        detail:
          'Isolamento entre redes administrativas, terminais de passageiros, controle de acesso físico e redes operacionais.',
      },
      {
        title: 'Proteção de Navegação e Comunicações',
        detail:
          'Monitoramento de integridade para canais entre solo, controle de tráfego e sistemas de suporte de voo.',
      },
      {
        title: 'Segurança de Operações de Solo e Cargas',
        detail:
          'Proteção de fluxos logísticos, rastreamento de bagagens, despacho e sistemas de abastecimento.',
      },
      {
        title: 'Plano de Continuidade Aeronáutica',
        detail:
          'Procedimentos estruturados de contingência para mitigar indisponibilidades em janelas críticas.',
      },
    ],
    architectureLayers: [
      { step: '01', label: 'Segregação OT / IT', summary: 'Separação estrita entre malha corporativa e sistemas operacionais.' },
      { step: '02', label: 'Integridade de Telemetria', summary: 'Validação contínua de links entre torres e sistemas de solo.' },
      { step: '03', label: 'Detecção de Anomalias', summary: 'Monitoramento dedicado a desvios de tráfego e acesso remoto.' },
      { step: '04', label: 'Contingência Operacional', summary: 'Protocolos de isolamento rápido sem paralisar rotas seguras.' },
    ],
    audience: [
      'Infraestruturas aeroportuárias e terminais de alta criticidade.',
      'Operadoras aéreas e centros de despacho operacional.',
      'Sistemas de logística aérea e manutenção técnica.',
    ],
    deliverables: [
      'Mapeamento de dependências entre sistemas de solo e TI',
      'Arquitetura de segmentação para ambientes aeroportuários',
      'Simulados conceituais de resposta a incidentes aeronáuticos',
      'Recomendações de continuidade alinhadas à ISO 22301',
    ],
  },
  'maritime-security': {
    path: '/solucoes/maritime-security',
    slug: 'maritime-security',
    category: 'Infraestrutura Crítica Naval',
    title: 'Maritime Security',
    subtitle: 'Defesa cibernética para portos, embarcações, sistemas de carga e rotas oceânicas.',
    heroSummary:
      'Inspirada pela história da Avaka no Porto de Santos desde 1951, esta divisão protege terminais portuários e ativos navais conectados.',
    shaderPreset: 'maritime-sonar',
    capabilities: [
      {
        title: 'Proteção de Infraestrutura Portuária',
        detail:
          'Segurança para terminais automatizados, controle de pátios, guindastes conectados e sistemas alfandegários.',
      },
      {
        title: 'Sistemas de Navegação e Embarcações',
        detail:
          'Endurecimento de redes embarcadas, separação de comunicações via satélite e proteção de instrumentação.',
      },
      {
        title: 'Segurança de Cargas e Cadeia Logística',
        detail:
          'Integridade de manifestos digitais, rastreamento de contêineres e proteção contra fraudes operacionais.',
      },
      {
        title: 'Comunicações Navio-Terra',
        detail:
          'Criptografia e autenticação rigorosa nas trocas entre embarcações, capitania e centros de controle.',
      },
    ],
    architectureLayers: [
      { step: '01', label: 'Inventário Portuário', summary: 'Mapeamento de ativos portuários, OT e interfaces logísticas.' },
      { step: '02', label: 'Blindagem Embarcada', summary: 'Contenção de mídia removível e acessos de manutenção a bordo.' },
      { step: '03', label: 'Vigilância de Links', summary: 'Monitoramento de comunicações marítimas e telemetria de carga.' },
      { step: '04', label: 'Recuperação Portuária', summary: 'Planos de retomada coordenada em caso de incidente.' },
    ],
    audience: [
      'Terminais portuários e operadores de infraestrutura marítima.',
      'Frotas comerciais e sistemas de logística oceânica.',
      'Centros de coordenação naval e despacho de cargas.',
    ],
    deliverables: [
      'Diagnóstico de riscos em ambientes portuários e embarcados',
      'Diretrizes de segmentação para redes de ponte e carga',
      'Protocolos de resposta e contingência para terminais',
      'Capacitação de tripulações e equipes portuárias',
    ],
  },
  'data-infrastructure': {
    path: '/solucoes/data-infrastructure',
    slug: 'data-infrastructure',
    category: 'Custódia & Dados',
    title: 'Data Infrastructure',
    subtitle: 'Custódia digital, criptografia de ponta, redundância e recuperação de desastres.',
    heroSummary:
      'A evolução direta da custódia inaugurada em 1916: garantir que dados essenciais permaneçam íntegros, cifrados e recuperáveis sob qualquer cenário.',
    shaderPreset: 'amber-vault',
    capabilities: [
      {
        title: 'Backup Imutável e Redundância Geográfica',
        detail:
          'Cópias isoladas contra alteração maliciosa e replicação distribuída para continuidade empresarial.',
      },
      {
        title: 'Criptografia em Repouso e Trânsito',
        detail:
          'Proteção criptográfica de acervos corporativos, bancos de dados e canais de transferência.',
      },
      {
        title: 'Recuperação de Desastres (DR)',
        detail:
          'Planos testados de restauração com prioridades claras para sistemas críticos de negócio.',
      },
      {
        title: 'Arquitetura de Data Centers e Servidores',
        detail:
          'Planejamento de alta disponibilidade inspirado na engenharia conceitual do Complexo Serra de Âmbar.',
      },
    ],
    architectureLayers: [
      { step: '01', label: 'Classificação de Acervos', summary: 'Definição de criticidade e janelas de retenção.' },
      { step: '02', label: 'Cifragem e Custódia', summary: 'Proteção criptográfica e segregação de chaves.' },
      { step: '03', label: 'Replicação Isolada', summary: 'Camadas imutáveis protegidas contra ransomware.' },
      { step: '04', label: 'Testes de Restauração', summary: 'Exercícios periódicos para validar integridade real.' },
    ],
    audience: [
      'Empresas dependentes de grandes volumes de registros críticos.',
      'Instituições com requisitos rígidos de continuidade e histórico.',
      'Ambientes híbridos entre infraestrutura local e nuvem.',
    ],
    deliverables: [
      'Arquitetura de custódia e backup resiliente',
      'Políticas de criptografia e controle de chaves',
      'Plano documentado de recuperação de desastres',
      'Roteiro de testes recorrentes de integridade',
    ],
  },
  'incident-response-soc': {
    path: '/solucoes/incident-response-soc',
    slug: 'incident-response-soc',
    category: 'Vigilância 24h',
    title: 'Incident Response & SOC',
    subtitle: 'Centro de Operações de Segurança contínuo, triagem, contenção e perícia digital.',
    heroSummary:
      'Núcleo ativo de detecção e resposta da Avaka Corporation para identificar comportamentos anômalos, conter intrusões e preservar evidências.',
    shaderPreset: 'obsidian-matrix',
    capabilities: [
      {
        title: 'Monitoramento 24 Horas no Avaka SOC',
        detail:
          'Correlação contínua de eventos em redes, servidores, identidade e endpoints críticos.',
      },
      {
        title: 'Triagem e Investigação Técnica',
        detail:
          'Separação rápida entre ruído operacional e sinais reais de comprometimento ou movimentação lateral.',
      },
      {
        title: 'Contenção e Erradicação de Incidentes',
        detail:
          'Isolamento coordenado de ativos comprometidos para limitar impacto e restaurar a operação segura.',
      },
      {
        title: 'Forense e Perícia Digital',
        detail:
          'Coleta estruturada de evidências, reconstrução da linha do tempo de ataque e relatório pós-incidente.',
      },
    ],
    architectureLayers: [
      { step: '01', label: 'Ingestão de Telemetria', summary: 'Coleta unificada de logs de rede, nuvem e endpoints.' },
      { step: '02', label: 'Correlação e Triagem', summary: 'Análise contextual por analistas e regras de inteligência.' },
      { step: '03', label: 'Contenção Imediata', summary: 'Bloqueio de vetores e isolamento de contas ou hosts.' },
      { step: '04', label: 'Perícia e Lições', summary: 'Causa raiz documentada e reforço preventivo.' },
    ],
    audience: [
      'Empresas que necessitam vigilância contínua fora do horário comercial.',
      'Infraestruturas críticas com baixa tolerância à interrupção.',
      'Equipes internas que buscam apoio especializado em crise cibernética.',
    ],
    deliverables: [
      'Playbooks de resposta e escalonamento de incidentes',
      'Relatórios de triagem e análise forense digital',
      'Canais coordenados de comunicação em crises',
      'Revisão pós-incidente para prevenção de recorrência',
    ],
  },
};

export const OPERATIONAL_DIVISIONS = [
  { name: 'Diretoria Executiva', role: 'Estratégia institucional, legado e governança global.' },
  { name: 'Engenharia e Desenvolvimento', role: 'Sistemas proprietários, arquitetura de software e automação defensiva.' },
  { name: 'Segurança Ofensiva', role: 'Testes de intrusão controlados, simulações adversárias e análise de falhas.' },
  { name: 'Segurança Defensiva', role: 'Hardening, arquitetura de proteção e controles preventivos.' },
  { name: 'SOC — Centro de Operações', role: 'Monitoramento contínuo, triagem de alertas e resposta coordenada.' },
  { name: 'Pesquisa e Desenvolvimento', role: 'Estudo de novas ameaças, criptografia e resiliência crítica.' },
  { name: 'Infraestrutura', role: 'Servidores, redes, data centers conceituais e continuidade elétrica.' },
  { name: 'Inteligência de Ameaças', role: 'Análise de riscos emergentes, campanhas e vulnerabilidades.' },
  { name: 'Atendimento e Suporte', role: 'Relacionamento técnico e acompanhamento contínuo de clientes.' },
  { name: 'Comercial', role: 'Estruturação de escopos institucionais e parcerias estratégicas.' },
];

export const REFERENCE_NORMS = [
  {
    code: 'ISO/IEC 27001',
    scope: 'Gestão de Segurança da Informação',
    note: 'Referência metodológica para governança, controle de riscos e confidencialidade. Não representa certificação auditada concedida à Avaka.',
  },
  {
    code: 'NIST Cybersecurity Framework',
    scope: 'Identificar, Proteger, Detectar, Responder e Recuperar',
    note: 'Base conceitual utilizada na estruturação das camadas de defesa e resposta apresentadas no projeto.',
  },
  {
    code: 'LGPD (Lei 13.709/2018)',
    scope: 'Proteção de Dados Pessoais no Brasil',
    note: 'Referência jurídica e operacional considerada na abordagem de privacidade e custódia de informações.',
  },
  {
    code: 'ISO 22301',
    scope: 'Continuidade de Negócios',
    note: 'Referência de resiliência aplicada conceitualmente a infraestruturas críticas e recuperação de desastres.',
  },
];

export const THREAT_LIBRARY = [
  {
    id: 'phishing',
    name: 'Phishing',
    vector: 'Engenharia de Mensagens',
    concept:
      'Tentativa de enganar usuários por meio de e-mails, mensagens ou páginas falsas que imitam instituições confiáveis para capturar credenciais ou induzir cliques maliciosos.',
    riskExample:
      'Colaborador recebe aviso urgente de bloqueio corporativo e insere senha e código em página fraudulenta.',
    prevention: [
      'Verificar cuidadosamente o domínio real do remetente.',
      'Utilizar autenticação multifator resistente a phishing.',
      'Confirmar solicitações urgentes por um segundo canal independente.',
    ],
  },
  {
    id: 'malware',
    name: 'Malware',
    vector: 'Software Malicioso',
    concept:
      'Termo abrangente para programas projetados para infiltrar, danificar, espionar ou obter controle indevido sobre dispositivos e servidores.',
    riskExample:
      'Execução de anexo disfarçado de documento administrativo que instala acesso remoto persistente na estação.',
    prevention: [
      'Manter sistemas operacionais e aplicações rigorosamente atualizados.',
      'Restringir privilégios administrativos em estações de uso diário.',
      'Adotar proteção de endpoints e controle de execução.',
    ],
  },
  {
    id: 'ransomware',
    name: 'Ransomware',
    vector: 'Sequestro Criptográfico',
    concept:
      'Tipo de malware que criptografa arquivos e sistemas críticos, interrompendo operações e exigindo pagamento sob ameaça de indisponibilidade ou exposição.',
    riskExample:
      'Comprometimento de credencial de acesso remoto seguido de propagação lateral e paralisação de servidores.',
    prevention: [
      'Manter backups imutáveis e desconectados da rede principal.',
      'Segmentar redes críticas para impedir propagação lateral.',
      'Monitorar comportamentos anômalos de leitura e cifragem em massa.',
    ],
  },
  {
    id: 'engenharia-social',
    name: 'Engenharia Social',
    vector: 'Manipulação Humana',
    concept:
      'Exploração de confiança, urgência, autoridade ou curiosidade humana para obter acessos, transferências ou informações restritas sem quebrar sistemas diretamente.',
    riskExample:
      'Ligação fraudulenta simulando suporte técnico interno para solicitar código de verificação de acesso.',
    prevention: [
      'Estabelecer cultura organizacional que valide pedidos excepcionais.',
      'Nunca compartilhar códigos temporários ou senhas com terceiros.',
      'Realizar treinamentos contínuos com cenários práticos.',
    ],
  },
  {
    id: 'forca-bruta',
    name: 'Força Bruta e Credential Stuffing',
    vector: 'Quebra de Autenticação',
    concept:
      'Tentativas automatizadas e repetidas de adivinhar senhas ou reutilizar credenciais vazadas em outros serviços para invadir contas corporativas.',
    riskExample:
      'Uso de listas públicas de vazamentos para testar combinações de e-mail e senha em portais corporativos.',
    prevention: [
      'Exigir senhas longas, únicas e gerenciadas por cofre seguro.',
      'Ativar autenticação multifator em todos os acessos externos.',
      'Aplicar bloqueios progressivos e monitoramento de falhas de login.',
    ],
  },
  {
    id: 'vazamento-dados',
    name: 'Vazamento de Dados',
    vector: 'Exfiltração e Exposição',
    concept:
      'Exposição não autorizada de informações confidenciais por falha de configuração, acesso indevido ou extração maliciosa.',
    riskExample:
      'Repositório em nuvem deixado com permissão pública expondo registros internos de clientes e contratos.',
    prevention: [
      'Aplicar princípio do menor privilégio em pastas e repositórios.',
      'Criptografar dados sensíveis em repouso e em trânsito.',
      'Auditar permissões e monitorar transferências atípicas.',
    ],
  },
];

export const CIA_TRIAD = [
  {
    letter: 'C',
    title: 'Confidencialidade',
    summary: 'Garantir que somente pessoas, sistemas e processos devidamente autorizados acessem a informação.',
    measures: 'Criptografia, controle de acesso baseado em função, autenticação multifator.',
  },
  {
    letter: 'I',
    title: 'Integridade',
    summary: 'Assegurar que os dados permaneçam exatos, completos e livres de alterações indevidas ao longo do tempo.',
    measures: 'Assinaturas digitais, trilhas de auditoria, controle de alterações e hashes criptográficos.',
  },
  {
    letter: 'A',
    title: 'Disponibilidade',
    summary: 'Manter sistemas, redes e informações acessíveis e operacionais sempre que forem legitimamente necessários.',
    measures: 'Redundância elétrica e de rede, backups isolados, mitigação de indisponibilidade e recuperação de desastres.',
  },
];

export const GLOSSARY_ITEMS = [
  {
    term: 'SOC (Security Operations Center)',
    definition:
      'Centro dedicado ao monitoramento contínuo de eventos de segurança, triagem de alertas, investigação e coordenação de resposta a incidentes.',
  },
  {
    term: 'Pentest (Teste de Intrusão)',
    definition:
      'Avaliação técnica autorizada e controlada que simula técnicas de ataque para identificar vulnerabilidades exploráveis antes de invasores reais.',
  },
  {
    term: 'Autenticação Multifator (MFA)',
    definition:
      'Mecanismo que exige dois ou mais fatores independentes de verificação (algo que você sabe, possui ou é) para confirmar uma identidade.',
  },
  {
    term: 'Segmentação de Rede (OT / IT)',
    definition:
      'Separação lógica e física entre redes administrativas corporativas (IT) e redes operacionais industriais, portuárias ou aeroportuárias (OT).',
  },
  {
    term: 'Recuperação de Desastres (DR)',
    definition:
      'Conjunto de procedimentos e infraestruturas de contingência para retomar sistemas críticos após falhas graves ou ataques cibernéticos.',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'A Avaka Corporation é uma empresa real?',
    answer:
      'Não. A Avaka Corporation é uma organização fictícia criada para um projeto educacional e conceitual. Sua história de sete gerações, instalações, indicadores simulados e canais de contato (.example) integram o universo narrativo do projeto.',
  },
  {
    question: 'Por que uma empresa de cibersegurança tem origem em 1916?',
    answer:
      'Na narrativa institucional, a Avaka nasceu em Whitechapel, Londres, em 1916, realizando a custódia física de objetos familiares e registros em um caderno preto. Ao longo das gerações, evoluiu para o armazenamento magnético na Mooca (anos 1970) e, após um incidente em 1998, consolidou-se na defesa cibernética.',
  },
  {
    question: 'As certificações ISO 27001, NIST e ISO 22301 citadas no site foram obtidas pela empresa?',
    answer:
      'Não. Elas são apresentadas estritamente como normas e frameworks de referência técnica e educacional utilizados para estruturar o posicionamento conceitual do projeto, não como certificações auditadas.',
  },
  {
    question: 'Os relatórios e métricas exibidos no Centro de Operações SOC são dados reais?',
    answer:
      'Não. Todos os gráficos, contadores, publicações e fluxos exibidos nas páginas de SOC e Intelligence são simulações demonstrativas rotuladas explicitamente para fins de visualização.',
  },
  {
    question: 'O website possui planos comerciais ou contratação direta?',
    answer:
      'Não. Tabelas comerciais, planos, assinaturas e valores foram deliberadamente excluídos do projeto. O foco é exclusivamente institucional, técnico e conceitual.',
  },
];

export const SIMULATED_REPORTS = [
  {
    id: 'REL-SIM-01',
    category: 'Infraestrutura Portuária',
    title: 'Superfície de Risco em Terminais Portuários Conectados',
    tag: 'SIMULAÇÃO CONCEITUAL',
    date: 'Cenário Demonstrativo · Ciclo Q4',
    summary:
      'Estudo conceitual sobre pontos de acoplamento entre sistemas administrativos de pátio, controle de guindastes e interfaces aduaneiras.',
    highlights: [
      'Separação recomendada entre rede de operação de cais e malha corporativa.',
      'Controle rigoroso de acessos remotos de manutenção por terceiros.',
      'Planos de contingência manual para despacho prioritário de cargas.',
    ],
  },
  {
    id: 'REL-SIM-02',
    category: 'Setor Aeronáutico',
    title: 'Integridade de Telemetria Solo-Torre em Ambientes Aeroportuários',
    tag: 'SIMULAÇÃO CONCEITUAL',
    date: 'Cenário Demonstrativo · Ciclo Q3',
    summary:
      'Análise demonstrativa de resiliência em fluxos de coordenação aeroportuária, despacho operacional e comunicações auxiliares.',
    highlights: [
      'Validação criptográfica de mensagens operacionais entre subsistemas.',
      'Redundância geográfica de enlaces e detecção de anomalias em tempo real.',
      'Exercícios periódicos de resposta conjunta entre TI e operações de solo.',
    ],
  },
  {
    id: 'REL-SIM-03',
    category: 'Segurança Corporativa',
    title: 'Evolução de Vetores de Engenharia Social e Sequestro de Sessão',
    tag: 'SIMULAÇÃO CONCEITUAL',
    date: 'Cenário Demonstrativo · Ciclo Q2',
    summary:
      'Revisão educativa sobre como campanhas sofisticadas combinam engenharia social com captura de tokens de autenticação.',
    highlights: [
      'Adoção de fatores criptográficos resistentes a páginas intermediárias.',
      'Monitoramento de anomalias geográficas e revogação imediata de sessões.',
      'Treinamento contínuo orientado a cenários reais de verificação.',
    ],
  },
  {
    id: 'REL-SIM-04',
    category: 'Custódia & Dados',
    title: 'Arquitetura de Imutabilidade para Proteção contra Ransomware',
    tag: 'SIMULAÇÃO CONCEITUAL',
    date: 'Cenário Demonstrativo · Ciclo Q1',
    summary:
      'Modelo conceitual de isolamento de cópias de segurança inspirado em câmaras segregadas e validação recorrente de restauração.',
    highlights: [
      'Separação de credenciais administrativas entre produção e custódia de backup.',
      'Snapshots imutáveis com bloqueio temporal contra exclusão antecipada.',
      'Simulados trimestrais de recuperação integral de sistemas críticos.',
    ],
  },
];

export const DOCTRINE_QUOTES = [
  {
    quote: 'Antes guardávamos o que as pessoas tinham. Agora guardamos o que as pessoas são.',
    author: 'Guilherme Lica IV',
    context: 'Transição para o armazenamento magnético na Mooca · 1975–1992',
  },
  {
    quote: 'Alguém confiou, e nós não vamos falhar.',
    author: 'Tradição do Caderno Preto',
    context: 'Promessa originada em Whitechapel (1916) e preservada por Guilherme Lica VII',
  },
  {
    quote: 'Discrição absoluta não é silêncio por ausência — é controle rigoroso sobre cada sinal que importa.',
    author: 'Doutrina Avaka SOC',
    context: 'Diretriz conceitual de operações defensivas contínuas',
  },
];

export const DEMO_CONTACTS = {
  email: 'contato@avakacorp.example',
  phone: '+55 (11) 0000-1916',
  website: 'www.avakacorp.example',
  instagram: '@avaka.corporation',
  sede: 'Distrito Empresarial Horizonte Verde — São Paulo, SP, Brasil (Localização Fictícia)',
  complexo: 'Complexo Tecnológico Serra de Âmbar — Santa Aurora do Vale, SP, Brasil (Localização Fictícia)',
};
