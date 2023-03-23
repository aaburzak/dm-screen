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
      bg ="dark"
      style={{ background:'linear-gradient(to left, #373b3e, #212529)', color: "whitesmoke"}}
      // border: 'outset', borderRadius:'50px', padding:'1rem' 
      onClick={decoratedOnClick}
      
    >
      {children}
    </button>
  );
}

function ConditionList() {
  return (
    <Container >
        <Row className="text-center">
      <h4 className="condition-title" >Conditions</h4>
      <Col >
        <Accordion style={{ boxShadow: 'inset 0px 0px 8px #e6eaec, 0 0 15px #e6eaec'}}>
      <Card>
        <Card.Header style={{background: 'linear-gradient(to left, #373b3e, #212529)', fontSize:'.8rem'}}>
          <CustomToggle eventKey="0">Blinded</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body style={{backgroundColor: '#CCFFFF', textAlign:'left'}}>
            <ul>
              <li>
                A blinded creature can’t see and automatically fails any ability check that requires sight.
              </li>
              <br></br>
              <li>
                Attack rolls against the creature have advantage, and the creature’s Attack rolls have disadvantage.
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header  style={{background: 'linear-gradient(to left, #373b3e, #212529)', fontSize:'.8rem'}}>
          <CustomToggle eventKey="1">Charmed</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body style={{backgroundColor: '#FF99CC', textAlign:'left'}}>
          <ul>
              <li>
              A charmed creature can’t attack the charmer or target the charmer with harmful Abilities or Magical Effects.
              </li>
              <br></br>
              <li>
              The charmer has advantage on any ability check to interact socially with the creature.
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header style={{background: 'linear-gradient(to left, #373b3e, #212529)', fontSize:'.8rem'}}>
          <CustomToggle eventKey="2">Deafened</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body style={{backgroundColor: '#FFCC99', textAlign:'left'}}>
          <ul>
              <li>
              A deafened creature can’t hear and automatically fails any ability check that requires hearing.
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header style={{background: 'linear-gradient(to left, #373b3e, #212529)', fontSize:'.8rem'}}>
          <CustomToggle eventKey="3">Frightened</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body style={{backgroundColor: '#FFFF66', textAlign:'left'}}>
          <ul>
              <li>
              A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is within Line of Sight.
              </li>
              <br></br>
              <li>
                The creature can't willingly move closer to the source of its fear.
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header style={{background: 'linear-gradient(to left, #373b3e, #212529)', fontSize:'.8rem'}}>
          <CustomToggle eventKey="4">Grappled</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body style={{backgroundColor: '#663300', color: '#FFFFFF', textAlign:'left'}}>
          <ul>
              <li>
              A grappled creature’s speed becomes 0, and it can’t benefit from any bonus to its speed
              </li>
              <br></br>
              <li>
              The condition ends if the Grappler is incapacitated (see the condition).
              </li>
              <br></br>
              <li>
              The condition also ends if an Effect removes the grappled creature from the reach of the Grappler or Grappling Effect, such as when a creature is hurled away by the thunderwave spell.
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header style={{background: 'linear-gradient(to left, #373b3e, #212529)', fontSize:'.8rem'}}>
          <CustomToggle eventKey="5">Incapacitated</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="5">
          <Card.Body style={{backgroundColor: '#CCCCFF', textAlign:'left'}}>
          <ul>
              <li>
              An incapacitated creature can’t take actions or reactions.
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      
      <Card>
        <Card.Header style={{background: 'linear-gradient(to left, #373b3e, #212529)', fontSize:'.8rem'}}>
          <CustomToggle eventKey="6">Invisible</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="6">
          <Card.Body style={{backgroundColor: '#FFFFFF' , textAlign:'left'}}>
          <ul>
              <li>
              An invisible creature is impossible to see without the aid of magic or a Special sense. For the Purpose of hiding, the creature is heavily obscured. The creature’s Location can be detected by any noise it makes or any tracks it leaves.
              </li>
              <br></br>
              <li>
              Attack rolls against the creature have disadvantage, and the creature’s Attack rolls have advantage.
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
        <Card.Header style={{background: 'linear-gradient(to left, #373b3e, #212529)', fontSize:'.8rem'}}>
          <CustomToggle eventKey="7">Paralyzed</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="7">
          <Card.Body style={{backgroundColor: '#99FF33', textAlign:'left'}}>
          <ul>
              <li>
                A paralyzed creature is incapacitated (see the condition) and can’t move or speak.
              </li>
              <br></br>
              <li>
              The creature automatically fails Strength and Dexterity saving throws.
              </li>
              <br></br>
              <li>
              Attack rolls against the creature have advantage.
              </li>
              <br></br>
              <li>
              Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header style={{background: 'linear-gradient(to left, #373b3e, #212529)' , fontSize:'.8rem'}}>
          <CustomToggle eventKey="8">Petrified</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="8">
          <Card.Body style={{backgroundColor: '#606060', color:'#FFFFFF', textAlign:'left'}}>
          <ul>
              <li>
              A petrified creature is Transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging.
              </li>
              <br></br>
              <li>
              The creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings.
              </li>
              <br></br>
              <li>
              Attack rolls against the creature have advantage.
              </li>
              <br></br>
              <li>
              The creature automatically fails Strength and Dexterity saving throws.
              </li>
              <br></br>
              <li>
              The creature has resistance to all damage.
              </li>
              <br></br>
              <li>
              The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header style={{background: 'linear-gradient(to left, #373b3e, #212529)', fontSize:'.8rem'}}>
          <CustomToggle eventKey="9">Poisoned</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="9">
          <Card.Body style={{backgroundColor: '#336600', color: '#FFFFFF', textAlign:'left'}}>
          <ul>
              <li>
              A poisoned creature has disadvantage on attack rolls and ability checks.
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header style={{background: 'linear-gradient(to left, #373b3e, #212529)', fontSize:'.8rem'}}>
          <CustomToggle eventKey="10">Prone</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="10">
          <Card.Body style={{backgroundColor: '#CC0000', color: '#FFFFFF', textAlign:'left'}}>
          <ul>
              <li>
              A prone creature’s only movement option is to crawl, unless it stands up and thereby ends the condition.
              </li>
              <br></br>
              <li>
              The creature has disadvantage on attack rolls.
              </li>
              <br></br>
              <li>
              An attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the Attack roll has disadvantage.
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header style={{background: 'linear-gradient(to left, #373b3e, #212529)', fontSize:'.8rem'}}>
          <CustomToggle eventKey="11">Restrained</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="11">
          <Card.Body style={{backgroundColor: '#000099', color: '#FFFFFF', textAlign:'left'}}>
          <ul>
              <li>
              A restrained creature’s speed becomes 0, and it can’t benefit from any bonus to its speed.
              </li>
              <br></br>
              <li>
              Attack rolls against the creature have advantage, and the creature’s Attack rolls have disadvantage.
              </li>
              <br></br>
              <li>
              The creature has disadvantage on Dexterity saving throws.
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header style={{background: 'linear-gradient(to left, #373b3e, #212529)', fontSize:'.8rem'}}>
          <CustomToggle eventKey="12">Stunned</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="12">
          <Card.Body style={{backgroundColor: '#FF8000', textAlign:'left'}}>
          <ul>
              <li>
              A stunned creature is incapacitated (see the condition), can’t move, and can speak only falteringly.
              </li>
              <br></br>
              <li>
              The creature automatically fails Strength and Dexterity saving throws.
              </li>
              <br></br>
              <li>
              Attack rolls against the creature have advantage.
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header style={{background: 'linear-gradient(to left, #373b3e, #212529)', fontSize:'.8rem'}}>
          <CustomToggle eventKey="13">Unconscious</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="13">
          <Card.Body  style={{backgroundColor: '#000', color: '#FFFFFF', textAlign:'left'}}>
          <ul>
              <li>
              An unconscious creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings.
              </li>
              <br></br>
              <li>
              The creature drops whatever it’s holding and falls prone.
              </li>
              <br></br>
              <li>
              The creature automatically fails Strength and Dexterity saving throws.
              </li>
              <br></br>
              <li>
              Attack rolls against the creature have advantage.
              </li>
              <br></br>
              <li>
              Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>



    </Accordion>
    </Col>




      
      </Row>
    </Container>
  )
}

export default ConditionList