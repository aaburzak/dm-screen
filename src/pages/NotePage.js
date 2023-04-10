import React from "react";
import { Container, Row, Col} from 'react-bootstrap';
import {useReducer, useState} from "react";
import Folder from "../components/Folder";
import { useLocallyPersistedReducer } from "../hooks/ReducerStorage";



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
    const [folders, dispatch] = useLocallyPersistedReducer(reducer, [], 'savedFolders' )
    const [folderName, setFolderName] = useState('')

    function handleSubmitFolder(e) {
        e.preventDefault()
            dispatch({type: FOLDER_ACTIONS.ADD_FOLDER, payload: {folderName: folderName}})
            setFolderName('')
    }

return(
  <Container>
    <Row>
        <h1>Notes</h1>
            <Col>
            <h5 style={{paddingLeft: '1rem'}}>Add Folder</h5>
            <form style={{paddingLeft: '1rem'}} className="name-form" onSubmit={handleSubmitFolder}>
                    <input type="text" value={folderName} onChange={e => setFolderName
                    (e.target.value)} />
                </form>
            </Col>
        </Row>
            {folders.map(folder => {
                return <Folder key={folder.id} folder ={folder} folderName={ folderName } dispatch={ dispatch }/>
            })}
        
  </Container>   
  
);

};

export default NotePage;