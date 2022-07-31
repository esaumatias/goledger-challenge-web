import React from 'react';
import FormsEvent from '../../Components/Forms/FormEvent';
import NavBar from '../../Components/NavBar/NavBar';
import { Container } from 'react-bootstrap';

function AddCar() {
  return (
    <Container>
      <NavBar add="/" />
      <FormsEvent />
    </Container>
  )
}

export default AddCar;
