# PROMPT PRINCIPAL — AVAKA CORPORATION

Crie o design completo de um site institucional, moderno e responsivo para a **Avaka Corporation**, uma empresa fictícia de cibersegurança. O site será apresentado como trabalho educacional. A empresa, sua história, seus endereços, contatos, estrutura, clientes, números, relatórios e preços são fictícios e devem ser identificados como demonstração quando isso for relevante. Não invente certificações reais, clientes reais, contratos reais ou resultados comprovados.

## 1. Identidade visual e direção de arte

Use a logo fornecida na pasta `assets/avaka-logo.png`. Ela deve aparecer no cabeçalho, rodapé, página institucional e demais locais adequados. Use `assets/avaka-favicon.png` como favicon do navegador. Não redesenhe, distorça ou substitua a logo.

Direção visual: cibersegurança premium, corporativa, tecnológica e futurista, com estética cyberpunk controlada. O resultado deve parecer o site de uma empresa internacional de segurança digital, e não um template genérico ou uma página escolar simples.

Paleta obrigatória: preto profundo e verde neon. O vermelho da logo deve ser preservado como cor de identidade da marca e usado em detalhes pontuais, ícones, pequenos indicadores e chamadas visuais. Não substituir a paleta por roxo, azul ou gradientes coloridos. Fundo predominantemente preto, superfícies escuras, linhas finas, grades técnicas discretas, brilho verde contido e detalhes vermelhos da marca. Evitar excesso de efeitos, excesso de neon e aparência poluída.

Use bordas retas e cantos quadrados; o raio padrão é 0. Layout com bastante espaço, hierarquia visual clara, cards bem organizados, microinterações suaves e responsividade real para desktop, tablet e celular.

### Tokens CSS obrigatórios

Preserve estes valores exatos como base do tema:

```css
:root {
  --card: #050505;
  --ring: #00FF41;
  --input: #000000;
  --muted: #001A00;
  --accent: #00FF41;
  --border: #003B00;
  --radius: 0rem;
  --chart-1: #00FF41;
  --chart-2: #008F11;
  --chart-3: #003B00;
  --chart-4: #0D0208;
  --chart-5: #00FF41;
  --popover: #000000;
  --primary: #00FF41;
  --sidebar: #050505;
  --spacing: 0.25rem;
  --font-mono: "VT323", monospace;
  --font-sans: "VT323", "Courier New", monospace;
  --font-serif: Georgia, serif;
  --secondary: #003B00;
  --background: #000000;
  --foreground: #00FF41;
  --destructive: #FF0000;
  --shadow-blur: 10px;
  --shadow-color: #00FF41;
  --shadow-spread: 1px;
  --letter-spacing: 0.1em;
  --shadow-opacity: 0.2;
  --sidebar-accent: #003B00;
  --sidebar-border: #003B00;
  --card-foreground: #00FF41;
  --sidebar-primary: #00FF41;
  --muted-foreground: #008F11;
  --accent-foreground: #000000;
  --popover-foreground: #00FF41;
  --primary-foreground: #000000;
  --sidebar-foreground: #00FF41;
  --secondary-foreground: #00FF41;
  --destructive-foreground: #FFFFFF;
  --sidebar-accent-foreground: #00FF41;
  --sidebar-primary-foreground: #000000;
}

.dark {
  --shadow-blur: 15px;
  --shadow-spread: 2px;
  --shadow-opacity: 0.4;
}
```

Se precisar de melhor legibilidade, mantenha os tokens originais e adicione fontes auxiliares sem apagar os tokens:
- Títulos: Space Grotesk.
- Texto corrido: Inter.
- Navegação, códigos e etiquetas técnicas: IBM Plex Mono.
- VT323 apenas em pequenos detalhes decorativos, terminal, indicadores ou microtextos; não usar em parágrafos longos.

Google Fonts:
- https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700
- https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700
- https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600
- https://fonts.googleapis.com/css2?family=VT323&display=swap

## 2. Estrutura de navegação — todas as abas e sublinks

Criar cabeçalho fixo ou sticky, com logo à esquerda, navegação organizada e botão de contato em destaque. Menus dropdown acessíveis por mouse e teclado.

Menu principal:

1. **HOME**
   - Página inicial.

2. **INSTITUCIONAL**
   - Sobre nós
   - Nossa história
   - Missão, visão e valores

3. **CYBERSECURITY**
   - O que é cibersegurança
   - Biblioteca de ameaças
   - Como funciona a proteção digital
   - Dicas de segurança
   - Centro de conhecimento
     - Glossário
     - Perguntas frequentes
     - Fontes e referências

