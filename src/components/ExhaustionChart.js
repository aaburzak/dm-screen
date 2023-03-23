import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Table from 'react-bootstrap/Table';


function ExhaustionChart() {
  return (
    <Container>
    <Row>
  <h4 className="cover-title">Exhaustion</h4>
    </Row>
  
<Row>
  <Col>
  <Table striped bordered size="sm" variant="dark" >
      <thead >
        <tr>
          <th>Level</th>
          <th>Effect</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td  colSpan={2}>Disadvantage on ability checks{' '}
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td colSpan={2}>Speed halved{' '}
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Disadvantage on attack rolls and saving throws{' '}
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td colSpan={2}>Hit point maximum halved{' '}
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td colSpan={2}>Speed reduced to 0{' '}
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td colSpan={2}>Death{' '}
          </td>
        </tr>
      </tbody>
    </Table>
    </Col>
</Row>

  </Container>
  )
}

export default ExhaustionChart