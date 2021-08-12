import React from "react";
import "../Questions/v2pq.css";
import p1 from "../Assets/bad.mp4";
import { withRouter } from "react-router-dom";
import ReactPlayer from "react-player";
import {Animated} from "react-animated-css";
import imageInt from "../../pics/volver-flecha.svg";


class BadFinal extends React.Component {
  changeThis() {
    window.location = "/Temas";
    console.log("Ended");
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
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          isVisible={true}
          animationInDelay="500"
        >
          <div className="o-reward-text">
            <h4>
              Inténtalo de nuevo {localStorage.getItem("NombreUsuario")}, En la próxima 
              lo lograras
            </h4>
            <p>
              Si requieres de mas información al principio del modulo encuentras contenido extra
            </p>
            <div>
              <img
                className="o-image-cele"
                src={imageInt}
                alt="Imagen de celebración"
              ></img>
            </div>
          </div>
        </Animated>
      </div>
    );
  }
}

export default withRouter(BadFinal);
