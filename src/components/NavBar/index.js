import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";

import "./style.scss";

const NavBar = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <Nav tabs className="navbar navbar-dark bg-dark fixed-top">
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
      <NavLink href="https://twitter.com/CorbettsBar">
        <i class="fa fa-twitter"></i>{" "}
      </NavLink>
      <NavLink href="https://www.instagram.com/corbetts_bar/">
        <i class="fa fa-instagram"></i>{" "}
      </NavLink>
      <NavLink href="https://www.facebook.com/corbetts.bar/">
        <i class="fa fa-facebook"></i>{" "}
      </NavLink>
    </Nav>
  );
};

export default NavBar;
