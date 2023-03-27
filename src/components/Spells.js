import React from 'react';
import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


function Spells() {
    const [spell, setSpell] = useState([]);
    const [spellList, setSpellList] = useState([]);


    function spellSearch (spellName){
    
        const spellQueryUrl = `https://www.dnd5eapi.co/api/spells/${spellName}`
        
        
        fetch(spellQueryUrl)
        .then(function(response){
            return response.json()
        })
        .then(function(data) {
            console.log(data)
            setSpell(data.desc)
        })
    }

    function spellListSearch (spellLevel){

        const spellListQueryUrl = `https://www.dnd5eapi.co/api/spells?level=${spellLevel}`
        fetch(spellListQueryUrl)
        .then(function(response){
            return response.json()
        })
        .then(function(data) {
            console.log(data.results)
            setSpellList(data.results)
        })
    }

  return (
    <>
    <h1>Spells</h1>
   
    <ButtonGroup size='lg'>
      <Button variant="secondary" onClick={e => {
        e.preventDefault();
        spellListSearch(0);
        }}>Cantrips
    </Button>
    <Button variant="secondary"onClick={e => {
        e.preventDefault();
        spellListSearch(1);
        }}>1st
    </Button>
    <Button variant="secondary" onClick={e => {
        e.preventDefault();
        spellListSearch(2);
    }}>2nd
    </Button>
    <Button variant="secondary" onClick={e => {
        e.preventDefault();
        spellListSearch(3);
    }}>3rd
    </Button>
    <Button variant="secondary" onClick={e => {
        e.preventDefault();
        spellListSearch(4);
    }}>4th
    </Button>
    <Button variant="secondary" onClick={e => {
        e.preventDefault();
        spellListSearch(5);
    }}>5th
    </Button>
    <Button variant="secondary" onClick={e => {
        e.preventDefault();
        spellListSearch(6);
    }}>6th
    </Button>
    <Button variant="secondary" onClick={e => {
        e.preventDefault();
        spellListSearch(7);
    }}>7th
    </Button>
    <Button variant="secondary" onClick={e => {
        e.preventDefault();
        spellListSearch(8);
    }}>8th
    </Button>
    <Button variant="secondary" onClick={e => {
        e.preventDefault();
        spellListSearch(9);
    }}>9th
    </Button>
    </ButtonGroup>


<h1>Here Are the Spells:</h1>
{spellList.map((spell) =>{
        return <button key={uuidv4()} onClick={e => {
            e.preventDefault();
            spellSearch(spell.index);
        }}>{spell.name}</button>
    })}

    {spell.map((description) =>{
        return <p key={uuidv4()}>{description}</p>
    })}
  




     
    </>

  )
}

export default Spells