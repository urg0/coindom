import styles from "components/Cryptocurrencies/CryptocurrencyList/CryptocurrencyList.module.css";

export const CryptocurrenciesListTitle = (
  <>
    <p className={styles.title}>Cryptocurrencies MARKET</p>
    <div className={styles.titleContainer}>
      <p className={styles.name}>name</p>
      <p className={styles.price}>price</p>
      <p className={styles.change}>24h change</p>
      <p className={styles.volume}>volume (30days)</p>
      <p className={styles.change}>Market Cap</p>
    </div>
  </>
);
