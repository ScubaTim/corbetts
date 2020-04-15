import React from "react";

import "./styles.scss";

const Footer = (props) => (
  <div id="contactUs" className="footer text-center pt-5">
    <h2>Contact Us</h2>
    <h2>
      <i className="fa fa-twitter p-2"></i>{" "}
      <i className="fa fa-instagram p-2"></i>{" "}
      <i className="fa fa-facebook p-2"></i>{" "}
    </h2>
    <h4></h4>
    <h2><i className="mr-2 fa fa-mobile"></i> (305) 238-0823</h2>
    <p><i className="mr-2 fa fa-envelope"></i> corbsports@aol.com</p>
    <div className="m-2 p-2">
      <h2>Hours</h2>
      <p>Sunday - Thursday 11am - 9pm</p>
      <p>Friday - Saturday 11am - 10pm</p>
    </div>
    <h6 className="mt-5">12721 S Dixie Hwy Pinecrest, Florida 33156</h6>
    <p className="mt-3 pb-3">Corbett's Sports Bar &copy; 2020</p>
  </div>
);

export default Footer;
