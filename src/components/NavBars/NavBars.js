import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./NavBars.css";
const NavBars = () => {
  return (
    <Navbar expand="lg" className="navBar fixed-top">
      <Container fluid>
        <Navbar href="/home" className="navBrand">
          WorldQuizMania
        </Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse color="white" id="basic-navbar-nav">
          <Nav className="navLink">
            <Link to="/home">Home</Link>
            <Link to="/topics">Topics</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/blog">Blog</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBars;
