# Produtos

## O que é

Bem-vindo à documentação da API de Portfólio! Aqui você encontrará todas as informações necessárias para integrar e gerenciar de forma eficiente. Esta API foi projetada para ser intuitiva e flexível, permitindo integrar com sistemas de mercado e controlar informações essenciais sobre seus SKUs de maneira rápida e segura.

O Portfólio é a área de gestão das informações relacionadas aos SKUs que fazem parte do catálogo de produtos. Ele oferece funcionalidades robustas para organizar dados de inventário e preços de forma centralizada, possibilitando um controle minucioso sobre cada aspecto dos produtos disponíveis para venda.

#### A estrutura do Portfólio está dividida em três partes principais:

- <b>SKU</b>: A representação dos produtos dentro do portfólio. Cada SKU é único e permite a organização detalhada dos itens oferecidos.
- <b>Stock</b>: Controla a quantidade disponível de cada produto para venda, possibilitando ajustes ágeis conforme a demanda e o estoque.
- <b>Price</b>: Gerencia os preços dos produtos, permitindo ajustes conforme a estratégia de vendas.

Com essa API, você pode realizar desde operações básicas de consulta até operações avançadas de atualização e sincronização de dados, seja integrando diretamente com sistemas próprios ou com plataformas de integradoras de mercado. A documentação a seguir orienta sobre os endpoints, modelos de dados e as melhores práticas para utilizar a API e aproveitar ao máximo seus recursos.


## Escopos necessários

Para a utilização das APIs os seguintes escopos poderão ser necessários:

| Recurso                                                   | Escopo Requerido                    |
| --------------------------------------------------------- | ----------------------------------- |
| Inserção de SKU                                           | open:portfolio-skus-seller:write           |
| Atualização de SKU                                        | open:portfolio-skus-seller:write           |
| Consultar de forma unitária ou em lista os SKUs           | open:portfolio-skus-seller:read            |
| Inserção de Preço                                         | open:portfolio-prices-seller:write         |
| Atualização de Preço                                      | open:portfolio-prices-seller:write         |
| Consultar os preços de um SKU                             | open:portfolio-prices-seller:read          |
| Inserção de Estoque                                       | open:portfolio-stocks-seller:write         |
| Atualização de Estoque                                    | open:portfolio-stocks-seller:write         |
| Consultar Estoques de um SKU                              | open:portfolio-stocks-seller:read          |
| Consultar último evento da política de publicação de SKUs | open:portfolio-skus-seller:read            |

## Ambientes
Ambientes diponives: [Ambientes](/docs/first-steps/environment)
