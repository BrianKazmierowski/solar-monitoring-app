import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const SitePowerChart = () => {
  const productionData = {
    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    datasets: [
      {
        label: 'Vers le réseau',
        data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 50)),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Autoconsommée',
        data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 50)),
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
    ],
  };

  const consumptionData = {
    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    datasets: [
      {
        label: 'Depuis le réseau',
        data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 100)),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
      {
        label: 'Depuis le PV',
        data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 100)),
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div style={{ width: '100%', marginTop: '20px' }}>
      <h3>Puissance du site</h3>
      <div style={{ width: '100%', height: '250px' }}>
        <Line data={productionData} />
      </div>
      <div style={{ width: '100%', height: '250px', marginTop: '20px' }}>
        <Line data={consumptionData} />
      </div>
    </div>
  );
};

export default SitePowerChart;
