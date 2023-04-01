import React from 'react'
import {useState} from "react";
import { FOLDER_ACTIONS } from '../pages/NotePage';
import Note from './Note';
import {Container, Row, Col, Button} from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';



export default function Folder({folder, dispatch}) {
  const [display, setDisplay] = useState('')
  const [altDisplay, setAltDisplay] = useState('none')

function minimize(){
  setDisplay('none')
  setAltDisplay('')
}

function expand(){
  setDisplay('')
  setAltDisplay('none')
}

  return (
    <Container>
        <Row> 
            <Col>
                <h3 style={{marginTop:'1rem', background: '#212529', color: 'whitesmoke', paddingLeft:'1rem'}}>{folder.folderName}</h3>
            </Col>
            <Col style={{textAlign: 'right'}}>

            <ButtonGroup style={{marginTop: '1rem'}} size="sm" variant='secondary'>
        
            <Button variant="secondary" style={{display:display}} onClick={()=> minimize()} ><b>&#8722;</b></Button>
            <Button variant="secondary" style={{display:altDisplay}} onClick={()=> expand()}><b>&#43;</b></Button>
            <Button variant="secondary" onClick={()=> dispatch({ type: FOLDER_ACTIONS.REMOVE_FOLDER, payload:{ id: folder.id }})}><b>&#215;</b> </Button>
            </ButtonGroup>
            </Col>
        </Row>


      <div style={{display: display, marginTop: '1 rem'}}>
      <Row>
        <Col>
        <Note />
        </Col>
      </Row>
      </div>
      
    </Container>
  )
}
