import { logDOM } from '@testing-library/react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import B_Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Input } from './Form/From';
import Logo from "../assets/logo.svg"

export const Navbar = () => {

  return (
    <>
    <style>
      {`
        nav {
          background: #fff;
        }
      `}
    </style>
    <B_Navbar sticky="top" bg="light" expand="lg">
      <Container>
        <B_Navbar.Brand href="#home">
            <img
              src={Logo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </B_Navbar.Brand>
        <B_Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: "end" }}>
          <Nav>
            <Input placeholder="Search for your favorite groups in ATG" />
          </Nav>
        </B_Navbar.Collapse>
        <B_Navbar.Collapse style={{ justifyContent: "end" }}>
            <Nav.Link>Create a account, Its's free</Nav.Link>
        </B_Navbar.Collapse>
      </Container>
    </B_Navbar>
    </>
  );
}