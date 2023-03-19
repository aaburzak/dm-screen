import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


function TodoList() {
  return (
<Container>
    <Row>
    <h4 className="cover-title">Things You Can Do On Your Turn</h4>
        <Col>
        <Card text='light' body style={{textAlign: 'left', background: 'linear-gradient(to left, #373b3e, #212529)'}}>
            <ul>
                <li>Move up to your speed.</li>
                <li>Take one action.</li>
                <li>Communicate with speech, gestures, or both</li>
                <li>Interact with one object or feature of the environment as you move or take your action.  To interact with a second object, take the Use an Object action</li>
            </ul>
        </Card>
        </Col>
    </Row>
</Container>
  )
}

export default TodoList