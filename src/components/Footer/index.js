import React from "react";

import "./styles.scss";

const Footer = (props) => (
  <div id="contactUs" className="footer text-center p-4">
    <h2>Contact Us</h2>
    <span>
      <i className="fa fa-twitter p-2"></i>{" "}
      <i className="fa fa-instagram p-2"></i>{" "}
      <i className="fa fa-facebook p-2"></i>{" "}
    </span>
    <p className="font-weight-bold">
      <i className="fa fa-mobile"></i> (305) 238-0823
    </p>{" "}
    <p>
      {" "}
      <i className="fa fa-envelope"></i> corbsports@aol.com
    </p>
    <p>12721 S Dixie Hwy Pinecrest, Florida 33156</p>
    <div className="m-2 p-2">
      <h2>Hours</h2>
      <p>Sunday - Thursday 11am - 9pm</p>
      <p>Friday - Saturday 11am - 10pm</p>
    </div>
    <span>Corbett's Sports Bar &copy; 2020</span>
  </div>
);

export default Footer;
