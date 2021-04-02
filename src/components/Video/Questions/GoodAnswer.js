import React from 'react';
import "../Questions/Good.css"
import {Link} from 'react-router-dom';

const Good=()=>(
    <div className="Good-place">
        <div className="Title-ans"><b>Respuesta Correcta</b></div>
       <Link className="ttS" to="/Case1"><div className="btnSgt" ><p>Siguiente</p></div></Link>
    </div>

);
export default Good;