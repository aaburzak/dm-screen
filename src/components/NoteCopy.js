// import React from "react";

// import { Container, Row, Col, Card, CloseButton } from "react-bootstrap";

// import { FOLDER_ACTIONS } from "../actions";

// export default function Note({ noteText, dispatch, id, folderId }) {
//   return (
//     <Container>
//       <Row>
//         <Card>
//           <Row>
//             <Col style={{ textAlign: "right", paddingTop: "1rem" }}>
//               <CloseButton
//                 onClick={() =>
//                   dispatch({
//                     type: FOLDER_ACTIONS.REMOVE_NOTE,
//                     payload: { id, folderId },
//                   })
//                 }
//               ></CloseButton>
//             </Col>
//           </Row>
//           <Row>
//             <Col>{noteText}</Col>
//           </Row>
//         </Card>
//       </Row>
//     </Container>
//   );
// }
