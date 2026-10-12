# Transparentia Hub: inteligência fiscal sem PDF de 400 páginas

Dados públicos do pacto federativo existem. O problema é a forma: planilha solta, portal lento, relatório que ninguém abre no celular. Quem quer comparar arrecadação, repasse e privilégio remuneratório acaba perdendo a pergunta no meio do download.

O **Transparentia Hub** (Artes do Sul) é a camada **Data Intelligence** do ecossistema: header glass com `DATA_STREAM: ACTIVE` e `OpenData Connected`, sidebar em duas bancadas — **Visão Fiscal** e **Reformas & Futuro** — e workspace com path `masterpiece://…` que carrega dashboards já forjados em `tools/`. Loader `ANALYZING_DATA_SET...`. Sem login pra explorar o mapa.

## Seis visões, um shell

### Visão Fiscal

- **Assimetria Fiscal** — `assimetria-fiscal.html`: pacto federativo em tensão; boot padrão do hub (`masterpiece://fiscal/asymmetry-layer`).
- **Disparidade Regional** — `disparidade-fiscal.html`: arrecadação versus repasse no território.
- **Arquitetura do Privilégio** — `dashboard_disparidade_fiscal.html`: leitura de supersalários (recorte 2023) sem eufemismo de slide corporativo.

### Reformas & Futuro

- **Projeto Brasil** — `projeto-brasil.html`: eixos estratégicos de governança.
- **Brasil 2025** — `projeto2025-brasil.html`: visão de longo prazo, não só diagnóstico.
- **Metas ODS** — `projeto-brasil-ods.html`: sustentabilidade e governança no mesmo fio.

Cada botão atualiza título, path mono e iframe. Reload e **pop-out** no chrome estilo janela. No mobile, a troca faz scroll até o viewport — quem lê no ônibus não fica preso na sidebar.

## Por que “transparência” aqui não é slogan

Transparência de verdade é **navegável**. O hub não republica o Diário Oficial; orquestra análises que já existem no ecossistema e as coloca sob o mesmo contrato visual: teal `#5eead4` sobre `#020617`, glass, mono JetBrains, badge `PROJETO_BRASIL_LIVE`.

O card **Solicitar Dados** (“Pedir Relatório”) é funil leve pra protocolo de relatórios fiscais customizados — EmailJS/Loom. Quem só quer ver assimetria ignora. Quem precisa de recorte sob medida deixa o e-mail sem sair do dashboard.

Footer marca `TRANSPARENTIA_UNIT` e sinais de integridade (`VERIFIED_BLOCK_CHAIN`, `REALTIME_STREAMS`) como linguagem de produto — o valor está nos seis módulos, não no marketing do rodapé.

## GovTech sem burocracia de interface

Comparado a portais oficiais inchados, o padrão é o mesmo dos outros hubs Artes do Sul: **agregar, não reimplementar**. Assimetria e disparidade ficam a um clique de Projeto Brasil e ODS. O argumento político e o argumento de design se encontram: se o cidadão (ou o analista) precisa de seis URLs, a narrativa se fragmenta.

Há limitação honesta: links `Legislative_API` / `Fiscal_Reports` no footer ainda são placeholder (`#`). O workspace é o produto hoje; a API é intenção de roadmap.

## Para quem é

- Jornalistas e pesquisadores que cruzam pacto federativo e remuneração pública.
- Educadores e cursos de políticas públicas que precisam de **um link** com seis entradas.
- Cidadãos técnicos que preferem dashboard a PDF.
- Times GovTech / consultoria que apresentam diagnóstico fiscal com visual coerente.

## Roteiro de quinze minutos

1. Abrir **Assimetria Fiscal** — anotar a tensão do pacto que mais te incomoda.
2. Ir em **Disparidade Regional** — arrecadação vs repasse no seu estado (ou no case do cliente).
3. Abrir **Arquitetura do Privilégio** — confrontar o diagnóstico com o teto constitucional na prática.
4. Fechar com **Projeto Brasil** ou **ODS** — transformar raiva de gráfico em pergunta de reforma.

Se no passo 3 você ainda estiver no mesmo shell, o hub fez o trabalho de um portal inteiro.

## Onde abrir

- Hub: [Transparentia / Transparência Fiscal](https://modelos.artesdosul.com/apps/portal-transparencia.html)
- Apps: [modelos.artesdosul.com/apps/](https://modelos.artesdosul.com/apps/)
- Studio: [artesdosul.com](https://artesdosul.com/)

*📊 Seis dashboards fiscais no reply — dados públicos que viram decisão.*
