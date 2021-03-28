import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "../navbar/navbar.css";


function navbar(){
    return(
    <div className="Navbar-Container">

        <Navbar className="navbar navbar-default"  fixed="top">
            <Navbar.Brand href="/">
            {' '}
            Civispartum
            </Navbar.Brand>
            <Nav className ="ml-auto">
            <Nav.Link  href="/Login">Ingresar</Nav.Link>
            <Nav.Link  href="/Registro">Regístrate</Nav.Link>
            </Nav>
        </Navbar>

    </div>
    );
}
export default navbar;