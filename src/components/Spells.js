import React from "react";
import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { Container, Row, Col, ListGroupItem } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from 'react-bootstrap/ListGroup';

function Spells() {
  const [spellList, setSpellList] = useState([]);
  const [spellName, setSpellName] = useState([]);
  const [spellDesc, setSpellDesc] = useState([]);
  const [spellHigherLevel, setSpellHigherLevel] = useState([]);
  const [spellComponents, setSpellComponents] = useState([]);
  const [spellMaterial, setSpellMaterial] = useState ([]);
  const [spellRange, setSpellRange] = useState([]);
  const [spellDuration, setSpellDuration] = useState([]);
  const [spellSchool, setSpellSchool] = useState([]);
  const [spellClass, setSpellClass] = useState([]);
  const [concentration, setConcentration] = useState(false);
  const [ritual, setRitual] = useState(false);
  const [range, setRange] = useState('');
  const [duration,setDuration] = useState('');
  const [components, setComponents] = useState('');
  const [classes, setClasses] = useState('');


  function showSpellBox(){

  }

  function spellSearch(spellName) {
    const spellQueryUrl = `https://www.dnd5eapi.co/api/spells/${spellName}`;

    fetch(spellQueryUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data.classes);
        setSpellName(data.name);
        setSpellDesc(data.desc);
        setSpellHigherLevel(data.higher_level);
        setSpellComponents(data.components);
        setSpellMaterial(data.material);
        setSpellRange(data.range);
        setSpellDuration(data.duration);
        setSpellSchool(data.school.name);
        setSpellClass(data.classes);
        setConcentration(data.concentration);
        setRitual(data.ritual);
        setRange('Range');
        setDuration('Duration');
        setComponents('Components');
        setClasses('Classes');
      });
  }

  function spellListSearch(spellLevel) {
    const spellListQueryUrl = `https://www.dnd5eapi.co/api/spells?level=${spellLevel}`;
    fetch(spellListQueryUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data.results);
        setSpellList(data.results);
      });
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>Spells</h1>

          <ButtonGroup size="lg">
            <Button
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
                spellListSearch(0);
              }}
            >
              Cantrips
            </Button>
            <Button
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
                spellListSearch(1);
              }}
            >
              1st
            </Button>
            <Button
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
                spellListSearch(2);
              }}
            >
              2nd
            </Button>
            <Button
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
                spellListSearch(3);
              }}
            >
              3rd
            </Button>
            <Button
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
                spellListSearch(4);
              }}
            >
              4th
            </Button>
            <Button
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
                spellListSearch(5);
              }}
            >
              5th
            </Button>
            <Button
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
                spellListSearch(6);
              }}
            >
              6th
            </Button>
            <Button
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
                spellListSearch(7);
              }}
            >
              7th
            </Button>
            <Button
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
                spellListSearch(8);
              }}
            >
              8th
            </Button>
            <Button
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
                spellListSearch(9);
              }}
            >
              9th
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
        <ListGroup>
          {spellList.map((spell) => {
            return (
              <ListGroup.Item className="spellName"
                key={uuidv4()}
                onClick={(e) => {
                  e.preventDefault();
                  spellSearch(spell.index);
                  showSpellBox();
                }}
              >
                {spell.name}
              </ListGroup.Item>
            );
          })}
          </ListGroup>
        </Col>
        <Col>
        <div className="sticky">
        <h3><b>{spellName}</b></h3>
        
        <h6><b>{spellSchool}</b></h6>
        
        
        <h6 className="ritual">{ritual ? 'Ritual' : ''} </h6>  <h6 className="concentration">{concentration ? 'Concentration' : ''}</h6>
        <p></p>
          {spellDesc.map((description) => {
            return <p key={uuidv4()}>{description}</p>;
          })}
          {spellHigherLevel.map((higherLvl) => {
            return <p key={uuidv4()}>{higherLvl}</p>;
          })}
          <h6>{components}</h6>
          {spellComponents.map((components) => {
            return <span key={uuidv4()}>{components}</span>;
          })}
          <p>{spellMaterial}</p>
          
          <Col>
          <h6>{range} </h6>
        <p>{spellRange}</p>
        <h6>{duration}</h6>
        <p>{spellDuration}</p>
        <h6>{classes}</h6>
        {spellClass.map((classes) => {
            return <span className="ClassSpanSpace"key={uuidv4()}>{classes.name}</span>;
          })}
          </Col>
          </div>
        </Col>
        
      </Row>
    </Container>
  );
}

export default Spells;
