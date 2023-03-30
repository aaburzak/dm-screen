import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import CloseButton from 'react-bootstrap/CloseButton';
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card';

import { NOTEACTIONS } from './Note';

export default function NoteBody({note, dispatch}) {
  return (

            <>
            <div style={{maxWidth: '100%', marginTop:'1rem'}}>
            <div style={{textAlign: 'right', color: 'white'}}>
            <CloseButton variant='white' onClick={()=> dispatch({ type:NOTEACTIONS.REMOVE_NOTE, payload:{ id: note.id }})}></CloseButton>
            </div>
            <Card style={{color: 'black'}}body>
            {note.text}</Card>
            </div>
            </>
            
  )
}


