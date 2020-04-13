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
import CorbettsMug from "../../Images/corbetts-mug.png";

const Header = (props) => (
  <div>
    <Card body outline color="dark" className="text-center mt-2">
      <CardImg top width="50%" src={CorbettsMug} alt="Card image cap" />
      <CardBody>
        <CardTitle>
          <h1>Carry Out &#38; Delivery</h1>
        </CardTitle>
        <CardSubtitle>
          BOGO Beer &#38; Wine <span>(with purchase of food)</span>
        </CardSubtitle>
        <CardText>
          Call{" "}
          <h2 className="green">
            <i className="fa fa-mobile"></i> (305) 238-0823
          </h2>{" "}
          to place a TO-GO Order or
          <a href="https://www.ubereats.com/miami/food-delivery/corbetts-sports-bar-and-grill/p17_xWy0RZ2zZjz4Qpl0iw">
            click here
          </a>{" "}
          to place an order with Uber <span className="green">Eats</span>
        </CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  </div>
);

export default Header;
