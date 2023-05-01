import React from "react";
import { useState } from "react";
import { FOLDER_ACTIONS } from "../actions";
import Note from "./Note";
import { Container, Row, Col, Button } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function Folder({ folder, dispatch }) {
  const [display, setDisplay] = useState("");
  const [altDisplay, setAltDisplay] = useState("none");
  const [text, setText] = useState("");

  function minimize() {
    setDisplay("none");
    setAltDisplay("");
  }

  function expand() {
    setDisplay("");
    setAltDisplay("none");
  }

  function handleSubmitNote(e) {
    e.preventDefault();
    dispatch({
      type: FOLDER_ACTIONS.ADD_NOTE,
      payload: { text: text, folderId: folder.id, id: Date.now() },
    });
    setText("");
  }

  return (
    <Container>
      <Row>
        <Col>
          <h3
            style={{
              marginTop: "1rem",
              background: "#212529",
              color: "whitesmoke",
              paddingLeft: "1rem",
              paddingTop: "1rem",
            }}
          >
            {folder.folderName}
          </h3>
        </Col>
        <Col style={{ textAlign: "right" }}>
          <ButtonGroup
            style={{ marginTop: "1rem" }}
            size="sm"
            variant="secondary"
          >
            <Button
              variant="secondary"
              style={{ display: display }}
              onClick={() => minimize()}
            >
              <b>&#8722;</b>
            </Button>
            <Button
              variant="secondary"
              style={{ display: altDisplay }}
              onClick={() => expand()}
            >
              <b>&#43;</b>
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                dispatch({
                  type: FOLDER_ACTIONS.REMOVE_FOLDER,
                  payload: { id: folder.id },
                })
              }
            >
              <b>&#215;</b>{" "}
            </Button>
          </ButtonGroup>
        </Col>
      </Row>

      <div style={{ display: display, marginTop: "1 rem" }}>
        <Row>
          <Col>
            <form style={{ marginBottom: "1rem" }} onSubmit={handleSubmitNote}>
              <input
                placeholder="Enter a note"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </form>
          </Col>
        </Row>
        <Row>
          <Col>
            {folder.folderNotes.map((note) => (
              <Note
                key={note.id}
                id={note.id}
                folderId={folder.id}
                noteText={note.text}
                dispatch={dispatch}
              />
            ))}
            {/* < NoteCopy/> */}
          </Col>
        </Row>
      </div>
    </Container>
  );
}
