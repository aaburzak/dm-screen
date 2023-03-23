import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Table from 'react-bootstrap/Table';

function EncounterDistanceChart() {
  return (
    <Container>
    <Row>
  <h4 className="cover-title">Encounter Distance</h4>
    </Row>
  
<Row>
<Col>
<Table striped bordered size="sm" variant="dark" >
      <thead >
        <tr>
          <th>Terrain</th>
          <th>Encounter Distance</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Arctic, desert, farmland, or grassland</td>
          <td>6d6 x 10 feet</td>
      
        </tr>
        <tr>
          <td>Forest, swamp, or woodland</td>
          <td>2d8 x 10 feet</td>
        </tr>
        <tr>
          <td>Hills or wastelands</td>
          <td>2d10 x 10 feet</td>
        </tr>
        <tr>
          <td>Jungle</td>
          <td>2d6 x 10 feet</td>
        </tr>
        <tr>
          <td>Mountains</td>
          <td>4d10 x 10 feet</td>
        </tr>
              
      </tbody>
    </Table>

    <Table striped bordered size="sm" variant="dark" >
      <thead >
        <tr>
          <th>Audible Distance</th>
          <th>Encounter Distance</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Trying to be quiet</td>
          <td>2d6 x 5 feet</td>
      
        </tr>
        <tr>
          <td>Normal noise level</td>
          <td>2d6 x 10 feet</td>
        </tr>
        <tr>
          <td>Very loud</td>
          <td>2d6 x 50 feet</td>
        </tr>          
      </tbody>
    </Table>
  
    <Table striped bordered size="sm" variant="dark" >
      <thead >
        <tr>
          <th>Visibility Outdoors</th>
          <th>Encounter Distance</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Clear day no obstruction</td>
          <td>2 miles</td>
      
        </tr>
        <tr>
          <td>Rain</td>
          <td>1 mile</td>
        </tr>
        <tr>
          <td>Fog</td>
          <td>100 to 300 feet</td>
        </tr>  
        <tr>
            <td>From a height</td>
            <td>x 20</td>
        </tr>        
      </tbody>
    </Table>
    </Col>
</Row>

  </Container>
  )
}

export default EncounterDistanceChart