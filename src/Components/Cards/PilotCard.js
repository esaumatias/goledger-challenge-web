import React, { useContext } from "react";
import AppContext from '../../Context/AppContext';
import { deleteAssetByID } from '../../Services/endepointApi';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function PilotCard() {
  const { allPilots, setReloadPage } = useContext(AppContext);

  const deleteItem = async (id) => {
    await deleteAssetByID(id).then((response) =>
      setReloadPage(true)
    );
  }
  
  const renderPilot = () => {
    if (!allPilots) {
      return undefined;
    } if (allPilots.length === 0) {
      return <h1>No results.</h1>;
    }
    return (
      <Row xs={1} md={3} className="g-4" style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
        {allPilots.map((pilot, idx) => (
          <Col key={ idx }>
            <Card>
              <Card.Body>
                <Card.Title>{ pilot.name }</Card.Title>
              </Card.Body>
              <Card.Footer>
                <button type="button" class="btn btn-warning">Warning</button>
                <button type="button" class="btn btn-danger" onClick={() => deleteItem(pilot['@key'])}>apagar</button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    )
  };
  return (
    <>
      { renderPilot() }
    </>
  );
}

export default PilotCard;
