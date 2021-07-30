import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#212529",
        color: "rgba(255,255,255,.55)",
        position: "absolute",
        bottom: "0",
        width: "100%",
      }}
    >
      <Container>
        <Row>
          <Col className="py-3">Website Designed & Developed by: Denis</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
