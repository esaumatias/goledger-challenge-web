import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import { Container } from 'react-bootstrap';
import CardCar from '../../Components/Cards/EventCard';
function Home() {

  return (
    <Container>
      <NavBar add="Event" />
      <h1>Eventos</h1>
      <CardCar /> 
    </Container>
  );
};

export default Home;
