import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from 'styled-components'

const Styles = styled.div`
 .navbar {
     background-color: #222;
 }

 .navbar-brand, .navbar-nav, .nav-link {
     color: #bbb;

     &:hover {
         color: white;
     }
 }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Spacestagram</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/saved">Saved</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav>
    </Navbar>
  </Styles>
);

