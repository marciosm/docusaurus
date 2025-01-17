# Retornos de HTTP

As APIs seguem um padrão de status em comum, ou seja, o comportamento de possíveis tratativas é igual para todos os projetos incluídos neste portal.

#### Sucesso - 2xx

| Campo | Mensagem | Descrição | Utilização |
|-------|----------|-----------|------------|
| 200 | OK | Código genérico para cenários de sucesso. | GET, PUT |
| 201 | Created | Cenário de criação de um recurso. | POST, PUT |
| 202 | Accepted | Cenário de recurso aceito para processamento. | POST, PUT |
| 204 | No Content | Cenário de exclusão de um recurso. | DELETE |

#### Redirecionamento - 3xx

| Campo | Mensagem | Descrição | Utilização |
|-------|----------|-----------|------------|
| 303 | See Other | Resposta do servidor instruindo ao cliente buscar o recurso requisitado em outra URI com uma requisição GET. | PUT |

:::warning
    Este código de retorno adiciona aos cabeçalhos de resposta o atributo location, que tem como função indicar o endereço de um recurso. A presença deste atributo significa que o recurso desejado se encontra no endereço descrito, para acessar o mesmo deve-se realizar um GET.
    
    A implementação padrão mais comum de bibliotecas HTTP e ferramentas de execução de requisições seguem  automaticamente o redirecionamento. Esta prática pode levar a erros de fluxo, onde não fica explícito que o redirecionamento está sendo executado de forma automática.

    Recomenda-se fortemente que desabilite a funcionalidade de redirecionamento automático e realize os tratamentos necessários de forma manual, a fim de evitar confusões durante o uso das API’s.
:::

#### Erros de Client - 4xx

| Campo | Mensagem             | Descrição | Utilização      |
|-------|----------------------|-----------|-----------------|
| 400   | Bad request          | Erros relacionados à sintaxe do request enviado pelo client. Abaixo estão exemplos do que são considerados erros de sintaxe: Má formação do body do request. Formato do body do request incompatível com o que foi enviado no header Content-Type. | Todos os verbos |
| 401   | Unauthorized         | Falha de autorização do client (falta ou expiração do token). | Todos os verbos |
| 403   | Forbidden            | Falta de privilégios para acessar o recurso. Esses erros contemplam validações usando introspecção do token, como por exemplo, comparando um determinado role que deve estar presente na claim “role”. | Todos os verbos |
| 404   | Not Found            | Pode indicar duas situações distintas: Quando o backend não localizou o registro a partir do filtro especificado pelo client. Quando o servidor não possui a rota especificada na URL. | GET, DELETE |
| 409   | Conflict             | Indica que a solicitação atual conflitou com o recurso que está no servidor. | PUT     |
| 422   | Unprocessable Entity | A requisição está bem formada mas inabilitada para ser seguida devido a erros semânticos. Incompatibilidade do request frente ao que está definido no contrato da API. Especificamente em relação aos campos do body, são consideradas três informações: nome, tipo e obrigatoriedade do campo. | Todos os verbos |
| 429   | Too Many Requests | Indica que o usuário enviou muitos pedidos em um determinado período de tempo. | Todos os verbos |

#### Erros de Servidor - 5xx

| Campo | Mensagem | Descrição | Utilização |
|-------|----------|-----------|------------|
| 500 | Internal Server Error | Erro genérico ao lado do servidor. Pode ser tanto a falha de código ao tratar o request, quanto alguma falha ligada à infraestrutura. | Todos os verbos. |
| 502 | Bad Gateway | O API Gateway recebeu uma resposta inválida do backend. | Todos os verbos |
| 503 | Service Unavailable | Indisponibilidade temporária do backend. | Todos os verbos |
| 504 | Gateway Timeout | O API Gateway não recebeu o response do backend a tempo. | Todos os verbos |
