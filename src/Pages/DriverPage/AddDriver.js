import React from 'react';
import FormsPilot from '../../Components/Forms/FormPilot';
import NavBar from '../../Components/NavBar/NavBar';
import { Container } from 'react-bootstrap';

function AddCar() {
  return (
    <Container>
      <NavBar add="/" />
      <div style={{ display: 'flex', justifyContent: "space-between", marginBottom: "20px"}}>
        <h1>Adicionar Piloto</h1>
      </div>
      <FormsPilot />
    </Container>
  )
}

export default AddCar;
