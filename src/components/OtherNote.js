import React from "react";

import { Container, Row, Col, Card, CloseButton } from "react-bootstrap";

import { ACTIONS } from "../actions";

export default function OtherNote({ noteText, dispatch, id, characterId }) {
  return (
    <Container>
      <Row>
        <Card>
          <Row>
            <Col style={{ textAlign: "right", paddingTop: "1rem" }}>
              <CloseButton
                onClick={() =>
                  dispatch({
                    type: ACTIONS.REMOVE_NOTE,
                    payload: { id, characterId },
                  })
                }
              ></CloseButton>
            </Col>
          </Row>
          <Row>
            <Col>{noteText}</Col>
          </Row>
        </Card>
      </Row>
    </Container>
  );
}
