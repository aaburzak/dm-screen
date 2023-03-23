import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';


function spellSearch (spellLevel){
    
    const spellQueryUrl = `https://www.dnd5eapi.co/api/spells?level=${spellLevel}`
    
    
    fetch(spellQueryUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(data) {
        console.log(data)
    })
}

function SpellList() {
  return (
    <Container>
        <Row>
            <Col>
            <button onClick={spellSearch(1)}>1</button>
            </Col>
            <Col>
            <button onClick={spellSearch(2)}>2</button>
            </Col>
            <Col>
            <button onClick={spellSearch(3)}>3</button>
            </Col>
            <Col>
            <button onClick={spellSearch(4)}>4</button>
            </Col>
            <Col>
            <button onClick={spellSearch(5)}>5</button>
            </Col>
            <Col>
            <button onClick={spellSearch(6)}>6</button>
            </Col>
            <Col>
            <button onClick={spellSearch(7)}>7</button>
            </Col>
            <Col>
            <button onClick={spellSearch(8)}>8</button>
            </Col>
            <Col>
            <button onClick={spellSearch(9)}>9</button>
            </Col>
        </Row>
    </Container>
  )
}

export default SpellList