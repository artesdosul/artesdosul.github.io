# DevStudio Alpha: a oficina de engenharia que cabe numa aba

Debugar payload, gerar hash, conferir CPF e converter HEX pra RGB não deveria espalhar seis bookmarks com anúncio. O fluxo real do dia é: colar, conferir, voltar pro editor — e perder contexto no meio.

O **DevStudio Alpha** (Artes do Sul) é o **Engineering Hub v2.0**: shell fullscreen, sidebar com três famílias de módulo, top bar com `Memory_Usage` / `Enc_Protocol: TLS_1.3` e iframe que injeta ferramentas já existentes em `tools/`. Estética *terminal-chic*, chuva Matrix sutil no viewport, loader `Injecting_Module...`. Sem login pra tarefa de dois minutos.

## Três bancadas, seis módulos

### Data Transformation

- **JSON Forge** — `ferramentas-json.html`: formatar, inspecionar, exportar. Ponto de entrada padrão do hub.
- **MCP Connector** — `ferramentas-mcp.html`: Model Context Protocol ao lado do JSON, não em outro produto.
- **Base64 Lab** — `base64-encode-decode.html`: encode/decode quando a API exige string opaca ou você lê token no DevTools.

### Security & Crypto

- **Hash Generator** — `gerador-hash.html`: MD5, SHA e afins pra fixture, checksum ou smoke de senha.
- **Validation Unit** — `validador-cpf-cnpj.html`: documento brasileiro no browser, sem colar em site duvidoso.

### Visual Utilities

- **Color Bridge** — `conversor-cores.html`: HEX, RGB, HSL quando o design system e o CSS não batem.

Cada item da nav atualiza título, path mono e iframe. Reload na top bar. Layout `100vh` — sensação de app desktop em HTML estático.

## Por que Alpha não é só badge de marketing

Alpha aqui significa **hub técnico em evolução**: o card **Alpha Access** pede e-mail pra novos módulos de automação e IA (EmailJS/Loom do ecossistema). Quem só quer forjar JSON ignora. Quem quer roadmap entra na lista sem sair do workspace.

O nome também marca posição: oficina de engenharia, não “suite de produtividade genérica”. Compete com **tab excessiva**, não com Postman Enterprise.

## Matrix sem virar cosplay

Fundo `#020617`, indigo `#818cf8`, cyan de status, **Plus Jakarta Sans** + **JetBrains Mono**. O canvas Matrix roda com opacidade baixíssima — atmosfera, não screensaver. O CHANGELOG do ecossistema chama isso de design *Terminal-Chic*; funciona porque o chrome de terminal serve a tarefa (path, reload, status), não só estética.

Diferença prática em relação a um gerador online solto: você troca de JSON pra Base64 pra hash **sem perder o shell**. O módulo muda; o banco de trabalho não.

## Onde isso encaixa com agentes

Ter **MCP Connector** na mesma sidebar que JSON e hash é o ponto. Agente (Cursor, Claude Desktop, pipeline custom) não vive em app isolado — ele come payload, precisa de hash e às vezes de Base64. O DevStudio trata isso como toolchain contínuo.

Pra quem integra Brasil + API: **JSON + Validation Unit + Hash** cobre a maior parte das sessões de “só conferir isso rápido”.

## Para quem é

- Devs que alternam payload, encoding e hash na mesma sessão.
- Quem monta agente e precisa do **MCP** ao alcance do teclado.
- Times BR que validam CPF/CNPJ sem sair do domínio confiável.
- Estúdios que mostram cliente um **utility hub** white-label sem reescrever seis apps.

## Roteiro de dez minutos

1. Abrir **JSON Forge** — colar resposta quebrada de webhook; formatar.
2. Passar string opaca no **Base64 Lab**.
3. Gerar hash da fixture no **Hash Generator**.
4. Se o formulário for BR, bater um CPF de teste na **Validation Unit**.
5. Se sobrar tempo, abrir **MCP Connector** e anotar o que falta no connector do seu agente.

Se no passo 4 você ainda estiver no mesmo layout, o hub pagou o clique.

## Onde abrir

- Hub: [DevStudio Alpha](https://modelos.artesdosul.com/apps/devstudio-alpha.html)
- Apps: [modelos.artesdosul.com/apps/](https://modelos.artesdosul.com/apps/)
- Studio: [artesdosul.com](https://artesdosul.com/)

*🔧 Seis módulos da oficina no reply — colar, validar, voltar ao código.*
