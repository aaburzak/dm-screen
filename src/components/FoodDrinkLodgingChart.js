import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Table from 'react-bootstrap/Table';


function FoodDrinkLodgingChart() {
  return (
    <Container>
    <Row>
  <h4 className="cover-title">Food, Drink, And Lodging</h4>
    </Row>
  
<Row>
  
<Col>
    <Table striped bordered size="sm" variant="dark" >
      <thead >
        <tr>
          <th>Item</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td ><i>Ale</i></td>
          <td></td>
        </tr>
        <tr>
          <td style={{paddingLeft:'2rem'}}>Gallon</td>
          <td>2 sp</td>
        </tr>
        <tr>
          <td style={{paddingLeft:'2rem'}}>Mug</td>
          <td>4 cp</td>
        </tr>
        <tr>
          <td >Banquet (per person)</td>
          <td>10 gp</td>
        </tr>
        <tr>
          <td >Bread, loaf</td>
          <td>2 cp</td>
        </tr>
        <tr>
          <td >Cheese, hunk</td>
          <td>1 sp</td>
        </tr> 
        <tr>
          <td ><i>Inn stay (per day)</i></td>
          <td></td>
        </tr> 
        <tr>
          <td style={{paddingLeft:'2rem'}}>Squalid</td>
          <td>7 cp</td>
        </tr>
        <tr>
          <td style={{paddingLeft:'2rem'}}>Poor</td>
          <td>1 sp</td>
        </tr> 
        <tr>
          <td style={{paddingLeft:'2rem'}}>Modest</td>
          <td>5 sp</td>
        </tr>
        <tr>
          <td style={{paddingLeft:'2rem'}}>Comfortable</td>
          <td>8 sp</td>
        </tr>
        <tr>
          <td style={{paddingLeft:'2rem'}}>Wealthy</td>
          <td>2 gp</td>
        </tr> 
        <tr>
          <td style={{paddingLeft:'2rem'}}>Aristocratic</td>
          <td>4 gp</td>
        </tr>  
        <tr>
          <td ><i>Meals (per day)</i></td>
          <td></td>
        </tr> 
        <tr>
          <td style={{paddingLeft:'2rem'}}>Squalid</td>
          <td>3 cp</td>
        </tr>
        <tr>
          <td style={{paddingLeft:'2rem'}}>Poor</td>
          <td>6 cp</td>
        </tr>
        <tr>
          <td style={{paddingLeft:'2rem'}}>Modest</td>
          <td>3 sp</td>
        </tr>
        <tr>
          <td style={{paddingLeft:'2rem'}}>Comfortable</td>
          <td>5 sp</td>
        </tr>
        <tr>
          <td style={{paddingLeft:'2rem'}}>Wealthy</td>
          <td>8 sp</td>
        </tr>
        <tr>
          <td style={{paddingLeft:'2rem'}}>Aristocratic</td>
          <td>2 gp</td>
        </tr>
        <tr>
          <td >Meat, chunk</td>
          <td>3 sp</td>
        </tr>
        <tr>
          <td ><i>Wine</i></td>
          <td></td>
        </tr>
        <tr>
          <td style={{paddingLeft:'2rem'}}>Common (pitcher)</td>
          <td>2 sp</td>
        </tr>
        <tr>
          <td style={{paddingLeft:'2rem'}}>Fine (bottle)</td>
          <td>10 gp</td>
        </tr>
      </tbody>
      </Table>
      </Col>
</Row>

  </Container>
  )
}

export default FoodDrinkLodgingChart