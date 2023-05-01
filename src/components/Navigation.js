import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container style={{ fontSize: "large" }}>
        <>
          <Navbar.Brand>DM Screen</Navbar.Brand>
        </>
        ) : (
        <Nav className="me-auto">
          <Nav.Link className="navOp" href="/">
            Basics
          </Nav.Link>

          <Nav.Link className="navOp" href="/travel">
            Travel
          </Nav.Link>

          <Nav.Link className="navOp" href="/combat">
            Combat
          </Nav.Link>

          <Nav.Link className="navOp" href="/spells">
            Spells
          </Nav.Link>

          <Nav.Link className="navOp" href="/notes">
            Notes
          </Nav.Link>
        </Nav>
        )
      </Container>
    </Navbar>
  );
}

export default Navigation;
