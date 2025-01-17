# Paginação, filtros e ordenação

Nessa página detalharemos o padrão de paginação, filtro e ordenação. 

## Paginação

Em todas as operações de consultas que retornem listas, a aplicação fornece um mecanismo de paginação.
Existem dois parâmetros: `limit` e `offset`. Ambos os parâmetros definem o tamanho do bloco dos resultados.
Isso evita consumo excessivo de recursos do servidor e do client, além de otimizar a visualização da informação pelo usuário final.

**Parâmetros da chamada**

| Parâmetro | Descrição                                                                                 | Valor Padrão |
|-----------|-------------------------------------------------------------------------------------------|--------------|
| `_limit`  | Determina a quantidade de registros a serem retornados                                    | 50           |
| `_offset` | Posição do registro de referência, a partir dele serão retornados os próximos N registros | 0            |

_Exemplo:_

``` 
GET /v1/orders?_offset=150&_limit=20
```

**Parâmetros da resposta**

|  Parâmetro | Descrição                                                                                    | Valor Padrão |
|------------|----------------------------------------------------------------------------------------------|--------------|
| `limit`    | Retorna a quantidade específica de registros se houver										| 50           |
| `count`    | Quantidade de registros que foi retornada nessa página										| 0            |
| `max_limit`| Refere-se ao valor máximo que pode ser utilizado no campo _limit_							| 0            |

_Resposta:_ 

```json
{
	"page": {
		"limit": 20,
		"offset": 150,
		"count": 1,
		"max_limit": 10
	}
}
```

Na consulta acima, a partir do registro #151, serão retornados os próximos 20 registros.

Para a demonstração vamos definir que o valor padrão é 50 e o valor máximo 200.

| Exemplo                          | Resultado                                                               |
|----------------------------------|-------------------------------------------------------------------------|
| /v1/orders?_offset=150&_limit=20 | Serão retornados os próximos 20 registros, a partir do registro #151    |
| /v1/orders?_offset=0             | Serão retornados os próximos 50 registros, a partir do primeiro registro  |
| /v1/orders?_offset=0&_limit=1    | Será retornado o primero registro                                       |
| /v1/orders?_offset=0&_limit=51   | Serão retornados os próximos 51 registros, a partir do primeiro registro  |
| /v1/orders?_offset=0&_limit=200  | Serão retornados os próximos 200 registros, a partir do primeiro registro |

## Ordenação

A aplicação fornece a possibilidade de ordenar os valores das listagens, nos sentidos ascendente e descendente:

| Identificador     | Ordem       | Exemplo                                 | 
|-------------------|-------------|-----------------------------------------|
| ?_sort=campo:asc  | Ascendente  | GET /v1/orders?_sort=shipping.date:asc  |
| ?_sort=campo:desc | Descendente | GET /v1/orders?_sort=shipping.date:desc |

!!! nota
    Se não for especificado uma ordem após o nome do campo, é aplicada uma ordenação `asc`.

**Ordenações com combinação de campos**

Mais do que um critério de ordenação pode ser especificado na mesma URL:

```
?_sort=campo1:asc,campo2:desc,campo3:asc
```

Quando os critérios são combinados, a regra de ordenação é aplicada uma sobre a outra, da esquerda para a direita.

## Filtragem
### Pesquisas

A aplicação tem mecanismos para que a coleção possa ser consultada através de filtros de busca. Esses critérios são sempre 
expressos na URL através de parâmetros de consulta.

:::info
    Neste caso, a aplicação utiliza os nomes dos campos com todos os caracteres em **minúsculo**.
:::


| Identificador                      | Critério                            | Exemplo                                  |
|------------------------------------|-------------------------------------|------------------------------------------|
| ?campo=valor                       | Valor exato                         | GET /v0/orders?branch.id=175&code=ABC    |
| ?campo__like=valor                 | Valor parcial (like)                | GET /v0/orders?customer.name__like=Ana   |
| ?campo__in=valor_1,valor_2,valor_X | Lista de valores (in)               | GET /v0/orders?branch.id__in=175,215,830 |
| ?campo__gt=valor                   | Maior que (>)                       | GET /v0/orders?amount__gt=100            |
| ?campo__gte=valor                  | Maior ou igual a (>=)               | GET /v0/orders?amount__gte=100           |
| ?campo__lt=valor                   | Menor que (&lt;)                    | GET /v0/orders?amount__lt=100            |
| ?campo__lte=valor                  | Menor ou igual a (=&lt;)            | GET /v0/orders?amount__lte=100           |

:::info
    - Para fazer uso da função `between`, a aplicação utiliza `Maior que` ou `Maior igual a` e `Menor que` ou `Menor ou igual a`.
    - Os critérios se somam como um `AND`.
:::

Quando a pesquisa envolver campos que estão modelados como objetos no body, a aplicação faz a referência através do caminho 
completo até o atributo - utilizando o separador **ponto**.

Por exemplo, para o seguinte body JSON:

```json
{
	"customer": {
		"id": 1000,
		"name": "..."
	},
	"branch": {
		"id": 595
	}
}
```

A pesquisa seria assim:

```
GET /v1/orders?customer.id=1000&branch.id=595
```

_Resposta:_

```json
{
	"meta": {
		"page": {
			"limit": 10,
			"offset": 0,
			"count": 1,
			"max_limit": 10
		},
		"links": {
			"previous": "/v0/orders?_limit=10&_offset=0",
			"self": "/v0/orders?_limit=10&_offset=10",
			"next": "/v0/orders?_limit=10&_offset=20"
 		},
	},
	"results": [
		{
			"sku": "ABC1232fd",
			"channel": "magalu",
			"quantity": 1.5,
			"unit": "unit"
		}
	]
}
```
O campo `results` retorna os dados esperados. O campo `meta` retorna as informações sobre as quantidades de registros encontrados, onde apenas o campo `total` é opcional. Os filtros aplicados na consulta, retornam o campo utilizado como filtro, o operador utilizado sendo representado pelos nomes: `eq`, `like`, `in`, `gt`, `gte`, `lt`, `lte` e o valor aplicado.

As ordenações identificam o campo e a ordenação (`asc` e `desc`) que foi aplicada, e as URLs de paginação, para obter os próximos registros ou os anteriores, se existirem, como a própria URL que foi consultada.
