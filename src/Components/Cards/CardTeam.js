import React, { useContext } from "react";
import AppContext from '../../Context/AppContext';
import { deleteAssetByID } from '../../Services/endepointApi';
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function CardTeam() {
  const { listTeam, setReloadPage } = useContext(AppContext);

  const renderCar = () => {
    if (!listTeam) {
      return undefined;
    } if (listTeam.length === 0) {
      return <h1>No results.</h1>;
    }

  const deleteItem = async (id) => {
    await deleteAssetByID(id).then((response) =>
      setReloadPage(true)
    );
  }
    return (
      <Row xs={1} md={3} className="g-4" style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
        {listTeam.map((team, idx) => (
          <Col key={ idx }>
            <Card>
              <Card.Body>
                <Card.Title>{ team.name }</Card.Title>
              </Card.Body>
              <Card.Footer>
                <Link to={`/team/update/${team.id}`}>
                  <button type="button" class="btn btn-warning">editar</button>
                </Link>
                <button type="button" class="btn btn-danger" onClick={() => deleteItem(team['@key'])}>apagar</button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    )
  };

  return (
    <>
      { renderCar() }
    </>
  );
}

export default CardTeam;
