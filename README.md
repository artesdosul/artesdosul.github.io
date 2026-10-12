# Artes do Sul • Portal Editorial & Soberania Digital

## 🛡️ Sentinel Status
- **Status:** 🟢 Produção
- **Tier:** S
- **Health:** 98% / **ROI Potencial:** Central de Conhecimento, Farol de Inteligência e Observatórios
- **Stack:** Jekyll, Ruby 3.3, GitHub Actions, Vanilla CSS Design System, GitHub Pages

---

O portal [**artesdosul.github.io**](https://artesdosul.github.io/) é o núcleo editorial e repositório de inteligência do ecossistema **Artes do Sul**. Sob a liderança do analista de sistemas e engenheiro web **Araguaci Carlos de Andrade** (Bombinhas, Santa Catarina), o projeto consolida mais de **30 anos de atuação contínua** (desde 1994) em arquitetura de software, telecomunicações, IoT, inteligência OSINT e desenvolvimento soberano.

Este portal reúne a documentação analítica de **56 plataformas digitais e micro-SaaS**, com destaque absoluto para os **TOP 22 Masterpieces**: observatórios cívicos de accountability pública, linhas do tempo de jurimetria, plataformas corporativas sob a estética Cyber-Growth, acervos de resgate cultural e PWAs devocionais offline-first.

---

## 🎨 Modificações & Evolução do Tema (De Beautiful Jekyll para Artes do Sul Premium)

O blog utilizou historicamente como base o tema de código aberto [Beautiful Jekyll](https://beautifuljekyll.com) (criado por [Dean Attali](https://deanattali.com)). A partir dessa estrutura, foi desenvolvido e implementado um **Design System Autoral de Alta Performance**, fundamentado nos tokens oficiais da suíte de temas do ecossistema Artes do Sul (`themes/editors`):
- `artes-do-sul-dark-color-theme.json`
- `artes-do-sul-light-color-theme.json`

### 1. Tabela de Tokens Oficiais & Auditoria de Contraste (WCAG AAA)

Os tokens foram transpostos para variáveis CSS Custom Properties (`:root`), garantindo alternância fluida entre o **Modo Escuro (Padrão Soberano)** e o **Modo Claro**:

| Token / Elemento | Artes do Sul Dark (Padrão) | Artes do Sul Light | Taxa de Contraste (WCAG) | Aplicação no Tema |
| :--- | :--- | :--- | :--- | :--- |
| **Fundo Global (`--as-bg`)** | `#0a1118` (Midnight Navy) | `#FFF6F2` (Porcelana Quente) | Base estrutural | Corpo de página e fundo |
| **Superfície / Cards (`--as-surface`)** | `#0f172a` (Slate 900) | `#FFFFFF` (Branco Puro) | Elevação 1 | Cards do feed, painéis e dropdowns |
| **Bordas & Divisores (`--as-border`)** | `#334155` / `#1e293b` | `#E7D8D2` | Nítida separação | Contornos de cards, tabelas e tags |
| **Acento Principal (`--as-coral`)** | `#FF7F50` (Coral Radiante) | `#691345` (Vinho Imperial) | Acento vibrante | Títulos H1, hover de links, foco |
| **Acento Secundário (`--as-wine`)** | `#691345` (Vinho Artes do Sul) | `#FF7F50` (Coral) | Identidade de marca | Barras de citações, badges e botões |
| **Texto Primário (`--as-text-primary`)** | `#F8F4F2` (Warm Off-White) | `#1A1016` (Deep Plum) | **14.5:1** (AAA Absoluto) | Parágrafos e títulos de posts |
| **Texto Secundário (`--as-text-secondary`)** | `#94a3b8` (Slate 400) | `#6B5360` (Muted Plum) | **5.8:1** (Excede AA/AAA) | Subtítulos, excertos e rodapé |
| **Links (`--as-sky`)** | `#38bdf8` (Sky Blue) | `#0369a1` (Dark Sky Blue) | **8.3:1** (Alta legibilidade) | Links no texto com hover coral |
| **Sintaxe & Destaques** | `#e6c458` (Gold) / `#10b981` (Emerald) | Sintaxe balanceada | Idêntico ao editor | Código, constantes e tags |

---

### 2. Principais Refatorações Visuais em Relação ao Template Original

#### 🛡️ A. Header Heróico Fóton-Protetor (`.intro-header.big-img`)
* **Problema Original do Template**: Ao aplicar fotos de capa claras ou de alto brilho via `cover-img`, o texto sobreposto perdia contraste, caindo para taxas inferiores a 1.8:1 (reprovando na norma WCAG).
* **Solução Implementada**: Criação de camada intermediária fóton-protetora via pseudo-elemento `::before` com gradiente vertical em 3 fases (`rgba(10, 17, 24, 0.65)` a `0.98`), associada a uma sombra projetada em camadas no texto (`text-shadow: 0 2px 6px rgba(0,0,0,0.95), 0 4px 18px rgba(0,0,0,0.85)`). Garante **contraste superior a 10:1** em qualquer imagem.

#### 🌌 B. Navbar Translúcida em Glassmorphism (`.navbar-custom`)
* **Visual Cyber-Growth**: Fundo com efeito de vidro fosco (`rgba(10, 17, 24, 0.88)` com `backdrop-filter: blur(16px)`), borda inferior com halo coral sutil e menus dropdown estilizados com visual de card elevado.
* **Avatar Cósmico**: Anel iluminado com borda coral e halo difuso.
* **Alternador de Tema Integrado**: Inclusão de botão com ícone (Sol ☀️ / Lua 🌙) permitindo alternar instantaneamente entre o tema Escuro e Claro com persistência em `localStorage`.
* **Zero Flickering (Anti-FOUT)**: Script inline executado no cabeçalho antes do primeiro ciclo de renderização, garantindo que o tema preferido pelo usuário seja carregado sem lampejo de tela branca.

#### 🗂️ C. Feed de Artigos em Cards Modulares (`.post-preview`)
* **Superfície Elevada**: Substituição da lista contínua por cartões independentes com fundo `#0f172a`, borda suave `#1e293b`, cantos arredondados de 14px e sombra difusa.
* **Microinterações no Hover**: Elevação suave (`translateY(-4px)`), realce da borda em coral e brilho de halo perimetral.
* **Badges Tipo Pill**: Tags de artigos formatadas como pílulas monoespaçadas com fundo escuro elevado e acento em azul ciano, transformando-se em coral no hover.
* **Botão de Leitura Direta**: Botão `[Read More]` estilizado em estilo terminal moderno.

#### 📖 D. Tipografia Editorial & Blocos de Código (`.blog-post`)
* **Composição de Fontes**: Tríade tipográfica refinada: **Inter** (sans-serif para interfaces e títulos), **Lora** (serif humanista para corpo de leitura longa) e **JetBrains Mono** (monoespaçada para blocos de código e dados).
* **Blocos de Código e Tabelas**:
  * Inline `code` e blocos `pre` com a paleta autêntica do tema de editor Artes do Sul Dark e borda decorativa esquerda em vinho `#691345`.
  * Tabelas de dados com cabeçalhos monoespaçados em coral e alternância de linhas tipo zebra para inspeção analítica confortável.
  * Citações e callouts com borda lateral espessa em vinho e fundo elevado.

---

## 🏛️ Os Quatro Pilares do Ecossistema Artes do Sul

O portal documenta uma malha interligada de projetos organizados em quatro frentes estratégicas:

1. **Inteligência Cívica, Jurimetria & Accountability Pública**:
   - [Ecosistema Selva](https://selva.artesdosul.com/) — Sentinela de integridade pública e torre de controle investigativa.
   - [Observatório Civil BR](https://observatorio-civil-br.vercel.app/) — Catálogo de 225 artefatos auditando padrões estruturais de captura do Estado.
   - [JusMonitor](https://jusmonitor.vercel.app/) — Fiscalização de supersalários e jurimetria aberta com corpus sob licença CC0.
   - [Lawfare Timeline](https://lawfare-timeline.vercel.app/) — Cartografia cronológica do uso político do aparato penal e judicial.
   - [Transparentia Hub](https://modelos.artesdosul.com/apps/portal-transparencia.html) & [República Sequestrada](https://republica-sequestrada-hub.vercel.app/) — Mapeamento de rent-seeking e dreno tributário corporativo.
2. **Geopolítica, Memória Cultural & Mídia Independente**:
   - [O Dragão e a Onça](https://odragaoeaonca.vercel.app/) — Relações bilaterais Brasil–China, terras raras e soberania produtiva.
   - [Biblioteca Olavo de Carvalho](https://olavodecarvalho.vercel.app/) — Acervo catalogando 40+ obras e as 570+ aulas do COF.
   - [GoSurf Insights Central](https://gosurf.site) — Ensaios editoriais sobre economia e filosofia política sem caça a cliques.
   - [Floripa Surf Club](http://floripasurfclub.com) — História pioneira do surf em Santa Catarina e conservação costeira.
3. **Cyber-Growth, SaaS & Engenharia para Desenvolvedores**:
   - [Modelos Artes do Sul](https://modelos.artesdosul.com/) — Vitrine de Masterpieces e Design System para dashboards web.
   - [DevStudio Alpha](https://modelos.artesdosul.com/apps/devstudio-alpha.html) — Oficina escura local com validação criptográfica via Web Crypto API.
   - [GridGuard](https://modelos.artesdosul.com/apps/gridguard-landing.html) — Inteligência na auditoria de contas de energia corporativas.
   - [Sistema Horizonte](https://horizonte.artesdosul.com/) & [SaaS Launchpad](https://modelos.artesdosul.com/apps/saas-launchpad.html) — Workspaces de governança estratégica e modelagem financeira.
4. **Experiências Humanistas & PWAs Soberanos**:
   - [Os Filhos da Terra](https://filhosdaterra.artesdosul.com/) — Adaptação imersiva da Carta do Chefe Seattle com sintetizador procedural 432 Hz.
   - [Mãe Maria](https://mae-maria.artesdosul.com/) — Santuário mariano com o Santo Terço operando 100% offline-first.

---

## 📰 X Articles & Acervo de Mídia Editorial

Esta seção documenta os artigos preparados para publicação no **X.com Articles** (X Premium) e o registro oficial dos prompts de geração de mídia visual associados ao projeto.

### 📄 Artigos Disponíveis

- **X Article Principal**: [`artigos/artesdosul-blog-xarticle.md`](artigos/artesdosul-blog-xarticle.md)  
  *Título*: **O Portal da Soberania: 30 Anos de Código, 56 Plataformas e o Manifesto Artes do Sul**  
  *Hero Image (1200×675 px - 16:9)*: [`assets/img/artesdosul-blog-xarticle-hero.webp`](assets/img/artesdosul-blog-xarticle-hero.webp) | [`assets/img/artesdosul-blog-xarticle-hero.jpg`](assets/img/artesdosul-blog-xarticle-hero.jpg)
- **Post Editorial de Apoio no Blog**: [`_posts/2026-10-12-o-portal-da-soberania-manifesto-artesdosul.md`](_posts/2026-10-12-o-portal-da-soberania-manifesto-artesdosul.md)

### 🎨 Registro de Prompts de Geração de Imagem (Hero Image)

```text
Hero image para artigo X.com 'O Portal Soberano: Por Dentro do Ecossistema Artes do Sul'. Dimensões e proporção: 16:9 (1200x675 share card para X Articles). Composição: bloco editorial central imponente com o título 'ARTES DO SUL' e subtítulo 'Soberania Digital, Inteligência Cívica & Alta Engenharia'. Conteúdo crítico centrado com margens seguras para crop no feed do X. Elementos visuais: mapa de nós de dados interconectados, estética Cyber-Growth refinada, tons de azul profundo náutico (#0a192f), toques de dourado solar e acentos em verde esmeralda, matriz de código e diagramas de observatório de dados. Estilo: jornalismo investigativo de alta tecnologia, data journalism premium, tipografia editorial bold e elegante, sem clipart, sem fundo branco plano.
```

---

## 🛠️ Arquitetura de Software & Execução Local

### Pré-requisitos & Tecnologias
- **Ruby**: Versão 3.3+ (otimizado com suporte nativo a Bundler e dependências atualizadas).
- **Jekyll**: Motor de geração estática imutável.
- **Node.js**: Não é obrigatório para execução; todas as rotinas utilizam Vanilla CSS e Vanilla JavaScript de zero dependências externas.
- **CI/CD**: GitHub Actions automatizado no branch `main` com deploy direto no GitHub Pages.

### Como Executar Localmente

```powershell
# Instalar dependências da Gemfile
bundle install

# Compilar o site para validação estática
bundle exec jekyll build

# Iniciar servidor de desenvolvimento local com live-reload
bundle exec jekyll serve --livereload
```

---

## 📜 Créditos & Reconhecimento

- **Fundador & Arquiteto**: [Araguaci Carlos de Andrade](https://artesdosul.github.io/aboutme) — Studio Artes do Sul, Bombinhas/SC.
- **Template Base Histórico**: [Beautiful Jekyll](https://beautifuljekyll.com) por [Dean Attali](https://deanattali.com), estendido e evoluído para o ecossistema Artes do Sul.
- **Licença**: MIT License.
