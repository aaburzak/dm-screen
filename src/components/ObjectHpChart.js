import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function ObjectHpChart() {
  return (
    <Container>
    <Row className='text-center'>
  <h4 className="cover-title">Object Hit Points</h4>
    </Row>
  
<Row>
  
<Table striped bordered size="sm" variant="dark" >
      <thead >
        <tr>
          <th>Size</th>
          <th>Fragile</th>
          <th>Resilient</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td >Tiny (bottle, lock)</td>
          <td>2 (1d4)</td>
          <td>5 (2d4)</td>
        </tr>
        <tr>
        <td >Small (chest, lute)</td>
          <td>3 (1d6)</td>
          <td>10 (3d6)</td>
        </tr>
        <tr>
        <td >Medium (barrel, chandelier)</td>
          <td>4 (1d8)</td>
          <td>18 (4d8)</td>
        </tr>
        <tr>
        <td >Large (cart, 10-ft.-by-10ft. window)</td>
          <td>5 (1d10)</td>
          <td>27 (5d10)</td>
        </tr>
                 
      </tbody>
    </Table>
  
</Row>

  </Container>
  )
}

export default ObjectHpChart