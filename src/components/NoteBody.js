import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

import { NOTEACTIONS } from './Note';

export default function NoteBody({note, dispatch}) {
  return (
    <Container>
        <Row>
            <Col>
                <p>{note.text}</p>
            </Col>
        </Row>
        <Row>
      <Col>
      <button className ="remove-note-btn" onClick={()=> dispatch({ type:NOTEACTIONS.REMOVE_NOTE, payload:{ id: note.id }})}>X</button>
      </Col>
      </Row>

    </Container>
  )
}


