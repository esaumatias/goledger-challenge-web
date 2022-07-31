import React from "react";
import { Container } from 'react-bootstrap';
import NavBar from '../../Components/NavBar/NavBar';
import TeamCard from '../../Components/Cards/CardTeam';

function TeamPage() {
  return (
    <Container>
      <NavBar add="Equipe" />
      <h1>Equipes</h1>
      <TeamCard />
    </Container>
  );
}

export default TeamPage;
