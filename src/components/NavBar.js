import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const NavBar = () => {
  return (
    <Navbar sticky="top" expand="lg">
      <Navbar.Brand href="/">Crazy Tales</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/templates">Templates</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Nav inline>
          <Nav.Link href="https://andydavisson.com">Back to andydavisson.com</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
 
export default NavBar;
