import React from "react";
import { Container, Row, Col} from 'react-bootstrap';
import Tracker from "../components/Tracker";

function CombatTracker(){
return(
    
    
  <Container className="containerStyle">
    <br/>
  <Row>
      <Col className="portHead">
        <h1>Combat Tracker</h1>
      </Col>
    </Row>
    <br/>

    <Row className="justify-content-md-center botRow">
      <Col className="md-auto botCol text-center">
        <Tracker />
      </Col>
    </Row>
  </Container>
);

};

export default CombatTracker;