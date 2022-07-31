import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import { Container } from 'react-bootstrap';
import CardCar from '../../Components/Cards/EventCard';
function Home() {

  return (
    <Container>
      <NavBar add="Evento" />
      <CardCar /> 
    </Container>
  );
};

export default Home;
