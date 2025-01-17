# IDs dos canais de venda

Com as novas APIs do Magalu você poderá segmentar os dados por canal de venda utilizando o atributo `channel` no payload das chamadas.  Esse atributo receberá o `id` que representa o canal de venda. 

_Exemplo:_

```json
{
   "channel":{
      "id":"1aba5746-1d52-48a1-a7a7-c1307db5e262",
      "extras":{
         
      }
   }
}
```

O campo `extras` é aberto e você pode enviar alguma informação que ajuda na identificação do canal de venda do seu lado. Por exemplo, se do seu lado você trata os canais de venda com IDs numéricos, e o ID do canal Magalu é 99, você poderia enviar o campo `extras` da seguinte maneira:

```json
{
   "channel":{
      "id":"1aba5746-1d52-48a1-a7a7-c1307db5e262",
      "extras":{
         "myId":99,
         "myName":"Channel Magazine Luiza"
      }
   }
}


```

## Lista dos IDs dos canais de venda:

| Canal de venda | Channel ID                            |    
|----------------|---------------------------------------|
| Magazine Luiza | 9fe0d853-732b-4e4a-a0b0-cff988ed043d  | 
| Netshoes       | Não integrado                         | 
| Kabum          | Não integrado                         |  

