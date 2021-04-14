import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import { Link} from 'react-router-dom'
import { IoCloudyNightOutline } from 'react-icons/io5';


function NavBar () {
    return (
        <Navbar bg="light" variant="light">
        <Navbar.Brand href="/"> <IoCloudyNightOutline/> omayma </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link><Link to="/">Search</Link></Nav.Link>
          <Nav.Link ><Link to="/saved">Saved</Link> </Nav.Link>
         
        </Nav>
      </Navbar>
    )
}
export default NavBar;