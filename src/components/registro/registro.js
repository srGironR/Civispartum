import React from 'react';
import Nnavbar from "../navbar/navbar.js";
import "../registro/registro.css"
import {Link} from 'react-router-dom';
import backArrow from "../pics/left-arrosw.png"

class Register extends React.Component (){

    constructor(props){
        super(props);
    }

    state = {
        form:{
            "nombreEst":"",
            "correoEst":"",
            "contrasenaEst":""
        },
        error: false,
        errorMes: ""
    }

    handlerSubmit = e=>{
        e.preventDefault();
    }

    handlerOnChange = async e =>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }        
        })
    }

render(){
    return(
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
                    <form onSubmit={this.handlerSubmit}>
                        <div class="form-group">
                            <input type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Nombre" name="nombreEst" onChange={this.handlerOnChange}></input>  
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Correo" name="correoEsst" onChange={this.handlerOnChange}></input>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña" name="contrasenaEst" onChange={this.handlerOnChange}></input>
                        </div>
                            <button type="submit" class="btn btn-primary">CREAR CUENTA</button>
                    </form>
                    </div>                  
                </div>
                
            </div>

        </div>
        )
    }
}
export default Register;