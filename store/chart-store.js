import { createContext, useMemo, useEffect, useState } from "react";

export const ChartContext = createContext({
  cryptocurrencies: [],
  setCryptocurrencies() {},
  isLoading: false,
});

const ChartContextProvider = ({ children }) => {
  const [chartData, setChartData] = useState([]);
  const [crypto, setCrypto] = useState("ETH");
  const [year, setYear] = useState(20221001);
  const [time, setTime] = useState("data1d");

  useEffect(() => {
    const url = `https://cex.io/api/ohlcv/hd/${year}/${crypto}/USD`;

    const fetchData = () => {
      fetch(url)
        .then((response) => response.json())

        .then((data) => {
          setChartData(JSON.parse(data[time]));
        });
    };

    fetchData();
  }, [crypto, year, time]);

  const getPrice = (index) => {
    return chartData?.map((data) => data[index]);
  };
  const openingPrices = getPrice(1);
  const highestPrices = getPrice(2);
  const lowestPrices = getPrice(3);
  const closingPrices = getPrice(4);
  const volume = getPrice(5);
  const dates = chartData?.map((data) => {
    const date = new Date(data[0] * 1000);
    const formattedDate = date?.toLocaleString();
    /* console.log(formattedDate); */
    if (time === "data1d") {
      return formattedDate?.slice(0, -17);
    } else {
      //FIXME:WRONG FORMAT
      return formattedDate; /* ?.split(", ")[1].slice(0, 5); */
    }
  });
  const contextValue = useMemo(
    () => ({
      openingPrices,
      highestPrices,
      lowestPrices,
      closingPrices,
      volume,
      dates,
      crypto,
      setCrypto,
      setYear,
      setTime,
    }),

    [
      openingPrices,
      highestPrices,
      lowestPrices,
      closingPrices,
      volume,
      dates,
      crypto,
    ]
  );

  return (
    <ChartContext.Provider value={contextValue}>
      {children}
    </ChartContext.Provider>
  );
};

export default ChartContextProvider;