4. **SOLUÇÕES**
   - Serviços
   - Planos e preços
   - Clientes individuais
   - Pequenas empresas
   - Médias e grandes empresas
   - Aviação e setor marítimo
   - Solicitar proposta / contratação

5. **ESTRUTURA AVAKA**
   - Avaka SOC
   - Certificações e normas
   - Nossa equipe
   - Relatórios e inteligência

6. **CYBER LAB**
   - Área reservada para o minijogo que será desenvolvido e integrado posteriormente.

7. **CONTATO**
   - Fale conosco
   - Solicitar orçamento
   - Suporte

Não omitir páginas nem sublinks. Se necessário, agrupar sublinks em mega menu para manter o cabeçalho limpo.

## 3. Página HOME

Hero de grande impacto, ocupando boa parte da primeira dobra:
- Logo Avaka.
- Título: **“Há mais de um século, protegendo o que importa.”**
- Subtítulo: “A Avaka Corporation é uma empresa brasileira de cibersegurança fundada em Londres, em 1916. Com uma trajetória marcada pela confiança, tradição e inovação, evoluímos dos primeiros serviços de custódia até as tecnologias mais avançadas de proteção digital. Hoje, protegemos dados, empresas e infraestruturas críticas, mantendo um compromisso que atravessa gerações: nunca falhar com aqueles que confiam em nós.”
- CTA principal: “CONHEÇA NOSSA HISTÓRIA”.
- CTA secundário: “EXPLORAR SOLUÇÕES”.
- Visual abstrato de segurança digital, redes, linhas técnicas ou centro de operações. Não usar mapa-múndi como fundo da logo.

Abaixo do hero, incluir:
- Breve apresentação institucional.
- Áreas de atuação em cards.
- Destaque Avaka SOC.
- Indicadores visuais demonstrativos, claramente marcados como dados fictícios/simulados.
- Chamada para soluções.
- Bloco de legado e história.
- Chamada para Cyber Lab.
- Rodapé completo com navegação, aviso de projeto fictício e logo.

## 4. Sobre nós e Nossa História

A página “Sobre nós” deve apresentar:
- Fundação: 1916, Londres, Reino Unido.
- Origem britânica; presença brasileira a partir de 1951.
- Sede fictícia: São Paulo, Brasil.
- Liderança atual fictícia: Guilherme Lica VII.
- Missão: proteger ativos digitais de empresas e instituições com tecnologia, discrição e responsabilidade, honrando a confiança desde 1916.
- Visão: ser referência latino-americana em cibersegurança e custódia de dados, protegendo infraestruturas críticas em terra, no ar e no mar.
- Valores: confiança, discrição, legado, responsabilidade, evolução contínua e humanidade.

A página “Nossa história” deve apresentar uma linha do tempo visual e uma narrativa longa, sem resumir demais:

- **1916 — Londres, Whitechapel:** Guilherme Lica I, relojoeiro, começa a guardar objetos de valor de famílias cujos entes queridos partiam para a guerra: anéis, cartas, medalhas, um violino e retratos. Registra os objetos e seus donos em um caderno preto. Sua promessa é proteger aquilo que não pode ser perdido. Dá à empresa o nome Avaka, inspirado em uma palavra sussurrada por sua avó, cujo significado exato nunca revela.
- **1930–1945 — Guilherme Lica II:** transforma uma gaveta em um cofre reforçado e depois em uma casa de custódia. Durante a Grande Depressão, devolve pertences sem cobrar. Em 1940, atravessa a Blitz sem perder nenhum item. Morre em 1957.
- **1946–1974 — Guilherme Lica III:** após perder a esposa no parto, muda-se para o Brasil em 1951 com a família e o caderno preto. Abre em Santos um escritório de custódia para comerciantes e exportadores. A Avaka passa a ter raízes brasileiras. Morre em 1974.
- **1975–1992 — Guilherme Lica IV:** percebe a transição do papel para o armazenamento magnético e passa a proteger fitas, discos e arquivos corporativos. Sua frase: “Antes guardávamos o que as pessoas tinham. Agora guardamos o que as pessoas são.” Cria estruturas iniciais de data center em um galpão na Mooca, com geradores e segurança. Afasta-se por problemas de saúde.
- **1993–2008 — Guilherme Lica V:** com a internet, surgem novas formas de roubo de dados. Após um ataque a um grande cliente em 1998, transforma a custódia em cibersegurança, contrata analistas e cria resposta a incidentes. Em 2008, aos 61 anos, entrega a empresa à filha e o caderno preto.
- **2009–2021 — Guilherme Lica VI:** sexta geração, chamada Guilherme por tradição familiar. Enfrenta a era de nuvem e servidores e amplia a proteção de sistemas de aviação e navegação marítima, cargas e comunicações entre torres e navios. Em 2021, passa a liderança ao sobrinho.
- **2021–hoje — Guilherme Lica VII:** liderança atual fictícia. Abre o caderno preto e mantém a promessa: “alguém confiou, e nós não vamos falhar.” A narrativa apresenta atuação em proteção de servidores, aeroportos e portos, mas sempre como universo ficcional do projeto.

