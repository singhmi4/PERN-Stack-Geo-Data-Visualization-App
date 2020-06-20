import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarComp() {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <NavDropdown title="Charts" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/chart/hourly_events">Hourly Events</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/chart/daily_events">Daily Events</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/chart/hourly_stats">Hourly Stats</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/chart/daily_stats">Daily Stats</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Data Tables" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/table/hourly_events">Hourly Events</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/table/daily_events">Daily Events</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/table/hourly_stats">Hourly Stats</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/table/daily_stats">Daily Stats</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><Link href="/map">Geo Map</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> 
    )
}