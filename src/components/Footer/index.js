import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "./styles.scss";

const Footer = () => (
  <div id="contactUs" className="footer">
    <Container>
      <div>
        <Row>
          <Col>
            <h2 style={{ fontSize: '2.75rem' }}>Contact Us</h2>
            <h2 className="my-3">(305) 238-0823</h2>
            <h6>corbsports@aol.com</h6>
          </Col>
          <Col xs="3"></Col>
          <Col>
            <h2 style={{ fontSize: '2.75rem' }}>Hours</h2>
            <h4 className="mt-3">Sunday - Thursday 11am - 9pm</h4>
            <h4 >Friday - Saturday 11am - 10pm</h4>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h6>12721 S Dixie Hwy Pinecrest, Florida 33156</h6>
          </Col>
          <Col xs="3">
            <i className="fa fa-twitter p-2"></i>{" "}
            <i className="fa fa-instagram p-2"></i>{" "}
            <i className="fa fa-facebook p-2"></i>{" "}
          </Col>
          <Col>
            <h6> Corbett's Sports Bar &copy; 2020</h6>
          </Col>
        </Row>
      </div>
    </Container>
  </div >
);

export default Footer;