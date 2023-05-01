import React from "react";
import { Container, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

function LongJumpList() {
  return (
    <Container>
      <Row>
        <ListGroup variant="flush">
          <ListGroup.Item variant="dark">
            <h5>Long Jump</h5>
          </ListGroup.Item>
          <ListGroup.Item variant="dark">
            Move 10+ feet, and jump a number of feet up to your Strength score.
            When you make a standing jump, you can leap only half that distance.
          </ListGroup.Item>
        </ListGroup>
      </Row>
    </Container>
  );
}

export default LongJumpList;
