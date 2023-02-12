import React from "react";
import {Row, Col} from 'react-bootstrap';
import Calculator from "./Calculator";


function Tracker() {
  return (
    <Row className="justify-content-md-center botRow">
        <h1>Tracker Here</h1>
      <Col className="md-auto botCol text-center">
        <Calculator />
      </Col>
    </Row>
  )
}

export default Tracker;
