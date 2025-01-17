import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


export default function HomepageHeader() {
  return (
    <>
      <header
        className={clsx(styles.heroBanner, "your-custom-class-for-background")}
      >
        
        <div className={clsx(styles.container)}>
          {/* <div>
          <div className={clsx(styles.heroTitle)}>Portal do Desenvolvedor</div>
          </div> */}
        </div>
     
      </header>
      <div className={clsx(styles.cardsContainer)}>
        <div className={clsx(styles.card)}>
            <div className={clsx(styles.cardContent)}>
              <img src={"/icons/flag.svg"} className={clsx(styles.cardIcon)} />
              <h3 className={clsx(styles.cardTitle)}>Crie sua aplicação através do CLI do ID Magalu e gere seu Client ID e Client Secret.</h3>
              <a
                href="/docs/first-steps/create-an-application/create-application"
                className={clsx(styles.buttonLink)}
              >
                Saiba mais
              </a>
            </div>
        </div>
        <div className={clsx(styles.card)}>
            <div className={clsx(styles.cardContent)}>
              <img src={"/icons/products.svg"} className={clsx(styles.cardIcon)} />
              <h3 className={clsx(styles.cardTitle)}>Crie e atualize produtos, inventário e preços.<br/><br/></h3>
              <a
                href="/docs/apis/products/overview"
                className={clsx(styles.buttonLink)}
              >
                Saiba mais
              </a>
            </div>
        </div>
        <div className={clsx(styles.card)}>
            <div className={clsx(styles.cardContent)}>
              <img src={"/icons/receipt.svg"} className={clsx(styles.cardIcon)} />
              <h3 className={clsx(styles.cardTitle)}>Consulte e seja notificado sobre novos pedidos.<br/><br/></h3>
              <a
                href="/docs/apis/orders/overview"
                className={clsx(styles.buttonLink)}
              >
                Saiba mais
              </a>
            </div>
        </div>
      </div>
    </>
  );
}
