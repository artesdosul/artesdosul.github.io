# GlitchLab: a estética dos erros analógicos e shaders CRT em tempo real

A perfeição visual dos displays modernos e a homogeneidade do design vetorial criaram uma reação cultural nostálgica: a busca pela imperfeição orgânica, pelas distorções dos tubos catódicos (CRT), pelas falhas de rastreamento de fitas VHS e pelos desvios cromáticos do sinal analógico. No entanto, reproduzir esses efeitos em vídeo ou foto normalmente exige plugins caros de pós-produção ou processos demorados de renderização.

O [GlitchLab](https://glitchlab.artesdosul.com/) (Artes do Sul) inverte esse fluxo trazendo um laboratório completo de shaders WebGL 2.0 que roda direto no navegador a 60 quadros por segundo, processando imagens estáticas e fluxos de vídeo da webcam em tempo real, com exportação instantânea em PNG 4K e clipes animados no formato WebM.

## O pipeline de fragment shaders: física do tubo catódico

Em vez de simples sobreposições de textura 2D, o GlitchLab manipula diretamente os pixels na GPU através de shaders em linguagem GLSL:

1. **Aberração Cromática Vetorial (RGB Split)**: Os canais Vermelho ($R$), Verde ($G$) e Azul ($B$) são amostrados em coordenadas texturais deslocadas por um vetor direcional parametrizado. Isso simula o desalinhamento dos canhões de elétrons em monitores de fósforo ou a dispersão refrativa de lentes de vidro antigas.
2. **Curvatura Analógica do Tubo (Barrel Distortion)**: O shader deforma o mapa UV a partir do centro da tela ($x^2 + y^2$), gerando o abaulamento esférico característico dos monitores de arcade dos anos 80.
3. **Scanlines Catódicas Dinâmicas**: Linhas de varredura horizontais geradas por modulação senoidal sobre a resolução vertical da tela, com controle de densidade e atenuação de borda.
4. **Instabilidade de Tracking VHS & Jitter**: Interrupções procedurais de sinal que rasgam faixas horizontais da imagem e aplicam deslocamentos rápidos simulando o salto de quadros de cabeçotes magnéticos gastos.

## Entrada ao vivo via WebCam e arrastar & soltar

O GlitchLab foi projetado para fluidez criativa instantânea:

* **Modo WebCam CCTV ao Vivo**: Conecte a câmera do seu computador ou celular e visualize-se instantaneamente transformado em uma transmissão de segurança analógica dos anos 80.
* **Drag & Drop & Clipboard**: Arraste arquivos PNG, JPG e WebP ou simplesmente use o atalho `Ctrl + V` para colar capturas de tela diretamente no canvas.
* **Paletas de Cor Vintage**: Mapeamento tonal em tempo real com perfis como *Arcade CRT '84*, *Cyber VHS Tape*, *Matrix Terminal*, *Amber 1982* e *B&W Security*.

## Gravação de vídeo e snapshots em alta resolução

A suíte de exportação permite integrar as artes geradas diretamente em peças de mídia e projetos web:

* **Gravação de Vídeo WebM**: Capture clipes animados em loop contínuo de 3 segundos com compressão VP9 direto da GPU via MediaRecorder API, prontos para uso em stories, banners e motion design.
* **Snapshot PNG 4K Ultra**: Renderize imagens de altíssima definição preservando a precisão dos shaders e a geometria do tubo analógico.

## Soberania de dados e privacidade total

Seguindo o padrão do ecossistema Artes do Sul, o processamento de imagem e os fluxos da webcam ocorrem **100% no cliente**. Nenhum frame de vídeo é enviado para a nuvem, e o aplicativo funciona perfeitamente offline através de sua arquitetura Progressive Web App (PWA).

*Acesse a ferramenta: [GlitchLab Studio Oficial](https://glitchlab.artesdosul.com/)*
