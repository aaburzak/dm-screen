import React from "react";
import { Container, Row, Col} from 'react-bootstrap';
import Tracker from "../components/Tracker";
import TodoList from "../components/TodoList";
import ConditionList from "../components/ConditionList";
import ActionList from "../components/ActionList";
import CoverList from "../components/CoverList";
import ExhaustionChart from "../components/ExhaustionChart";
import ConcentrationList from "../components/ConcentrationList";







function CombatTracker(){



return(
    
  
    
  <Container className="containerStyle  " style={{fontSize:".75rem"}}>
 
    <Row>
    <Col>
    <TodoList />
    </Col>
    <Col>
    <CoverList />
    </Col>

  </Row>
  <Row  className="justify-content-md-center text-center" style={{marginTop: '3rem', marginBottom:'3rem'}}>
    <Col>
    <ActionList />
    </Col>
  </Row>
 
 

  <Row className="justify-content-md-center  tracker-row" >
      <Col className="text-center">
        <Tracker />
      </Col>
      
      <Col style={{position: 'relative'}}>
       <div className="sticky">
        
        <ConditionList/>
        <ExhaustionChart />
        <ConcentrationList />
      
        </div>
      </Col>
  </Row>
    <br/>


  </Container>
);

};

export default CombatTracker;