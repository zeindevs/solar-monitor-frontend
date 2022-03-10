import React from "react";
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
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Battery Capacity",
    },
  },
};

const labels = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
  "24:00",
];

export const data = {
  labels,
  datasets: [
    {
      label: "% (percent)",
      data: [
        Math.floor(Math.random() * (100 - 80) + 80),
        Math.floor(Math.random() * (100 - 80) + 80),
        Math.floor(Math.random() * (100 - 80) + 80),
        Math.floor(Math.random() * (100 - 80) + 80),
        Math.floor(Math.random() * (100 - 80) + 80),
        Math.floor(Math.random() * (100 - 80) + 80),
        Math.floor(Math.random() * (100 - 80) + 80),
        Math.floor(Math.random() * (100 - 80) + 80),
        Math.floor(Math.random() * (100 - 80) + 80),
        Math.floor(Math.random() * (100 - 80) + 80),
        Math.floor(Math.random() * (100 - 80) + 80),
        Math.floor(Math.random() * (100 - 80) + 80),
        Math.floor(Math.random() * (100 - 80) + 80),
        Math.floor(Math.random() * (100 - 80) + 80),
        Math.floor(Math.random() * (100 - 80) + 80),
        Math.floor(Math.random() * (100 - 80) + 80),
        Math.floor(Math.random() * (100 - 80) + 80),
        Math.floor(Math.random() * (100 - 80) + 80),
        Math.floor(Math.random() * (100 - 80) + 80),
        Math.floor(Math.random() * (100 - 80) + 80),
        Math.floor(Math.random() * (100 - 80) + 80),
        Math.floor(Math.random() * (100 - 80) + 80),
        Math.floor(Math.random() * (100 - 80) + 80),
        Math.floor(Math.random() * (100 - 80) + 80),
        Math.floor(Math.random() * (100 - 80) + 80),
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export default function ChartBatteryCapacity() {
  return <Line options={options} data={data} />;
}
