import React, { useContext, useState } from 'react';
import { createAsset } from '../../Services/endepointApi';
import { Container, Form, Row, Col, Button, Modal } from 'react-bootstrap';
import AppContext from '../../Context/AppContext';

function MyVerticallyCenteredModal(props) {
  const { addSubmitted } = useContext(AppContext);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {addSubmitted ? (
        <><Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Evento criado
          </Modal.Title>
        </Modal.Header><Modal.Body>
            <p>
              Evento criado com sucesso!
            </p>
          </Modal.Body></>
      ) : (
        <><Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Error
            </Modal.Title>
          </Modal.Header><Modal.Body>
              <p>
                confira se todos os campos foram inseridos corretamente!
              </p>
            </Modal.Body></>
      )}
      
    </Modal>
  );
}

function FormEvent() {
  const { setAddSubmitted, listTeam, setReloadPage } = useContext(AppContext);
  const [modalShow, setModalShow] = useState(false);
  const [name, setName] = useState('');
  const [prize, setPrize] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [team, setTeam] = useState('');

  function submitInfos() {
    const newEvent = {
      name,
      date: date + "T" + time + ":00Z",
      prize,
      winner: { id: team }
    }

    createAsset("event", newEvent).then((data) => {
      if(data.status === 200) {
        setAddSubmitted(true);
      } else {
        setAddSubmitted(false);
      }
      setModalShow(true);
      setReloadPage(true);
    })
  }

  return (
    <Container>
      <Form>
        <Col  className="align-items-center">
          <Row style={{ marginBottom: "15px" }} sm='6' className="my-1" onChange={({ target }) => setName(target.value)}>
            <Form.Label><strong>Nome</strong></Form.Label>
            <Form.Control placeholder="Nome" name="nome"/>
          </Row>
          <Row style={{ marginBottom: "15px" }} sm='6' className="my-1" onChange={({ target }) => setPrize(target.value)}>
            <Form.Label><strong>Premiação</strong></Form.Label>
            <Form.Control placeholder="Premiação" name="prize" type="Number" />
          </Row>
          <Row style={{ marginBottom: "15px" }} sm='6' className="my-1" onChange={({ target }) => setDate(target.value)}>
            <Form.Label><strong>Data</strong></Form.Label>
            <Form.Control placeholder="data" name="date" type="Date" />
          </Row>
          <Row style={{ marginBottom: "15px" }} sm='6' className="my-1" onChange={({ target }) => setTime(target.value)}>
            <Form.Label><strong>Horário</strong></Form.Label>
            <Form.Control placeholder="time" name="time" type="Time" />
          </Row>
          <Row style={{ marginBottom: "15px" }} sm='6' className="my-1">
            <Form.Label><strong>Equipe vencedora</strong></Form.Label>
            <Form.Select aria-label="Default select example" onChange={({ target }) => setTeam(target.value)} name='driver'>
              { listTeam.map((team, index) => (
                <option value={ team.id } key={ index }>{ team.name }</option>
              )) }
            </Form.Select>
          </Row>
        </Col>
        <Button variant="dark" type="reset" onClick={submitInfos} style={{ alignSelf: "end", marginTop: "15px"}}>
          Salvar
        </Button>
      </Form>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
};

export default FormEvent;
