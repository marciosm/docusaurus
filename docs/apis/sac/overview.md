# Serviço de Atendimento ao cliente

## O que é

Este documento descreve o conjunto de APIs chamado de "Serviço de Atendimento ao cliente" (Customer Service), o qual suporta a funcionalidade para a operar os protocolos de atendimento entre vendedores e os clientes dos canais de venda. Essa ferramenta visa fornecer aos vendedores um novo meio de atendimento a todos os tipos de protocolos criados pelo nosso serviço de atendimento ao cliente, tracking dos protocolos e mensagens transmitidas dentro dos protocolos.

Os vendedores são responsáveis pelo atendimento dos protocolos que são abertos pelos canais de vendas. Os canais de venda são as plataformas de e-commerce que ofertam e realizam as vendas dos produtos como o Magalu, Netshoes e outros.

Atualmente estará disponível apenas o canal de vendas "Magalu - Magazine Luiza" (https://www.magazineluiza.com.br/), sendo assim, a funcionalidade estará disponível apenas para os vendedores que contratarem o serviço de Marketplace do Magalu. No futuro, novos canais de venda poderão ser adicionados.

Se você já possui integração com o Magalu através das APIs antigas (Integracommerce), seu client já possui os scopes para o Serviço de Atendimento ao Cliente. Porém, ainda é necessário o consentimento dos usuários, para isso implemente o processo de [autenticação e autorização](/docs/first-steps/create-an-application/authentication-authorization).

Se você não possui integração com as APIs antigas, basta seguir o processo de solicitação de [criação de aplicação](/docs/first-steps/create-an-application/create-application).


## Escopos necessários

Para a utilização das APIs os seguintes escopos poderão ser necessários:

| Valor | Descrição |
|----|----|
| `open:tickets-seller:read` | Permite a leitura de protocolos. |
| `open:tickets-seller:write` | Permite atualização de protocolos. |
| `open:ticket-messages-seller:read` | Permite a leitura de mensagens dos protocolos. |
| `open:ticket-messages-seller:write` | Permite a criação de mensagens em protocolos. |

## Ambientes
Ambientes diponives: [Ambientes](/docs/first-steps/environment)