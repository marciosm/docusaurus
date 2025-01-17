# Estrutura de erros

## Estrutura da mensagem de retorno

Os campos da tabela abaixo compõem a estrutura principal do retorno da chamada quando houver algum erro.

| Campo | Descrição | Obrigatório |
|-------|-----------|-------------|
| `slug` | Identificação do erro que representa o cenário de negócio em questão. | _Sim_ |
| `message` | Mensagem descritiva do erro ocorrido. | _Sim_ |
| `details` | Detalhamento do erro ocorrido. | _Não_ |

## Exemplos

#### Erro 400 - Bad Resquest

```json
{
   "slug":"BAD_REQUEST",
   "message":"Bad Resquest",
   "details":[
      {
         "field":"name",
         "location":"query",
         "slug":"INVALID_PARAMETER",
         "message":"Invalid parameter"
      }
   ]
}
```

#### Erro 401 - Unauthorized

```json
{
  "slug": "UNAUTHORIZED",
  "message": "Unauthorized"
}
```

#### Erro 403 - Forbidden

```json
{
  "slug": "FORBIDDEN",
  "message": "Forbidden"
}
```

#### Erro 404 - Not Found

```json
{
  "slug": "NOT_FOUND",
  "message": "Not found"
}
```

#### Erro 409 - Conflict

```json
{
   "slug":"CONFLICT",
   "message":"Conflict",
   "details":[
      {
         "field":"condition",
         "location":"body",
         "slug":"ENTITY_WITH_SAME_KEY_ALREADY_EXISTS",
         "message":"There is already an condition"
      }
   ]
}
```

#### Erro 422 - Unprocessable Entity

```json
{
   "slug":"UNPROCESSABLE_ENTITY",
   "message":"Unprocessable entity",
   "details":[
      {
         "field":"condition",
         "location":"body",
         "slug":"INVALID_PARAMETER_VALUE",
         "message":"Invalid condition type"
      }
   ]
}
```

#### Erro 429 - Too Many Requests

```json
{
  "slug": "TOO_MANY_REQUESTS",
  "message": "You have sent too many requests in a given amount of time"
}
```

#### Erro 500 - Internal Server Error

```json
{
  "slug": "SERVER_ERROR",
  "message": "Internal server error"
}
```

#### Erro 502 - Bad Gateway

```json
{
  "slug": "BAD_GATEWAY",
  "message": "Bad gateway"
}
```

#### Erro 503 - Service Unavailable

```json
{
  "slug": "SERVICE_UNAVAILABLE",
  "message": "Service unavailable"
}
```

#### Erro 504 - Gateway Timeout

```json
{
  "slug": "GATEWAY_TIMEOUT",
  "message": "Gateway timeout"
}
```
