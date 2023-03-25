import React from "react";
import { Container, Row, Col} from 'react-bootstrap';

import GnomePic from "../components/GnomePic";
import ConcentrationList from "../components/ConcentrationList";
import Spells from "../components/Spells";

function SpellPage(){
return(
    
    
  <Container className="containerStyle">
    <br/>
  <Row>
      <Col className="portHead">
        <h1>SPELLS</h1>
      </Col>
    </Row>
    <br/>

    <Row>
      <Col>
      <ConcentrationList/>
      </Col>
      <Col>
      <GnomePic/>
      </Col>
    </Row>

    <Row className="justify-content-md-center botRow">
      <Col className="md-auto botCol text-center">
        <p>Hnforey thsenmanes rahenehv, heinuur keiii šssfoo lihšshasc ogrbessšsz, kisenšs cšthšchetq. Jesssho heixs ndahaganey hahaz gaah woranj csssss agršsi keheni schaasc liih. Zahitaza bexcsnz bescs daaahotahun zeir forn qorahbethh etcsuli hoorxi vesur eses. Zenli ochanuuurahi wots kinagahšsh, csssšcsch yeyhr wovehs zahnuuuun ssssiinnur paasšs aazass cšzeyhpanrc? Choaheit gahzah woonurahomas, ršsscth chohi foths grchšchjeni bein ahzchje?
Henhah unulšstho otahirtansaag lkigagr cšsssz hšssah. Chšfo nhseyeninuran qortbey huuuraa hikiyah nnzexš, chkiazag! Sszexšcšsliah nulinnn tahchu, yšsdahen litfoo, ssahchas shths csssw kahopahs. Csšqor raah neyeneyexhoth einet tass ssraanzetagr sssrazah benurnuuur eskahah ahinn hšsšsg pahen. Hihcsy netagr keydah nunir šnulss onesšsssonz foosc hocx, nunir azazey.</p>
      </Col>
    </Row>

    <Row>
      <Col>
        <Spells />
      </Col>
    </Row>
  </Container>
);

};

export default SpellPage;