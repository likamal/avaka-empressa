# TEMPLATE DE REFERÊNCIA — LONG EXPOSURE AGENCY

Arquivo-fonte: `ai-automation-agency-website-template-v1.zip`.

O template foi incluído sem alteração na pasta `06_TEMPLATE_VISUAL_DE_REFERENCIA/` para servir de referência técnica e visual.

## O que preservar/adaptar
- Prisma de vidro interativo no Hero, com luzes que reagem ao ponteiro e clique.
- Paisagens abstratas em WebGL, com movimento contínuo controlado.
- Marquee de marcas/logos com pausa no hover.
- Estatísticas com contagem quando entram na viewport.
- Seção de serviços com abas acessíveis por teclado.
- Diagramas com sinais animados.
- Processo em timeline com autoplay enquanto visível, interrompido pela interação do visitante; permite scrub por arraste.
- Cards de projetos com paisagem animada no hover/focus.
- Carrossel de citações e FAQ expansível.
- Transições de entrada e modal acessível.
- Layout responsivo, menu compacto em telas estreitas e suporte a `prefers-reduced-motion`.

## Detalhes técnicos informados no README
- React + TypeScript + Tailwind no projeto de referência.
- As paisagens e o prisma são renderizados em tempo real com WebGL2.
- O componente usa um contexto WebGL2 compartilhado para pintar as imagens em canvases 2D individuais.
- Sem WebGL2, há fallback de gradiente CSS.
- O conteúdo abaixo da dobra entra conforme o scroll.
- Abaixo de 720 px, o menu recolhe e grades viram uma coluna.
- `prefers-reduced-motion` reduz movimentos automáticos, marquee, autoplay, contadores e entradas.

## Adaptação aprovada para Avaka
O template é referência de animações, interações, ritmo visual e experiência. Não copiar marca, conteúdo, cores originais, textos, casos de clientes, logos ou agendamento. Para Avaka, usar o visual escuro aprovado, verde neon `#00FF41`, vermelho da logo e prisma interativo.
