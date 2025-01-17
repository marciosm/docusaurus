import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "apis/traces/ref/traces",
    },
    {
      type: "category",
      label: "Traces",
      items: [
        {
          type: "doc",
          id: "apis/traces/ref/traces-v-0-get-traces",
          label: "Recuperar uma lista de traces",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/traces/ref/traces-v-0-get-traces-id",
          label: "Recuperar um trace",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
