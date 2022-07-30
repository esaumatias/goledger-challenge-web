import React, { useEffect, useState } from "react";
import { getAssetTypeDataList } from "../../Services/endepointApi";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function PilotCard() {
  const [allPilots, setAllPilots] = useState([]);
  const getTeamList = async () => {
    await getAssetTypeDataList("team").then((response) =>
      setAllPilots(response.data.result)
    );
  };

  const renderPilot = () => {
    if (!allPilots) {
      return undefined;
    } if (allPilots.length === 0) {
      return <h1>No results.</h1>;
    }
    return (
      <Row xs={1} md={4} className="g-4">
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

  useEffect(() => {
    getTeamList();
  }, []);
  return (
    <>
      { renderPilot() }
    </>
  );
}

export default PilotCard;
