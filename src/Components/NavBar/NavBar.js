import React, { useContext, useEffect } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import AppContex from '../../Context/AppContext';
import { Link } from 'react-router-dom';

function NavBar(props) {
    const { add } = props;
    const {
      allPilots,
      allEvent,
      allCars,
      listTeam,
      setNewListPilots,
      setNewListEvent,
      setNewListCars,
      setNewListTeam
    } = useContext(AppContex);

    const checkPage = () => {
      if (add === "Piloto") return setNewListPilots;
      if (add === "Equipe") return setNewListTeam;
      if (add === "Evento") return setNewListEvent;
      if (add === "Carro") return setNewListCars;
    }

    const checkDataPage = () => {
      if (add === "Piloto") return allPilots;
      if (add === "Equipe") return listTeam;
      if (add === "Evento") return allEvent;
      if (add === "Carro") return allCars;
    }
    
    const filter = (value) => {
      checkPage()(
        checkDataPage()?.filter(
          (fa) => fa.name?.toLowerCase().includes(value.toLowerCase())
          || fa.model?.toLowerCase().includes(value.toLowerCase()),
        ),
      );
    }

    useEffect(() => {
      setNewListPilots(allPilots);
      setNewListEvent(allEvent);
      setNewListCars(allCars);
      setNewListTeam(listTeam);
    }, [
      allPilots,
      allEvent,
      allCars,
      listTeam,
      setNewListPilots,
      setNewListEvent,
      setNewListCars,
      setNewListTeam
    ]);
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Car Race</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/">
              <Nav.Link href="action1">Eventos</Nav.Link>
            </Link>
            <Link to="/cars">
              <Nav.Link href="#action2">Carros</Nav.Link>
            </Link>
            <Link to="/driver">
              <Nav.Link href="#action3">Pilotos</Nav.Link>
            </Link>
            <Link to="/team">
              <Nav.Link href="#action4">Equipe</Nav.Link>
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onInput={e => filter(e.target.value)}
              style={{ }}
            />
          </Form>
          <Link to={ add === "/"  ? "/" : `add` } >
            <Button variant="dark">{ add === "/"  ? "Voltar" : `Adicionar ${add}` }</Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
