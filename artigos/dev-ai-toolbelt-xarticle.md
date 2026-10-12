# Dev & AI Toolbelt: um hub, cinco ferramentas, zero troca de aba

O desenvolvedor médio não precisa de mais um SaaS com login. Precisa de **um lugar** onde JSON, hash, MCP, validadores brasileiros e catálogo self-hosted abram no mesmo layout — sem perder o contexto da tarefa.

O **Dev & AI Toolbelt** (Artes do Sul, v2.1.0) é exatamente isso: shell estático com sidebar, chrome de terminal e **iframe** que carrega utilitários já existentes em `tools/`. Uma página, vários workspaces; recarregar, abrir em nova aba, status “All Systems Operational” no topo. Parece detalhe de UI; na prática é **arquitetura de produto** para quem vive entre API, agente e deploy local.

## O padrão que vale copiar

Em vez de cinco bookmarks espalhados:

1. **JSON Master & Export** — formatar, inspecionar e exportar payloads (integrações, webhooks, respostas de LLM).
2. **Crypto Hash Workspace** — MD5, SHA, Bcrypt quando você valida senha, assinatura ou fixture de teste.
3. **AI MCP Hub** — registro e exploração ligados ao **Model Context Protocol**; o ponto onde “ferramenta de dev” encontra “stack de agente”.
4. **Self-Hosted Registry** — catálogo de apps open source para rodar na sua infra, sem depender só de cloud fechada.
5. **BR Validators** — CPF, CNPJ, PIX no browser; útil em formulários, fintech leve e automação com dados brasileiros.

O hub não reimplementa tudo. **Orquestra** o que já foi forjado no ecossistema Artes do Sul. Isso reduz manutenção e mantém cada ferramenta evoluindo sozinha — o Toolbelt é a cola.

## Experiência de uso

- **Boot** com JSON Tools por padrão (`workspace://json-processor`).
- Sidebar com categorias **Ferramentas de Codificação** e **DevOps & Local**.
- Área principal com header estilo macOS (dots vermelho/amarelo/verde), título `workspace://…` e ações de **reload** e **pop-out**.
- Loader “BOOTING COMPONENT…” entre trocas — feedback mínimo, sem SPA pesada.
- Mobile: ao trocar ferramenta, scroll suave para o iframe (quem debuga no celular agradece).

Visual: fundo `#020617`, glass cards, acentos sky/cyan/indigo, tipografia **JetBrains Mono** + **Plus Jakarta Sans**. OG preparado para compartilhar como peça de engenharia, não como “mais um gerador online”.

## Onde IA entra de verdade

O destaque não é “IA no marketing”. É o módulo **AI MCP Hub**: protocolo de contexto para modelos, cada vez mais central em Cursor, Claude Desktop e pipelines custom. Ter MCP ao lado de JSON e hash no mesmo hub comunica uma posição: **agente é extensão do toolchain**, não app separado.

Para times que montam integração Brasil + LLM, o par **JSON + BR Validators + MCP** cobre 80% das sessões de “só preciso conferir isso rápido”.

## Growth sem poluir o workspace

Na sidebar há captura de e-mail **Beta Access** (EmailJS + config Loom do ecossistema): convite a scripts novos de automação e IA. Fica contido no card lateral — não interrompe o iframe. Produto utilitário com funil leve; quem só quer formatar JSON ignora, quem quer roadmap entra na lista.

## Limitações honestas

- Ferramentas vivem em paths relativos (`../tools/…`); o hub precisa ser servido no mesmo site (não é um zip offline único sem servidor).
- Links de Documentation/GitHub no rodapé ainda são placeholder (`#`) — o valor hoje está no workspace, não na doc externa linkada.
- Tailwind via CDN: aceitável para hub interno; em hardening de produção você trocaria por build estático.

Nada disso invalida o argumento: **agregador bem desenhado** vale mais que dez tabs abertas.

## Para quem é

- Devs que montam **agentes** e precisam validar JSON e MCP na mesma sessão.
- Consultores e estúdios brasileiros com **CPF/CNPJ/PIX** no fluxo.
- Quem mantém **self-hosted** e quer catálogo ao alcance do teclado.
- Product engineers que mostram cliente um **utility hub** white-label sem reescrever cinco apps.

## Como testar em dois minutos

1. Abrir o Toolbelt no hub de apps Artes do Sul.
2. Passar pelas cinco entradas da sidebar; usar **pop-out** na que você mais usa.
3. Colar um JSON quebrado de uma API real; formatar; em seguida abrir MCP e validar um CPF de teste.

Se na terceira ferramenta você ainda estiver no mesmo layout, o produto cumpriu o papel.

## Fontes

- App: [Dev & AI Toolbelt](https://artesdosul.com/apps/dev-ai-toolbelt.html) (ecossistema Artes do Sul)
- Hub de aplicações: [artesdosul.com/apps/](https://artesdosul.com/apps/)
- Estúdio: [artesdosul.com](https://artesdosul.com/)

*URLs diretas de cada workspace (`tools/`) no primeiro reply deste post.*
