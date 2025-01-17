# Tipos de campos

A partir do pressuposto de que os tipos de campos fazem parte do contrato da API, entendemos que estes precisam ser claros, objetivos e estruturados.

Portanto, todos os projetos incluídos neste portal realizão a utilização desse padrão de tipos de campos.

## Data/hora

Em campos de data/hora utilizamos o padrão [ISO 8601](https://pt.wikipedia.org/wiki/ISO_8601). Caso não for possível e haja uma forte justificativa, utilize o timezone UTC.

_Exemplos_:

| Tipo do campo | Formato | Timezone |
|-------|-----------|-------------|
| `data` | YYYY-MM-DD | Local do servidor |
| `hora` | hh-mm-ssZ | UTC |
| `data/hora` | YYYY-MM-DDThh:mm:ssZ | UTC |

## Moeda

Em campos de valores monetários, indique qual é a moeda através do campo `currency`. Esse campo deve ser preenchido com siglas definidas no padrão [ISO 4217](https://pt.wikipedia.org/wiki/ISO_4217) (Sempre utilize códigos com letras maiúsculas).

_Exemplos_:

| Moeda | Sigla |
|-------|-----------|
| real | `BRL` |
| dólar americano | `USD` |
| euro | `EUR` |

:::info

    Para outros tipos de moeda, consulte códigos [ISO](https://pt.wikipedia.org/wiki/ISO_4217#C%C3%B3digos_ISO_para_moedas) para moedas.
:::

O campo `normalizer` deve ser utilizado para normalizar uma quantidade para unidades de `currency`. Consideremos o seguinte objeto:

```json
{
  "money": {
    "amount": 100,
    "normalizer": 100,
    "currency": "USD"
  }
}
```

Temos amount = 100, normalizer=100 e currency=USD. Para interpretar os valores, devemos fazer a seguinte operação:

```
currency_units = money.amount / money.normalizer
currency_units = 100 / 100
currency_units = 1

> 1 USD
```

No exemplo acima, o normalizer ser 100 significa que o valor de amount estava em centavos de dólar e que para voltar a uma unidade de currency, no caso dólar, o valor de amount deve ser divido por 100.

## UUID

Em campos do tipo UUID utilizamos o padrão versão 4, descrito na RFC 4122.  
Exemplo: `a04ab1cf-3bac-419a-a3e1-da615e242bd2`  
Maiores detalhes sobre esse padrão podem ser encontrados [aqui](https://www.rfc-editor.org/rfc/rfc4122).

## Objeto
Em campos objeto, utilizamos a estrutura JSON seguindo o padrão RFC 8259, mais detalhes sobre esse padrão podem ser encontrados [aqui](https://www.rfc-editor.org/rfc/rfc8259).
