# Homelab Soberano: Como Construir sua Própria Nuvem Doméstica com Proxmox, Docker e WireGuard

Confiar todos os aspectos da vida digital a poucas corporações de tecnologia (Big Tech) traz conveniência imediata, mas cobra um preço elevado em privacidade, custos recorrentes de assinaturas e vulnerabilidade a cancelamentos arbitrários de contas.

O portal **Homelab Soberano** ([homelab.artesdosul.com](https://homelab.artesdosul.com/)) é o manifesto e guia prático da Artes do Sul para quem deseja recuperar a soberania sobre seus dados, arquivos, senhas e automações através de servidores domésticos de alta eficiência e custo acessível.

## Por que Construir um Homelab em 2026?

1. **Privacidade Inegociável**: Seus arquivos, fotos e credenciais residem fisicamente sob seu teto, criptografados e inacessíveis a terceiros.
2. **Economia Financeira Real**: A substituição de planos de nuvem, gerenciadores de senhas pagos e serviços de streaming por alternativas open-source amortiza o custo do hardware em menos de um ano.
3. **Ambiente de Aprendizado Avançado**: Prática real com Linux, redes avançadas, segurança da informação, contêineres e orquestração.

## A Arquitetura Recomendada: Proxmox VE + Docker

O portal orienta a montagem de um ambiente em camadas balanceadas entre facilidade de manutenção e desempenho:

- **Hypervisor Proxmox VE**: Virtualização bare-metal que permite isolar serviços em Máquinas Virtuais (VMs) leves e Contêineres LXC com consumo mínimo de memória RAM.
- **Camada de Contêineres Docker**: Orquestração simplificada com Docker Compose e gerenciamento visual via Portainer ou Dockge.
- **DNS & Bloqueio de Anúncios (Pi-hole / AdGuard Home)**: Filtragem de rastreadores e anúncios em nível de rede para todos os celulares, TVs e computadores da casa.
- **Cofre de Senhas Local (Vaultwarden)**: Sincronização segura de senhas, chaves 2FA e notas confidenciais com clientes móveis e extensões de navegador.
- **Automação Residencial Total (Home Assistant)**: Controle de iluminação, sensores e câmeras com processamento 100% local, independente de servidores na nuvem.

## Conectividade Remota Sem Riscos de Segurança

Um dos maiores erros de iniciantes é abrir portas no roteador (Port Forwarding) sem proteção. O Homelab Soberano ensina a implementar:

- Redes Mesh VPN seguras com **Tailscale / Headscale** ou **WireGuard**.
- Servidores reversos com **Nginx Proxy Manager** ou **Traefik** integrados com certificados SSL Let's Encrypt automáticos.
- Autenticação de dois fatores (2FA) e isolamento de rede através de VLANs para dispositivos IoT não confiáveis.

Acesse o guia completo e monte seu servidor soberano: [https://homelab.artesdosul.com/](https://homelab.artesdosul.com/)
