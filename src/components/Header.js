import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import portfolioPicture from "./images/TR.jpeg";

const Header = () => {
  return (
    <Navbar
      fixed="top"
      expand="lg"
      style={{ backgroundColor: "transparent", backdropFilter: "blur(4px)" }}>
      <Navbar.Brand as={Link} to="/">
        <img
          src={portfolioPicture}
          width="50"
          height="50"
          className="d-inline-block align-top rounded-circle"
          alt="My Portfolio"
          style={{ margin: "0 10px" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/about" style={{ fontSize: "20px", fontWeight: "bold" }}>
            About Me
          </Nav.Link>
          <Nav.Link as={Link} to="/project" style={{ fontSize: "20px", fontWeight: "bold" }}>
            Portfolio
          </Nav.Link>
          <Nav.Link
            href={`mailto:tyler.rudman@gmail.com`}
            style={{ fontSize: "20px", fontWeight: "bold" }}>
            Contact
          </Nav.Link>
          <Nav.Link
            href="https://docs.google.com/document/d/1LIYh5niK_jV8FDy6X3JiFKgg-QdqDhMhZaD3_V2oHPU/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "20px", fontWeight: "bold" }}>
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
