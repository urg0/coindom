import React from "react";

import { CChart } from "@coreui/react-chartjs";

import styles from "./Chart.module.css";

import { DUMMY_CURRENCIES } from "dummyData/DUMMY_CURRENCIES";

const Chart = ({
  crypto,
  setCrypto,
  setYear,
  setTime,
  dates,
  closingPrices,
}) => {
  return (
    <div className={styles.chart}>
      <select
        className={styles.selectCurrency}
        name="sort"
        id="sort"
        onChange={(event) => setCrypto(event.target?.value)}
      >
        {DUMMY_CURRENCIES}
      </select>
      <select
        className={styles.selectCurrency}
        name="sort"
        id="sort"
        onChange={(event) => setTime(event.target.value)}
      >
        <option value="data1d">1d</option>
        <option value="data1h">1h</option>
        <option value="data1m">1m</option>
      </select>

      <input
        type="date"
        min="2016-01-01"
        max="2022-12-31"
        className={styles.selectCurrency}
        onChange={(event) => setYear(event.target.value.replace(/-/g, ""))}
      />

      <CChart
        type="line"
        data={{
          labels: dates,
          datasets: [
            {
              label: `${crypto} price`,
              fill: false,
              lineTension: 0.2,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: closingPrices,
            },
          ],
        }}
      />
    </div>
  );
};

export default Chart;
