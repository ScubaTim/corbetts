import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "./styles.scss";

const Footer = () => (
  <div id="contactUs" className="footer">
    <Container>
      <Row className="socialRow my-5">
        <Col>
          <i style={{ fontSize: "3rem", color: 'white' }} className="fa fa-twitter p-2"></i>{" "}
        </Col>
        <Col>
          <i style={{ fontSize: "3rem", color: 'white' }} className="fa fa-instagram p-2"></i>{" "}
        </Col>
        <Col>
          <i style={{ fontSize: "3rem", color: 'white' }} className="fa fa-facebook p-2"></i>{" "}
        </Col>
      </Row>
      <Row className="contact">
        <Col>
          <h2>Contact Us</h2>
        </Col>
        <Col>
          <h2>(305) 238-0823</h2>
          <h6>orbsports@aol.com</h6>
        </Col>
      </Row>
      <Row className="hours">
        <Col>
          <h2>Hours</h2>
          <p>  Sunday - Thursday 11am - 9pm</p>
          <p>  Friday - Saturday 11am - 10pm</p>
        </Col>
        <Col>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <p>12721 S Dixie Hwy Pinecrest, Florida 33156</p>
        </Col>
        <Col>
        </Col>
      </Row>

    </Container>
  </div >
);

export default Footer;



/*

Corbett's Sports Bar &copy; 2020
*/