import React, { useContext } from "react";
import AppContext from '../../Context/AppContext';

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function CardCar() {
  const { allCars } = useContext(AppContext);

  const renderCar = () => {
    if (!allCars) {
      return undefined;
    } if (allCars.length === 0) {
      return <h1>No results.</h1>;
    }
    return (
      <Row xs={1} md={3} className="g-4" style={{ display: "flex", justifyContent: "center", textAlign: "center", marginTop: "25px" }}>
        {allCars.map((car, idx) => (
          <Col key={ idx }>
            <Card>
              <Card.Body>
                <Card.Title>{ car.model }</Card.Title>
              </Card.Body>
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
