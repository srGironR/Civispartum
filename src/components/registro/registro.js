import React from 'react';
import Nnavbar from "../navbar/navbar.js";
import "../registro/registro.css"
import {Link} from 'react-router-dom';
import backArrow from "../pics/left-arrosw.png"

const register=()=>(

        <div className="Login-container">
            <Nnavbar></Nnavbar>
           
            <div className="InI-cont">
            <div className="imageB">
            <Link to="/"><input type="image" className="imageB" alt="Back Arrow" src={backArrow}></input></Link>
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