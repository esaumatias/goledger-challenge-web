import React from 'react';
import FormsCar from '../../Components/Forms/FormsCar';
import NavBar from '../../Components/NavBar/NavBar';
import { Container } from 'react-bootstrap';

function UpdateCar() {
  return (
    <Container>
      <NavBar add="/" />
      <div style={{ display: 'flex', justifyContent: "space-between", marginBottom: "20px"}}>
        <h1>Atualizar Carro</h1>
      </div>
      <FormsCar />
    </Container>
  )
}

export default UpdateCar;
