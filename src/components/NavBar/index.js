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

const NavBar = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <Nav tabs className="navbar navbar-light bg-light">
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav>
          <i className="fa fa-bars"></i>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Menu</DropdownItem>
          <DropdownItem>Drinks</DropdownItem>
          <DropdownItem>Contact Us</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavItem>
        <NavbarBrand href="corbettsSportsBar.com">
          <img src={CorbettsText} width="100%" alt="Corbett's logo"></img>
        </NavbarBrand>
      </NavItem>
      <NavItem className="d-flex flex-row">
        <NavLink href="https://twitter.com/CorbettsBar">
          <i className="fa fa-twitter"></i>{" "}
        </NavLink>
        <NavLink href="https://www.instagram.com/corbetts_bar/">
          <i className="fa fa-instagram"></i>{" "}
        </NavLink>
        <NavLink href="https://www.facebook.com/corbetts.bar/">
          <i className="fa fa-facebook"></i>{" "}
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default NavBar;
