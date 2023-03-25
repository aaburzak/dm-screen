import React from 'react';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Spells() {
    const [spell, setSpell] = useState([]);

    useEffect(() => {
        fetch('https://www.dnd5eapi.co/api/spells/sacred-flame')
        .then((response) => response.json())
        .then((data) =>{
            setSpell(data.desc);
            console.log(data.desc);
        }
         );
    }, []);



  return (
    <>
    <h1>Here Are the Spells:</h1>
    {spell.map((description) =>{
        return <p key={uuidv4()}>{description}</p>
    })}

    </>
  )
}

export default Spells