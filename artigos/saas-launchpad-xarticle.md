# SaaS Launchpad: cinco ferramentas, um fluxo — do canvas ao checklist de lançamento

Fundador SaaS no Brasil costuma ter Notion aberto, planilha de MRR no Drive e um “questionário de validação” que ninguém respondeu. O problema não é falta de conteúdo no YouTube. É **fragmentação**: cada etapa vive em um link diferente, sem sequência.

O **SaaS Launchpad** (Artes do Sul, v1.0.4) resolve isso como **hub de lançamento**: sidebar com fluxo em 5 passos, área principal em iframe e ferramentas reais já existentes em `tools/`. Uma sessão, um layout, zero “onde era aquele ROI de novo?”.

## O fluxo em cinco cliques

1. **Visão & Canvas** — `modelo-canvas-saas.html`: modelo estratégico antes de codar feature.
2. **Questionário** — `validar-ideia-saas.html`: validação estruturada, não opinião de amigo.
3. **Projeção Financeira** — `calcular-ideia-saas.html`: mercado e números do negócio.
4. **Cálculo de Viabilidade** — `calculadora-roi.html`: ROI explícito para convencer você (ou investidor cético).
5. **Execução** — `checklist-saas.html`: planilha de lançamento para não esquecer DNS, billing e primeira demo.

Cada passo atualiza o header (ícone + título), destaca o botão ativo com gradiente azul/roxo e carrega a ferramenta no iframe. **Reload** e **pop-out** para quem prefere tela cheia — mesmo padrão do Dev & AI Toolbelt, mas o público aqui é **founder**, não dev ops.

## Por que iframe em vez de “mais um Notion”

As ferramentas já foram forjadas no ecossistema Artes do Sul. O Launchpad não reescreve tudo; **orquestra**. Manutenção fica nas páginas `tools/*`; o hub só muda rota e narrativa.

Para quem ensina ou mentora SaaS, isso é playbook embutido: você guia o cliente pelos cinco botões na ordem. Para quem está sozinho, é GPS — desde que você tenha disciplina de não pular direto para o checklist.

## Simulador de aceleração (MRR + churn)

Abaixo do workspace há a seção **“Simule sua Aceleração”**:

- Slider de **MRR atual** (R$ 1k–100k)
- Slider de **churn** (1–20%)
- Projeção em 12 meses com narrativa de mentoria (+% de aceleração estimada)
- Formulário para **“Baixar Meu Roadmap”** (lead magnet em PDF)

É growth engineering na landing: o founder brinca com os números antes de deixar e-mail. Não substitui modelagem financeira séria — **qualifica** quem já sente dor de receita e retenção.

Na sidebar, um segundo funil menor pede e-mail para **“jornada de mentoria”** — upsell explícito sem esconder que Artes do Sul vende escala, não só utilitário grátis.

## Estética e sinais de produto

- Paleta **Cyber-Growth**: fundo `#05070a`, azul `#3b82f6`, verde `#10b981`, roxo `#8b5cf6`
- Glass cards, navbar fixa com badge “IDEIA VALIDADA” (estado aspiracional — você define quando merece acreditar)
- Tipografia **Plus Jakarta Sans**, footer com versão e estética nomeada
- Integração **EmailJS + Loom** para leads consistentes com o resto do hub [modelos.artesdosul.com/apps/](https://modelos.artesdosul.com/apps/)

## Para quem é

- Primeiro SaaS B2B ou micro-SaaS no Brasil.
- Consultor que quer **um link** para mandar o cliente antes da call de discovery.
- Studio que precisa mostrar método além de portfólio bonito.

Não é substituto de PMF. É **estrutura** para não lançar no escuro.

## Roteiro de 30 minutos (founder)

1. Abrir o Launchpad e completar **Canvas** com uma ideia real (não “app de IA genérico”).
2. Passar o **Questionário** sem mentir nas respostas.
3. Preencher **Projeção** e **ROI** com premissas pessimistas.
4. Marcar o **Checklist** e anotar três itens vermelhos.
5. Ajustar MRR/churn no simulador e ver se a mentoria faz sentido — ou se o problema é produto, não funil.

Se você termina no passo 4 com checklist vazio, o Launchpad cumpriu o papel: mostrou que você ainda não está pronto para anúncio — e isso também é vitória.

## Onde testar

- Hub: [SaaS Launchpad](https://modelos.artesdosul.com/apps/saas-launchpad.html)
- Studio: [artesdosul.com](https://artesdosul.com/)

*🚀 Canvas até checklist no reply — lance SaaS com sequência, não com sorte.*
