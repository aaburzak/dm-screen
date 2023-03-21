import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function DamageLevelChart() {
  return (
    <Container>
        <Row>
      <h4 className="cover-title">Tracking DCs</h4>
        </Row>
      
    <Row>
      
    <Table striped bordered size="sm" variant="dark" >
          <thead >
            <tr>
              <th colSpan={2}>Ground Surface{' '}</th>
              <th>DC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2}>Soft surface such as snow{' '} </td>
              <td>10</td>
            </tr>
            <tr>
              <td colSpan={2}>Dirt or grass{' '} </td>
              <td>15</td>
            </tr>
            <tr>
              <td colSpan={2}>Bare Stone{' '} </td>
              <td>20</td>
            </tr>
            <tr>
              <td colSpan={2}>Each day since the creature passed{' '} </td>
              <td>+5</td>
            </tr>
            <tr>
              <td colSpan={2}>Creature left a trail such as blood{' '} </td>
              <td>-5</td>
            </tr>            
          </tbody>
        </Table>
      
    </Row>
    
      </Container>
  )
}

export default DamageLevelChart