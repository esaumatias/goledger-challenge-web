import React, { useContext, useState } from 'react';
import { createAsset } from '../../Services/endepointApi';
import { Container, Form, Row, Col, Button, Modal } from 'react-bootstrap'
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
            Carro criado
          </Modal.Title>
        </Modal.Header><Modal.Body>
            <p>
              Carro criado com sucesso!
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

function FormsCar() {
  const { setAddSubmitted, allPilots } = useContext(AppContext);
  const [modalShow, setModalShow] = useState(false);
  const [model, setModel] = useState('');
  const [description, setDesciption] = useState('');
  const [pilot, setPilot] = useState('');

  function submitInfos() {
    const numberId = Math.floor(Math.random() * 65536);;
    const newCar = {
      id: numberId,
      model,
      driver: { id: pilot, description }
    }

    createAsset("car", newCar).then((data) => {
      if(data.status === 200) {
        setAddSubmitted(true);
      } else {
        setAddSubmitted(false);
      }
      setModalShow(true);
    })
}

  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: "space-between", marginTop: "40px", marginBottom: "20px"}}>
        <h1>Adicionar Carro</h1>
      </div>
      <Form>
        <Col  className="align-items-center">
          <Row style={{ marginBottom: "15px" }} sm='6' className="my-1" onChange={({ target }) => setModel(target.value)}>
            <Form.Label><strong>Modelo</strong></Form.Label>
            <Form.Control placeholder="Modelo" name="model"/>
          </Row>
          <Row style={{ marginBottom: "15px" }} sm='6' className="my-1" onChange={({ target }) => setDesciption(target.value)}>
            <Form.Label><strong>Descrição</strong></Form.Label>
            <Form.Control placeholder="Descrição" name="description"/>
          </Row>
          <Row style={{ marginBottom: "15px" }} sm='6' className="my-1">
            <Form.Label><strong>Piloto</strong></Form.Label>
            <Form.Select aria-label="Default select example" onChange={({ target }) => setPilot(target.value)} name='driver'>
              { allPilots.map((pilot, index) => (
                <option value={ pilot.id } key={ index }>{ pilot.name }</option>
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

export default FormsCar;
