import React from "react";
import { Button } from "reactstrap";

import "./styles.scss";

const Footer = (props) => (
  <div className="footer text-center p-4">
    <h2>Contact Us</h2>
    <h4>
      <i className="fa fa-twitter p-2"></i>{" "}
      <i className="fa fa-instagram p-2"></i>{" "}
      <i className="fa fa-facebook p-2"></i>{" "}
    </h4>
    <h4>
      <i className="fa fa-mobile"></i> (305) 238-0823
    </h4>{" "}
    <h4>
      {" "}
      <i className="fa fa-envelope"></i> corbsports@aol.com
    </h4>
    <h5>12721 S Dixie Hwy Pinecrest, Florida 33156</h5>
    <h2>Hours</h2>
    <h5>Sunday - Thursday 11am - 9pm</h5>
    <h5>Friday - Saturdau 11am - 10pm</h5>
    <span>Corbett's Sports Bar &copy; 2020</span>
  </div>
);

export default Footer;
