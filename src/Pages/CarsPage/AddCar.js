import React from 'react';
import FormsCar from '../../Components/Forms/FormsCar';
import NavBar from '../../Components/NavBar/NavBar';
import { Container } from 'react-bootstrap';

function AddCar() {
  return (
    <Container>
      <NavBar add="/" />
      <div style={{ display: 'flex', justifyContent: "space-between", marginBottom: "20px"}}>
        <h1>Adicionar Carro</h1>
      </div>
      <FormsCar />
    </Container>
  )
}

export default AddCar;
