import React from 'react'
import { FOLDERACTIONS } from './NotePage';
import Note from './Note';
import {Container, Row, Col} from 'react-bootstrap';

export default function Folder({folder, dispatch}) {
  return (
    <Container>
        <Row>
            <Col>
                <h4>{folder.folderName}</h4>
            </Col>
        </Row>
        <Row>
          <h5 className='other-note'>Other Notes</h5>
      </Row>
      
      <Row>
        <Note/>
      </Row>

      <Row>
      <Row>
      <Col>
      <button className ="remove-btn" onClick={()=> dispatch({ type: FOLDERACTIONS.REMOVE_FOLDER, payload:{ id: folder.id }})}>Remove Folder</button>
      </Col>
      </Row>
      </Row>
    </Container>
  )
}
