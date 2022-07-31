import React from "react";
import { Container } from 'react-bootstrap';
import NavBar from '../../Components/NavBar/NavBar';
import PilotCard from '../../Components/Cards/PilotCard';

function TeamPage() {
  return (
    <Container>
      <NavBar add="Driver" />
      <PilotCard />
    </Container>
  );
}

export default TeamPage;
