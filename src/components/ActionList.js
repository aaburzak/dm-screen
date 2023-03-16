import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';



  

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
          <Col>
            <Accordion style={{ boxShadow: 'inset 0px 0px 8px #e6eaec, 0 0 15px #e6eaec'}}>
          <Card>
            <Card.Header style={{background: 'linear-gradient(to left, #e6eaec, #C0C0C0)', fontSize:'.8rem'}}>
              <CustomToggle eventKey="0">Attack</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body style={{backgroundColor: '#CCFFFF'}}>
                <ul>
                  <li>
                    You make a melee or ranged weapon attack.
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header  style={{background: 'linear-gradient(to left, #e6eaec, #C0C0C0)', fontSize:'.8rem'}}>
              <CustomToggle eventKey="1">Cast A Spell</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body style={{backgroundColor: '#FF99CC'}}>
              <ul>
                  <li>
                    You cast a cantrip or a spell of 1st level or higher.  See the spell's casting time.
                  </li>
                  
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header style={{background: 'linear-gradient(to left, #e6eaec, #C0C0C0)', fontSize:'.8rem'}}>
              <CustomToggle eventKey="2">Dash</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body style={{backgroundColor: '#FFCC99'}}>
              <ul>
                  <li>
                    You gain extra movement equal to your speed (plus any modifiers) for the current turn.
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          </Accordion>
          </Col>

          <Col>
          <Accordion>
          <Card>
            <Card.Header style={{background: 'linear-gradient(to left, #e6eaec, #C0C0C0)', fontSize:'.8rem'}}>
              <CustomToggle eventKey="3">Disengage</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body style={{backgroundColor: '#FFFF66'}}>
              <ul>
                  <li>
                    Your movement doesn't provoke opportunity attacks for the rest of the turn.
                  </li>
                  
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header style={{background: 'linear-gradient(to left, #e6eaec, #C0C0C0)', fontSize:'.8rem'}}>
              <CustomToggle eventKey="4">Dodge</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body style={{backgroundColor: '#663300', color: '#FFFFFF' }}>
              <ul>
                  <li>
                    Until the start of your next turn, any attack roll made against you has disadvantage if hou can  see the attacker, and you make Dexterity saving throws with advantage.  You lose this benefit if you are incapacitated or if your speed drops to 0. 
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header style={{background: 'linear-gradient(to left, #e6eaec, #C0C0C0)', fontSize:'.8rem'}}>
              <CustomToggle eventKey="5">Help</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body style={{backgroundColor: '#CCCCFF'}}>
              <ul>
                  <li>
                    You help one creature with a task, giving that creature advantage on the next ability check it makes for the task.  Or you distract one creature within 5 feet of you, and the next attack roll that an ally of yours makes against that creature has advantage.
                    <br></br>Whichever option you choose, the advantage goes away once your next turn starts.
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          
      
          </Accordion>
          </Col>
    
          <Col>
          <Accordion style={{ boxShadow: 'inset 0px 0px 8px #e6eaec, 0 0 15px #e6eaec'}}>
          <Card>
            <Card.Header style={{background: 'linear-gradient(to left, #e6eaec, #C0C0C0)', fontSize:'.8rem'}}>
              <CustomToggle eventKey="7">Hide</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="7">
              <Card.Body style={{backgroundColor: '#99FF33'}}>
              <ul>
                  <li>
                    You make a Dexterity (Stealth) check in an attempt to become hidden - unseen and unheard.
                  </li>
                  
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header style={{background: 'linear-gradient(to left, #e6eaec, #C0C0C0)' , fontSize:'.8rem'}}>
              <CustomToggle eventKey="8">Ready</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="8">
              <Card.Body style={{backgroundColor: '#606060', color:'#FFFFFF'}}>
              <ul>
                  <li>
                    You wait for a particular circumstance before you act, which lets you act using your reaction before the start of your next turn.  You must decide in advance (a) what perceivable circumstance will trigger your reaction and (b) the action you will take in response to that trigger.
                  </li>
                  <br></br>
                  <li>
                    If you ready a spell, it must have a casting time of 1 action, and you must concentrate on it until you release it.
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header style={{background: 'linear-gradient(to left, #e6eaec, #C0C0C0)', fontSize:'.8rem'}}>
              <CustomToggle eventKey="9">Search</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="9">
              <Card.Body style={{backgroundColor: '#336600', color: '#FFFFFF'}}>
              <ul>
                  <li>
                  You make a Wisdom (Perception) check or an Investigation (Intelligence) check to find something.
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          </Accordion>
          </Col>

          <Col>
          <Accordion>
          <Card>
            <Card.Header style={{background: 'linear-gradient(to left, #e6eaec, #C0C0C0)', fontSize:'.8rem'}}>
              <CustomToggle eventKey="10">Use A Magic Item</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="10">
              <Card.Body style={{backgroundColor: '#CC0000', color: '#FFFFFF'}}>
              <ul>
                  <li>
                    You use a magic item that requires your action for its use.
                  </li>
              
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header style={{background: 'linear-gradient(to left, #e6eaec, #C0C0C0)', fontSize:'.8rem'}}>
              <CustomToggle eventKey="11">Use An Object</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="11">
              <Card.Body style={{backgroundColor: '#000099', color: '#FFFFFF'}}>
              <ul>
                  <li>
                    You use an object, other than a magic item, that requires your action for its use.
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header style={{background: 'linear-gradient(to left, #e6eaec, #C0C0C0)', fontSize:'.8rem'}}>
              <CustomToggle eventKey="12">Special Ability</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="12">
              <Card.Body style={{backgroundColor: '#FF8000'}}>
              <ul>
                  <li>
                    You use a class feature or other special ability that requires your action for its use.
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          
    
    
    
        </Accordion>
        </Col>
    
    
    
    
          
          </Row>

{/* 
          <Row >
    
   




    <ListGroup as="ol" horizontal>
        <ListGroup.Item variant ="dark"
          as="li"
          className="d-flex justify-content-center align-items-start"
        >
           <Card>
        <Card.Header>1/2</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              +2 bonus AC and Dexterity saving throws against attacks and effects that originate on the opposite side of the cover.{' '}
            </p>
          </blockquote>
        </Card.Body>
      </Card>
       
        </ListGroup.Item>
        <ListGroup.Item
          variant ="dark"
          as="li"
          className="d-flex justify-content-center align-items-start"
        >
          <Card>
        <Card.Header>3/4</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              +5 bonus to AC and Dexterity saving throws against attacks and effects that originate on the opposite side of the cover.{' '}
            </p>
          </blockquote>
        </Card.Body>
      </Card>
        </ListGroup.Item>
        <ListGroup.Item
        variant ="dark" 
          as="li"
          className="d-flex justify-content-center align-items-center" >
           <Card>
        <Card.Header>Total</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              Can't be targeted directly by an attack or a spell{' '}
            </p>
          </blockquote>
        </Card.Body>
      </Card>
        </ListGroup.Item>
      </ListGroup>
      
    </Row> */}


        </Container>
      )
    }
    




export default ActionList