Usar fotos/ilustrações históricas como espaços reservados para imagens que serão fornecidas depois. Não inventar fotos reais nem afirmar que são registros históricos autênticos. Manter o caderno preto como símbolo narrativo.

## 5. Página CYBERSECURITY — conteúdo educativo

Criar páginas claras e didáticas, com diagramas, ícones e exemplos:

### O que é cibersegurança
Cibersegurança é o conjunto de práticas, tecnologias e estratégias usadas para proteger computadores, redes, servidores, sistemas e informações contra acessos não autorizados, ataques, danos e roubo de dados.

### Por que é importante
Explicar proteção de dados, continuidade das operações, redução de perdas financeiras, prevenção de exposição de informações, redução de indisponibilidade e preservação da reputação.

### Tríade CIA
- Confidencialidade: somente pessoas autorizadas acessam a informação.
- Integridade: os dados permanecem corretos e não são alterados indevidamente.
- Disponibilidade: sistemas e dados ficam acessíveis quando necessários.

### Biblioteca de ameaças
Apresentar cards para phishing, malware, ransomware, engenharia social, força bruta e vazamento de dados. Explicar conceito, exemplo de risco e prevenção.

### Como funciona a proteção digital
Mostrar camadas de proteção: identificação de ativos, análise de riscos, prevenção, detecção, resposta e recuperação.

### Dicas de segurança
Senhas fortes e únicas, autenticação multifator, cuidado com links, atualizações, backups, restrição de acessos e confirmação de solicitações inesperadas.

### Centro de conhecimento
Glossário, perguntas frequentes e fontes/referências educativas.

## 6. SOLUÇÕES — serviços e portal comercial

Apresentar serviços:
- Proteção de redes.
- Monitoramento 24 horas.
- Testes de intrusão (pentest).
- Gestão de vulnerabilidades.
- Consultoria de conformidade.
- Backup, redundância, criptografia e recuperação de desastres.
- Proteção de sistemas aeroportuários, companhias aéreas, portos, navios, navegação, cargas e comunicações.
- SOC, resposta a incidentes, perícia digital e treinamento de equipes.

Criar uma página comercial com quatro segmentos e tabelas/cards comparativos. Os valores abaixo são fictícios e apenas ilustrativos para o projeto. Deixar isso explícito em uma nota visível. Não tratar como cotação real de mercado.

### Clientes individuais
- Digital Checkup — R$ 149,90: avaliação básica de segurança de contas e dispositivos.
- Identity Shield — R$ 249,90: orientação sobre identidade digital e privacidade.
- Personal Secure — R$ 349,90: revisão de senhas, MFA e configurações de segurança.
- Family Protection — R$ 49,90/mês: orientação para até quatro pessoas.

### Microempresas
- Avaka Start — R$ 490/mês: diagnóstico, configuração inicial e orientação.
- Avaka Business — R$ 990/mês: monitoramento em horário comercial, análise de vulnerabilidades e relatórios.
- Avaka Advanced — R$ 1.790/mês: proteção ampliada, gestão de vulnerabilidades e treinamento.
- Pentest Start — R$ 7.900/projeto: teste de um site ou aplicação, com relatório.

### Médias e grandes empresas
- Corporate Security — R$ 8.900/mês: monitoramento e gestão de segurança.
- Advanced SOC — R$ 14.900/mês: SOC, análise de alertas e resposta.
- Enterprise Defense — R$ 24.900/mês: monitoramento ampliado, resposta a incidentes e gestão de ameaças.
- Enterprise Pentest — R$ 18.900/projeto: teste de intrusão com escopo definido.

### Aviação e setor marítimo
- Aviation Shield — R$ 24.900: avaliação de segurança de infraestrutura aeroportuária.
- Maritime Shield — R$ 24.900: avaliação de sistemas portuários e marítimos.
- Critical SOC — R$ 34.900/mês: monitoramento especializado de infraestrutura crítica.
- Global Infrastructure Defense — sob consulta: proteção integrada de ambientes corporativos, aéreos e marítimos.

Diferenciar mensalidade, projeto pontual e sob consulta. Incluir CTA “Solicitar proposta”. Explicar que escopo, ativos, SLA e complexidade técnica influenciam o atendimento. Os valores são apenas demonstração fictícia.

