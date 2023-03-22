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
import TravelPaceChart from "../components/TravelPaceChart";
import ServicesChart from "../components/ServicesChart";
import ObscuredAreaChart from "../components/ObscuredAreaChart";
import EncounterDistanceChart from "../components/EncounterDistanceChart";
import LightChart from "../components/LightChart";
import FoodDrinkLodgingChart from "../components/FoodDrinkLodgingChart";



function DmScreen(){
return(
    
    
  <Container className="containerStyle">
    <br/>
  <Row>
      <Col className="portHead">
        <h1>DM SCREEN</h1>
      </Col>
    </Row>
    <br/>

    <Row className="justify-content-md-center botRow">
      <Col className="md-auto botCol text-center">
        <p>Hnforey thsenmanes rahenehv, heinuur keiii šssfoo lihšshasc ogrbessšsz, kisenšs cšthšchetq. Jesssho heixs ndahaganey hahaz gaah woranj csssss agršsi keheni schaasc liih. Zahitaza bexcsnz bescs daaahotahun zeir forn qorahbethh etcsuli hoorxi vesur eses. Zenli ochanuuurahi wots kinagahšsh, csssšcsch yeyhr wovehs zahnuuuun ssssiinnur paasšs aazass cšzeyhpanrc? Choaheit gahzah woonurahomas, ršsscth chohi foths grchšchjeni bein ahzchje?
Henhah unulšstho otahirtansaag lkigagr cšsssz hšssah. Chšfo nhseyeninuran qortbey huuuraa hikiyah nnzexš, chkiazag! Sszexšcšsliah nulinnn tahchu, yšsdahen litfoo, ssahchas shths csssw kahopahs. Csšqor raah neyeneyexhoth einet tass ssraanzetagr sssrazah benurnuuur eskahah ahinn hšsšsg pahen. Hihcsy netagr keydah nunir šnulss onesšsssonz foosc hocx, nunir azazey.</p>
      </Col>
    </Row>
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
    <TravelPaceChart />
    </Col>
  </Row>
  <Row>
    <Col>
    <ServicesChart/>
    </Col>
    <Col>
    <ObscuredAreaChart />
    <LightChart />
    </Col>
  </Row>
  <Row>
    <Col>
    <EncounterDistanceChart />
    </Col>
    <Col>
    <FoodDrinkLodgingChart />
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