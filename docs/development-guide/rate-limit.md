# Taxa limite (Rate limit)

Tem como objetivo controlar a taxa de tráfego ou solicitações que um servidor recebe. Geralmente é usado para evitar que um único cliente ou grupo de clientes sobrecarregue o servidor com muitas solicitações, o que poderia interromper a capacidade do servidor de responder a outros clientes em tempo hábil.

Para as aplicações do grupo Magalu, o limite de taxa para o servidor é diferente entre os ambientes de produção e sandbox, seguem as definições:

## Produção

```
GET: 2.000 solicitações por minuto
POST: 1.000 solicitações por minuto
PUT: 1.000 solicitações por minuto
DELETE: 100 solicitações por minuto
```

## Sandbox

```
GET: 1.000 solicitações por minuto
POST: 500 solicitações por minuto
PUT: 500  solicitações por minuto
DELETE: 50 solicitações por minuto
```

Se um cliente exceder esses limites, o servidor responderá com uma mensagem de erro 429 - `Too Many Request`. Para maiores informações, [clique aqui](return-code/#erros-de-client---4xx).
