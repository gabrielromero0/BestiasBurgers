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
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
            <NavbarDropdown {...navbarProps}/>
          <Link to="/cart">
            <Button variant="dark">
              <CartWidget />
            </Button>
          </Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  /*
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      className="res-xl res-lg res-md res-sm mynav fixed-top"
    >
      <Container className="d-flex align-items-center">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand className="d-md-none " style={{marginRight: 0, marginLeft: 10}}>
          <Link to="/">
            <Button variant="dark">
              <GiHamburger
                style={{ fontSize: "2rem" }}
                
              />
            </Button>
          </Link>
        </Navbar.Brand>
        <Nav className="d-md-none">
          <Link to="/cart">
            <Button variant="dark">
              <CartWidget />
            </Button>
          </Link>
        </Nav>

        <NavbarCollapse id="responsive-navbar-nav" className="navcol">


          <Nav fill className="navigator">
            <Link to="/">
              <Button variant="dark" className="d-none d-md-block">
                <GiHamburger
                  style={{ fontSize: "2rem" }}
                  className="text-center"
                />
              </Button>
            </Link>

            <NavbarDropdown {...navbarProps}/>
            
            <div className={navbarProps.dropdownStylesForMobile.width}>
              <Link to="contactanos">
                <Button variant="dark" className="w-100">Contacto</Button>
              </Link>
            </div>
            <Link to="cart">
              <Button variant="dark" className="d-none d-md-block">
                <CartWidget/>
              </Button>
            </Link>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  )
  */
};

export default NavbarComponent;
