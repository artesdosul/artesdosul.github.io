# ESP-NOW Hub: Comunicação Sem Fio de Baixa Latência e Sensores Autônomos Sem Roteador

A maioria das automações residenciais e projetos de Internet das Coisas (IoT) depende de roteadores Wi-Fi convencionais. No entanto, o processo de conexão TCP/IP, negociação DHCP e autenticação WPA2 pode levar vários segundos, consumindo quantidades proibitivas de energia em nós sensores que precisam funcionar por anos com uma única bateria.

O **ESP-NOW Hub** ([espnow.artesdosul.com](https://espnow.artesdosul.com/)) é o portal especializado da Artes do Sul criado para desmistificar o protocolo **ESP-NOW** — uma tecnologia desenvolvida pela Espressif que permite a troca de pacotes de dados ponto-a-ponto diretamente pela camada MAC de rádio de 2.4 GHz, sem necessidade de handshake de rede.

## Por que o ESP-NOW é uma Revolução para Makers e Engenheiros?

1. **Latência Quase Zero**: O tempo de envio e confirmação de um pacote de até 250 bytes ocorre tipicamente em menos de 5 milissegundos.
2. **Consumo Energético Mínimo**: Um nó ESP32 pode acordar do modo Deep Sleep, ler um sensor analógico, disparar o pacote ESP-NOW e retornar ao sono profundo em menos de 50 milissegundos.
3. **Independência de Infraestrutura**: Os nós comunicam-se no meio de uma lavoura, em trilhas ou em barcos sem necessidade de roteador, modem 4G ou servidor central.

## Casos de Uso Documentados no Portal

O ESP-NOW Hub fornece arquiteturas completas e testadas em bancada para:

- **Nós Sensores com Baterias Solares**: Monitoramento contínuo de umidade de solo e temperatura com recarga via micro painéis fotovoltaicos.
- **Controles Remotos Industriais e Joysticks**: Transmissão bidirecional de comandos com retorno háptico ou telemetria em display OLED.
- **Gateways Híbridos ESP-NOW para Home Assistant**: Nós concentradores que recebem dezenas de pacotes ESP-NOW e os publicam via MQTT ou REST API em uma rede local.
- **Acionamento de Emergência e Relés de Segurança**: Envio com confirmação (ACK) e criptografia AES-128 nativa em nível de hardware.

## Criptografia e Segurança

Diferente de soluções sem fio simples de 433 MHz que sofrem com ataques de repetição (replay attacks), o ESP-NOW suporta chaves de criptografia de chave primária (PMK) e chaves de canal local (LMK), garantindo que apenas dispositivos pareados aceitem comandos críticos de acionamento.

Explore a documentação técnica, códigos prontos e diagramas de topologia em: [https://espnow.artesdosul.com/](https://espnow.artesdosul.com/)
