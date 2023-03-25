import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePicture from "./images/IMG_0652.jpeg";

const AboutMe = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <img src={profilePicture} alt="My Profile" className="img-fluid rounded-pill shadow-sm" style={{ borderRadius: '10px' }} />
        </Col>
        <Col md={8}>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ante vitae ex semper
            malesuada. Praesent quis metus ipsum. Duis at massa euismod, auctor nunc a, placerat
            augue. Donec porttitor, nibh in interdum laoreet, dolor justo luctus ipsum, ac imperdiet
            arcu enim a ante. Aliquam et odio quis sapien vulputate pellentesque.{" "}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
