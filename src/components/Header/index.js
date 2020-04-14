import React from "react";
import {
  Container,
  Row,
  Col
} from "reactstrap";

import "./styles.scss";
import CorbettsMug from "../../Images/corbetts-mug.png";

const Header = () => {
  return (
    <Container className="containerStyle text-center">
      <Row className="mt-2 mb-4">
        <Col>
          <img className="logo" src={CorbettsMug} alt="Corbettes Mug Logo" />
        </Col>
      </Row>
      <Row className="my-2">
        <Col>
          <h1>We are Open For Carry Out &#38; Delivery</h1>
        </Col>
      </Row>
      <Row className="my-2">
        <Col>
          <h5>Buy One Get One Free on All In-Stock Beer &#38; Wine</h5>
          <p><em>(With any food purchase - While supplies last!)</em></p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <h5>To Place a Carry Out Order Call Us At:</h5>
          <h2 className="my-3"><i className="m-1 fa fa-mobile"></i>(305) 238-0823</h2>
          <h5><a href="https://www.ubereats.com/miami/food-delivery/corbetts-sports-bar-and-grill/p17_xWy0RZ2zZjz4Qpl0iw" className='btn btn-outline-success mt-2'><strong>OR Place an Order With Uber Eats</strong></a></h5>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;