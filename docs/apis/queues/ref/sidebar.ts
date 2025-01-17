import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "apis/queues/ref/filas",
    },
    {
      type: "category",
      label: "Histórico",
      items: [
        {
          type: "doc",
          id: "apis/queues/ref/queues-v-0-get-history",
          label: "Listar histórico",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
