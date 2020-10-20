import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./styles.scss";
import CorbettsMug from "../../Images/corbetts-mug.png";

const Header = () => {
  return (
    <Container className="containerStyle text-center" style={{ margin: "1rem auto" }}>
      <Row className="mt-2 mb-4">
        <Col>
          <img className="logo" src={CorbettsMug} alt="Corbettes Mug Logo" />
        </Col>
      </Row>
      <Row className="my-2">
        <Col>
          <h1>Open For Carry Out &#38; Delivery</h1>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <h2 className="my-3">
            <i className="mr-2 fa fa-mobile"></i>(305) 238-0823
          </h2>
          <h5>OR</h5>
          <div>
            <a
              href="https://www.bitesdelivery.com/order/restaurant/corbetts-sports-bar--grill-menu/60"
              className="btn btn-success mt-2"
            >
              <h2> Place an Order With Bites Delivery</h2>
            </a>
          </div>
          <p className="mt-3">Also Available On</p>
          <div>
            <a
              href="https://www.ubereats.com/miami/food-delivery/corbetts-sports-bar-and-grill/p17_xWy0RZ2zZjz4Qpl0iw"
            >
              <h2>Uber Eats</h2>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
