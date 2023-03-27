import React from 'react';
import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';



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
    <h1>SPELL LIST</h1>
    {spellList.map((spell) =>{
        return <p key={uuidv4()}>{spell.name}</p>
    })}

<button onClick={e => {
    e.preventDefault();
    spellListSearch(1);
}}>1st level</button> 

    <h1>Here Are the Spells:</h1>
    {spell.map((description) =>{
        return <p key={uuidv4()}>{description}</p>
    })}
<button onClick={e => {
    e.preventDefault();
    spellSearch('sacred-flame');
}}>SF</button>    

    </>
  )
}

export default Spells