import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePicture from "./images/IMG_0652.jpeg";

const AboutMe = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <img
            src={profilePicture}
            alt="My Profile"
            className="img-fluid rounded-pill shadow-sm"
            style={{ borderRadius: "10px" }}
          />
        </Col>
        <Col md={8}>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Suspendisse in est ante in nibh mauris
            cursus. Habitasse platea dictumst quisque sagittis purus sit. Ornare lectus sit amet est
            placerat. Nunc mattis enim ut tellus. Amet luctus venenatis lectus magna fringilla.
            Integer vitae justo eget magna fermentum iaculis eu. Sed odio morbi quis commodo odio.
            Erat velit scelerisque in dictum non consectetur a. Condimentum lacinia quis vel eros
            donec ac odio tempor orci.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
