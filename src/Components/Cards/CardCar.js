import React, { useContext } from "react";
import AppContext from '../../Context/AppContext';
import { deleteAssetByID } from '../../Services/endepointApi';
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function CardCar() {
  const { allCars, setReloadPage } = useContext(AppContext);

  const renderCar = () => {
    if (!allCars) {
      return undefined;
    } if (allCars.length === 0) {
      return <h1>No results.</h1>;
    }

  const deleteItem = async (id) => {
    await deleteAssetByID(id).then((response) =>
      setReloadPage(true)
    );
  }
    return (
      <Row xs={1} md={3} className="g-4" style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
        {allCars.map((car, idx) => (
          <Col key={ idx }>
            <Card>
              <Card.Body>
                <Card.Title>{ car.model }</Card.Title>
              </Card.Body>
              <Card.Footer>
                <Link to={`/cars/update/${car.id}`}>
                  <button type="button" class="btn btn-warning">editar</button>
                </Link>
                <button type="button" class="btn btn-danger" onClick={() => deleteItem(car['@key'])}>apagar</button>
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

export default CardCar;
