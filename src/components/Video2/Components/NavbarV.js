import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "../Components/NavbarV.css";
import ImagePV from "../Components/image.png";


function navbarV2(){
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
                    <p className="NameVi">{localStorage.getItem("NombreUsuario")}</p>
                </div>
            </Nav.Link>
            
            </Nav>
        </Navbar>

    </div>
    );
}
export default navbarV2;