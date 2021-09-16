import React from 'react';
import './NavBar.css'
import { Navbar, Form, Nav, FormControl, Button } from 'react-bootstrap'

export default class NavBar extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">FEC Online Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="ms-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
        </Nav>
        <Nav className ="ms-auto">
          <Form className="me-auto d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}