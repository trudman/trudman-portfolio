import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePicture from "./images/IMG_0652.jpeg";

const AboutMe = () => {
  return (
    <Container className="mt-5">
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
          <h2 className="text-center">About Me</h2>
          <p>
            I am a highly motivated individual who has had a diverse educational and professional
            background. I hold a Bachelor's degree in Biology as well as a Bachelor's degree in
            Nursing. After obtaining my nursing degree, I worked as an ICU nurse for several years,
            where I gained invaluable experience and knowledge in the healthcare industry.{" "}
          </p>

          <p>
            However, my passion for technology and problem-solving led me to pursue a career in web
            development. I embarked on a journey to learn full-stack web development and eventually
            transitioned my career from nursing to become a full-stack web developer.{" "}
          </p>
          <p>
            As a full-stack web developer student, I have been involved in developing and
            maintaining various web applications. I am proficient in a variety of technologies
            including HTML, CSS, JavaScript, React, Node.js, and MongoDB, among others. My passion
            for learning new technologies and developing cutting-edge solutions is one of my
            strongest assets. My extensive experience in both healthcare and web development has
            allowed me to develop a unique set of skills that enable me to approach problems from
            different perspectives. I have a proven track record of delivering high-quality work and
            meeting tight deadlines. I am committed to using my skills and knowledge to create
            positive impacts in the world and am always on the lookout for new opportunities to
            learn and grow.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
