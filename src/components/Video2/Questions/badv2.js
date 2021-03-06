import React from 'react';
import "../Questions/GoodBad.css"
import {Link} from 'react-router-dom';
import { Component } from 'react';
import axios from "axios";
import {withRouter} from 'react-router-dom';
import Wrong from "../Questions/wrong.png"
class Badv2 extends Component{

    state ={
      
        form2:{
          "nombreEst":localStorage.getItem("NombreUsuario"),
          "puntaje": 2,
          "descripcionPuntaje":"Pregunta 1 Referendo - Incorrecta"
        },
        error:false,
        errorMes:"",
      }
    
      handlerButton =()=>{
        let url = 'http://localhost:8080/usuario/puntaje/new';
        axios.post(url, this.state.form2)
        .then(response =>{
            if(response.data === "Ok"){
                console.log("ok");
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

    render() {
        return(
    <div className="Bad-place">
        <img  className="imgW" src={Wrong} alt=""></img>
        <div className="Title-ans"><b>Respuesta Incorrecta </b></div>
       <Link className="ttS" to="/V2P2"><button className="btnSgt" onClick={this.handlerButton}><p>Siguiente</p></button></Link>
       <p className="descriptW">Uno de ellos sale desde gobierno, y los otros dos buscan aprobar o derogar</p>
    </div>

);
}
}
export default withRouter(Badv2);;