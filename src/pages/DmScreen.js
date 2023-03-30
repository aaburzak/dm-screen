import React from "react";
import { Container, Row, Col} from 'react-bootstrap';
import SizeChartPic from "../components/SizeChartPic";
import SetDcTable from "../components/SetDcTable";
import DamageLevelChart from "../components/DamageLevelChart";
import ObjectHpChart from "../components/ObjectHpChart";
import ObjectAcChart from "../components/ObjectAcChart";
import SkillsChart from "../components/SkillsChart";


function DmScreen(){
return(
    
    
  <Container  style={{fontSize: '.75rem'}}>

  
  <Row>
    <Col>
      <ObjectAcChart />
      <ObjectHpChart />
      <SkillsChart />
    </Col>
    <Col>
      <SizeChartPic />
      <SetDcTable />
    <DamageLevelChart />
    </Col>
  </Row>
  
  </Container>
);

};

export default DmScreen;