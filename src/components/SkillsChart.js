import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Table from 'react-bootstrap/Table';

function SkillsChart() {
  return (
    <Container>
    <Row>
  <h4 className="cover-title">Skills And Associated Abilities</h4>
    </Row>
  
<Row>
  
    <Col>
    <Table striped bordered size="sm" variant="dark" >
      <thead >
        <tr>
          <th>Skill</th>
          <th>Ability</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td >Acrobatics</td>
          <td>Dexterity</td>
        </tr>
        <tr>
          <td >Animal Handling</td>
          <td>Wisdom</td>
        </tr>
        <tr>
          <td >Arcana</td>
          <td>Intelligence</td>
        </tr>
        <tr>
          <td >Athletics</td>
          <td>Strength</td>
        </tr>
        <tr>
          <td >Deception</td>
          <td>Charisma</td>
        </tr>
        <tr>
          <td >History</td>
          <td>Intelligence</td>
        </tr>
        <tr>
          <td >Insight</td>
          <td>Wisdom</td>
        </tr> <tr>
          <td >Intimidation</td>
          <td>Charisma</td>
        </tr> <tr>
          <td >Investigation</td>
          <td>Intelligence</td>
        </tr>     
      </tbody>
      </Table>
      </Col>
    <Col>
    <Table  striped bordered size="sm" variant="dark">
      <thead >
        <tr>
          <th>Skill</th>
          <th>Ability</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td >Medicine</td>
          <td>Wisdom</td>
        </tr>
        <tr>
          <td >Nature</td>
          <td>Intelligence</td>
        </tr>
        <tr>
          <td >Perception</td>
          <td>Wisdom</td>
        </tr>
        <tr>
          <td >Performance</td>
          <td>Charisma</td>
        </tr>
        <tr>
          <td >Persuasion</td>
          <td>Charisma</td>
        </tr>
        <tr>
          <td >Religion</td>
          <td>Intelligence</td>
        </tr>
        <tr>
          <td >Sleight of Hand</td>
          <td>Dexterity</td>
        </tr> <tr>
          <td >Stealth</td>
          <td>Dexterity</td>
        </tr> <tr>
          <td >Survival</td>
          <td>Wisdom</td>
        </tr>     
      </tbody>
    </Table>
    </Col>
  
</Row>

  </Container>
  )
}

export default SkillsChart