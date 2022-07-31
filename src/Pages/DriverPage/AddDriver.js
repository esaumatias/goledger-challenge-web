import React from 'react';
import FormsPilot from '../../Components/Forms/FormPilot';
import NavBar from '../../Components/NavBar/NavBar';
import { Container } from 'react-bootstrap';

function AddCar() {
  return (
    <Container>
      <NavBar add="/" />
      <FormsPilot />
    </Container>
  )
}

export default AddCar;
