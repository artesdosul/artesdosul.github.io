# IsometricCraft: a engenharia visual de diagramas e arquiteturas isométricas 3D

Diagramas de arquitetura de software, infraestrutura em nuvem e fluxos de sistemas são frequentemente representados através de caixas bidimensionais genéricas que não comunicam a tridimensionalidade, a hierarquia nem o peso estrutural dos serviços. Por outro lado, modelar essas representações em ferramentas 3D tradicionais demanda curvas longas de aprendizado e gera arquivos difíceis de integrar no fluxo vetorial do Figma e do Illustrator.

O [IsometricCraft](https://isometric.artesdosul.com/) (Artes do Sul) surge como um estúdio de precisão geométrica em 2.5D: um construtor modular de cenas, topologias e diagramas isométricos que roda diretamente no navegador, permitindo empilhar blocos, modelar clusters de servidores e exportar ilustrações limpas em SVG vetorial e PNG em 4K.

## A matemática da projeção isométrica e o algoritmo do pintor

Diferente da projeção com ponto de fuga, a perspectiva isométrica mantém as dimensões das arestas paralelas intactas, eliminando a distorção por distância e permitindo que qualquer módulo se encaixe perfeitamente em qualquer coordenada do grid:

1. **Transformação Cartesiana para Isométrica**: Cada coordenada tridimensional $(x, y, z)$ é mapeada para o plano bidimensional do canvas através das transformações ortogonais:
   $$X_{screen} = X_{origin} + (x - y) \cdot \frac{W_{tile}}{2}$$
   $$Y_{screen} = Y_{origin} + (x + y) \cdot \frac{H_{tile}}{2} - z \cdot H_{block}$$
2. **Ordenação de Profundidade (Painter's Algorithm)**: Para garantir que blocos à frente ocultem corretamente os blocos posicionados atrás ou abaixo, todos os elementos da cena são ordenados pelo vetor de profundidade composta $D = x + y + 1.5z$ antes de cada ciclo de renderização.
3. **Iluminação Direcional Físico-Geométrica**: Cada bloco tem suas três faces visíveis (superior, esquerda e direita) sombreadas com gradientes calculados a partir de um vetor solar imaginário, criando volume e tridimensionalidade instantâneos.

## Componentes modulares para arquitetura e nuvem

O IsometricCraft oferece ferramentas voltadas tanto para diagramadores técnicos quanto para designers conceituais:

* **Servidores de Rack**: Blocos com texturas de slots e LEDs de atividade em verde esmeralda e cyan.
* **Bancos de Dados & Storage**: Cilindros e blocos com divisões circulares para representar bancos de dados SQL/NoSQL.
* **Vidro Neon & Wireframes**: Blocos translúcidos com iluminação de borda para representar contêineres Docker, microsserviços ou zonas de segurança.
* **Templates Prontos**: Modelos de partida como *Cloud Cluster*, *Cyber Tower*, *Microservices Bus* e *Monolith Cube*.

## Exportação vetorial pura (SVG) e imagens em alta definição

Para garantir que o diagrama gerado seja útil do pitch deck ao código em produção:

* **SVG Vetorial Estruturado**: Cada bloco é convertido em três elementos `<polygon>` com coordenadas exatas de vértices e preenchimento hexadecimal, permitindo desagrupar, mudar cores e reorganizar nós diretamente no Figma, Sketch ou Illustrator.
* **PNG em 4K com Transparência**: Exportação em ultra-alta resolução com canal alfa transparente, ideal para inclusão em landing pages, documentações técnicas e dashboards.

## Soberania de dados e funcionamento offline (PWA)

O IsometricCraft é 100% processado no cliente através da Canvas API nativa do navegador. Nenhum diagrama é enviado para servidores externos e o estúdio opera completamente offline através de seu Service Worker como Progressive Web App (PWA).

*Acesse a ferramenta: [IsometricCraft Studio Oficial](https://isometric.artesdosul.com/)*
