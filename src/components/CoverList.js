import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Table from 'react-bootstrap/Table';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



  

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
    <Container style={{maxWidth: '50%'}}>
    <Row>
  <h4 className="cover-title">Cover</h4>
    </Row>
  
<Row>
  <Col>
  <Table striped bordered size="sm" variant="dark">
      <thead>
        <tr>
          <th>Cover</th>
          <th>Effect</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1/2</td>
          <td colSpan={2}>+2 bonus AC and Dexterity saving throws against attacks and effects that originate on the opposite side of the cover.{' '}
          </td>
        </tr>
        <tr>
          <td>3/4</td>
          <td colSpan={2}>+5 bonus to AC and Dexterity saving throws against attacks and effects that originate on the opposite side of the cover.{' '}
          </td>
        </tr>
        <tr>
          <td>Total</td>
          <td colSpan={2}>Can't be targeted directly by an attack or a spell{' '}
          </td>
        </tr>
      </tbody>
    </Table>
  </Col>
</Row>

  </Container>
  )
}

export default CoverList