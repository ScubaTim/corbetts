import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "./styles.scss";

const Footer = () => (
  <div id="contactUs" className="footer">
    <Container>
      <Row className="mt-2 pt-4">
        <Col>
          <h2>Contact Us</h2>
        </Col>
        <Col>
          <h2>Hours</h2>
        </Col>

      </Row>
      <Row>
        <Col>
          <h5 className="footer-number">(305) 238-0823</h5>
          <h6>orbsports@aol.com</h6>
        </Col>
        <Col className="hours">
          Sunday - Thursday 11am - 9pm <br />
          Friday - Saturday 11am - 10pm
        </Col>

      </Row>
      <Row>
        <Col>
          <p className="address pb-3">12721 S Dixie Hwy Pinecrest, Florida 33156</p>
        </Col>
        <Col className="pb-3 mt-1">
          <a href="https://www.facebook.com/corbetts.bar/"><i style={{ fontSize: "1.5rem", color: 'white' }} className="fa fa-facebook p-2"></i>{" "}</a>
          <a href="https://twitter.com/CorbettsBar"><i style={{ fontSize: "1.5rem", color: 'white' }} className="fa fa-twitter p-2"></i>{" "}</a>
          <a href="https://www.instagram.com/corbetts_bar/"><i style={{ fontSize: "1.5rem", color: 'white' }} className="fa fa-instagram p-2"></i>{" "}</a>
        </Col>
      </Row>
      <Row>
      </Row>

    </Container>
  </div >
);

export default Footer;