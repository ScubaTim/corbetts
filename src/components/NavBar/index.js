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
      <NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav>
            <h1><i className="fa fa-bars"></i></h1>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href='#foodMenu'>Menu</DropdownItem>
            <DropdownItem href='#drinks'>Drinks</DropdownItem>
            <DropdownItem href='#contactUs'>Contact Us</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavItem>
      <NavbarBrand href="corbettsSportsBar.com" className="navbarBrand absoluteCenter">
        <img src={CorbettsText} width='100%' alt="Corbett's logo"></img>
      </NavbarBrand>
      <NavItem className="d-flex justify-content-between">
        <NavLink href="https://twitter.com/CorbettsBar">
          <h4><i className="fa fa-twitter"></i></h4>
        </NavLink>
        <NavLink href="https://www.instagram.com/corbetts_bar/">
          <h4><i className="fa fa-instagram"></i></h4>
        </NavLink>
        <NavLink href="https://www.facebook.com/corbetts.bar/">
          <h4><i className="fa fa-facebook"></i></h4>
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default NavBar;
