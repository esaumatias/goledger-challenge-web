import React, { useEffect, useState } from "react";
import { getAssetTypeDataList } from "../../Services/endepointApi";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function CardCar() {
  const [allCars, setAllCars] = useState([]);
  const getCarsList = async () => {
    await getAssetTypeDataList("car").then((response) =>
      setAllCars(response.data.result)
    );
  };

  const renderCar = () => {
    if (!allCars) {
      return undefined;
    } if (allCars.length === 0) {
      return <h1>No results.</h1>;
    }
    return (
      <Row xs={1} md={4} className="g-4">
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

  useEffect(() => {
    getCarsList();
  }, []);
  return (
    <>
      { renderCar() }
    </>
  );
}

export default CardCar;
