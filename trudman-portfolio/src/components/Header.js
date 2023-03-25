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
      <Nav className="ml-auto justify-content-end" style={{ marginRight: "20px" }}>
        <Nav.Link
          href="#"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            ":hover": { color: "white", textDecoration: "none" },
          }}>
          About Me
        </Nav.Link>
        <Nav.Link
          href="#"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            ":hover": { color: "white", textDecoration: "none" },
          }}>
          Portfolio
        </Nav.Link>
        <Nav.Link
          href="#"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            ":hover": { color: "white", textDecoration: "none" },
          }}>
          Contact
        </Nav.Link>
        <Nav.Link
          href="#"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            ":hover": { color: "white", textDecoration: "none" },
          }}>
          Resume
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
