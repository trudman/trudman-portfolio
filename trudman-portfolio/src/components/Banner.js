import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bannerImage from './images/banner.jpg';

const Banner = () => {
  return (
    <Container fluid className="px-0">
      <Row noGutters>
        <Col>
          <div style={{ position: "relative" }}>
            <img src={bannerImage} alt="Banner" className="img-fluid" style={{ width: "100%", height: "500px" }} />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "60px",
                fontWeight: "bold",
                color: "white",
                textShadow: "2px 2px #000",
              }}
            >
              Tyler Rudman
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Banner;
