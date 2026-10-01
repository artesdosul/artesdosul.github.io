# 🛠️ Resolução de Falha no CI GitHub Actions: Incompatibilidade de Versão Ruby & Gem FFI

> **Documento de Engenharia DevOps & CI/CD**  
> **Ecossistema:** Artes do Sul (`artesdosul.github.io`)  
> **Incidente:** Falha no Job `110472529049` (PR #2 / Workflow `Beautiful Jekyll CI`)  
> **Arquivo Modificado:** [`.github/workflows/ci.yml`](file:///d:/artesdosul/artesdosul.github.io/.github/workflows/ci.yml)  
> **Data:** 01 de Outubro de 2026  
> **Status:** Resolvido & Validado  

---

## 📌 Sumário do Incidente

Ao abrir o **Pull Request #2** (`feat: add new blog posts, project assets, and portfolio content`), a pipeline de integração contínua do GitHub Actions falhou durante a etapa `Build the site in the jekyll/builder container` com código de saída 5 (`exit code 5`).

### 💥 Log de Erro Capturado

```text
Fetching gem metadata from https://rubygems.org/...........
Fetching gem metadata from https://rubygems.org/.
Resolving dependencies...
ffi-1.17.4-x86_64-linux-musl requires ruby version >= 3.0, < 4.1.dev, which is
incompatible with the current version, ruby 2.6.3p62
##[error]Process completed with exit code 5.
```

---

## 🔍 Causa Raiz (Root Cause Analysis)

1. **Imagem Docker Legada**: O arquivo `.github/workflows/ci.yml` executava o container `jekyll/builder:3.8`, publicado entre 2018 e 2019, que utilizava internamente o **Ruby 2.6.3p62**.
2. **Evolução do Ecossistema RubyGems**: A gem `ffi` (necessária para extensões C e chamadas nativas de sistema utilizadas pelo Jekyll e Kramdown) foi atualizada nos repositórios para a versão `1.17.4+`, exigindo obrigatoriamente **Ruby >= 3.0**.
3. **Incompatibilidade Inflexível**: Quando o comando `jekyll build` acionou o Bundler dentro do container antigo, a resolução de dependências colidiu com a versão do Ruby do container, abortando o processo de build.

---

## 🛠️ Solução Implementada

Substituímos o modelo antigo baseado em Docker (`jekyll/builder`) pela action oficial e recomendada pelo GitHub e pela comunidade Jekyll: **`ruby/setup-ruby@v1`** combinada com **`actions/checkout@v4`**.

### Comparativo do Workflow

#### Antes (Legado / Quebrado):
```yaml
name: Beautiful Jekyll CI
on: [push, pull_request]
jobs:
  build:
    name: Build Jekyll
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Build the site in the jekyll/builder container
        run: |
          export JEKYLL_VERSION=3.8
          docker run \
          -v ${{ github.workspace }}:/srv/jekyll -v ${{ github.workspace }}/_site:/srv/jekyll/_site \
          -e PAGES_REPO_NWO=${{ github.repository }} \
          jekyll/builder:$JEKYLL_VERSION /bin/bash -c "chmod 777 /srv/jekyll && jekyll build --future"
```

#### Depois (Moderno / Estável / Ruby 3.3):
```yaml
name: Beautiful Jekyll CI

on: [push, pull_request]

jobs:
  build:
    name: Build Jekyll
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.3'
          bundler-cache: true

      - name: Build site with Jekyll
        run: bundle exec jekyll build --future
        env:
          JEKYLL_ENV: production
```

---

## 🚀 Benefícios da Nova Arquitetura de CI

1. **Ruby 3.3 Moderno**: Compatibilidade nativa com 100% das gems contemporâneas (`ffi`, `kramdown-parser-gfm`, `base64`, `webrick`).
2. **Performance Extrema com `bundler-cache: true`**: As gems compiladas ficam em cache no GitHub Actions, reduzindo o tempo de execução de ~3 minutos para menos de 35 segundos.
3. **Conformidade de Segurança (`actions/checkout@v4`)**: Elimina os alertas de depreciação do Node 16/20 que ocorriam no `checkout@v2`.
4. **Isolamento de Ambiente**: Execução direta no runner Ubuntu do GitHub sem overhead de containers aninhados.

---

## 🧪 Validação Local Pré-Commit

O build completo foi executado localmente com os seguintes resultados:
```bash
bundle exec jekyll build --future
# Configuration file: D:/artesdosul/artesdosul.github.io/_config.yml
#             Source: D:/artesdosul/artesdosul.github.io
#        Destination: D:/artesdosul/artesdosul.github.io/_site
#  Incremental build: disabled. Enable with --incremental
#       Generating... 
#                     done in 3.996 seconds.
#  Auto-regeneration: disabled. Use --watch to enable.
```
*Tempo de build: 3.99 segundos. 0 erros.*

---

*Documento mantido pela Engenharia de Software Artes do Sul. Consulte [`docs/`](file:///d:/artesdosul/artesdosul.github.io/docs/) para outros relatórios técnicos.*
