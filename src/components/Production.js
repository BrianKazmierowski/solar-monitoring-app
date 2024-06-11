import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Production = ({ production, buildingUsage, gridUsage }) => {
  const totalUsage = buildingUsage + gridUsage;
  const buildingPercentage = (buildingUsage / totalUsage) * 100;
  const gridPercentage = (gridUsage / totalUsage) * 100;

  return (
    <div className="section-container">
      <h5 className="section-title">Production</h5>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h3>{production} KWh</h3>
        </div>
        <div className="d-flex flex-column">
          <small>{buildingUsage} KWh</small>
          <small>{gridUsage} KWh</small>
        </div>
      </div>
      <ProgressBar>
        <ProgressBar variant="success" now={buildingPercentage} label={`${buildingPercentage.toFixed(2)}%`} />
        <ProgressBar variant="info" now={gridPercentage} label={`${gridPercentage.toFixed(2)}%`} />
      </ProgressBar>
    </div>
  );
};

export default Production;
