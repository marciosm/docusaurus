import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "apis/sac/ref/customer-service-api",
    },
    {
      type: "category",
      label: "Tickets",
      items: [
        {
          type: "doc",
          id: "apis/sac/ref/sac-v-0-seller-get-tickets",
          label: "Lista de tickets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/sac/ref/sac-v-0-seller-create-ticket",
          label: "Cria um ticket",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/sac/ref/sac-v-0-seller-get-ticket",
          label: "Busca ticket por ID",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Eventos",
      items: [
        {
          type: "doc",
          id: "apis/sac/ref/sac-v-0-seller-get-ticket-events",
          label: "Lista os eventos de um ticket",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/sac/ref/sac-v-0-seller-create-event",
          label: "Adiciona um evento ao ticket",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Mensagens",
      items: [
        {
          type: "doc",
          id: "apis/sac/ref/sac-v-0-seller-get-ticket-messages",
          label: "Lista as mensagens de um ticket",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/sac/ref/sac-v-0-seller-create-ticket-message",
          label: "Adiciona uma mensagem a um ticket",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/sac/ref/sac-v-0-seller-get-ticket-message",
          label: "Busca uma mensagem de um ticket por ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/sac/ref/sac-v-0-seller-get-ticket-message-attachment",
          label: "Resgata o arquivo anexo a uma mensagem",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Remessa Reversa",
      items: [
        {
          type: "doc",
          id: "apis/sac/ref/sac-v-0-seller-get-ticket-return-list",
          label: "Lista os remessas reversas de um ticket",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/sac/ref/sac-v-0-seller-create-ticket-return",
          label: "Solicita uma remessa reversa para um ticket.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/sac/ref/sac-v-0-seller-get-ticket-return-item",
          label: "Busca uma remessa reversa de um ticket por ID",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Transactions",
      items: [
        {
          type: "doc",
          id: "apis/sac/ref/sac-v-0-seller-get-transaction",
          label: "Busca uma transação por ID",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
