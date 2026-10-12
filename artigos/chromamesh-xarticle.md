# ChromaMesh: a arte matemática dos gradientes fluidos e formas orgânicas

Fundos estáticos e degradês lineares simples já não sustentam a identidade visual de produtos digitais contemporâneos. A web moderna exige profundidade atmosférica, dinamismo cinético e texturas que pareçam vivas, sem sacrificar a velocidade de carregamento nem sobrecarregar o processador do usuário.

O [ChromaMesh](https://chromamesh.artesdosul.com/) (Artes do Sul) nasce para preencher essa lacuna: um estúdio generativo em Canvas 2D acelerado por hardware que transforma pontos de controle cromático e campos de ruído Simplex/Perlin em malhas de gradiente fluido (*mesh gradients*), *blobs* orgânicos e divisores de onda SVG em tempo real, com exportação instantânea para CSS puro, SVG vetorial e PNG em 4K.

## A física da difusão cromática: nós e interpolação radial

Gradientes de malha tradicionais em softwares como Illustrator costumam gerar arquivos pesados ou exigir curvas de Bézier complexas. O ChromaMesh simplifica essa arquitetura através de uma abordagem paramétrica baseada em nós táteis:

1. **Nós de Ancoragem Dinâmica**: O usuário manipula até 8 pontos de cor no espaço bidimensional, ajustando posição relativa, raio de influência e intensidade de opacidade individual.
2. **Difusão Radial com Falloff Suave**: O motor renderiza gradientes radiais sobrepostos com cálculo de difusão Gaussiana parametrizada (blur de 20px a 250px), eliminando faixas de banding e criando transições aveludadas entre tons contrastantes.
3. **Film Grain Físico**: Uma camada de ruído analógico procedural é sintetizada e aplicada sobre o resultado, simulando granulação de película fotográfica e adicionando textura tátil à peça.

## Movimento orgânico com vetores de ruído Simplex

Além de imagens estáticas, o ChromaMesh dá vida às cores através de animação contínua a 60 FPS:

* **Deformação por Campo Vetorial**: Cada ponto de ancoragem tem sua coordenada modulada por funções de ruído Simplex bidimensionais ($N(x, y, t)$), gerando oscilações que lembram lâmpadas de lava, auroras boreais ou correntes marítimas.
* **Modo SVG Waves**: Converte a energia dos gradientes em divisores de onda sinusoidais sobrepostos para seções de landing pages modernas.
* **Controle de Fluidez**: Ajustes finos de velocidade temporal, intensidade de ruído e mutação aleatória com um único clique.

## Exportação para o fluxo de desenvolvimento real

O maior diferencial do ChromaMesh é a ponte direta com a engenharia de frontend:

* **Snippet CSS Puro**: Gera automaticamente a propriedade `background-image` combinando múltiplos `radial-gradient()` e `background-color`, permitindo aplicar o visual em qualquer página web sem adicionar um único byte de imagem ou dependência JavaScript.
* **Vetor SVG com Filtro Gaussiano**: Exporta arquivos `.svg` ultraleves (menos de 2 KB) com definições de `<radialGradient>` e `<feGaussianBlur>`, ideais para logotipos, capas e Figma.
* **Renderização PNG em 4K Ultra**: Renderizador offscreen dedicado que processa o gradiente em 3840x2160 pixels com preservação de raio e difusão para impressão ou fundos de alta densidade de pixels.

## Soberania de dados e uso offline (PWA)

Seguindo os princípios de engenharia da Artes do Sul, o ChromaMesh é construído como Progressive Web App (PWA) 100% client-side:

* **Zero Rastreamento & Zero Login**: Nenhum dado ou imagem trafega para servidores externos.
* **Suporte Offline Total**: O aplicativo funciona mesmo sem conexão à internet através de seu Service Worker dedicado.

*Acesse a ferramenta: [ChromaMesh Studio Oficial](https://chromamesh.artesdosul.com/)*