## 7. ESTRUTURA AVAKA

### Avaka SOC
Página do Centro de Operações de Segurança: monitoramento, análise de alertas, triagem, investigação, resposta a incidentes e continuidade operacional. Criar painel visual demonstrativo, deixando claro que métricas e eventos são simulados.

### Certificações e normas
Explicar ISO 27001, NIST Cybersecurity Framework, LGPD e ISO 22301 como normas e referências relevantes. Não afirmar que a Avaka possui certificações ou conformidades auditadas. Diferenciar “referência apresentada” de “certificação obtida”.

### Nossa equipe
Organograma fictício com diretoria, engenharia, programação, segurança ofensiva, segurança defensiva, pesquisa e desenvolvimento e infraestrutura. Usar retratos ilustrativos ou placeholders, nunca apresentar pessoas fictícias como profissionais reais identificáveis.

### Relatórios e inteligência
Biblioteca de relatórios demonstrativos, tendências, cenários simulados, análises de ameaças e vulnerabilidades. Identificar claramente os dados como fictícios/simulados.

## 8. CYBER LAB

Criar uma página própria chamada CYBER LAB, com visual de laboratório digital e espaço reservado para um minijogo que será desenvolvido separadamente e integrado depois.

**Não criar, inventar ou incorporar um jogo genérico agora.** Criar somente a estrutura visual, a introdução, o espaço reservado e uma mensagem como “Laboratório em desenvolvimento”. A área deve permitir futura integração de HTML, CSS e JavaScript.

## 9. CONTATO

Criar formulário visual com nome, e-mail, assunto, segmento e mensagem, com validação visual e estados de sucesso/erro. Não simular envio real se não houver backend.

Contatos fictícios para demonstração:
- Instagram: @avaka.corporation
- E-mail ilustrativo: contato@avakacorp.example
- Telefone ilustrativo: +55 (11) 0000-1916
- Site ilustrativo: www.avakacorp.example

Endereços fictícios:
- Complexo Tecnológico Serra de Âmbar, Santa Aurora do Vale, SP, Brasil.
- Distrito Empresarial Horizonte Verde, São Paulo, SP, Brasil.

Marcar todos como dados fictícios/demonstração. O domínio `.example` é ilustrativo e não deve ser apresentado como canal ativo.

## 10. Imagens e direção fotográfica

Reservar áreas para duas imagens originais que serão fornecidas separadamente:
1. Campus de data center de grande porte visto de cima, vários edifícios, subestações, geradores, refrigeração, perímetro de segurança e logística.
2. Sede corporativa moderna em São Paulo, vista aérea, edifício de vários andares, escritórios executivos, programação, laboratórios de cibersegurança, pesquisa e desenvolvimento, salas de treinamento, reuniões e auditório.

Também reservar espaços para imagens históricas ilustrativas dos sete períodos da linha do tempo. Não usar mapas-múndi como fundo da logo. Não inventar imagens reais da empresa.

## 11. Rodapé e elementos recorrentes

Rodapé com logo, slogan “Há mais de cem anos, guardamos o que importa.”, links para as principais páginas, sublinks, contato fictício e aviso: “Avaka Corporation é uma empresa fictícia criada para fins educacionais. Conteúdos, locais, contatos, preços e indicadores são demonstrativos.”

## 12. Requisitos técnicos e de implementação

- React + TypeScript.
- Tailwind CSS.
- Componentes reutilizáveis e estrutura compatível com shadcn/ui.
- Componentes UI em `/components/ui`.
- Ícones lucide-react.
- Utilitário `cn` para classes.
- Navegação funcional entre páginas e dropdowns.
- Layout responsivo, acessível, com foco visível e contraste adequado.
- Animações CSS leves: fade-in, fade-up, transições e pequenos efeitos de hover.
- Não usar animações pesadas que prejudiquem desempenho.
- Separar conteúdo, componentes, estilos e assets.
- Usar componentes próprios para header, footer, cards, timeline, tabelas de preços, painéis e formulários.
- Criar estados vazios e placeholders onde integrações futuras serão adicionadas.
- Não deixar links sem destino ou botões decorativos que aparentem funcionar.
- Não criar backend, login real, checkout, envio de formulário ou monitoramento verdadeiro sem integração explícita.
- Entregar código organizado, nomes claros e instruções para executar o projeto.

## 13. Resultado esperado

O resultado deve ser um site completo, visualmente consistente, profissional, com todas as páginas e subpáginas listadas, conteúdo inicial preenchido, navegação funcional, responsividade e estrutura preparada para receber as imagens e o minijogo posteriormente. Priorize qualidade visual, legibilidade, organização e fidelidade à identidade da Avaka Corporation.