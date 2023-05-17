import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [cryptocurrencies, setCryptocurrencies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed!");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(true);
        console.log(err.message || "Something went wrong.");
      });
  }, [url]);

  return {
    data,
    setData,
    cryptocurrencies,
    isLoading,
    error,
  };
};

export default useFetch;
