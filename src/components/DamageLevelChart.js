import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function DamageLevelChart() {
  return (
    <Container>
        <Row>
      <h4 className="cover-title">Damage By Level And Severity</h4>
        </Row>
      
    <Row>
    <Col>
      
    <Table striped bordered size="sm" variant="dark" >
          <thead >
            <tr>
              <th>Level</th>
              <th>Setback</th>
              <th>Dangerous</th>
              <th>Deadly</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >1-4</td>
              <td>1d10</td>
              <td>2d10</td>
              <td>4d10</td>
            </tr>
            <tr>
               <td >5-10</td>
              <td>2d10</td>
              <td>4d10</td>
              <td>10d10</td>
            </tr>
            <tr>
               <td >11-16</td>
              <td>4d10</td>
              <td>10d10</td>
              <td>18d10</td>
            </tr>
            <tr>
              <td >17-20</td>
              <td>10d10</td>
              <td>18d10</td>
              <td>24d10</td>
            </tr>
                     
          </tbody>
        </Table>
        </Col>
    </Row>
    
      </Container>
  )
}

export default DamageLevelChart