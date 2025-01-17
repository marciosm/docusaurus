import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "apis/onboarding/ref/onboarding",
    },
    {
      type: "category",
      label: "Onboarding",
      items: [
        {
          type: "doc",
          id: "apis/onboarding/ref/onboarding-v-0-put-signup",
          label: "Configurar integração",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
