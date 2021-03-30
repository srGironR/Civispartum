import React from 'react';
import Nnavbar from "../navbar/navbar.js";
import "../login/login.css"
import {Link} from 'react-router-dom';
import backArrow from "../pics/left-arrosw.png";
import axios from "axios";



class Login extends React.Component{

    state ={
        form:{
            "nombreEst":"",
            "contrasenaEst":""
        },
        error:false,
        errorMes:""
    }

    handlerSubmit = e =>{
        e.preventDefault();
    }

    handlerOnChange = async e =>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        //console.log(this.state.form);
    }

    handlerButton =()=>{
        let url = 'http://localhost:8080/usuario/login';
        axios.post(url, this.state.form)
        .then(response =>{
            console.log(response);
        })
    }

    render(){
    return(
        <React.Fragment>
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
                    <form onSubmit={this.handlerSubmit}>
                        <div class="form-group">
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo o usuario" name="nombreEst" onChange={this.handlerOnChange}></input>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña"  name="contrasenaEst" onChange={this.handlerOnChange}></input>
                        </div>
                        <div class="form-check">
                        <a className="Pw-Co" href="https://www.w3schools.com">Olvidó su contraseña?</a>
                        </div>
                        <Link to="/Temas"><button type="submit" class="btn btn-primary" onClick={this.handlerButton}>INGRESAR</button></Link>

                    </form>
                    </div>                  
                </div>
                
            </div>

        </div>

        </React.Fragment>
        );
    }
}

export default Login