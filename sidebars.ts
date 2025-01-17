// @ts-check
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Primeiros Passos',
      link: {
        type: 'doc',
        id: 'index',
      },
      collapsed: true,
      items: [
        'first-steps/magalu-platform',
        {
          type: 'category',
          label: 'Criar uma aplicação',
          link: {
            type: 'doc',
            id: 'first-steps/create-an-application/create-application',
          },
          items: [
            'first-steps/create-an-application/create-application',
            'first-steps/create-an-application/authentication-authorization',
            'first-steps/create-an-application/design-guidelines',
          ],
        },
        'first-steps/environment',
      ],
    },
    {
      type: 'category',
      label: 'Guia de Desenvolvimento',
      link: {
        type: 'doc',
        id: 'development-guide/overview',
      },
      collapsed: true,
      items: [
        'development-guide/overview',
        'development-guide/pagination-filtering-sorting',
        'development-guide/sales-channel-id',
        'development-guide/return-code',
        'development-guide/error-structure',
        'development-guide/standard-fields',
        'development-guide/request-identifier-x-request-id',
        'development-guide/rate-limit',
        'development-guide/webhooks',
      ],
    },
    {
      type: "category",
      label: "APIs de Marketplace",
      link: {
        type: "generated-index",
        title: "APIs de Marketplace",
        description:
          "<explicação sobre o que são as APIs de Marketplace>",
        slug: "/apis"
      },
      items: [
        {
          type: "category",
          label: "Produtos",
          link: {
            type: 'doc',
            id: 'apis/products/overview',
          },
          items: [
            {
              type: 'doc',
              label: 'Visão Geral',
              id: 'apis/products/overview',
            },
            {
              type: "category",
              label: "Referência da API",
              items: require("./docs/apis/products/ref/sidebar.js"),
            }
          ]
        },
        {
          type: "category",
          label: "SAC",
          link: {
            type: 'doc',
            id: 'apis/sac/overview',
          },
          items: [
            {
              type: 'doc',
              label: 'Visão Geral',
              id: 'apis/sac/overview',
            },
            {
              type: "category",
              label: "Referência da API",
              items: require("./docs/apis/sac/ref/sidebar.js"),
            }
          ]
        },
        {
          type: "category",
          label: "Filas",
          link: {
            type: 'doc',
            id: 'apis/queues/overview',
          },
          items: [
            {
              type: 'doc',
              label: 'Visão Geral',
              id: 'apis/queues/overview',
            },
            {
              type: "category",
              label: "Referência da API",
              items: require("./docs/apis/queues/ref/sidebar.js"),
            }
          ]
        },
        {
          type: "category",
          label: "Traces",
          link: {
            type: 'doc',
            id: 'apis/traces/overview',
          },
          items: [
            {
              type: 'doc',
              label: 'Visão Geral',
              id: 'apis/traces/overview',
            },
            {
              type: "category",
              label: "Referência da API",
              items: require("./docs/apis/traces/ref/sidebar.js"),
            }
          ]
        },
        {
          type: "category",
          label: "Onboarding",
          link: {
            type: 'doc',
            id: 'apis/onboarding/overview',
          },
          items: [
            {
              type: 'doc',
              label: 'Visão Geral',
              id: 'apis/onboarding/overview',
            },
            {
              type: "category",
              label: "Referência da API",
              items: require("./docs/apis/onboarding/ref/sidebar.js"),
            }
          ]
        },
        // {
        //   type: "category",
        //   label: "SAC",
        //   link: {
        //     type: 'doc',
        //     id: 'apis/sac-info',
        //   },
        //   // link: {
        //   //   type: "generated-index",
        //   //   title: "SAC",
        //   //   description:
        //   //     "API de Sac",
        //   //   slug: "/apis/sac"
        //   // },
        //   items: require("./docs/apis/sac/sidebar.js")
        // }
      ]
    },
    'support',
    'release-notes',
  ]
};

export default sidebars;