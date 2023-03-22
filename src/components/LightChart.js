import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Table from 'react-bootstrap/Table';


function LightChart() {
  return (
    <Container>
    <Row>
  <h4 className="cover-title">Light</h4>
    </Row>
  
<Row>
  
<Table striped bordered size="sm" variant="dark" >
      <thead >
        <tr>
          <th>Source</th>
          <th>Bright Light</th>
          <th>Dim Light</th>
          <th>Duration</th> 
        </tr>
      </thead>
      <tbody>
        <tr>
          <td >Candle</td>
          <td>5 ft.</td>
          <td>+ 5 ft.</td>
          <td>1 hour</td>
        </tr>
        <tr>
            <td >Heavily obscured</td>
          <td>Vision is blocked; creatures are effectively blinded.</td>
          <td>Darkness, opaque, fog, dense foliage</td>
         
        </tr>
              
      </tbody>
    </Table>
  
</Row>

  </Container>
  )
}

export default LightChart