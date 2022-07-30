import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import { Container } from 'react-bootstrap';
import CardCar from '../../Components/Cards/PilotCard';
function Home() {

  return (
    <Container>
      <NavBar />
      <CardCar /> 
    </Container>
  );
};

export default Home;
