import React from 'react';
import "../Questions/GoodBad.css"
import {Link} from 'react-router-dom';
import { Component } from 'react';
import {withRouter} from 'react-router-dom';
import axios from "axios";
import Wrong from "../Questions/wrong.png"
class Bv2p2 extends Component{
    state ={
      
        form2:{
          "nombreEst":localStorage.getItem("NombreUsuario"),
          "puntaje": 2,
          "descripcionPuntaje":"Pregunta 2 Referendo -  Incorrecta"
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
       <Link className="ttS" to="/V2P3"><button className="btnSgt" onClick={this.handlerButton}><p>Siguiente</p></button></Link>
       <p className="descriptW">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed aliquam sed nunc vitae efficitur. Donec iaculis porta lorem eu consectetur.
            Maecenas eros nulla, hendrerit eget lacus ac, convallis viverra est. </p>
    </div>

);
}
}
export default withRouter(Bv2p2);;