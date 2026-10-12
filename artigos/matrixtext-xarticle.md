# MatrixText: a transmutação de imagens em tipografia generativa e código Matrix

A arte em ASCII e a estética dos terminais fosforescentes representam o encontro seminal entre a computação textual e a expressão visual. No entanto, a maioria dos conversores online é rudimentar: baseiam-se em tabelas estáticas de caracteres simples, não oferecem controle sobre densidade tipográfica nem geram saídas prontas para o fluxo moderno de design vetorial e programação web.

O [MatrixText](https://matrixtext.artesdosul.com/) (Artes do Sul) reinventa esse formato: um estúdio de arte tipográfica generativa que analisa imagens em tempo real e as reconstrói utilizando glifos tipográficos parametrizados, blocos Unicode e chuva digital no estilo *Matrix Rain*, com exportação para texto puro, HTML com glow neon, SVG vetorial escalável e PNG em 4K.

## O motor de amostragem por luminância e contraste

A conversão precisa de uma imagem em caracteres exige respeito à relação de contraste e espaçamento monoespaçado (*aspect ratio* tipográfico):

1. **Grade de Amostragem Paramétrica**: A imagem é subdividida em células baseadas no tamanho da fonte escolhida (de 6px a 28px). O motor calcula a luminância relativa de cada célula através da fórmula espectral ponderada ($0.299R + 0.587G + 0.114B$).
2. **Ramps de Caracteres Especializados**:
   - **Matrix Katakana**: Glifos da matriz japonesa clássica misturados a numerais e símbolos operacionais (`ｦｱｳｴｵ...`).
   - **ASCII Clássico**: Escala clássica de densidade óptica (` .:-=+*#%@`).
   - **Blocos Unicode**: Densidades de meio-tom geométricas (` ░▒▓█`).
   - **Binário & Hexadecimal**: Código puro de baixo nível (`01` ou `0-F`).
   - **Texto Customizado**: Possibilidade de usar código-fonte próprio, slogans de marca ou frases para desenhar a imagem.
3. **Controle de Limiar & Inversão**: Ajuste fino de contraste, brilho e inversão de luminância para fundos claros ou escuros.

## Chuva digital Matrix Rain em tempo real

O MatrixText não é apenas um conversor estático. Ele incorpora um sistema de partículas tipográficas que reage à geometria da imagem:

* **Chuva de Código Reativa**: Colunas de caracteres descem continuamente em velocidades aleatórias, iluminando de forma incandescente (branco puro) as cabeças da chuva e deixando rastros em verde esmeralda que revelam a silhueta da figura subjacente.
* **Glow Neon e Sombreamento**: Filtros de sombra e brilho dinâmico configuráveis para simular telas CRT de fósforo verde, terminais âmbar ou telas monocromáticas modernas.

## Quatro vias de exportação para desenvolvedores e designers

Para que a arte criada tenha utilidade prática imediata, o MatrixText entrega quatro formatos:

* **Texto Puro (Clipboard TXT)**: Cópia direta para colar em arquivos `README.md`, comentários de código-fonte, cabeçalhos de terminal ou consoles CLI.
* **HTML com Glow Embutido**: Arquivo `.html` autocontido com estilos CSS e `<pre>` tipográfico estilizado com glow neon pronto para visualização.
* **Vetor SVG Estruturado**: Documento vetorial com elementos `<text>` perfeitamente alinhados em grade para edição no Figma, Illustrator ou web.
* **Snapshot PNG 4K Ultra**: Renderização em altíssima resolução para capas, posters, papéis de parede e materiais impressos.

## Arquitetura soberana e suporte PWA

Construído sem bibliotecas externas pesadas e com foco na soberania de dados, o MatrixText processa todos os pixels **100% no cliente**, sem enviar nada para a nuvem e com funcionamento offline nativo como Progressive Web App.

*Acesse a ferramenta: [MatrixText Studio Oficial](https://matrixtext.artesdosul.com/)*
