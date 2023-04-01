import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import CloseButton from 'react-bootstrap/CloseButton';


import { NOTEACTIONS } from './Note';

export default function OtherNoteBody({note, dispatch}) {
  return (

            <Container>
              <Row>
                <Col>
          
            <div style={{paddingTop: '1rem',textAlign: 'right'}}>
            <CloseButton onClick={()=> dispatch({ type:NOTEACTIONS.REMOVE_NOTE, payload:{ id: note.id }})}></CloseButton>
            </div>
            <ul>
              <li style={{paddingBottom: '1rem'}}>
              {note.text}
              </li>
            </ul> 
            </Col>
            </Row>
            </Container>
            
  )
}


