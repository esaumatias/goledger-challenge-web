import React, { useContext } from "react";
import AppContext from '../../Context/AppContext';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function EventCard() {
  const { allEvent } = useContext(AppContext);
  
  const convertDateFormat = (date) => {
    const numberEight = 8;
    const numberFive = 5;
    const numberFour = 4;
    const day = date.substr(numberEight, 2);
    const month = date.substr(numberFive, 2);
    const year = date.substr(0, numberFour);
    return `${day}/${month}/${year}`;
  };

  const convertMoney = (money) => {
    return (new Intl.NumberFormat().format(money));
  }

  const renderEvent = () => {
    if (!allEvent) {
      return undefined;
    } if (allEvent.length === 0) {
      return <h1>No results.</h1>;
}
    return (
      <Row xs={1} md={3} className="g-4" style={{ display: "flex", justifyContent: "center", textAlign: "center", marginTop: "25px" }}>
        {allEvent.map((event, idx) => (
          <Col key={ idx }>
            <Card>
              <Card.Header>
                <Card.Title>{ event.name }</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <strong>{ `Prêmio de R$ ${convertMoney(event.prize)},00` }</strong>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                {convertDateFormat(event.date)}
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    )
  };

  return (
    <>
      { renderEvent() }
    </>
  );
}

export default EventCard;
