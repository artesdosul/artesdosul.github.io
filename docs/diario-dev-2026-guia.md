# 📓 Diário de Desenvolvimento 2026 (Daily.Dev) • Guia de Estrutura & Pipeline de Artigos

> **Documento de Governança Editorial & Engenharia**  
> **Origem dos Dados:** `_data/daily.dev-01.yml`  
> **Script de Ingestão:** `scripts/import_daily_dev.py`  
> **Destino dos Artigos:** `_posts/`  
> **Data:** 01 de Outubro de 2026  
> **Status:** Ativo & Sincronizado  

---

## 📌 Sumário Executivo

Ao longo do ano de 2026, o ecossistema **Artes do Sul & Araguaci** desenvolveu e consolidou mais de 56 plataformas digitais, micro-SaaS, observatórios cívicos de inteligência OSINT e ecossistemas de hardware embarcado (IoT). 

Para registrar metadados detalhados de aprendizado contínuo e transformá-los automaticamente em postagens ricas no blog pessoal do desenvolvedor ([`araguaci.github.io`](https://araguaci.github.io)), foi estruturada a base [`_data/daily.dev-01.yml`](D:/app_aragua/araguaci.github.io/_data/daily.dev-01.yml).

Este guia documenta o esquema de dados adotado, a cobertura temática dos 16 registros iniciais e o fluxo de importação automatizada.

---

## 📐 Esquema de Dados YAML (`daily.dev-01.yml`)

Cada entrada do diário segue uma taxonomia estrita e semântica:

```yaml
- id: "DEV-2026-XXX"
  date: "YYYY-MM-DD"
  title: "[Título Técnico e Editorial do Aprendizado]"
  category: "[devops | frontend | osint | iot | saas | ia | datascience | seguranca | infraestrutura]"
  tags: [tag1, tag2, tag3]
  slug: "[slug-amigavel-para-url]"
  summary: "[Resumo executivo de 1 a 2 linhas para SEO e feeds]"
  problem_statement: >
    [Descrição detalhada do desafio de engenharia ou contexto do problema]
  key_learnings:
    - "[Lição aprendida 1: Causa raiz ou princípio técnico descoberto]"
    - "[Lição aprendida 2: Prática recomendada adotada]"
    - "[Lição aprendida 3: Métrica de ganho de desempenho ou estabilidade]"
  code_snippet: |
    [Trecho de código executável, configuração de CI/CD, CSS ou algoritmo]
  impact_value: "[Impacto prático nos produtos e valor para o ecossistema]"
  related_projects: ["projeto1", "projeto2"]
```

---

## 📋 Catálogo dos 16 Registros de Aprendizado de 2026

| ID | Data | Categoria | Título do Aprendizado Técnico | Slug do Artigo Gerado |
| :-: | :---: | :---: | :--- | :--- |
| **DEV-2026-001** | 2026-10-01 | `devops` | Resolução de Conflitos no GitHub Actions: Ruby 2.6 para 3.3 e a Falha FFI | `2026-10-01-resolucao-conflitos-github-actions-ruby3-gem-ffi.md` |
| **DEV-2026-002** | 2026-10-01 | `devops` | A Armadilha do `vendor/bundle` no Jekyll: Exclusão Obrigatória no `_config.yml` | `2026-10-01-armadilha-vendor-bundle-jekyll-exclude.md` |
| **DEV-2026-003** | 2026-10-01 | `frontend` | Engenharia de Contraste em Headers Heróicos: Stacking Context e Overlay Gradiente | `2026-10-01-engenharia-contraste-headers-heroicos-stacking-context.md` |
| **DEV-2026-004** | 2026-09-28 | `arquitetura` | Arquitetura PWA Offline-First para Aplicações Devocionais e Espirituais | `2026-09-28-arquitetura-pwa-offline-first-aplicacoes-devocionais.md` |
| **DEV-2026-005** | 2026-09-25 | `frontend` | Síntese Sonora Procedural em 432Hz & Ressonância Schumann com Web Audio API | `2026-09-25-sintese-sonora-procedural-432hz-web-audio-api.md` |
| **DEV-2026-006** | 2026-09-15 | `iot` | Comunicação IoT de Ultrabaixa Latência (<5ms) com Protocolo ESP-NOW | `2026-09-15-comunicacao-iot-ultrabaixa-latencia-esp-now.md` |
| **DEV-2026-007** | 2026-09-08 | `osint` | Cartografia Cronológica de Lawfare: Modelagem de Dossiês com Visx e D3 | `2026-09-08-cartografia-cronologica-lawfare-visx-d3.md` |
| **DEV-2026-008** | 2026-08-20 | `frontend` | Processamento Visual com Shaders WebGL (GLSL) e Gravação Nativa WebM | `2026-08-20-processamento-visual-shaders-webgl-glsl-webm.md` |
| **DEV-2026-009** | 2026-08-15 | `osint` | Auditoria Jurimétrica de Supersalários e Captura com Corpus CC0 | `2026-08-15-auditoria-jurimetrica-supersalarios-corpus-cc0.md` |
| **DEV-2026-010** | 2026-08-08 | `frontend` | Arquitetura de Design System Cyber-Growth: Tokens HSL e Alta Conversão | `2026-08-08-design-system-cybergrowth-tokens-hsl-conversao.md` |
| **DEV-2026-011** | 2026-08-06 | `datascience` | Data Science em Saúde Pública: Mineração DATASUS (SIM) 2014–2025 | `2026-08-06-data-science-saude-publica-datasus-sim-2014-2025.md` |
| **DEV-2026-012** | 2026-07-28 | `ia` | Engenharia de Prompt Avançada e Agentes Autônomos em Pair Programming | `2026-07-28-engenharia-prompt-agentes-autonomos-pair-programming.md` |
| **DEV-2026-013** | 2026-07-15 | `segurança` | Blindagem de Formulários Anti-Bot em 4 Camadas sem Fricção de Captchas | `2026-07-15-blindagem-formularios-antibot-4-camadas-sem-captcha.md` |
| **DEV-2026-014** | 2026-06-30 | `saas` | Modelagem Financeira e Unit Economics para Micro-SaaS: Do Zero ao Breakeven | `2026-06-30-modelagem-financeira-unit-economics-micro-saas.md` |
| **DEV-2026-015** | 2026-06-10 | `datascience` | Auditoria Tarifária Energética B2B com Parser de Faturas e IA de Dados | `2026-06-10-auditoria-tarifaria-energetica-b2b-parser-faturas.md` |
| **DEV-2026-016** | 2026-05-20 | `infraestrutura`| Infraestrutura Soberana de Homelab: Proxmox VE, Docker e Mesh WireGuard | `2026-05-20-infraestrutura-soberana-homelab-proxmox-docker-wireguard.md` |

---

## ⚡ Como Executar a Ingestão / Atualização de Artigos

Sempre que novas entradas forem adicionadas ao `_data/daily.dev-01.yml`, basta executar o pipeline de importação:

```powershell
# No terminal ou na raiz do projeto
python import_daily_dev.py
```

O script lê a base YAML, valida chaves, compõe a estrutura de frontmatter e gera os arquivos `.md` correspondentes dentro de `_posts/`, prontos para visualização local via `bundle exec jekyll serve` ou publicação no GitHub Pages.

---

*Documento mantido pela Engenharia de Software Artes do Sul & Araguaci Hub. Base de dados em `_data/daily.dev-01.yml`.*
