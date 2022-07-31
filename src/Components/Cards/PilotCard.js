import React, { useContext } from "react";
import AppContext from '../../Context/AppContext';

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function PilotCard() {
  const { allPilots } = useContext(AppContext);
  
  const renderPilot = () => {
    if (!allPilots) {
      return undefined;
    } if (allPilots.length === 0) {
      return <h1>No results.</h1>;
    }
    return (
      <Row xs={1} md={4} className="g-4" style={{ display: "flex", justifyContent: "center", textAlign: "center", marginTop: "25px" }}>
        {allPilots.map((pilot, idx) => (
          <Col key={ idx }>
            <Card>
              <Card.Body>
                <Card.Title>{ pilot.name }</Card.Title>
              </Card.Body>
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
