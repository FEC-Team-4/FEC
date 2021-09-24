import React from 'react';
import './NavBar.css'
import { Navbar, Form, Nav, FormControl, Button } from 'react-bootstrap'

export default class NavBar extends React.Component {
  render() {
    return (
      <Navbar bg="primary" variant ="dark" expand="lg">
            <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.png"
          width="30"
          height="30"
          className="logo d-inline-block align-top"
        />{' '}
      TEAM<sup>4</sup> FEC
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="ms-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
        </Nav>
        <Nav className ="ms-auto search">
          <Form className="me-auto d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="top-search-input mr-2"
              aria-label="Search"
            />
            <Button variant="outline-light" className="menu-search">Search</Button>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}