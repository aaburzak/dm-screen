import React from "react";
import { Container, Row, Col} from 'react-bootstrap';

import GnomePic from "../components/GnomePic";
import ConcentrationList from "../components/ConcentrationList";
import Spells from "../components/Spells";

function SpellPage(){
return(
    
    
  <Container className="containerStyle">
{/*    
    <Row>
      <Col>
      <GnomePic />
      </Col>
      <Col>
      <ConcentrationList/>
      </Col>
    </Row> */}
  

    <Row>
      <Col>
        <Spells />
      </Col>
    </Row>
  </Container>
);

};

export default SpellPage;