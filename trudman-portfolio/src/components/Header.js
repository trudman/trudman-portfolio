import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import portfolioPicture from "./images/TR.jpeg";

const Header = () => {
  return (
    <Navbar
      fixed="top"
      expand="lg"
      style={{ backgroundColor: "transparent", backdropFilter: "blur(4px)" }}>
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
      <Nav className="justify-content-end">
        <Nav.Link
          href="#"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
          }}>
          About Me
        </Nav.Link>
        <Nav.Link
          href="#"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
          }}>
          Portfolio
        </Nav.Link>
        <Nav.Link
          href="#"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
          }}>
          Contact
        </Nav.Link>
        <Nav.Link
          href="#"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
          }}>
          Resume
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
