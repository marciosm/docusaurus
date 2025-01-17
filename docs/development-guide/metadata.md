# Metadata

O campo `metadata` é um espaço designado para guardar informações complementares acerca dos recursos ou requisições efetuadas na API. Esses dados destinam-se exclusivamente a uso interno, sendo registrados para garantir o adequado funcionamento das APIs e/ou dos módulos que consomem os dados provenientes das APIs públicas.

A presença do `metadata` ocorre nos métodos `POST`, `PUT` e `GET` dos endpoints. No método `GET`, ele se restringe ao endpoint de obtenção por *ID*, sendo omitido nas listagens para minimizar o tráfego de dados na rede.

**Parâmetros da chamada**

| Propriedade | Tipo | Descrição | Obrigatório |
|---|---|---|---|
| `metadata` | `object` | Informações adicionais de uso interno. Quando não houver um valor você poderá enviar {}. | _Não_ |

*Chamada*

```json
{
    "sku": "123-ABC",
    "created_at": "2023-02-01T03:00:00Z",
    "extras": "",
    "metadata": {
        "foo": "bar"
    }
}
```

*Resposta*

```json
{
    "sku": "123-ABC",
    "created_at": "2023-02-01T03:00:00Z",
    "extras": "",
    "metadata": {
        "foo": "bar"
    }
}
```
