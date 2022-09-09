import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../logo.png";
import React from "react";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              className="d-inline-block align-top"
              alt="logo"
              width="30"
              height="30"
            />{" "}
            Paprika
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products/suculentas">Suculentas</NavLink>
            <NavLink to="/products/cactus">Cactus</NavLink>
            <NavLink to="/products/plantas">Plantas</NavLink>
            <CartWidget />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
