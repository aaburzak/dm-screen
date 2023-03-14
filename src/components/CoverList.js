import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

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
      style={{ background:'linear-gradient(to left, #e6eaec, #C0C0C0)', border: 'outset', borderRadius:'50px', padding:'1rem' }}
      onClick={decoratedOnClick}
      
    >
      {children}
    </button>
  );
}

function CoverList() {
  return (
    <Container>
    <Row>
  <h3 className="cover-title">Cover</h3>
  <Col>
    <Accordion style={{ boxShadow: 'inset 0px 0px 8px #e6eaec, 0 0 15px #e6eaec'}}>
  <Card>
    <Card.Header style={{background: 'linear-gradient(to left, #e6eaec, #C0C0C0)', fontSize:'.6rem'}}>
      <CustomToggle eventKey="0">1/2</CustomToggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body style={{backgroundColor: '#CCFFFF'}}>
        <ul>
          <li>
            +2 bonus to AC and Dexterity saving throws against attacks and effects that originate on the opponent side of the cover.
          </li>
        </ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header  style={{background: 'linear-gradient(to left, #e6eaec, #C0C0C0)', fontSize:'.6rem'}}>
      <CustomToggle eventKey="1">3/4</CustomToggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body style={{backgroundColor: '#FF99CC'}}>
      <ul>
          <li>
            +5 bonus to AC and Dexterity saving throws against attacks and effects that originate on the opposite side of the cover.
          </li>
          
        </ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header style={{background: 'linear-gradient(to left, #e6eaec, #C0C0C0)', fontSize:'.6rem'}}>
      <CustomToggle eventKey="2">Total</CustomToggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body style={{backgroundColor: '#FFCC99'}}>
      <ul>
          <li>
            Can't be targeted directly by an attack or a spell.
          </li>
        </ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  </Accordion>
  </Col>
  </Row>
  </Container>
  )
}

export default CoverList