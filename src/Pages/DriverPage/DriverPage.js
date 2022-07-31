import React from "react";
import { Container } from 'react-bootstrap';
import NavBar from '../../Components/NavBar/NavBar';
import PilotCard from '../../Components/Cards/PilotCard';

function DrivePage() {
  return (
    <Container>
      <NavBar add="Driver" />
      <h1>Pilotos</h1>
      <PilotCard />
    </Container>
  );
}

export default DrivePage;
