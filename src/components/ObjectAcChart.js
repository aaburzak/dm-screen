import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Table from 'react-bootstrap/Table';

function ObjectAcChart() {
    return (
        <Container>
        <Row>
      <h4 className="cover-title">Object Armor Class</h4>
        </Row>
      
    <Row>
      <Col>
      
    <Table striped bordered size="sm" variant="dark" >
          <thead >
            <tr>
              <th colSpan={2}>Substance{' '}</th>
              <th>AC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2}>Cloth, paper, rope{' '} </td>
              <td>11</td>
            </tr>
            <tr>
              <td colSpan={2}>Crystal, glass, ice{' '} </td>
              <td>13</td>
            </tr>
            <tr>
              <td colSpan={2}>Wood, bone{' '} </td>
              <td>15</td>
            </tr>
            <tr>
              <td colSpan={2}>Stone{' '} </td>
              <td>17</td>
            </tr>
            <tr>
              <td colSpan={2}>Iron, steel{' '} </td>
              <td>19</td>
            </tr>
            <tr>
              <td colSpan={2}>Mithral{' '} </td>
              <td>21</td>
            </tr> 
            <tr>
              <td colSpan={2}>Adamantine{' '} </td>
              <td>23</td>
            </tr>            
          </tbody>
        </Table>
        </Col>
    </Row>
    
      </Container>
      )
    }

export default ObjectAcChart