import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useLocallyPersistedReducer } from "../hooks/ReducerStorage";
import { useReducer, useState } from "react";
import Character from "./Character";
import { ACTIONS } from "../actions";

// export const ACTIONS = {
//   ADD_CHARACTER: "add-character",
//   ADD_HEALTH: "add-health",
//   TOGGLE_DEATH: "toggle-death",
//   TOGGLE_BLIND: "toggle-blind",
//   TOGGLE_CHARMED: "toggle-charmed",
//   TOGGLE_DEAF: "toggle-deaf",
//   TOGGLE_FRIGHTENED: "toggle-frightened",
//   TOGGLE_GRAPPLE: "toggle-grapple",
//   TOGGLE_INCAPACITATED: "toggle-incapacitated",
//   TOGGLE_INVISIBLE: "toggle-invisible",
//   TOGGLE_PARALYZED: "toggle-paralyzed",
//   TOGGLE_PETRIFIED: "toggle-petrified",
//   TOGGLE_POISONED: "toggle-poisoned",
//   TOGGLE_PRONE: "toggle-prone",
//   TOGGLE_RESTRAINED: "toggle-restrained",
//   TOGGLE_STUN: "toggle-stun",
//   TOGGLE_UNCONSCIOUS: "toggle-unconscious",
//   TOGGLE_CONCENTRATION: "toggle-concentration",
//   REMOVE_CHARACTER: "remove-character",
//   NEXT_CHARACTER: "next-character",
// };

function reducer(characters, action) {
  switch (action.type) {
    case ACTIONS.ADD_CHARACTER:
      return [...characters, newCharacter(action.payload.name)];

    case ACTIONS.NEXT_CHARACTER:
      let newLineup = [];

      newLineup = [...characters.slice(1), characters[0]];
      console.log(newLineup);
      return newLineup;
    // case ACTIONS.ADD_HEALTH:
    //     return[...characters, newHealth(action.payload.health)]

    case ACTIONS.TOGGLE_DEATH:
      return characters.map((character) => {
        if (character.id === action.payload.id) {
          return { ...character, dead: !character.dead };
        }
        return character;
      });
    case ACTIONS.TOGGLE_BLIND:
      return characters.map((character) => {
        if (character.id === action.payload.id) {
          return { ...character, blinded: !character.blinded };
        }
        return character;
      });
    case ACTIONS.TOGGLE_CHARMED:
      return characters.map((character) => {
        if (character.id === action.payload.id) {
          return { ...character, charmed: !character.charmed };
        }
        return character;
      });
    case ACTIONS.TOGGLE_DEAF:
      return characters.map((character) => {
        if (character.id === action.payload.id) {
          return { ...character, deafened: !character.deafened };
        }
        return character;
      });
    case ACTIONS.TOGGLE_FRIGHTENED:
      return characters.map((character) => {
        if (character.id === action.payload.id) {
          return { ...character, frightened: !character.frightened };
        }
        return character;
      });
    case ACTIONS.TOGGLE_GRAPPLE:
      return characters.map((character) => {
        if (character.id === action.payload.id) {
          return { ...character, grappled: !character.grappled };
        }
        return character;
      });
    case ACTIONS.TOGGLE_INCAPACITATED:
      return characters.map((character) => {
        if (character.id === action.payload.id) {
          return { ...character, incapacitated: !character.incapacitated };
        }
        return character;
      });
    case ACTIONS.TOGGLE_INVISIBLE:
      return characters.map((character) => {
        if (character.id === action.payload.id) {
          return { ...character, invisible: !character.invisible };
        }
        return character;
      });
    case ACTIONS.TOGGLE_PARALYZED:
      return characters.map((character) => {
        if (character.id === action.payload.id) {
          return { ...character, paralyzed: !character.paralyzed };
        }
        return character;
      });
    case ACTIONS.TOGGLE_PETRIFIED:
      return characters.map((character) => {
        if (character.id === action.payload.id) {
          return { ...character, petrified: !character.petrified };
        }
        return character;
      });
    case ACTIONS.TOGGLE_POISONED:
      return characters.map((character) => {
        if (character.id === action.payload.id) {
          return { ...character, poisoned: !character.poisoned };
        }
        return character;
      });
    case ACTIONS.TOGGLE_PRONE:
      return characters.map((character) => {
        if (character.id === action.payload.id) {
          return { ...character, prone: !character.prone };
        }
        return character;
      });
    case ACTIONS.TOGGLE_RESTRAINED:
      return characters.map((character) => {
        if (character.id === action.payload.id) {
          return { ...character, restrained: !character.restrained };
        }
        return character;
      });
    case ACTIONS.TOGGLE_STUN:
      return characters.map((character) => {
        if (character.id === action.payload.id) {
          return { ...character, stunned: !character.stunned };
        }
        return character;
      });
    case ACTIONS.TOGGLE_UNCONSCIOUS:
      return characters.map((character) => {
        if (character.id === action.payload.id) {
          return { ...character, unconscious: !character.unconscious };
        }
        return character;
      });
    case ACTIONS.TOGGLE_CONCENTRATION:
      return characters.map((character) => {
        if (character.id === action.payload.id) {
          return { ...character, concentration: !character.concentration };
        }
        return character;
      });

    case ACTIONS.ADD_NOTE:
      return characters.map((character) => {
        // find the folder to update by matching the folderId
        if (character.id === action.payload.characterId) {
          // only update notes if the note does NOT exist in notes array
          if (
            !character.characterNotes.some((n) => n.id === action.payload.id)
          ) {
            character.characterNotes = [
              ...character.characterNotes,
              {
                text: action.payload.text,
                id: action.payload.id,
              },
            ];
          }
        }
        return character;
      });

    case ACTIONS.REMOVE_NOTE:
      //   return folders.filter((note) => note.id !== action.payload.id);
      return characters.map((character) => {
        const { payload } = action;
        if (character.id === payload.characterId) {
          character.characterNotes = character.characterNotes.filter((n) => {
            return n.id !== payload.id;
          });
        }

        return character;
      });

    case ACTIONS.REMOVE_CHARACTER:
      return characters.filter(
        (character) => character.id !== action.payload.id
      );
    default:
      return characters;
  }
}

function newCharacter(name) {
  return {
    id: Date.now(),
    characterNotes: [],
    name: name,
    health: 0,
    dead: false,
    blinded: false,
    charmed: false,
    deafened: false,
    frightened: false,
    grappled: false,
    incapacitated: false,
    invisible: false,
    paralyzed: false,
    petrified: false,
    poisoned: false,
    prone: false,
    restrained: false,
    stunned: false,
    unconscious: false,
  };
}

function Tracker() {
  const [characters, dispatch] = useLocallyPersistedReducer(
    reducer,
    [],
    "savedCharacters"
  );

  const [name, setName] = useState("");
  const [display, setDisplay] = useState("none");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_CHARACTER, payload: { name: name } });
    setName("");
    setDisplay("");
  }

  //   console.log(characters);

  return (
    <Container>
      <h4 style={{ marginBottom: "2rem" }} className="text-center">
        Combat Tracker
      </h4>
      <Row className="justify-content-md-center">
        <Col className="md-auto text-center">
          <h5>Add Character</h5>
          <form className="name-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </form>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button
            variant="secondary"
            style={{ display: display }}
            onClick={() => dispatch({ type: ACTIONS.NEXT_CHARACTER })}
          >
            <b>Next Turn</b>
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          {characters.map((character) => {
            // console.log(character.id)
            return (
              <Character
                key={character.id}
                character={character}
                dispatch={dispatch}
              />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default Tracker;
