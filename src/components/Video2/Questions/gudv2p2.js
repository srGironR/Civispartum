import "../Questions/GoodBad.css"
import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import axios from "axios";
import {withRouter} from 'react-router-dom';


class Gudv2p2 extends Component {
    
    state ={
      
      form2:{
        "nombreEst":localStorage.getItem("NombreUsuario"),
        "puntaje": 5,
        "descripcionPuntaje":"Pregunta 2 Referendo"
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
          <div className="Title-ans"><b>Respuesta Correcta</b></div>
              <Link className="ttS" to="/V2P3"><button className="btnSgt" onClick={this.handlerButton}><p>Siguiente</p></button></Link>
          </div>
          );
      }
  }
  
  export default withRouter(Gudv2p2);;