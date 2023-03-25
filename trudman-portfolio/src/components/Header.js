import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import portfolioPicture from "./images/IMG_0652.jpeg";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img
          src={portfolioPicture}
          width="100"
          height="100"
          className="d-inline-block align-top"
          alt="My Portfolio"
        />
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">About</Nav.Link>
        <Nav.Link href="#">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
