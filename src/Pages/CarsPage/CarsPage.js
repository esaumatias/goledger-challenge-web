import React from "react";
import { Container } from 'react-bootstrap';
import NavBar from '../../Components/NavBar/NavBar';
import CardCar from '../../Components/Cards/CardCar';

function CarsPage() {
  return (
    <Container>
      <NavBar />
      <CardCar />
    </Container>
  );
}

export default CarsPage;
