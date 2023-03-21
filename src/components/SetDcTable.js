import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import Table from 'react-bootstrap/Table';

function SetDcTable() {
    return (
        <Container>
        <Row>
      <h4 className="cover-title">Setting A DC</h4>
        </Row>
      
    <Row>
      
      <Table striped bordered size="sm" variant="dark" >
          <thead >
            <tr>
              <th colSpan={2}>Difficulty{' '}</th>
              <th>DC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2}>Very Easy{' '} </td>
              <td>5</td>
            </tr>
            <tr>
              <td colSpan={2}>Easy{' '} </td>
              <td>10</td>
            </tr>
            <tr>
              <td colSpan={2}>Moderate{' '} </td>
              <td>15</td>
            </tr>
            <tr>
              <td colSpan={2}>Hard{' '} </td>
              <td>20</td>
            </tr>
            <tr>
              <td colSpan={2}>Very Hard{' '} </td>
              <td>25</td>
            </tr>
            <tr>
              <td colSpan={2}>Nearly Impossible{' '} </td>
              <td>30</td>
            </tr>            
          </tbody>
        </Table>
      
    </Row>
    
      </Container>
      )
    }
    
export default SetDcTable