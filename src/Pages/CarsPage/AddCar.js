import React from 'react';
import FormsCar from '../../Components/Forms/FormsCar';
import NavBar from '../../Components/NavBar/NavBar';
import { Container } from 'react-bootstrap';

function AddCar() {
  return (
    <Container>
      <NavBar add="/" />
      <FormsCar />
    </Container>
  )
}

export default AddCar;
