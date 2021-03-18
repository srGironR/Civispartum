import React from 'react';
import Nnavbar from "../navbar/navbar.js";
import "../login/login.css"

const login=()=>(

        <div className="Login-container">
            <Nnavbar></Nnavbar>
           
            <div className="InI-cont">
            <div className="imageB">
            <input type="image" className="imageB" alt="Back Arrow" src="https://dw-iconusers.flaticon.com/15585/15585462/1616096572195.svg?token=exp=1616100887~hmac=15ed282c539bc5208ea67b8eb03d6678"></input>
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
                        <a className="Pw-Co" href="">Olvidó su contraseña?</a>
                        </div>
                        <button type="submit" class="btn btn-primary">INGRESAR</button>
                    </form>
                    </div>                  
                </div>
                
            </div>

        </div>

    
);
export default login;