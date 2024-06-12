import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

const getProductionData = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/production');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données de production:', error);
    return [];
  }
};

const getConsumptionData = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/consumption');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données de consommation:', error);
    return [];
  }
};

const getPowerDetails = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/power-details');
    return response.data.map(item => item.consumption);
  } catch (error) {
    console.error('Erreur lors de la récupération des détails de puissance:', error);
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
     // const consumption = await getConsumptionData();
      const consumption = await getPowerDetails();
      setProductionData(production);
      setConsumptionData(consumption);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (productionChartInstance.current) {
      productionChartInstance.current.destroy();
    }

    const ctxProduction = productionChartRef.current.getContext('2d');
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

    if (consumptionChartInstance.current) {
      consumptionChartInstance.current.destroy();
    }

    const ctxConsumption = consumptionChartRef.current.getContext('2d');
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
