import React from "react";
import { Container, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

function HighJumpList() {
  return (
    <Container style={{ marginTop: "1rem" }}>
      <Row>
        <ListGroup variant="flush">
          <ListGroup.Item variant="dark">
            <h5>High Jump</h5>
          </ListGroup.Item>
          <ListGroup.Item variant="dark">
            Move 10+ feet, and jump a number of feet equal to 3 + your Strength
            modifier. When you make a standing high jump, you can jump only half
            that distance.
          </ListGroup.Item>
        </ListGroup>
      </Row>
    </Container>
  );
}

export default HighJumpList;
