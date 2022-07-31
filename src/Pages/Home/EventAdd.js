import React from 'react';
import FormsEvent from '../../Components/Forms/FormEvent';
import NavBar from '../../Components/NavBar/NavBar';
import { Container } from 'react-bootstrap';

function AddCar() {
  return (
    <Container>
      <NavBar add="/" />
      <div style={{ display: 'flex', justifyContent: "space-between", marginBottom: "20px"}}>
        <h1>Adicionar Evento</h1>
      </div>
      <FormsEvent />
    </Container>
  )
}

export default AddCar;
