import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Production from './components/Production';
import Consumption from './components/Consumption';
import Performance from './components/Performance';
import EnergyProductionChart from './components/EnergyProductionChart';
import EnergyProductionConsumptionChart from './components/EnergyProductionConsumptionChart';
import SitePowerChart from './components/SitePowerChart';

import './App.css';

const App = () => {
  return (
    <div className="container-centered">
      <Container>
         <div className='section-container'>
        <Row className="my-4">
         
          <Col md={4} className="d-flex justify-content-center">
            <Production production={975.82} buildingUsage={529.29} gridUsage={446.52} />
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <Consumption buildingConsumption={0.53} gridConsumption={1.00} />
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <Performance performance={17.34} />
          </Col>
        </Row>
        </div>

        <Row className="my-4">
          <Col>
            <div className="section-container">
              <EnergyProductionChart />
            </div>
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <div className="section-container">
              <EnergyProductionConsumptionChart  />
            </div>
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <div className="section-container">
              <SitePowerChart  />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
