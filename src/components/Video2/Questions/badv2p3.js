import React from 'react';
import "../Questions/GoodBad.css"
import {Link} from 'react-router-dom';
import { Component } from 'react';
import {withRouter} from 'react-router-dom';
import axios from "axios";

class Bv2p3 extends Component{
    
    state ={
      
        form2:{
          "nombreEst":localStorage.getItem("NombreUsuario"),
          "puntaje": 2,
          "descripcionPuntaje":"Pregunta 3 Referendo"
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
        <div className="Title-ans"><b>Respuesta Incorrecta </b></div>
       <Link className="ttS" to="/V2P4"><button className="btnSgt" onClick={this.handlerButton}><p>Siguiente</p></button></Link>
    </div>

);
}
}
export default withRouter(Bv2p3);;