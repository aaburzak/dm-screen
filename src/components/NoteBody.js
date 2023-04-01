import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import CloseButton from 'react-bootstrap/CloseButton';
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card';

import { NOTEACTIONS } from './Note';

export default function OtherNoteBody({note, dispatch}) {
  return (

            <Container>
              <Row>
                <Col>
          
            <div style={{textAlign: 'right'}}>
            <CloseButton onClick={()=> dispatch({ type:NOTEACTIONS.REMOVE_NOTE, payload:{ id: note.id }})}></CloseButton>
            </div>
            <ul>
              <li>
              {note.text}
              </li>
            </ul> 
            </Col>
            </Row>
            </Container>
            
  )
}


