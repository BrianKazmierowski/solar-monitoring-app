// src/pages/HomePage.js
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import EnergyProductionChart from '../components/EnergyProductionChart';

const HomePage = () => {
  return (
    <Container>
      <h1 className="mt-5">Supervision des Panneaux Photovoltaïques</h1>
      <Row className="mt-4">
        <Col>
          <EnergyProductionChart />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h3>Production Actuelle: 400 kWh</h3>
          <h3>Consommation Actuelle: 300 kWh</h3>
          <h3>Différence: +100 kWh</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
