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
            { id ? "Equipe atualizada" : "Equipe criada" }
          </Modal.Title>
        </Modal.Header><Modal.Body>
            <p>
              { id ? "Equipe atualizada com sucesso!" : "Equipe criada com sucesso!" }
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

function FormTeam() {
  const { setAddSubmitted, setReloadPage } = useContext(AppContext);
  const { id } = useParams();
  const [modalShow, setModalShow] = useState(false);
  const [name, setName] = useState('');

  function submitInfos() {
    const numberId = Math.floor(Math.random() * 65536);;
    const newTeam = {
      id: id ? id : numberId,
      name,
    }
    const funcao = id ? updateAsset : createAsset;
    funcao("team", newTeam).then((data) => {
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
            <Form.Control placeholder="Nome da equipe" name="nome"/>
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

export default FormTeam;
