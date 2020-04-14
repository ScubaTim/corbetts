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
  <Card body className="text-center containerStyle mt-3">
    <CardImg top className='logo' src={CorbettsMug} alt="Corbettes Logo" />
    <CardBody>
      <CardTitle>
        <h3>We Are Open For Carry Out &#38; Delivery</h3>
      </CardTitle>
      <CardSubtitle>
        <h4>Buy One Get One Free on all in-stock Beer &#38; Wine </h4>
        <p>(With any food purchase, while supplies last)</p>
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
