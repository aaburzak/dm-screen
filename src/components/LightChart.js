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
            <td >Lamp</td>
          <td>15 ft.</td>
          <td>+ 30 ft.</td>
          <td>6 hours</td>
        </tr>

        <tr>
          <td >Lantern, bullseye</td>
          <td>60 ft. cone</td>
          <td>+ 60 ft.</td>
          <td>6 hours</td>
        </tr>
        <tr>
          <td >Lantern, hooded</td>
          <td>30 ft. cone</td>
          <td>+ 30 ft.</td>
          <td>6 hours</td>
        </tr>
        <tr>
          <td style={{paddingLeft: '2rem'}}>Lowered hood</td>
          <td>-</td>
          <td>+ 5 ft.</td>
          <td>-</td>
        </tr>
        <tr>
          <td >Torch</td>
          <td>20 ft.</td>
          <td>+ 20 ft.</td>
          <td>1 hour</td>
        </tr>
              
      </tbody>
    </Table>
  
</Row>

  </Container>
  )
}

export default LightChart