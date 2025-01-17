# MaaS Account

A identificação do seller é feita através do `tenant_id` e não do `seller_id`, uma vez que as APIs Publicas são baseadas 100% no ID Magalu.

Portanto faz-se necessário o de/para de `seller_id` para `tenant_id`. Para isso, no MaaS Account, informa-se um `seller_id` na chamada e recebe-se o `tenant_id` no retorno.

## Ambientes:
| Ambiente                    | URL                                       |
|-----------------------------|-------------------------------------------|
| MaaS Account Produção       | https://api-account.magalu.com            |
| MaaS Account Staging        | https://api-account-staging.luizalabs.com |
| Keycloak Produção           | https://id-b2b.magazineluiza.com.br       |
| Keycloak Staging            | https://keycloak-staging.luizalabs.com    |

## Token Keycloack
O primeiro passo é obter o `token` para conseguir fazer as chamadas no MaaS Account, para isso é necessário ter um `client_id` e `client_secret` válido no KeyCloak.

_Chamada_:

```shell
curl --location --request POST '{KEYCLOAK_URL}/auth/realms/B2B/protocol/openid-connect/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'client_id=<CLIENT_ID>' \
--data-urlencode 'client_secret=<CLIENT_SECRET>' \
--data-urlencode 'grant_type=client_credentials'
```

Na resposta, será retornado um `access_token` necessário para realizar as requisições.

_Resposta_:

```json
{
    "access_token": "<ACCESS_TOKEN>",
    "expires_in": "<EXPIRES_IN>",
    "refresh_expires_in": "<REFRESH_EXPIRES_IN>",
    "refresh_token": "<REFRESH_TOKEN>",
    "token_type": "<TOKEN_TYPE>",
    "not-before-policy": 0,
    "session_state": "<SESSION_STATE>",
    "scope": "<SCOPES>"
}
```

## Buscar tenant_id
Requisição para buscar um `tenant_id` baseado na `org` (identificador do seller `seller_id`)

**Parâmetros da URL**

| Campo | Tipo | Descrição | Obrigatório |
|-------------------|--------|-------------------------------------|-------|
| `sellerIdOpenApi` | string | Identificação do seller (seller_id) | _Sim_ |

_Chamada_:

```shell
curl --location --request GET '{MAAS_ACCOUNT_URL}/api/v3/sellers/channel/magazineluiza/idmagalu?sellerIdOpenApi=<SELLER_ID>' \
--header 'accept: application/json' \
--header 'Authorization: Bearer <ACCESS_TOKEN>'
```

_Resposta_:

```json
{
    "isPending": false,
    "services": [
        "example",
    ],
    "active": true,
    "provisionerStatus": true,
    "_id": "60f97c08114150445b3fd742",
    "idIntegration": "seller",
    "__v": 8,
    "address": {
        "_id": "6488af1c1236f7002434f597",
        "zipCode": "14815000",
        "street": "AV SAO JOAO",
        "number": "123",
        "complement": "",
        "district": "CENTRO",
        "city": "IBATE",
        "state": "SP"
    },
    "cnpj": "123123123123",
    "createdAt": "2021-07-22T14:09:12.370Z",
    "createdBy": "0e3433e6-8d20-4537-bdba-8bb25a411aaf",
    "financialEmail": "seller@gmail.com",
    "ieFree": 1,
    "legalName": "JOAO MATEUS",
    "phones": [
        {
            "_id": "123123123123123",
            "number": "123023123123"
        }
    ],
    "tradingName": "Seller Nome",
    "updatedAt": "2023-06-27T20:05:59.648Z",
    "integrationInfo": {
        "_id": "6488af1c1236f7002434f595",
        "erp": "Api",
        "platform": "PTS"
    },
    "channel": "magazineluiza",
    "permissions": [
        {
            "_id": "6272b3bf8dfcf20013a58bd0",
            "service": "6001976727c1e5bc7cda57d0",
            "key": "PRODUCT_CREATE"
        },
	...
    ],
    "changedStatusDetails": "",
    "tenantIdMagalu": "GENPUB.ee872750-2d6d-4fa5-ab4a-32c13cba6e3e",
    "id": "60f97c08114150445b3fd742"
}
```

## Buscar seller_id
Requisição para buscar um `org` (nome do seller `seller_id`) baseado no `tenant_id`

**Parâmetros da URL**

| Campo | Tipo | Descrição | Obrigatório |
|------------------|--------|---------------------------------------|-------|
| `tenantIdMagalu` | string | Identificação do seller (`tenant_id`) | _Sim_ |

_Chamada_:

```shell
curl --location --request GET 'https://api-account-staging.luizalabs.com/api/v3/sellers/channel/magazineluiza/idmagalu?tenantIdMagalu=<TENANT_ID>' \
--header 'accept: application/json' \
--header 'Authorization: Bearer <Access Token>'
```

_Resposta_:

```json
{
    "isPending": false,
    "services": [
        "example",
    ],
    "active": true,
    "provisionerStatus": true,
    "_id": "60f97c08114150445b3fd742",
    "idIntegration": "seller",
    "__v": 8,
    "address": {
        "_id": "6488af1c1236f7002434f597",
        "zipCode": "14815000",
        "street": "AV SAO JOAO",
        "number": "123",
        "complement": "",
        "district": "CENTRO",
        "city": "IBATE",
        "state": "SP"
    },
    "cnpj": "123123123123",
    "createdAt": "2021-07-22T14:09:12.370Z",
    "createdBy": "0e3433e6-8d20-4537-bdba-8bb25a411aaf",
    "financialEmail": "seller@gmail.com",
    "ieFree": 1,
    "legalName": "JOAO MATEUS",
    "phones": [
        {
            "_id": "123123123123123",
            "number": "123023123123"
        }
    ],
    "tradingName": "Seller Nome",
    "updatedAt": "2023-06-27T20:05:59.648Z",
    "integrationInfo": {
        "_id": "6488af1c1236f7002434f595",
        "erp": "Api",
        "platform": "PTS"
    },
    "channel": "magazineluiza",
    "permissions": [
        {
            "_id": "6272b3bf8dfcf20013a58bd0",
            "service": "6001976727c1e5bc7cda57d0",
            "key": "PRODUCT_CREATE"
        },
	...
    ],
    "changedStatusDetails": "",
    "tenantIdMagalu": "GENPUB.ee872750-2d6d-4fa5-ab4a-32c13cba6e3e",
    "id": "60f97c08114150445b3fd742"
}
```