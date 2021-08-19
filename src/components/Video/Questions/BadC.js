import React from 'react';
import "../Questions/Good.css"
import {Link} from 'react-router-dom';
import Wrong from "../Questions/wrong.png"

const BadC=()=>(
    <div className="Bad-place">
        <img  className="imgW" src={Wrong} alt=""></img>
        <div className="Title-ans"><b>Respuesta Incorrecta </b></div>
       <Link className="ttS" to="/Case1"><div className="btnSgt" ><p>Inténtalo de nuevo</p></div></Link>
       <p className="descriptW">María, esta con todos sus documentos al dia, ademas se encuentra inscrita en su
       puesto de votación y se encuentra en capacidad de ejercer sus derechos civiles y politicos</p>
    </div>

);
export default BadC;