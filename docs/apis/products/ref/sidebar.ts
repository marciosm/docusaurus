import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "apis/products/ref/ps-core-product",
    },
    {
      type: "category",
      label: "sku (channel)",
      items: [
        {
          type: "doc",
          id: "apis/products/ref/portfolios-v-1-channel-patch-sku-status",
          label: "Update",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "apis/products/ref/portfolios-v-1-channel-get-sku-validation-info",
          label: "Get Sku",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/products/ref/portfolios-v-1-channel-post-sku-validation-info",
          label: "Create Validation Info",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "stock (channel)",
      items: [
        {
          type: "doc",
          id: "apis/products/ref/portfolios-v-1-channel-post-stocks",
          label: "Create Reserved Stock",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/products/ref/portfolios-v-1-channel-put-stocks",
          label: "Put Reserved Stock",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "healthcheck",
      items: [
        {
          type: "doc",
          id: "apis/products/ref/portfolios-v-1-get-ping",
          label: "Ping",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/products/ref/portfolios-v-1-head-ping",
          label: "Ping",
          className: "api-method head",
        },
      ],
    },
    {
      type: "category",
      label: "attributes",
      items: [
        {
          type: "doc",
          id: "apis/products/ref/portfolios-v-1-seller-get-templates",
          label: "Get Templates",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/products/ref/portfolios-v-1-seller-list-attributes",
          label: "List Attribute",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/products/ref/portfolios-v-1-seller-get-attributes",
          label: "Get Attribute",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "price",
      items: [
        {
          type: "doc",
          id: "apis/products/ref/portfolios-v-1-get-prices",
          label: "Get Price",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/products/ref/portfolios-v-1-patch-prices",
          label: "Patch Price",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "apis/products/ref/portfolios-v-1-post-prices",
          label: "Create Price",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "full-product",
      items: [
        {
          type: "doc",
          id: "apis/products/ref/portfolios-v-1-post-products",
          label: "Create Full Product",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "sku",
      items: [
        {
          type: "doc",
          id: "apis/products/ref/portfolios-v-1-list-skus",
          label: "List Skus",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/products/ref/portfolios-v-1-post-skus",
          label: "Create Sku",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/products/ref/portfolios-v-1-get-skus",
          label: "Get Sku",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/products/ref/portfolios-v-1-patch-skus",
          label: "Update Partial Sku",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "apis/products/ref/portfolios-v-1-put-skus",
          label: "Update Sku",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/products/ref/portfolios-v-1-seller-get-sku-validation-info",
          label: "Get Sku Validation Info",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "stock",
      items: [
        {
          type: "doc",
          id: "apis/products/ref/portfolios-v-1-get-stocks",
          label: "Get Stock",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/products/ref/portfolios-v-1-patch-stocks",
          label: "Patch Stock",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "apis/products/ref/portfolios-v-1-post-stocks",
          label: "Create Stock",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
