import React from 'react';
import "../Questions/GoodBad.css"
import {Link} from 'react-router-dom';
import { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Bv2p2 extends Component{

    render() {
        return(
    <div className="Bad-place">
        <div className="Title-ans"><b>Respuesta Incorrecta </b></div>
       <Link className="ttS" to="/V2P2"><div className="btnSgt" ><p>Inténtalo de nuevo</p></div></Link>
    </div>

);
}
}
export default withRouter(Bv2p2);;