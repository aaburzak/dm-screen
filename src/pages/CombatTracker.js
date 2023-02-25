import React from "react";
import { Container, Row, Col} from 'react-bootstrap';
import Tracker from "../components/Tracker";
import Calculator from "../components/Calculator";

import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

  

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: '#F0F0F0' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}



function CombatTracker(){
return(
    
    
  <Container className="containerStyle">
    <br/>
  <Row className="justify-content-md-center text-center" >
    <h1 className="title">Combat Tracker</h1>
      <Col>
        <Tracker />
      </Col>
      <Col>
        <h1>Conditions</h1>
        
        <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header style={{backgroundColor: '#CCFFFF'}}>
          <CustomToggle eventKey="0">Blinded</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <ul>
              <li>
                A blinded creature can’t see and automatically fails any ability check that requires sight.
              </li>
              <br></br>
              <li>
                Attack rolls against the creature have advantage, and the creature’s Attack rolls have disadvantage.
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header style={{backgroundColor: '#FF99CC'}}>
          <CustomToggle eventKey="1">Charmed</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
          <ul>
              <li>
              A charmed creature can’t attack the charmer or target the charmer with harmful Abilities or Magical Effects.
              </li>
              <br></br>
              <li>
              The charmer has advantage on any ability check to interact socially with the creature.
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header style={{backgroundColor: '#FFCC99'}}>
          <CustomToggle eventKey="2">Deafened</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
          <ul>
              <li>
              A deafened creature can’t hear and automatically fails any ability check that requires hearing.
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header style={{backgroundColor: '#FFFF66'}}>
          <CustomToggle eventKey="3">Frightened</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
          <ul>
              <li>
              A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is within Line of Sight.
              </li>
              <br></br>
              <li>
                The creature can't willingly move closer to the source of its fear.
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header style={{backgroundColor: '#663300'}}>
          <CustomToggle eventKey="4">Grappled</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body>
          <ul>
              <li>
              A grappled creature’s speed becomes 0, and it can’t benefit from any bonus to its speed
              </li>
              <br></br>
              <li>
              The condition ends if the Grappler is incapacitated (see the condition).
              </li>
              <br></br>
              <li>
              The condition also ends if an Effect removes the grappled creature from the reach of the Grappler or Grappling Effect, such as when a creature is hurled away by the thunderwave spell.
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header style={{backgroundColor: '#CCCCFF'}}>
          <CustomToggle eventKey="5">Incapacitated</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="5">
          <Card.Body>
          <ul>
              <li>
              An incapacitated creature can’t take actions or reactions.
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>



    </Accordion>




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