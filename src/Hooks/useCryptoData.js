import React, { useEffect, useState } from "react";

export default function useCryptoData(timeperiod) {
  const [coins, setCoins] = useState();
  const [coinStats, setCoinStats] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [coinTimePeriod, setCoinTimePeriod] = useState();
  const [ethTimePeriod, setEthTimePeriod] = useState();
  console.log(ethTimePeriod);

  const options = {
    headers: {
      "x-access-token":
        "coinranking28e7b37bf3a10f44029e27350836b1979b4e867618ee4dd8",
    },
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchCoins = async () => {
      try {
        const response = await fetch(
          "https://api.coinranking.com/v2/coins",
          options
        );
        const coinData = await response.json();
        console.log(coinData);
        setCoinStats(coinData.data.stats);
        setCoins(coinData.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchCoins();
  }, []);

  useEffect(() => {
    const fetchCoinTimePeriod = async () => {
      try {
        const response = await fetch(
          `https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/history?timePeriod=${timeperiod}`,
          options
        );
        const coinData = await response.json();
        console.log(coinData);
        setCoinTimePeriod(coinData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCoinTimePeriod();
  }, [timeperiod]);

  // for eth
  useEffect(() => {
    const fetchEthTimePeriod = async () => {
      try {
        const response = await fetch(
          `https://api.coinranking.com/v2/coin/razxDUgYGNAdQ/history?timePeriod=${timeperiod}`,
          options
        );
        const ethData = await response.json();
        console.log(ethData);
        setEthTimePeriod(ethData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEthTimePeriod();
  }, [timeperiod]);

  return { coins, coinStats, isLoading, coinTimePeriod, ethTimePeriod };
}
