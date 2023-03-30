import React from "react";
import { Container, Row, Col} from 'react-bootstrap';

import GnomePic from "../components/GnomePic";

import Spells from "../components/Spells";

function SpellPage(){
return(
    
    
  <Container className="containerStyle">
    <Row >
      <Col >
        <Spells />
      </Col>
    </Row>
    <Row style={{marginTop:'1rem'}}>
      <Col>
      <GnomePic/>
      </Col>
    </Row>
  </Container>
);

};

export default SpellPage;