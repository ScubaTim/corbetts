import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

import "./styles.scss";
import CorbettsMug from "../../Images/corbetts-mug.png";

const Header = (props) => (
  <Card body outline color="dark" className="text-center mt-2">
    <CardImg top width="50%" src={CorbettsMug} alt="Card image cap" />
    <CardBody>
      <CardTitle>
        <h1>We Are Open For Carry Out &#38; Delivery</h1>
      </CardTitle>
      <CardSubtitle>
        <h4>Buy One Get One Free on all in-stock Beer &#38; Wine </h4>
        <span>(With any food purchase, while supplies last)</span>
      </CardSubtitle>
      <CardText className="mt-2">
        <span className="mb-1">To Place a Carry Out Order Call</span>
        <span className="green">
          <i className="fa fa-mobile"></i> (305) 238-0823
        </span>{" "}
        <span>
          Or Place an Order With{" "}
          <a
            href="https://www.ubereats.com/miami/food-delivery/corbetts-sports-bar-and-grill/p17_xWy0RZ2zZjz4Qpl0iw"
            className="green"
          >
            <strong>Uber Eats</strong>
          </a>{" "}
        </span>
      </CardText>
    </CardBody>
  </Card>
);

export default Header;
