import React from 'react';
import "../Questions/Good.css"
import {Link} from 'react-router-dom';
import { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Wrong from "../Questions/wrong.png"

class Bad extends Component{

    

    render() {
        return(
    <div className="Bad-place">
        <img  className="imgW" src={Wrong} alt=""></img>
        <div className="Title-ans"><b>Respuesta Incorrecta </b></div>
       <Link className="ttS" to="/P1"><div className="btnSgt" ><p>Inténtalo de nuevo</p></div></Link>
       <p className="descriptW">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed aliquam sed nunc vitae efficitur. Donec iaculis porta lorem eu consectetur.
            Maecenas eros nulla, hendrerit eget lacus ac, convallis viverra est. </p>
    </div>

);
}
}
export default withRouter(Bad);;