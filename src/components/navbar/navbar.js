import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "../navbar/navbar.css";


function navbar(){
    return(
    <div className="Navbar-Container">

        <Navbar className="navbar navbar-default" varient="light" fixed="top">
            <Navbar.Brand href="#home">
            {' '}
            Civispartum
            </Navbar.Brand>
            <Nav className ="ml-auto">
            <Nav.Link  href="#Ingresar">Ingresar</Nav.Link>
            <Nav.Link  href="#Registrate">Regístrate</Nav.Link>
            </Nav>
        </Navbar>

    </div>
    );
}
export default navbar;