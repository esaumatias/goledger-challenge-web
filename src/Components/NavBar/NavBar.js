import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar(props) {
    const { add } = props;
  
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
              <Nav.Link href="action1">Home</Nav.Link>
            </Link>
            <Link to="/cars">
              <Nav.Link href="#action2">Painel de Carros</Nav.Link>
            </Link>
            <Link to="/driver">
            <Nav.Link href="#action3">Pilotos</Nav.Link>
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Link to={ add === "/"  ? "/" : `add${add}` }>
            <Button style={{ marginLeft: "10px" }}>{ add === "/"  ? "Voltar" : `Adicionar ${add}` }</Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
