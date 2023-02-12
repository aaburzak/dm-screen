import React from "react";
import { Container, Row, Col} from 'react-bootstrap';
import Tracker from "../components/Tracker";
import Calculator from "../components/Calculator";

function CombatTracker(){
return(
    
    
  <Container className="containerStyle">
    <br/>
  <Row className="justify-content-md-center text-center" >
    <h1>Combat Tracker</h1>
      <Col>
        <Tracker />
      </Col>
      <Col>
        <h1>Conditions</h1>
      </Col>
  </Row>
    <br/>

    <Row className="justify-content-md-center">
      <Col className="md-auto botCol text-center">
        <Calculator />
      </Col>
    </Row>
  </Container>
);

};

export default CombatTracker;