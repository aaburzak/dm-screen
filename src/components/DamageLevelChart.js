import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function DamageLevelChart() {
  return (
    <Container  className='text-center'>
        <Row>
      <h4 className="cover-title">Damage By Level And Severity</h4>
        </Row>
      
    <Row>
      
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
              <td >1</td>
              <td>10d10</td>
              <td>18d10</td>
              <td>24d10</td>
            </tr>
                     
          </tbody>
        </Table>
      
    </Row>
    
      </Container>
  )
}

export default DamageLevelChart