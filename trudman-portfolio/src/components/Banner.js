import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bannerImage from './images/banner.jpg';

const Banner = () => {
  return (
    <Container fluid className="px-0">
      <Row noGutters>
        <Col>
          <img src={bannerImage} alt="Banner" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
