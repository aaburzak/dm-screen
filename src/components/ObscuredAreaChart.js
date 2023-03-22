import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Table from 'react-bootstrap/Table';

function ObscuredAreaChart() {
  return (
    <Container>
    <Row>
  <h4 className="cover-title">Obscured Areas</h4>
    </Row>
  
<Row>
  
<Table striped bordered size="sm" variant="dark" >
      <thead >
        <tr>
          <th>Obscureness</th>
          <th>Effect</th>
          <th>Examples</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td >Lightly obscured</td>
          <td>Creatures have disadvantage on Wisdom (Perception) checks that rely on sight.</td>
          <td>Dim light, patchy fog, moderate foliage</td>
      
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

export default ObscuredAreaChart