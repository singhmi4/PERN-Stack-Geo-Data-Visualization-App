import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarComp() {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Data Visualizaion Demo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <NavDropdown title="Charts &amp; Tables" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/chart_table/hourly_events">Hourly Events</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/chart_table/daily_events">Daily Events</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/chart_table/hourly_stats">Hourly Stats</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/chart_table/daily_stats">Daily Stats</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><Link href="/map">Geo Map</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> 
    )
}