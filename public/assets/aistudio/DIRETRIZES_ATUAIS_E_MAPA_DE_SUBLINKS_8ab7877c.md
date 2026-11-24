# DIRETRIZES ATUAIS DO WEBSITE — AVAKA CORPORATION

Este documento registra as decisões mais recentes tomadas para o projeto. Em caso de conflito, estas decisões prevalecem sobre instruções antigas presentes no prompt Stitch arquivado.

## 1. Conceito visual aprovado
- Direção: híbrida, combinando sofisticação editorial premium com cyber futurista.
- Predominância: preto/escuro.
- Verde neon principal: `#00FF41`.
- Vermelho geométrico da marca como detalhe secundário.
- Abertura: prisma interativo (não substituir por radar).
- Manter a logo original sem alterações.
- A Home deve ser uma experiência visual, mas também apresentar algumas informações institucionais importantes.
- A Home deve ser clean, com hierarquia visual, espaço negativo e conteúdo resumido; não deve ficar vazia nem virar um catálogo extenso.

## 2. Home — conteúdo resumido
A Home pode incluir:
1. Hero com prisma interativo, logotipo, slogan e chamadas para explorar.
2. Breve apresentação institucional.
3. Destaques das áreas corporativa, aeronáutica e marítima.
4. Resumo das soluções/serviços principais.
5. Destaque para Avaka SOC e infraestrutura de proteção.
6. Destaque da fundação em 1916 e chamada para a história completa.
7. Destaques selecionados de inteligência/tecnologia.
8. Rodapé institucional.

Não inserir a história completa, longos textos técnicos ou conteúdo excessivo na Home.

## 3. Navegação aprovada — páginas e sublinks
Menu principal proposto:

### HOME
- Página inicial e experiência visual.

### EMPRESA
- Nossa História — Seven Generations.
- Informações Institucionais.
- Missão, Visão e Valores.
- Liderança e Governança.

### SOLUÇÕES
- Cybersecurity Corporativa.
- Aviation Security.
- Maritime Security.
- Data Infrastructure.
- Incident Response & SOC.

### INFRAESTRUTURA
- Complexo Tecnológico Serra de Âmbar.
- Sede Corporativa.
- Centro de Operações SOC.

### INTELLIGENCE
- Relatórios e Publicações.
- Ameaças Emergentes.
- Análises de Segurança.
- Pesquisa e Tecnologia.

### CONTATO
- Contato Institucional.
- Solicitar Consultoria.
- Canais de Atendimento.

Os sublinks devem abrir páginas internas próprias. Usar dropdown/mega menu acessível, com navegação por mouse, teclado e celular. A navegação deve ser clara e consistente.

## 4. Exclusões confirmadas
**Retirar completamente do website:**
- Planos.
- Página de planos.
- Preços.
- Assinaturas.
- Tabelas comparativas comerciais.
- Menu/submenu de planos.
- Cartões de contratação por mensalidade.

Não reintroduzir a página comercial do prompt antigo. Os valores que aparecem nos documentos de origem ficam arquivados e fora do website.

## 5. História
- Página própria: `Nossa História — The Legacy / Seven Generations`.
- Formato aprovado: timeline cinematográfica.
- Navegação entre as sete gerações.
- Linha de progresso, revelação de datas, imagens ilustrativas e transições suaves.
- Preservar o caderno preto como símbolo narrativo.
- Manter as divergências de datas anotadas até confirmação.

## 6. Template de referência — Long Exposure Agency
O ZIP `ai-automation-agency-website-template-v1.zip` é referência de experiência e implementação visual. Não copiar seu conteúdo de agência. Estudar e adaptar:
- Hero com prisma de vidro interativo; lâminas de luz respondem ao ponteiro e clique.
- Paisagens abstratas desenhadas em tempo real com WebGL.
- Faixa horizontal/marquee com pausa ao passar o mouse.
- Contadores que iniciam quando entram na área visível.
- Abas interativas e navegação por teclado.
- Diagramas com sinais em movimento.
- Linha do tempo de processo com avanço automático e controle manual por arraste/clique.
- Cartões com fundos em movimento ao hover/focus.
- Carrossel de citações, FAQ expansível, transições de entrada e modal acessível.
- Layout responsivo e suporte a `prefers-reduced-motion`.
- O template usa React + TypeScript + Tailwind e um componente principal; README do template informa que o prisma/paisagens são desenhados via WebGL2, com fallback CSS quando WebGL2 não está disponível.

### Adaptação para Avaka
Preservar a engenharia e a qualidade das interações, mas adaptar estética e conteúdo:
- Preto predominante.
- Verde neon `#00FF41`.
- Vermelho da identidade da Avaka em detalhes.
- Prisma como elemento principal do Hero.
- Nada de conteúdo, logotipos, depoimentos ou estatísticas da agência original.
- Não reutilizar conteúdo comercial ou CTA de agendamento do template sem decisão específica.
- Preferir efeitos elegantes e controlados, sem poluição visual.

## 7. Regras de conteúdo e integridade
- A Avaka é fictícia e educacional; identificar isso quando relevante.
- Não inventar contatos ativos, clientes reais, parceiros, certificações, contratos, resultados ou números.
- Endereços e instalações são fictícios.
- Contatos `.example` são demonstrativos e não canais ativos.
- As 50 avaliações do CSV são fictícias; não publicar como depoimentos reais.
- Imagens de sede, data center, presidente e equipe ainda não foram fornecidas.
- Imagens futuras devem ser identificadas como ilustrativas quando não forem registros reais.

## 8. Status
As decisões acima são diretrizes e organização do projeto. **Nenhum site foi criado nesta etapa.** Este pacote organiza as informações da empresa, a identidade disponível e as referências/diretrizes para desenvolvimento futuro.
