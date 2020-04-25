import React, { useState } from "react";
import {
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";

import CorbettsText from "../../Images/corbetts-text.png";
import "./styles.scss";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <Nav tabs className="navbar navbar-light bg-light">
      <div>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav>
            <h5><i className="fa fa-bars"></i></h5>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href='#foodMenu'>Menu</DropdownItem>
            <DropdownItem href='#drinks'>Drinks</DropdownItem>
            <DropdownItem href='#contactUs'>Contact Us</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <NavbarBrand className="navbarBrand absoluteCenter">
        <img src={CorbettsText} width='100%' alt="Corbett's logo"></img>
      </NavbarBrand>
      <div className="d-flex justify-content-between">
        <NavLink href="https://twitter.com/CorbettsBar">
          <h6><i className="fa fa-twitter"></i></h6>
        </NavLink>
        <NavLink href="https://www.instagram.com/corbetts_bar/">
          <h6><i className="fa fa-instagram"></i></h6>
        </NavLink>
        <NavLink href="https://www.facebook.com/corbetts.bar/">
          <h6><i className="fa fa-facebook"></i></h6>
        </NavLink>
      </div>
    </Nav>
  );
};

export default NavBar;
