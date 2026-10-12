# Polygonize 3D: da imagem plana à escultura geométrica em tempo real

Transformar uma imagem bidimensional em arte poligonal costuma exigir softwares pesados de modelagem 3D, plugins proprietários ou scripts lentos em servidores remotos. No momento em que você precisa converter uma referência visual em malha vetorial ou relevo tridimensional para um projeto web, a fricção entre a ideia e o resultado final consome o fluxo de criação.

O [Polygonize 3D](https://polygonize.artesdosul.com/) (Artes do Sul) inverte essa lógica: um estúdio generativo em WebGL rodando direto no navegador, a 60 quadros por segundo, que processa qualquer imagem e a reconstrói como malha tridimensional paramétrica via triangulação Delaunay adaptativa e shaders Three.js. Zero login, processamento 100% no cliente e exportação para múltiplos formatos (PNG 4K, SVG vetorial e OBJ 3D).

## O motor por trás dos polígonos: Sobel e Delaunay

A maioria dos filtros de "low-poly" clássicos distribui pontos aleatoriamente sobre a tela, gerando triângulos uniformes que destroem as feições principais de rostos, logotipos ou contornos arquitetônicos. O Polygonize 3D utiliza uma abordagem adaptativa de amostragem:

1. **Detecção de Bordas (Sobel Gradient)**: O algoritmo calcula as derivadas de luminância horizontal ($G_x$) e vertical ($G_y$) em cada pixel. As áreas com gradiente acentuado (olhos, contornos, arestas) recebem peso amostral superior.
2. **Amostragem Ponderada com Jitter**: Os vértices são distribuídos com maior densidade onde há detalhe e menor densidade em fundos planos, com amortecimento de ruído para evitar triângulos degenerados.
3. **Triangulação Delaunay sem Dependências**: O grafo planar conecta os pontos garantindo que nenhum vértice resida no interior do círculo circunscrito de qualquer triângulo, gerando malhas esteticamente harmônicas e estruturalmente sólidas.

O resultado é uma geometria que preserva a identidade visual da imagem com uma fração dos polígonos de uma malha densa.

## Da tela 2D ao relevo topográfico 3D

O diferencial do Polygonize 3D é que a triangulação não é apenas um desenho plano sobre um canvas 2D. Cada triângulo gerado é uma faceta tridimensional independente dentro do espaço Three.js:

* **Extrusão Paramétrica ($Z$-Displacement)**: A profundidade de cada vértice é modulada dinamicamente pelo canal de luminância, luminância invertida ou densidade de bordas. Áreas claras projetam-se para fora da tela, criando cordilheiras e relevos arquitetônicos.
* **Explosão de Faces**: Um controle dedicado desloca individualmente cada triângulo ao longo de seu vetor normal, desconstruindo a imagem em fragmentos flutuantes no espaço.
* **Ondulação Wave 3D**: Animação em tempo real que aplica deformações senoidais baseadas na distância euclidiana do centro da malha, dando vida orgânica ao relevo.

O usuário pode alternar instantaneamente entre a visualização 2D plana (para cartazes e peças gráficas) e o modo 3D com órbita livre (para visualização de modelos e inspeção de ângulos).

## Sombreamento, paletas e direção de arte

A ferramenta incorpora estilos de renderização projetados para diferentes demandas visuais:

* **Flat Shading (Low-Poly Clássico)**: Cada triângulo calcula sua normal plana contra as três fontes de iluminação da cena (Key Light, Fill Light e Rim Light), gerando a assinatura estética dos jogos e da arte generativa moderna.
* **Smooth 3D Especular**: Interpolação suave de normais de vértices para superfícies que simulam topografia física ou metal polido.
* **Wireframe Neon & Holograma**: Modos futuristas com linhas de contorno em cyan e magenta sobre fundo escuro profundo, ideais para interfaces cyberpunk e identidades visuais de tecnologia.
* **Color Grading**: Mapeamento tonal em tempo real com paletas dedicadas como *Cyberpunk*, *Gold Luxury*, *Matrix Emerald*, *Synthwave 80s* e *Film Noir*.

## Pipeline de exportação em quatro formatos

Uma ferramenta de design precisa conversar com o resto da sua cadeia de produção. O Polygonize 3D entrega quatro vias de saída:

* **Raster em Alta Resolução (PNG até 4K)**: Renderização com multiplicador de escala (1x, 2x, 4x) para uso direto em web design, mídias sociais e material impresso.
* **Vetor Limpo (SVG)**: Cada triângulo é exportado como elemento `<polygon>` com cor hexadecimal e stroke parametrizado, editável no Illustrator, Figma ou Inkscape.
* **Modelo 3D (.OBJ com Vertex Colors)**: Malha 3D completa com coordenadas de vértices, normais e cores embutidas para importação imediata no Blender, Unity, Unreal Engine ou fatiadores de impressão 3D.
* **Copiar Imagem (Clipboard)**: Transferência direta via `navigator.clipboard` para colar no editor gráfico sem salvar arquivos temporários.

## Entrada flexível e funcionamento offline (PWA)

O Polygonize 3D aceita imagens por arraste (drag & drop), seletor de arquivos, captura ao vivo pela webcam e colagem direta da área de transferência (`Ctrl + V`). Ele também conta com seis amostras de teste pré-computadas para experimentação imediata.

Construído como Progressive Web App (PWA) com Service Worker dedicado, o aplicativo pode ser instalado na área de trabalho ou celular e opera completamente offline, sem enviar nenhum byte da sua imagem para servidores externos.

*Acesse a ferramenta: [Polygonize 3D Oficial](https://polygonize.artesdosul.com/)*
