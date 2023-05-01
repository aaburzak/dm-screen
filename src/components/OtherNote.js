import React from "react";

import { Card, CloseButton } from "react-bootstrap";

import { ACTIONS } from "../actions";

export default function OtherNote({ noteText, dispatch, id, characterId }) {
  console.log(noteText);
  return (
    <>
      <div style={{ maxWidth: "min-content", marginTop: "1rem" }}>
        <div style={{ textAlign: "right", color: "white" }}>
          <CloseButton
            variant="white"
            onClick={() =>
              dispatch({
                type: ACTIONS.REMOVE_NOTE,
                payload: { id, characterId },
              })
            }
          ></CloseButton>
        </div>

        <Card style={{ color: "black" }} body>
          {noteText}
        </Card>
      </div>
    </>
  );
}
