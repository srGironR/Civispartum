import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../components/NavbarV.css";
import User from "../../pics/user.png";

function navbarV() {
  return (
    <div className="Navbar-Container">
      <Navbar className="navbar navbar-default NavbarVo" fixed="top">
        <Navbar.Brand className="Navbar-branV" href="/Temas">
          {" "}
          Regresar
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/Perfil">
            <div className="Nusr">
              <img className="user-prof" src={User} alt=""></img>
              <p className="NameVi">{localStorage.getItem("NombreUsuario")}</p>
            </div>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
export default navbarV;
