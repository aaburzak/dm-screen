import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Table from 'react-bootstrap/Table';

function ServicesChart() {
  return (
    <Container>
        <Row>
      <h4 className="cover-title">Services</h4>
        </Row>
      
    <Row>
    <Col>
    <Table striped bordered size="sm" variant="dark" >
          <thead >
            <tr>
              <th>Service</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td ><i>Coach cab</i></td> 
              <td></td>     
            </tr>
            <tr>
               <td style={{paddingLeft: "2rem"}} >Between towns</td>
              <td>1 cp per mile</td>
            </tr>
            <tr>
               <td style={{paddingLeft: "2rem"}}>Within a city</td>
              <td>1 cp</td>
            </tr>
            <tr>
              <td><i>Hireling</i></td>
              <td></td>
            </tr>
            <tr>
                <td style={{paddingLeft: "2rem"}}>Skilled</td>
                <td>2 gp per day</td>
            </tr>
            <tr>
                <td style={{paddingLeft: "2rem"}}>Untrained</td>
                <td>2 sp per day</td>
            </tr>
            <tr>
                <td>Messenger</td>
                <td>2 cp per mile</td>
            </tr>
            <tr>
                <td>Road or gate toll</td>
                <td>1 cp</td>
            </tr>
            <tr>
                <td>Ship's passage</td>
                <td>1 sp per mile</td>
            </tr>
                     
          </tbody>
        </Table>
        </Col>
    </Row>
    
      </Container>
  )
}

export default ServicesChart