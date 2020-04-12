import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import "./styles.scss";

const Header = () => (
  <div>
    <Card>
      <CardImg
        top
        width="100%"
        src="/assets/318x180.svg"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>Carry Out &#38; Delivery</CardTitle>
        <CardSubtitle>
          BOGO Beer &#38; Wine <span>(with purchase of food)</span>
        </CardSubtitle>
        <CardText>
          Call <h2>(305) 238-0823</h2> to place a TO-GO Order or click here{" "}
          <a href="https://www.ubereats.com/miami/food-delivery/corbetts-sports-bar-and-grill/p17_xWy0RZ2zZjz4Qpl0iw"></a>{" "}
          to place an order with Uber <span className="green">Eats</span>
        </CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  </div>
);

export default Header;
