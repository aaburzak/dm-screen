// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import CloseButton from "react-bootstrap/CloseButton";

// import { FOLDER_ACTIONS } from "../pages/NotePageCopy";

// export default function NoteBodyCopy({ note, dispatch }) {
//   return (
//     <Container>
//       <Row>
//         <Col>
//           <ul>
//             <li style={{ paddingBottom: "1rem" }}>
//               <div style={{ paddingTop: "1rem", textAlign: "right" }}>
//                 <CloseButton
//                   onClick={() =>
//                     dispatch({
//                       type: FOLDER_ACTIONS.REMOVE_NOTE,
//                       payload: { id: note.id },
//                     })
//                   }
//                 ></CloseButton>
//               </div>
//               {note.text}
//             </li>
//           </ul>
//         </Col>
//       </Row>
//     </Container>
//   );
// }
