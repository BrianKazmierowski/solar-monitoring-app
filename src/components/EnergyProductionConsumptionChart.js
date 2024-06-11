import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';



const EnergyProductionConsumptionChart = () => {
  const productionChartRef = useRef(null);
  const consumptionChartRef = useRef(null);
  const productionChartInstance = useRef(null);
  const consumptionChartInstance = useRef(null);

  useEffect(() => {
    const ctxProduction = productionChartRef.current.getContext('2d');
    const ctxConsumption = consumptionChartRef.current.getContext('2d');

    // Détruire les instances de graphiques existantes avant de créer de nouveaux graphiques
    if (productionChartInstance.current) {
      productionChartInstance.current.destroy();
    }
    if (consumptionChartInstance.current) {
      consumptionChartInstance.current.destroy();
    }

    productionChartInstance.current = new Chart(ctxProduction, {
      type: 'line',
      data: {
        labels: [
          '00:00', '00:15', '00:30', '00:45', '01:00', '01:15', '01:30', '01:45', 
          '02:00', '02:15', '02:30', '02:45', '03:00', '03:15', '03:30', '03:45', 
          '04:00', '04:15', '04:30', '04:45', '05:00', '05:15', '05:30', '05:45', 
          '06:00', '06:15', '06:30', '06:45', '07:00', '07:15', '07:30', '07:45',
          '08:00', '08:15', '08:30', '08:45', '09:00', '09:15', '09:30', '09:45',
          '10:00', '10:15', '10:30', '10:45', '11:00', '11:15', '11:30', '11:45',
          '12:00', '12:15', '12:30', '12:45', '13:00', '13:15', '13:30', '13:45',
          '14:00', '14:15', '14:30', '14:45', '15:00', '15:15', '15:30', '15:45',
          '16:00', '16:15', '16:30', '16:45', '17:00', '17:15', '17:30', '17:45',
          '18:00', '18:15', '18:30', '18:45', '19:00', '19:15', '19:30', '19:45',
          '20:00', '20:15', '20:30', '20:45', '21:00', '21:15', '21:30', '21:45',
          '22:00', '22:15', '22:30', '22:45', '23:00', '23:15', '23:30', '23:45'
        ],
        datasets: [
          {
            label: 'Vers le réseau',
            data: Array.from({ length: 96 }, () => Math.floor(Math.random() * 50)),
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: true,
          },
          {
            label: 'Autoconsommée',
            data: Array.from({ length: 96 }, () => Math.floor(Math.random() * 50)),
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
            borderColor: 'rgba(153, 102, 255, 1)',
            fill: true,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'category',
            title: {
              display: true,
              text: 'Heure'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'kW'
            }
          },
        },
      },
    });

    consumptionChartInstance.current = new Chart(ctxConsumption, {
      type: 'line',
      data: {
        labels: [
          '00:00', '00:15', '00:30', '00:45', '01:00', '01:15', '01:30', '01:45', 
          '02:00', '02:15', '02:30', '02:45', '03:00', '03:15', '03:30', '03:45', 
          '04:00', '04:15', '04:30', '04:45', '05:00', '05:15', '05:30', '05:45', 
          '06:00', '06:15', '06:30', '06:45', '07:00', '07:15', '07:30', '07:45',
          '08:00', '08:15', '08:30', '08:45', '09:00', '09:15', '09:30', '09:45',
          '10:00', '10:15', '10:30', '10:45', '11:00', '11:15', '11:30', '11:45',
          '12:00', '12:15', '12:30', '12:45', '13:00', '13:15', '13:30', '13:45',
          '14:00', '14:15', '14:30', '14:45', '15:00', '15:15', '15:30', '15:45',
          '16:00', '16:15', '16:30', '16:45', '17:00', '17:15', '17:30', '17:45',
          '18:00', '18:15', '18:30', '18:45', '19:00', '19:15', '19:30', '19:45',
          '20:00', '20:15', '20:30', '20:45', '21:00', '21:15', '21:30', '21:45',
          '22:00', '22:15', '22:30', '22:45', '23:00', '23:15', '23:30', '23:45'
        ],
        datasets: [
          {
            label: 'Depuis le réseau',
            data: Array.from({ length: 96 }, () => Math.floor(Math.random() * 50)),
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            borderColor: 'rgba(255, 159, 64, 1)',
            fill: true,
          },
          {
            label: 'Depuis le PV',
            data: Array.from({ length: 96 }, () => Math.floor(Math.random() * 50)),
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            fill: true,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'category',
            title: {
              display: true,
              text: 'Heure'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'kW'
            }
          },
        },
      },
    });
  }, []);

  return (
    <div className="chart-container">
      <h3>Production</h3>
      <canvas ref={productionChartRef} />
      <h3>Consommation</h3>
      <canvas ref={consumptionChartRef} />
    </div>
  );
};

export default EnergyProductionConsumptionChart;
