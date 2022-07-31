import React from 'react';
import FormTeam from '../../Components/Forms/FormTeam';
import NavBar from '../../Components/NavBar/NavBar';
import { Container } from 'react-bootstrap';

function AddCar() {
  return (
    <Container>
      <NavBar add="/" />
      <div style={{ display: 'flex', justifyContent: "space-between", marginBottom: "20px"}}>
        <h1>Adicionar Equipe</h1>
      </div>
      <FormTeam />
    </Container>
  )
}

export default AddCar;
