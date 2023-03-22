import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';


function ConcentrationList() {
  return (
    <Container style={{marginTop: '1rem'}}>
        <Row>
            <Col>
            <ListGroup variant="flush">
             <ListGroup.Item variant='dark'><h5>Concentration</h5></ListGroup.Item>
      <ListGroup.Item variant='dark'>If a spell must be maintained with concentration, its description specifies how long you can concentrate on it.  You can end concentration at any time (no action required).  The following factors can break your concentration:
      <br></br>
      <ul style={{marginTop: '.25rem'}}>
        <li>You cast another spell that requires concentration</li>
        <li>You take damage.  Succeed on a Constitution saving throw to maintain your concentration,  with a DC equal to 10 or half the damage you take, whichever number is higher.</li>
        <li>You're incapacitated or killed.</li>
        <li>You're overwhelmed by an enormous distraction, such as a wave crashing into you.  Succeed on  a DC 10 Constitution saving throw to maintain your concentration.</li>
      </ul>
      </ListGroup.Item>
             </ListGroup>
            </Col>
        </Row>
    </Container>
  )
}

export default ConcentrationList