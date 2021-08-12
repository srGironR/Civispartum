import "../Questions/GoodBad.css"
import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import axios from "axios";
import {withRouter} from 'react-router-dom';
import right from "../Questions/checkG.png"

class Gudv2p3 extends Component {
    
    state ={
      
      form2:{
        "nombreEst":localStorage.getItem("NombreUsuario"),
        "puntaje": 5,
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
          return (
          <div className="Good-place">
              <img  className="imgW" src={right} alt=""></img>
          <div className="Title-ans"><b>Respuesta Correcta</b></div>
              <Link className="ttS" to="/V2P4"><button className="btnSgt" onClick={this.handlerButton}><p>Siguiente</p></button></Link>
              <p className="descriptW">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed aliquam sed nunc vitae efficitur. Donec iaculis porta lorem eu consectetur.
            Maecenas eros nulla, hendrerit eget lacus ac, convallis viverra est. </p>
          </div>
          );
      }
  }
  
  export default withRouter(Gudv2p3);;