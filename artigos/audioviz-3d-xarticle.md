# AudioVisualizer 3D: a física do som transformada em paisagens e geometrias tridimensionais

A visualização de áudio tradicional costuma limitar-se a barras 2D estáticas ou osciloscópios simplistas. No entanto, a música e os sinais sonoros são fenômenos dinâmicos e multidimensionais, compostos por sobreposições harmônicas, transientes percussivos e variações de fase que ganham uma expressividade incomparável quando mapeados para o espaço tridimensional com iluminação em tempo real.

O [AudioVisualizer 3D](https://audioviz.artesdosul.com/) (Artes do Sul) une a precisão da Web Audio API nativa com o poder gráfico do Three.js/WebGL em uma plataforma 100% no cliente: qualquer arquivo de áudio, fluxo de microfone ou sintetizador interno é decomposto em seu espectro de frequências (FFT) e convertido instantaneamente em terrenos topográficos ondulantes, túneis neon e vórtices de partículas a 60 FPS, com gravação direta de vídeo em formato WebM.

## A ponte entre áudio e geometria: transformada rápida de Fourier (FFT)

O núcleo do aplicativo opera com amostragem matemática contínua do fluxo de áudio:

1. **Decomposição em Tempo Real (AnalyserNode)**: O áudio é capturado e processado por uma transformada rápida de Fourier com tamanho de janela $FFT = 256$, dividindo o espectro em faixas discretas que vão dos sub-graves (20Hz a 120Hz) até os agudos cristalinos (acima de 10kHz).
2. **Suavização Temporal Paramétrica (Smoothing)**: Uma constante de atenuação (de 0.1 a 0.95) evita picos abruptos e cria transições orgânicas de deformação, simulando a inércia física de cordas e membranas acústicas.
3. **Mapeamento Topológico de Vértices**: As amplitudes de frequência são diretamente injetadas nas coordenadas dos vértices ($Y$) da malha tridimensional, moduladas pela distância radial euclidiana do centro para criar ondas de choque ressonantes.

## Múltiplos ambientes tridimensionais reativos

O estúdio oferece quatro modos cenográficos distintos:

* **Terreno de Ondas FFT**: Uma malha poligonal com iluminação especular que ondula ao ritmo dos graves, criando cordilheiras de relevo topográfico digital.
* **Túnel Cibernético Neon**: Cilindro paramétrico wireframe com rotação axial onde o pulso médio do áudio expande o raio do túnel em sincronia com a batida.
* **Osciloscópio 3D**: Anel de fase em órbita que desenha as flutuações de amplitude no espaço tridimensional.
* **Vórtice de Partículas**: Nuvem de 2.000 partículas estelares impulsionadas pela intensidade acústica e rotação dinâmica.

## Entradas versáteis e sintetizador de demonstração

Para permitir testes e apresentações sem fricção:

* **Drag & Drop de Arquivos**: Suporte nativo a MP3, WAV e OGG arrastados direto para a tela.
* **Entrada de Microfone ao Vivo**: Conecte instrumentos, vozes ou o som ambiente do seu estúdio para visualizações ao vivo durante performances ou podcasts.
* **Sintetizador Demo Integrado**: Um gerador algorítmico de batidas a 60 BPM sintetiza oscilações harmônicas via código para visualização imediata com um clique.

## Gravação de vídeo e snapshots de alta definição

* **Gravador de Vídeo WebM**: Capture clipes de 5 segundos em alta taxa de quadros diretamente do buffer WebGL com compressão VP9, prontos para stories, reels e teasers musicais.
* **Snapshots PNG em 4K**: Registre instantes de alta energia da malha com iluminação completa para capas de álbuns, posters e wallpapers.

## Soberania de dados e uso offline (PWA)

O processamento acústico e a renderização 3D são executados **100% no seu dispositivo**. Nenhum segundo de áudio é transmitido para servidores remotos, e o estúdio conta com suporte offline completo via Progressive Web App.

*Acesse a ferramenta: [AudioVisualizer 3D Oficial](https://audioviz.artesdosul.com/)*
