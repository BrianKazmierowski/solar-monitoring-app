import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';

const siteId = '2508316';
const apiKey = '8PZR50LGWNSRDGWM5XDWJ4DOSUECST1V';

// Fonction pour obtenir les données de production
const getProductionData = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/production');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data; // Assurez-vous que la structure des données correspond à ce que vous attendez
  } catch (error) {
    console.error('Erreur lors de la récupération des données de production:', error);
    return [];
  }
};

// Fonction pour obtenir les données de consommation
const getConsumptionData = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/consumption');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data; // Assurez-vous que la structure des données correspond à ce que vous attendez
  } catch (error) {
    console.error('Erreur lors de la récupération des données de consommation:', error);
    return [];
  }
};

const EnergyProductionConsumptionChart = () => {
  const [productionData, setProductionData] = useState([]);
  const [consumptionData, setConsumptionData] = useState([]);
  const productionChartRef = useRef(null);
  const consumptionChartRef = useRef(null);
  const productionChartInstance = useRef(null);
  const consumptionChartInstance = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const production = await getProductionData();
      const consumption = await getConsumptionData();
      setProductionData(production);
      setConsumptionData(consumption);
    };

    fetchData();
  }, []);

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
  
    if (productionData.length > 0) {
      productionChartInstance.current = new Chart(ctxProduction, {
        type: 'line',
        data: {
          labels: productionData.map(item => item.date),
          datasets: [
            {
              label: 'Production',
              data: productionData.map(item => item.value),
              backgroundColor: 'rgba(75, 192, 192, 0.5)',
              borderColor: 'rgba(75, 192, 192, 1)',
              fill: true,
            },
          ],
        },
        options: {
          scales: {
            x: { type: 'category', title: { display: true, text: 'Heure' } },
            y: { beginAtZero: true, title: { display: true, text: 'kW' } },
          },
        },
      });
    }
  
    if (consumptionData.length > 0) {
      consumptionChartInstance.current = new Chart(ctxConsumption, {
        type: 'line',
        data: {
          labels: consumptionData.map(item => item.date),
          datasets: [
            {
              label: 'Consommation',
              data: consumptionData.map(item => item.value),
              backgroundColor: 'rgba(255, 159, 64, 0.5)',
              borderColor: 'rgba(255, 159, 64, 1)',
              fill: true,
            },
          ],
        },
        options: {
          scales: {
            x: { type: 'category', title: { display: true, text: 'Heure' } },
            y: { beginAtZero: true, title: { display: true, text: 'kW' } },
          },
        },
      });
    }
  }, [productionData, consumptionData]);
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
