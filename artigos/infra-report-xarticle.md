# Infra Report: auditoria de VPS Linux sem expor o relatório na internet

Quem opera frota em VPS conhece o ciclo: SSH, `ss`, UFW, Docker, um certificado que vence, uma porta de banco que “só por um momento” ficou em `0.0.0.0`. O [Infra Report](https://github.com/araguaci/infra-report) transforma essa checagem solta em um ritual repetível — score, achados priorizados e HTML para leitura humana — **sem publicar o resultado em site público**.

## O problema

Ferramentas de monitoramento olham para cima (uptime, métricas). Checklists de hardening olham para o lado (CIS, benchmarks). Falta o meio-termo: um script que você roda **no próprio host**, com deps mínimas, e que devolve um pacote local (JSON + HTML) para abrir via túnel SSH ou `scp`.

O relatório embute o JSON na página. Não precisa de backend. Não precisa de CDN de fonte. Não precisa liberar porta alta no firewall do provedor só para “ver o score”.

## O que a auditoria cobre

Em uma passagem o `infra-report` avalia:

- Sistema (CPU, memória, disco, load)
- Portas em escuta e mapa de serviços sensíveis
- Firewall (ufw / firewalld / iptables / nft)
- SSH efetivo (`sshd -T` quando disponível) e fail2ban
- Probes HTTP/HTTPS e TLS
- Docker (containers privilegiados, API 2375)
- Updates por gerenciador (apt, dnf, yum, apk, zypper)

A saída padrão fica em `/tmp/infra-report.json` e `/tmp/infra-report.html`. O score penaliza críticos e avisos; as recomendações sobem CRIT antes de WARN.

## Instalação

```bash
git clone https://github.com/araguaci/infra-report.git
cd infra-report
sudo bash install.sh
sudo infra-report --json /tmp/infra-report.json
```

Deps: Bash 4+, Python 3.8+, `ss`, `curl`, `openssl`. Docker e UFW são opcionais.

Para ver o HTML com segurança:

```bash
# no servidor
cd /tmp && python3 -m http.server 8765 --bind 127.0.0.1

# na sua máquina
ssh -N -L 8765:127.0.0.1:8765 USER@SEU_HOST
# browser: http://127.0.0.1:8765/infra-report.html
```

## Frota: vários hosts

No diretório `vps/` do repositório (uso local), cada host gera um JSON. O `build_fleet.py` monta uma página comparativa e sugere papéis — produção, staging, laboratório — pela aptidão (postura + SSH + firewall − exposição). Esses artefatos **não devem ir para o GitHub**: contêm mapa de portas e postura de segurança.

## Lições que o código já internalizou

1. **Symlink ≠ SCRIPT_DIR.** Instalar com symlink puro em `/usr/local/bin` faz o script procurar o renderizador na pasta errada. O install gera um wrapper com `exec` no `.sh` real.
2. **TLS com SNI de IP trava.** O probe `openssl` usa SNI amigável (`localhost`) quando o alvo é endereço literal.
3. **Relatório é confidencial.** Checklist do README: bind em `127.0.0.1`, túnel SSH, sem liberar a porta do relatório no painel do provedor.

## Para quem é

- Quem sustenta VPS Debian/Ubuntu/RHEL-like e quer um ritual semanal de postura
- Times que já usam Portainer/n8n/Docker e precisam enxergar exposição sem montar um SIEM
- Quem documenta frota (lab vs produção) e precisa de evidência, não de feeling

## O que ele não é

Não substitui WAF, EDR nem auditoria formal. Não é agente remoto. Não deve ser o runtime de produto do cliente. É ferramenta de ops soberana: roda onde você manda, grava onde você manda, e some do PATH com `uninstall.sh` quando não precisar mais.

## Comece agora

- Código: [github.com/araguaci/infra-report](https://github.com/araguaci/infra-report)
- Landing: [artesdosul.com/infra-report](https://artesdosul.com/infra-report/)
- Dev Hub: [dev.artesdosul.com](https://dev.artesdosul.com/)

```bash
sudo bash install.sh && sudo infra-report --version
```

Se a comunidade adaptar para Alpine mínimo ou probes extras (WireGuard, jails do Fail2ban), PRs e forks são bem-vindos — desde que o HTML continue **local** e o README continue claro: não publique o relatório na internet.
