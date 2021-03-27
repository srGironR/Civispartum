import React from 'react';
import Nnavbar from "../navbar/navbar.js";
import "../registro/registro.css"
import {Link} from 'react-router-dom';

const register=()=>(

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
                        <p className="SubT">Registro</p>
                    </div>
                    <div className="Info-Container">
                    <form>
                        <div class="form-group">
                            <input type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Nombre"></input>
                            
                        </div>
                        <div class="form-group">
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Correo"></input>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña"></input>
                        </div>
                        <Link to="/Login"> <button type="submit" class="btn btn-primary">CREAR CUENTA</button></Link>
                    </form>
                    </div>                  
                </div>
                
            </div>

        </div>

    
);
export default register;