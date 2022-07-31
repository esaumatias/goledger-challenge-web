import React from "react";
import { Container } from 'react-bootstrap';
import NavBar from '../../Components/NavBar/NavBar';
import CardCar from '../../Components/Cards/CardCar';

function CarsPage() {
  return (
    <Container>
      <NavBar add="Carro" />
      <h1>Carros</h1>
      <CardCar />
    </Container>
  );
}

export default CarsPage;
