import React from "react";
import { Container, Row, Col} from 'react-bootstrap';
import {useReducer, useState} from "react";
import Folder from "../components/Folder";
// import Folder from "../components/Folder";

export const FOLDER_ACTIONS ={
    ADD_FOLDER: 'add-folder',
    REMOVE_FOLDER: 'remove-folder',
}

function reducer(folders, action){
    switch (action.type){
        case FOLDER_ACTIONS.ADD_FOLDER:
            return[...folders, newFolder(action.payload.folderName)]

        case FOLDER_ACTIONS.REMOVE_FOLDER:
            return folders.filter(folder => folder.id !== action.payload.id)    
            default:
                return folders
    }
}

function newFolder(folderName){
    return{ id:Date.now(), folderName: folderName }
}

function NotePage(){
    const [folders, dispatch] = useReducer(reducer, [])
    const [folderName, setFolderName] = useState('')

    function handleSubmitFolder(e) {
        e.preventDefault()
            dispatch({type: FOLDER_ACTIONS.ADD_FOLDER, payload: {folderName: folderName}})
            setFolderName('')
    }

return(
  <Container>
    <Row>
            <h3>Add Folder</h3>
            <Col>
            <form className="name-form" onSubmit={handleSubmitFolder}>
                    <input type="text" value={folderName} onChange={e => setFolderName
                    (e.target.value)} />
                </form>
            </Col>
        </Row>
            {folders.map(folder => {
                return <Folder key={folder.id} folder ={folder} dispatch={ dispatch }/>
            })}
        
  </Container>   
  
);

};

export default NotePage;