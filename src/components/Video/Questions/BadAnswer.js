import React from "react";
import "../Questions/Good.css";
import { Link } from "react-router-dom";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import Wrong from "../Questions/wrong.png";

class Bad extends Component {
  render() {
    return (
      <div className="Bad-place">
        <img className="imgW" src={Wrong} alt=""></img>
        <div className="Title-ans">
          <b>Respuesta Incorrecta </b>
        </div>
        <Link className="ttS" to="/P1">
          <div className="btnSgt">
            <p>Inténtalo de nuevo</p>
          </div>
        </Link>
        <p className="descriptW">
          El voto es un mecanismo que se presenta como una obligación ciudadana,
          sin embargo cada persona puede decidir si votar o no, asi mismo este
          mecanismo es un minimo otorgado a cada ciudadano y es obligación del
          estado permitir que cada persona pueda ejercer el uso de este
          mecanismo
        </p>
      </div>
    );
  }
}
export default withRouter(Bad);
