# Identificador de requisições (X-Request-ID)

`X-Request-ID` é um header que vem no **retorno** de uma chamada para as APIs e  ajudará em casos de debug e verificação de LOGs. É muito imporante que ao solicitar um [suporte](/docs/support/) seja informado o X-Request-ID.

## Exemplo onde encontrar o x-request-id no Postman
![Exemplo onde encontrar o x-request-id no Postman](/img/example-x-request-id.gif)

_Um exemplo do uso de X-Request-ID:_

```shell
GET /v0/orders HTTP/1.1
Host: api.magalu.com
X-Request-Id: e9f485cc-5b67-4791-a723-919c5796a9f0
```

:::info
    O valor do header pode ser gerado pelo client, mas caso não seja fornecido, nós criaremos automaticamente. Recomendamos que as aplicações salvem esse valor para facilitar a identificação dos request em caso de problemas. Deve ser sempre um [UUID](/docs/development-guide/standard-fields#uuid)
:::