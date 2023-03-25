import React, { useEffect, useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';

function SpellList() {
const [spells, setSpells] = useState([])
function spellSearch (spellLevel){
    
    const spellQueryUrl = `https://www.dnd5eapi.co/api/spells?level=${spellLevel}`
    
    
    fetch(spellQueryUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(data) {
        console.log(data)
        setSpells(data)
    })
}

useEffect(() => {
    spellSearch()
  }, [])

  return (
    <Container>
        <Row>
            <Col>
            <button onClick={spellSearch(1)}>1</button>
            </Col>
            {/* <Col>
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
            </Col> */}
        </Row>
<Row>
    {spells.length > 0 && (
        <ul>
            {spells.map(spell =>(
                <li key={spell.id}>{spell.name}</li>
            ))}
        </ul>
    )}
</Row>
      
    </Container>
  )
}

export default SpellList