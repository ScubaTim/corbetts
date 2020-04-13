import React from "react";
import UrberEats from "../../Images/uber-eats.png";
import { Button } from "reactstrap";

import "./styles.scss";

const Footer = (props) => (
  <div className="footer text-center">
    <h2>Contact Us</h2>
    <h4>
      <i class="fa fa-twitter p-2"></i> <i class="fa fa-instagram p-2"></i>{" "}
      <i class="fa fa-facebook p-2"></i>{" "}
    </h4>
    <h4>
      <i className="fa fa-mobile"></i> (305) 238-0823
    </h4>{" "}
    <h4>
      {" "}
      <i className="fa fa-envelope"></i> corbsports@aol.com
    </h4>
    <div>
      <Button>
        Delivery with
        <a href="https://www.ubereats.com/miami/food-delivery/corbetts-sports-bar-and-grill/p17_xWy0RZ2zZjz4Qpl0iw">
          <img src={UrberEats} width="20%"></img>
        </a>
      </Button>
    </div>
    <h4>
      12721 S Dixie Hwy <br></br>
      Pinecrest, Florida 33156
    </h4>
    <span>Corbett's Sports Bar &copy; 2020</span>
  </div>
);

export default Footer;
