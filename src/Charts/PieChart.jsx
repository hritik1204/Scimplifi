import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = ({ btcHistory, ethHistory, getCoinPrice }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < btcHistory?.data?.history?.length; i += 1) {
    coinPrice.push(btcHistory?.data?.history[i].price);
    const timestamp = btcHistory?.data?.history[i].timestamp * 1000; // Convert to milliseconds
    const date = new Date(timestamp);
    coinTimestamp.push(date.toLocaleDateString());
  }
  const ethPrice = [];
  const ethTimestamp = [];

  for (let i = 0; i < ethHistory?.data?.history?.length; i += 1) {
    ethPrice.push(ethHistory?.data?.history[i].price);
    const timestamp = ethHistory?.data?.history[i].timestamp * 1000; // Convert to milliseconds
    const date = new Date(timestamp);
    ethTimestamp.push(date.toLocaleDateString());
  }
  getCoinPrice(coinPrice[0], ethPrice[0]);
  const data = {
    labels: ["Bitcoin", "Ethereum"],
    datasets: [
      {
        data: [coinPrice[0], ethPrice[0]],
        backgroundColor: ["#98D89E", "#EE8484"],
        hoverBackgroundColor: ["#98D89E", "#EE8484"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
