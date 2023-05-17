import React, { useContext } from "react";

import { ChartContext } from "store/chart-store";
import Chart from "../../Chart/Chart";
import styles from "./EthereumToday.module.css";

const EthereumToday = () => {
  const context = useContext(ChartContext);

  return (
    <div className={styles.title}>
      {"<"}EthereumToday{">"}
      <Chart
        crypto={context.crypto}
        setCrypto={context.setCrypto}
        setYear={context.setYear}
        dates={context.dates}
        closingPrices={context.closingPrices}
        setTime={context.setTime}
      />
    </div>
  );
};

export default EthereumToday;
