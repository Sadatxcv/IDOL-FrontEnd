import React from "react";
import "./Navbar.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar-container">
      <Navbar collapseOnSelect className="nav" expand="lg">
        <Container>
          <Navbar.Brand href="/home">
            <Link to="/">
              <img className="img-logo" src="static\logo-1.png" alt="logo"></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item>
                <Nav.Link
                  className="navItem"
                  id="navlink"
                  eventKey="1"
                  as={Link}
                  to="/"
                >
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="navItem"
                  id="navlink"
                  eventKey="1"
                  as={Link}
                  to="/about"
                >
                  <span>About Us</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="navItem"
                  id="navlink"
                  eventKey="1"
                  as={Link}
                  to="/contact"
                >
                  <span>Contact Us</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="navItem"
                  id="navlink"
                  eventKey="1"
                  as={Link}
                  to="/LoginAndSignup"
                >
                  Login & Sign Up
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
