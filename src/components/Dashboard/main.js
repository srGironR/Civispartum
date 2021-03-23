import React from 'react';
import "../Dashboard/main.css"
import {SidebarData} from './SidebarData'
import ImgP from "../pics/image.png";

function main(){
    return (
    <div className="Sidebar">
        <div className="Logo">
            <p lassName="LogoT">Civispartum</p>
        </div>
        <div className="Perfil">
            <img className="PicP" src={ImgP}></img>
            <p className="Pname">Nombre</p>
        </div>
        <ul className="SidebarList">
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
export default main;