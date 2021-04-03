import "../Questions/Good.css"
import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import axios from "axios";
import {withRouter} from 'react-router-dom';
  
  var currentdate = new Date(); 
  var datetime =    currentdate.getFullYear() + "-"
                  + (currentdate.getMonth()+1)  + "-" 
                  + currentdate.getDate() + " "  
                  + currentdate.getHours() + ":"  
                  + currentdate.getMinutes() + ":" 
                  + currentdate.getSeconds();

class GoodC extends Component {

        
  state ={
    
    form1:{
      "nombreEst":localStorage.getItem("NombreUsuario"),
      "fechaRegistro": datetime,
      "actividad": "Video Voto"
    },
    error:false,
    errorMes:"",
  }



    handlerButton2 =()=>{
        let url1 = 'http://localhost:8080/usuario/registro/new';
        axios.post(url1, this.state.form1)
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
        <Link className="ttS" to="/Case2"><button className="btnSgt" onClick={this.handlerButton2}><p>Siguiente</p></button></Link>
        </div>
        );
    }
}

export default withRouter(GoodC);;