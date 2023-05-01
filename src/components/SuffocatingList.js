import React from "react";
import { Container, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

function SuffocatingList() {
  return (
    <Container style={{ marginTop: "1rem" }}>
      <Row>
        <ListGroup variant="flush">
          <ListGroup.Item variant="dark">
            <h5>Suffocating</h5>
          </ListGroup.Item>
          <ListGroup.Item variant="dark">
            You can hold your breath for a number of minutes equal to 1 + your
            Constitution modifier (minimum of 30 seconds).
            <br></br>
            If you run out of breath or you're choking, you can survive for a
            number of rounds equal to your Constitution modifier (minimum of 1
            round). At the start of your next turn, you drop to 0 hit points and
            are dying, and you can't regain hit points or be stabilized until
            you can breathe again.
          </ListGroup.Item>
        </ListGroup>
      </Row>
    </Container>
  );
}

export default SuffocatingList;
