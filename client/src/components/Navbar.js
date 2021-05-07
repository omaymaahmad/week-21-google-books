import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">
            {" "}
            <FcGoogle /> Google Books
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Search</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/saved">Saved</Link>
            </Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
  }
}
export default NavBar;
