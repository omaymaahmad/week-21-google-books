import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Google Books</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/" style={{ color: "#FFF" }}>
                Search
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/saved" style={{ color: "#FFF" }}>
                Saved
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
  }
}
export default NavBar;
