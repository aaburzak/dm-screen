import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

import { useLocallyPersistedReducer } from "../hooks/ReducerStorage";

import Folder from "../components/Folder";

import { FOLDER_ACTIONS } from "../actions";

function reducer(folders, action) {
  switch (action.type) {
    case FOLDER_ACTIONS.ADD_FOLDER:
      return [...folders, newFolder(action.payload.folderName)];

    case FOLDER_ACTIONS.REMOVE_FOLDER:
      return folders.filter((folder) => folder.id !== action.payload.id);

    case FOLDER_ACTIONS.ADD_NOTE:
      return folders.map((folder) => {
        // find the folder to update by matching the folderId
        if (folder.id === action.payload.folderId) {
          // only update notes if the note does NOT exist in notes array
          if (!folder.folderNotes.some((n) => n.id === action.payload.id)) {
            folder.folderNotes = [
              ...folder.folderNotes,
              {
                text: action.payload.text,
                id: action.payload.id,
              },
            ];
          }
        }
        return folder;
      });

    case FOLDER_ACTIONS.REMOVE_NOTE:
      //   return folders.filter((note) => note.id !== action.payload.id);
      return folders.map((f) => {
        const { payload } = action;
        if (f.id === payload.folderId) {
          f.folderNotes = f.folderNotes.filter((n) => {
            return n.id !== payload.id;
          });
        }

        return f;
      });

    default:
      return folders;
  }
}

function newFolder(folderName) {
  return { id: Date.now(), folderName, folderNotes: [] };
}

function NotePage() {
  const [folders, dispatch] = useLocallyPersistedReducer(
    reducer,
    [],
    "savedFolders"
  );

  const [folderName, setFolderName] = useState("");

  function handleSubmitFolder(e) {
    e.preventDefault();
    dispatch({
      type: FOLDER_ACTIONS.ADD_FOLDER,
      payload: { folderName },
    });
    setFolderName("");
  }

  console.log(folders);
  return (
    <Container>
      <Row>
        <h1>Notes</h1>
        <Col>
          <h5 style={{ paddingLeft: "1rem" }}>Add Folder</h5>
          <form
            style={{ paddingLeft: "1rem" }}
            className="name-form"
            onSubmit={handleSubmitFolder}
          >
            <input
              type="text"
              placeholder="Enter a folder name"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
            />
          </form>
        </Col>
      </Row>

      {folders.map((folder) => {
        return <Folder key={folder.id} folder={folder} dispatch={dispatch} />;
      })}
    </Container>
  );
}

export default NotePage;
