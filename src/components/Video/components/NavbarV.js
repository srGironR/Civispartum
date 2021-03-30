import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "../components/NavbarV.css";
import ImagePV from "../components/image.png";


function navbarV(){
    return(
    <div className="Navbar-Container">

        <Navbar className="navbar navbar-default NavbarVo"  fixed="top">
            <Navbar.Brand className="Navbar-branV" href="/Temas">
            {' '}
            Regresar
            </Navbar.Brand>
            <Nav className ="ml-auto">
            <Nav.Link  href="/Perfil">
                <div className="Nusr">
                    <img className="user-prof" src={ImagePV} alt=""></img>
                    <p className="NameVi">Nombre</p>
                </div>
            </Nav.Link>
            
            </Nav>
        </Navbar>

    </div>
    );
}
export default navbarV;