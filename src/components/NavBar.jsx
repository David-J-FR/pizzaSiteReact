import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";
import { GrLogin } from "react-icons/gr";
import { IoCart } from "react-icons/io5";

export const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        
                        
                        <img src="/images/pizzaLogo.png" class="me-auto" width={150} alt="logo du site "/>
                       
                       
                        <Nav className="ms-auto " >

                             

                            <LinkContainer to="/login">

                                <Nav.Link className="fw-bold fs-5"> <GrLogin class="me-2"  />Login</Nav.Link>

                            </LinkContainer>

                            <LinkContainer to="/panier">
                            
                            <Nav.Link className="fw-bold fs-5"> <IoCart class="me-2"/>Panier</Nav.Link>
                            
                            </LinkContainer>
                                
                              

                        </Nav>                           
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;