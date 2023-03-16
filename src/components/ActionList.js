import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';



  

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );
   return (
    <button
      type="button"
      style={{ background:'linear-gradient(to left, #e6eaec, #C0C0C0)', border: 'outset', borderRadius:'50px', padding:'1rem' }}
      onClick={decoratedOnClick}
      
    >
      {children}
    </button>
  );
}

function ActionList() {
    
    return (
        <Container>
            <Row>
          <h3 className="condition-title">Actions In Combat</h3>
          </Row>

<Row>
  <Col>

  <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Attack</th>
            <th>Cast A Spell</th>
            <th>Dash</th>
            <th>Disengage</th>
          

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>You make a melee or ranged weapon attack.</td>
            <td>You cast a cantrip or a spell of 1st level or higher.<br></br>See the spell's casting time.</td>
            <td>You gain extra movement equal to your speed (plus any modifiers) for the current turn.</td>
            <td>Your movement doesn't provoke opportunity attacks for the rest of the turn.Table cell</td>
          </tr>
        </tbody>
      </Table>

      <Table responsive="sm">
        <thead>
          <tr>
            <th>Dodge</th>
            <th>Help</th>
            <th>Hide</th>
            <th>Ready</th>

          </tr>
        </thead>
        <tbody>
          <tr>
        
            <td>Until the start of your next turn, any attack roll made against you has disadvantage if hou can see the attacker, and you make Dexterity saving throws with advantage. You lose this benefit if you are incapacitated or if your speed drops to 0.</td>
            <td>You help one creature with a task, giving that creature advantage on the next ability check it makes for the task. Or you distract one creature within 5 feet of you, and the next attack roll that an ally of yours makes against that creature has advantage.
              <br></br>
              Whichever option you choose, the advantage goes away once your next turn starts.  
            </td>
            <td>You make a Dexterity (Stealth) check in an attempt to become hidden - unseen and unheard.</td>
            <td>You wait for a particular circumstance before you act, which lets you act using your reaction before the start of your next turn. You must decide in advance (a) what perceivable circumstance will trigger your reaction and (b) the action you will take in response to that trigger.
              <br></br>
              If you ready a spell, it must have a casting time of 1 action, and you must concentrate on it until you release it.
            </td>
    
          </tr>
        </tbody>
      </Table>
     
      <Table responsive="md">
        <thead>
          <tr>
            
            <th>Search</th>
            <th>Use Magic Item</th>
            <th>Use Object</th>
            <th>Use Special Ability</th>
          

          </tr>
        </thead>
        <tbody>
          <tr>

             
            <td>You make a Wisdom (Perception) check or an Investigation (Intelligence) check to find something.</td>
            <td>You use a magic item that requires your action for its use.</td>
            <td>You use an object, other than a magic item, that requires your action for its use.</td>
            <td>You use a class feature or other special ability that requires your action for its use.</td>
          </tr>
         
        
        </tbody>
      </Table>
      
    </div>


  </Col>
</Row>



        </Container>
      )
    }
    




export default ActionList