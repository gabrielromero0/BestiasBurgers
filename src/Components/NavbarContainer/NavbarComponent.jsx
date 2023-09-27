import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavbarComponent.css';
import NavbarDropdown from './NavbarDropdown';

const NavbarComponent = (navbarProps) => {
  return (
    <Navbar className='bg-body-tertiary' expand="md" >
      <Container>
        <Link to='/'>
          <Navbar.Brand>BestiasBurgers</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <NavbarDropdown {...navbarProps}/>
            <Link to="/cart">
              <Button variant="dark">
                <CartWidget />
              </Button>
            </Link>
            <Link to="/contacto">
              <Button variant="dark">
                Contactanos
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
