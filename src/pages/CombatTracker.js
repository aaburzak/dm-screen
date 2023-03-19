import React from "react";
import { Container, Row, Col} from 'react-bootstrap';
import Tracker from "../components/Tracker";
// import Calculator from "../components/Calculator";
import TodoList from "../components/TodoList";
import ConditionList from "../components/ConditionList";
import ActionList from "../components/ActionList";
import CoverList from "../components/CoverList";
import GnomePic from "../components/GnomePic";
// import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
// import Card from 'react-bootstrap/Card';



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



function CombatTracker(){



return(
    
  
    
  <Container className="containerStyle  justify-content-md-center text-center">
    <h1 className="title text-center">Combat</h1>
    
  <Row>
    <Col>
    <TodoList />
    </Col>
    <Col >

    <GnomePic />
    
    </Col>
  </Row>
  <Row  className="justify-content-md-center text-center">
    <Col>
    <ActionList />
    </Col>
  </Row>
  <Row>
    <Col>
    <CoverList />
    </Col>
    </Row>
    
 

  <h1 className="title combat-title text-center">Combat Tracker</h1>
  <Row className="justify-content-md-center text-center tracker-row" >
      <Col>
        <Tracker />
      </Col>
      
      <Col style={{position: 'relative'}}>
       <div className="sticky">
        
        <ConditionList/>
      
        </div>
      </Col>
  </Row>
    <br/>


  </Container>
);

};

export default CombatTracker;