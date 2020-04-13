import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink, NavbarBrand } from 'reactstrap';

const Example = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <div>
            <Nav tabs>
                <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle nav >
                        Burger
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>About</DropdownItem>
                        <DropdownItem>Menu</DropdownItem>
                        <DropdownItem>Beer & Wine List</DropdownItem>
                        <DropdownItem>Contact Us</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavItem style={{ margin: '0 auto' }}>
                    <NavbarBrand href="/">Corbett's</NavbarBrand>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Social Media</NavLink>
                </NavItem>
            </Nav>
        </div>
    );
}

export default Example;