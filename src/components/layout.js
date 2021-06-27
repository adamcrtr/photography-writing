import * as React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'
import { Button,
  Container,
  Nav,
  Card,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Row,
  Col


} from 'react-bootstrap';

const Layout = ({ pageTitle, children }) => {
  return (


    <>
    <header className="bg-dark">
    <Container>
      <Navbar expand="md" variant="dark">
        <Navbar.Brand href="/">{pageTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul" className="ml-auto">
            <Nav.Item as="li">
              <Link to="/about" className="nav-link" activeClassName="active">About</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/index" className="nav-link" activeClassName="active">Home</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    </Container>
    
  
  </header>
  <Container>
    {children}
  </Container>
  
  </>
  )
  
  }
export default Layout