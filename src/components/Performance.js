import React from 'react';

const Performance = ({ performance }) => {
  return (
    <div className="section-container">
      <h5 className="section-title">Performances</h5>
      <div>
        <h3>{performance}</h3>
        <small>Productible (kWh/kWc)</small>
      </div>
    </div>
  );
};

export default Performance;
