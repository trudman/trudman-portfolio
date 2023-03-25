import React from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <Container fluid className="bg-dark text-light py-3">
      <div className="text-center">
        <a href="https://www.linkedin.com/in/tyler-rudman-b70a4723b/" target="_blank" rel="noopener noreferrer" className="text-light mx-3">
          <FaLinkedin size={32} />
        </a>
        <a href="https://github.com/trudman" target="_blank" rel="noopener noreferrer" className="text-light mx-3">
          <FaGithub size={32} />
        </a>
      </div>
      <div className="text-center mt-3">
        <p>&copy; 2023 My Portfolio. All rights reserved.</p>
      </div>
    </Container>
  );
};

export default Footer;
