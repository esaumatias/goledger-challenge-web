import React, { useContext, useState } from 'react';
import { createAsset, updateAsset } from '../../Services/endepointApi';
import { Container, Form, Row, Col, Button, Modal } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import AppContext from '../../Context/AppContext';

function MyVerticallyCenteredModal(props) {
  const { addSubmitted } = useContext(AppContext);
  const { id } = useParams();
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
            { id ? "Piloto Atualizado" : "Piloto criado" }
          </Modal.Title>
        </Modal.Header><Modal.Body>
            <p>
              { id ? "Piloto atualizado com sucesso!" : "Piloto criado com sucesso!" }
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

function FormPilot() {
  const { setAddSubmitted, listTeam, setReloadPage } = useContext(AppContext);
  const { id } = useParams();
  const [modalShow, setModalShow] = useState(false);
  const [name, setName] = useState('');
  const [description, setDesciption] = useState('');
  const [team, setTeam] = useState('');

  function submitInfos() {
    const numberId = Math.floor(Math.random() * 65536);;
    const newPilot = {
      id: id ? id : numberId,
      name,
      team: { id: team, description }
    }
    const funcao = id ? updateAsset : createAsset;
    funcao("driver", newPilot).then((data) => {
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
          <Row style={{ marginBottom: "15px" }} sm='6' className="my-1" onChange={({ target }) => setDesciption(target.value)}>
            <Form.Label><strong>Descrição</strong></Form.Label>
            <Form.Control placeholder="Descrição" name="description"/>
          </Row>
          <Row style={{ marginBottom: "15px" }} sm='6' className="my-1">
            <Form.Label><strong>Team</strong></Form.Label>
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

export default FormPilot;
