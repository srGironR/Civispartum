import React from 'react';
import "../Questions/Good.css"
import {Link} from 'react-router-dom';

const Bad=()=>(
    <div className="Bad-place">
        <div className="Title-ans"><b>Respuesta Incorrecta </b></div>
       <Link className="ttS" to="/P1"><div className="btnSgt" ><p>Inténtalo de nuevo</p></div></Link>
    </div>

);
export default Bad;