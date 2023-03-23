import React from "react";
import { Container, Row, Col} from 'react-bootstrap';
import SizeChartPic from "../components/SizeChartPic";
import SetDcTable from "../components/SetDcTable";
import TrackDcTable from "../components/TrackDcTable";
import DamageLevelChart from "../components/DamageLevelChart";
import ExhaustionChart from "../components/ExhaustionChart";
import ObjectHpChart from "../components/ObjectHpChart";
import ObjectAcChart from "../components/ObjectAcChart";
import SkillsChart from "../components/SkillsChart";
import ConcentrationList from "../components/ConcentrationList";


function DmScreen(){
return(
    
    
  <Container className="containerStyle">
    <br/>
  {/* <Row>
      <Col className="portHead">
        <h1>DM SCREEN</h1>
      </Col>
    </Row>
    <br/>

    <Row className="justify-content-md-center botRow">
      <Col className="md-auto botCol">
        <p>Welcome to DM Screen. An online resource that contains all the handy reference material that is found within a Dungeons & Dragons 5th Edition DM Screen, as well as a few other useful tools to help you run your campaign.</p>
      </Col>
    </Row> */}
    <Row>
      <Col>
      <SetDcTable />
      </Col>
      <Col>
      <TrackDcTable />
      </Col>
    </Row>
  <Row>
    <Col>
    <DamageLevelChart />
    </Col>
    <Col>
    <ExhaustionChart />
    </Col>
  </Row>
  <Row>
    <Col>
    <ObjectHpChart />
    </Col>
    <Col>
    <ObjectAcChart />
    </Col>
  </Row>
  <Row>
    <Col>
    <SkillsChart />
    </Col>
    <Col>
    <ConcentrationList />
    </Col>
  </Row>

    
  
    <Row>
      <Col>
        <SizeChartPic />
      </Col>
    </Row>
  </Container>
);

};

export default DmScreen;