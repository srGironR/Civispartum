import React from 'react';
import "../Questions/Good.css"
import {Link} from 'react-router-dom';

const GoodC=()=>(
    <div className="Good-place">
        <div className="Title-ans"><b>Respuesta Correcta</b></div>
       <Link className="ttS" to="/Case2"><div className="btnSgt" ><p>Siguiente</p></div></Link>
    </div>

);
export default GoodC;