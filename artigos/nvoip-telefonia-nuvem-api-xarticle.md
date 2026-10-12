# Telefonia em Nuvem e Telecom Programável: Como Operar Nvoip com Asterisk, APIs e n8n

A telefonia corporativa mudou de patamar. Aquela era em que gerenciar ramais exigia centrais telefônicas físicas presas na parede do rack, contratos inflexíveis de linhas E1 e técnicos cobrando por hora para qualquer alteração de plano de discagem ficou para trás.

Hoje, operadoras em nuvem como a Nvoip transformaram a voz em infraestrutura programável (CPaaS). Com um único provedor, você conecta servidores Asterisk/Issabel, dispara torpedos de voz com inteligência artificial, envia SMS corporativo e interage com a API oficial do WhatsApp da Meta — tudo orquestrado por APIs REST e nós visuais no n8n.

Neste guia prático, compilamos a engenharia essencial da base de conhecimento da Nvoip para você colocar seu PABX e suas automações em produção.

---

## 1. Tronco SIP: Conectando Asterisk, Issabel e FreePBX

A espinha dorsal de qualquer operação de PABX próprio é o Tronco SIP. Ele é o túnel que faz sua central IP falar com a rede pública de telefonia (PSTN) através da Nvoip.

### Parâmetros Críticos de Estabilidade:
- **Host Oficial:** `app.nvoip.com.br` na porta UDP 5060.
- **Codecs de Áudio:** Priorize `ulaw` e `alaw` (G.711). Eles entregam qualidade cristalina com baixo consumo de processamento no servidor.
- **Session Timers (`session-timers=refuse`):** Este é o parâmetro de ouro. Roteadores com CGNAT ou firewalls mal configurados costumam derrubar ligações após 15 a 30 minutos por timeout de sessão UDP. Recusar o session timer no SIP peer mantém a chamada viva até o desligamento voluntário.
- **Keepalive e Qualify:** Mantenha `keepalive=yes` e `qualify=yes` para que seu PBX monitore a latência até o SBC da Nvoip e mantenha as portas NAT abertas.

Com a string de registro devidamente autenticada, seu número DID (número virtual) passa a tocar diretamente no plano de discagem do seu servidor, roteando para filas de atendimento, URAs inteligentes ou gravações automáticas.

---

## 2. API REST v3: Voz e Mensageria como Código

Nem tudo precisa passar por um softphone. Grande parte das operações modernas de atendimento e vendas acontece de forma 100% invisível através de requisições HTTPS.

A Nvoip adota o padrão OAuth2 com emissão de Bearer Tokens para proteção de todos os endpoints:

### O Que Você Pode Fazer via API:
- **Click-to-Call Imediato:** Quando um lead preenche seu formulário de contato, a API gera uma chamada automática que conecta o operador ao lead em segundos, acabando com o tempo ocioso.
- **Torpedo de Voz Interativo (TTS + DTMF):** O sistema sintetiza uma mensagem de voz em português natural e aguarda a digitação de um dígito no teclado do celular (ex: "Digite 1 para confirmar seu horário ou 2 para remarcar"). A resposta é enviada via webhook para o seu backend.
- **SMS Corporativo Transacional:** Envio de códigos de segurança (OTP), atualizações de protocolo de suporte e alertas de emergência.
- **WhatsApp Cloud API Oficial:** Envio de mensagens HSM homologadas pela Meta, com suporte total aos novos contratos tipados e identificadores BSUID (Business-Scoped User ID).

---

## 3. Automação Sem Código: O Node n8n da Nvoip

Para equipes que querem velocidade sem escrever código boilerplate para cada webhook, o pacote `@nvoip/n8n-nodes-nvoip` resolve o problema.

Ele permite criar três fluxos operacionais de altíssimo retorno:

1. **Callback Automático de Vendas:** Novo lead no CRM dispara chamada direta entre o consultor e o cliente. Reduz o tempo de primeiro contato para menos de 1 minuto.
2. **Notificação Multicanal com Fallback:** Envia notificação por WhatsApp. Se o número não tiver WhatsApp ou houver falha de rede, um fallback automático dispara um SMS no mesmo instante.
3. **Pesquisa NPS por Voz:** Ao encerrar um chamado no suporte, o sistema liga para o cliente, faz a pergunta de satisfação e registra a nota de 1 a 5 diretamente na ficha do cliente.

---

## 4. Governança e DIDs sob Demanda

Outro diferencial técnico é a possibilidade de cotar, reservar e comprar números fixos virtuais (DIDs) em qualquer DDD do país através da API. Uma software house ou agência pode automatizar o provisionamento de centrais telefônicas completas para novos clientes em minutos, com subcontas isoladas e gestão independente de saldo.

---

## Manual Completo e Parâmetros de Produção

Todos os arquivos de configuração (dialplans, exemplos em cURL, scripts em shell e fluxos exportados do n8n) estão documentados na [Central de Manuais Nvoip](https://artesdosul.com/suporte/nvoip/) no portal Artes do Sul.
