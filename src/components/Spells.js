import React from "react";
import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { Container, Row, Col, ListGroupItem } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from 'react-bootstrap/ListGroup';

function Spells() {
  const [spell, setSpell] = useState([]);
  const [spellList, setSpellList] = useState([]);
  const [spellComponents, setSpellComponents] = useState([]);
  const [spellRange, setSpellRange] = useState([]);
  const [spellDuration, setSpellDuration] = useState([]);
  const [spellSchool, setSpellSchool] = useState([]);
  const [spellClass, setSpellClass] = useState([]);


  function spellSearch(spellName) {
    const spellQueryUrl = `https://www.dnd5eapi.co/api/spells/${spellName}`;

    fetch(spellQueryUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data.classes);
        setSpell(data.desc);
        setSpellComponents(data.components);
        setSpellRange(data.range);
        setSpellDuration(data.duration);
        setSpellSchool(data.school.name);
        setSpellClass(data.classes);
        
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
        <p>{spellSchool}</p>
        {spellClass.map((classes) => {
            return <p key={uuidv4()}>{classes.name}</p>;
          })}
          {spell.map((description) => {
            return <p key={uuidv4()}>{description}</p>;
          })}
          {spellComponents.map((components) => {
            return <p key={uuidv4()}>{components}</p>;
          })}
        <p>{spellRange}</p>
        <p>{spellDuration}</p>
        
         
          
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Spells;
