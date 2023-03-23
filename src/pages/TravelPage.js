import React from "react";
import { Container, Row, Col} from 'react-bootstrap';

import TravelPaceChart from "../components/TravelPaceChart";
import ServicesChart from "../components/ServicesChart";
import ObscuredAreaChart from "../components/ObscuredAreaChart";
import EncounterDistanceChart from "../components/EncounterDistanceChart";
import LightChart from "../components/LightChart";
import FoodDrinkLodgingChart from "../components/FoodDrinkLodgingChart";
import LongJumpList from "../components/LongJumpList";
import HighJumpList from "../components/HighJumpList";
import SuffocatingList from "../components/SuffocatingList";
import TrackDcTable from "../components/TrackDcTable";


function TravelPage(){
return(
    
    
  <Container className="containerStyle" style={{fontSize: '.75rem'}}>
    <br/>
  {/* <Row>
      <Col className="portHead">
        <h1>TRAVEL</h1>
      </Col>
    </Row>
    <br/> */}

    <Row className="justify-content-md-center botRow">
      <Col>
      <TravelPaceChart />
      <EncounterDistanceChart />
      <TrackDcTable />
      </Col>
      <Col>
      <ServicesChart />
      <FoodDrinkLodgingChart />
      </Col>
      <Col>
      <ObscuredAreaChart />
      <LightChart />
      <LongJumpList />
      <HighJumpList />
      <SuffocatingList />
      </Col>
    </Row>
  </Container>
);

};

export default TravelPage;