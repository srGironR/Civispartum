import React from 'react';
import Nnavbar from "../navbar/navbar.js";
import "../login/login.css";
import {Link} from 'react-router-dom';
import backArrow from "../pics/left-arrosw.png";
import axios from "axios";
import Alert from 'react-bootstrap/Alert';


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
    }

    handlerButton =()=>{
        let url = 'http://localhost:8080/usuario/login';
        axios.post(url, this.state.form)
        .then(response =>{
            if(response.data === "Ingresa"){
                localStorage.setItem("NombreUsuario", this.state.form.nombreEst);
                this.props.history.push("/Temas");
            }else{
                this.setState({
                    error : true,
                    errorMes : response.data
                })
            }
            console.log(response);
        }).catch( error =>{
            console.log(error)
            this.setState({
                error : true,
                errorMes : "Error del servicio"
            })
        })
    }
    render(){
    return(
        
        <React.Fragment>
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
                        <p className="SubT">Ingresar</p>
                    </div>
                    <div className="Info-Container">
                    <form onSubmit={this.handlerSubmit}>
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Usuario" name="nombreEst" onChange={this.handlerOnChange}></input>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña"  name="contrasenaEst" onChange={this.handlerOnChange}></input>
                        </div>
                        
                            {this.state.error === true &&
                            <>
                                <div className="o-form-check">
                                    <Alert variant = 'warning'>
                                        {this.state.errorMes}
                                    </Alert>
                                    <Link to="/Password"><span className="Pw-Co" href="https://www.w3schools.com">¿Olvidó su contraseña?</span></Link>
                                </div>
                            </>
                            }

                        <button type="submit" className="btn btn-primary" onClick={this.handlerButton}>INGRESAR</button>

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