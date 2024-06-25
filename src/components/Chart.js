// src/components/ChartComponent.js

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = ({ chartData }) => {
  const data = {
    labels: [
      "Jan '23",
      "Mar '23",
      "May '23",
      "Jul '23",
      "Sep '23",
      "Nov '23",
      "Dec '23",
    ],
    datasets: [
      {
        label: "Interest",
        data: [5000, 10000, 15000, 20000, 22000, 24000, 25000],
        borderColor: "#6495ED",
        backgroundColor: "#6495ED",
        tension: 0.4,
      },
      {
        label: "Principal",
        data: [3000, 7000, 12000, 17000, 19000, 21000, 22000],
        borderColor: "#FF6347",
        backgroundColor: "#FF6347",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `$${tooltipItem.raw.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `$${value}`;
          },
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <div className="chart-values">
        <div className="interest-value">
          <h2>Interest</h2>
          <p>{chartData.interest}</p>
          <span>65%</span>
        </div>
        <div className="principal-value">
          <h2>Principal</h2>
          <p>{chartData.principal}</p>
          <span>35%</span>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
