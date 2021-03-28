import React from 'react';
import Nnavbar from "../navbar/navbar.js";
import "../login/login.css"
import {Link} from 'react-router-dom';
import backArrow from "../pics/left-arrosw.png"

const login=()=>(

        <div className="Login-container">
           <Nnavbar></Nnavbar>
           
            <div className="InI-cont">
            <div className="imageB">
            <Link to="/Registro"><input type="image" className="imageB" alt="Back Arrow" src={backArrow}></input></Link>
            </div>
                <div className="ImL"></div>
                <div className="InLo">
                    <div className="TiSub">
                        <b className="Title-L">Competencias Ciudadanas Virtual</b>
                        <p className="SubT">Ingresar</p>
                    </div>
                    <div className="Info-Container">
                    <form>
                        <div class="form-group">
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo o usuario"></input>
                            
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña"></input>
                        </div>
                        <div class="form-check">
                        <a className="Pw-Co" href="https://www.w3schools.com">Olvidó su contraseña?</a>
                        </div>
                        <Link to="/Temas"><button type="submit" class="btn btn-primary">INGRESAR</button></Link>
                    </form>
                    </div>                  
                </div>
                
            </div>

        </div>

    
);
export default login;