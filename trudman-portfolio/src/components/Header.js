import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import portfolioPicture from "./images/TR.jpeg";

const Header = () => {
  return (
    <Navbar fixed="top" expand="lg" style={{ backgroundColor: "transparent" }}>
      <Navbar.Brand href="/">
        <img
          src={portfolioPicture}
          width="50"
          height="50"
          className="d-inline-block align-top rounded-circle"
          alt="My Portfolio"
          style={{ margin: "0 10px" }}
        />
      </Navbar.Brand>
      <Nav className="ml-auto justify-content-end" style={{ marginRight: '10px' }}>
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">About</Nav.Link>
        <Nav.Link href="#">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
