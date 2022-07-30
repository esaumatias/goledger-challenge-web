import React, { useEffect, useState } from "react";
import { getAssetTypeDataList } from "../../Services/endepointApi";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function PilotCard() {
  const [allCars, setAllCars] = useState([]);
  const getAlbumList = async () => {
    await getAssetTypeDataList("team").then((response) =>
      setAllCars(response.data.result)
    );
  };

  console.log(allCars);

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
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>{ car.name }</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    )
  };

  useEffect(() => {
    getAlbumList();
  }, []);
  return (
    <>
      { renderCar() }
    </>
  );
}

export default PilotCard;
