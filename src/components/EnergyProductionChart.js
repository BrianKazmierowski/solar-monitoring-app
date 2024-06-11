// src/components/EnergyProductionChart.js
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Enregistrer les composants nécessaires de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const EnergyProductionChart = () => {
  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Production Estimée (kWh)',
        data: [300, 280, 320, 330, 400, 410, 450, 420, 380, 360, 310, 290],
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
      {
        label: 'Production Réelle (kWh)',
        data: [280, 270, 310, 300, 390, 400, 440, 410, 370, 350, 300, 280],
        borderColor: 'rgba(255,99,132,1)',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: { display: true },
      y: { display: true },
    },
  };

  return <Line data={data} options={options} />;
};

export default EnergyProductionChart;
