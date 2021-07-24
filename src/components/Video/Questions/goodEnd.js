import React from "react";
import "../Questions/FullvidP.css";
import p1 from "../Assets/Good.mp4";
import { withRouter } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";
import {Animated} from "react-animated-css";

var currentdate = new Date();
var datetime =
  currentdate.getFullYear() +
  "-" + (currentdate.getMonth() + 1) +
  "-" + currentdate.getDate() +
  " " + currentdate.getHours() +
  ":" + currentdate.getMinutes() +
  ":" + currentdate.getSeconds();

class GoodEnd extends React.Component {
  changeThis() {
    this.postFunction2();
    window.location = "/Temas";
    console.log("Ended");
  }

  state = {
    form: {
      nombreEst: localStorage.getItem("NombreUsuario"),
      fechaRegistro: datetime,
      actividad: "Video Voto",
    },
    form1: {
      nombreEst: localStorage.getItem("NombreUsuario"),
      puntaje: 20,
      descripcionPuntaje: "Pregunta 3 Voto",
    },
    error: false,
    errorMes: "",
  };

  postFunction1(){
    let url = "http://localhost:8080/usuario/puntaje/new";
    axios
      .post(url, this.state.form1)
      .then((response) => {
        if (response.data === "Ok") {
          console.log("ok");
        } else {
          this.setState({
            error: true,
            errorMes: response.data,
          });
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: true,
          errorMes: "Error del servicio",
        });
      });
  }

  postFunction2(){
    let url = "http://localhost:8080/usuario/registro/new";
    axios
      .post(url, this.state.form)
      .then((response) => {
        if (response.data === "Ok") {
          console.log("ok");
        } else {
          this.setState({
            error: true,
            errorMes: response.data,
          });
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: true,
          errorMes: "Error del servicio",
        });
      });
  }

  componentDidMount() {
    this.postFunction1();
  }
  

  render() {
    return (
      <div className="o-vid-containerFQ">
        <div className="video-containerFQ">
          <ReactPlayer
            className="VideoVQ"
            url={p1}
            width="720px"
            height="480px"
            controls="True"
            playing="True"
            onEnded={this.changeThis.bind(this)}
          />
        </div>
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay="500">
          <div className="o-reward-text">
              <h4>Felicitaciones!!! {localStorage.getItem("NombreUsuario")} has completado el modulo voto</h4>
              <p>Si todas tus respuestas fueron correctas revisa tu peril y encuentra tu primer trofeo</p>
              <div>
                <img className="" src="" alt=""></img>
              </div>
          </div>

        </Animated>
      </div>
    );
  }
}

export default withRouter(GoodEnd);
