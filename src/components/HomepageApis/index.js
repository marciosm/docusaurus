import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const featureIcons = {
  default: "/icons/api-default-icon.svg",
};

const FeatureList = [
  {
    title: "Produtos",
    icon: featureIcons.default,
    description:
      "Acesse as documentações para começar a utilizar a API de Produtos.",
    link: "/docs/apis/products/overview",
  },
  {
    title: "Atendimento ao Cliente",
    icon: featureIcons.default,
    description:
      "Acesse as documentações para começar a utilizar a API ...",
    link: "/docs/apis/sac/overview",
  },
  {
    title: "Pedidos",
    icon: featureIcons.default,
    description:
      "Acesse as documentações para começar a utilizar a API ...",
    link: "/docs/apis/orders/overview",
  },
];

function Feature({ icon, title, description, link }) {
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <a href={link} className={styles.featureLink}>
        <div className={styles.featureHeader}>
          <img src={icon} alt={title} className={styles.featureIcon} />
          <h3 className={styles.featureTitle}>{title}</h3>
        </div>
        <p className={styles.featureDescription}>{description}</p>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionProducts}> Conheça nossas APIs</div>
        <div className="row">
          {FeatureList.map((feature, idx) => (
            <Feature key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
