import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">My App</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem>
          <a href="/page1">Page 1</a>
        </NavItem>
        <NavItem>
          <a href="/page2">Page 2</a>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default NavBar;