import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {linkContainer} from 'react-router-bootstrap';
import { MdLocalOffer } from "react-icons/md";

const TopBar = () => {
  return (

    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" fluid>
    <Container>
      <Navbar.Brand href="#home">PIZZA DELICIOUS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">

        <linkContainer to="/" activeClassName >
          <Nav.Link href="/">Accueil</Nav.Link>
        </linkContainer>  

        <linkContainer to="about" activeClassName >
          <Nav.Link href="about">A propos</Nav.Link>
        </linkContainer>

        <linkContainer to="contact" activeClassName >
          <Nav.Link href="contact">Contact</Nav.Link>
        </linkContainer> 

        <linkContainer to="CGV" activeClassName >
             <Nav.Link href="CGV">CGV</Nav.Link>
        </linkContainer>

        </Nav>
            <h6 className='text-light'>
                <MdLocalOffer className='text-warning me-2'/>
                Livraison gratuite à domicile pour toute commande supérieure à 50 $ 
            </h6>

       
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
);
}
  


export default TopBar