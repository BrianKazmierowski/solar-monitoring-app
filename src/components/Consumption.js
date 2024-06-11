import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Consumption = ({ buildingConsumption, gridConsumption }) => {
  const totalConsumption = buildingConsumption + gridConsumption;
  const buildingPercentage = (buildingConsumption / totalConsumption) * 100;
  const gridPercentage = (gridConsumption / totalConsumption) * 100;

  return (
    <div className="section-container">
      <h5 className="section-title">Consommation</h5>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h3>{totalConsumption} MWh</h3>
        </div>
        <div className="d-flex flex-column">
          <small>{buildingConsumption} MWh</small>
          <small>{gridConsumption} MWh</small>
        </div>
      </div>
      <ProgressBar>
        <ProgressBar variant="primary" now={buildingPercentage} label={`${buildingPercentage.toFixed(2)}%`} />
        <ProgressBar variant="warning" now={gridPercentage} label={`${gridPercentage.toFixed(2)}%`} />
      </ProgressBar>
      
 
    </div>
    
  );
};

export default Consumption;
