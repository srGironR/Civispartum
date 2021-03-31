import React from 'react';
import "../Dashboard/Sidebar.css"
import {SidebarData} from './SidebarData'
import ImgP from "../pics/image.png";
import {Link} from 'react-router-dom';

function Sidebar(){
    
    return (
   
    <div className="Sidebar">
       <Link to="/Temas"> <div className="Logo">
            <p lassName="LogoT">Civispartum</p>
        </div></Link>
        <Link to="/Perfil"><div className="Perfil">
            <img className="PicP" src={ImgP} alt="Imagen de perfil"></img>
            <p className="Pname">{localStorage.getItem("NombreUsuario")}</p>
        </div></Link>
        <ul className="SidebarList" >
     {SidebarData.map((val, key)=> {
        return ( 
            <li key={key} 
            className="row"
            id={window.location.pathname === val.link ? "active" : ""}
            onClick={() => {window.location.pathname = val.link}}> 
            {" "}
            <div id="icon">{val.icon}</div>
            <div id="title">
                {val.title}
            </div>
            </li>
            );
      })}
        </ul>
    </div>    
   
    
);
}
export default Sidebar;