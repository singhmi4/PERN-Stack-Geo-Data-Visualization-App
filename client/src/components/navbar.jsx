import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css"

export default function NavbarComp() {
    return (
        <Navbar sticky="top" bg="light" expand="lg">
        <Link to="/"><Navbar.Brand>Data Visualization Demo</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" className="Nav-Link">Home</Link>
            <NavDropdown title="Charts &amp; Tables" id="basic-nav-dropdown">
              <Link to="/chart_table/hourly_events" className="Nav-Link">Hourly Events</Link>
              <Link to="/chart_table/daily_events" className="Nav-Link">Daily Events</Link>
              <NavDropdown.Divider />
              <Link to="/chart_table/hourly_stats" className="Nav-Link">Hourly Stats</Link>
              <Link to="/chart_table/daily_stats" className="Nav-Link">Daily Stats</Link>
            </NavDropdown>
            <Link to="/map" className="Nav-Link">Geo Map</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> 
    )
}