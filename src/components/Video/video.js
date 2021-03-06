import React from "react";
import "../Video/video.css";
import NavbarV from "../Video/components/NavbarV.js";
import ReactPlayer from "react-player";
import vd1 from "../Video/Assets/TemaExp.mp4";

class VideoVoto extends React.Component {
  changeThis() {
    window.location = "/FullVid";
  }

  render() {
    return (
      <div className="ContentVideo-all">
        <NavbarV />
        <div className="info-content">
          <div className="infoVid">
            <div className="Title-content">
              <b className="TittleVidC">
                Mecanismos de Participación: El Voto.
              </b>
              <p className="descriptVid">
                Una sociedad que quiere ser realmente democrática requiere de la
                participación activa y crítica de todos sus miembros. Esto
                implica que los ciudadanos deben poder estar involucrados en la
                construcción de acuerdos y en la toma de decisiones en todos los
                niveles. Es decir, que, en principio, el poder recae en los
                representados, quienes tienen distintos mecanismos para ejercer
                su participación, y una de estás herramientas es El Voto.
              </p>
            </div>
            <div className="Concept-content">
              <b className="TittlConcept">Mecánicas del video interactivo</b>
              <p className="descriptConcept">
                El video comienza cuando le das click en reproducir, el video se
                expandirá en pantalla completa y alrededor de 3 minutos de
                teoría, comenzará una serie de preguntas sobre la información
                anterior dada. No te distraigas cualquier información es valiosa
                para responder. ¡Que comience el juego!.
              </p>
            </div>
          </div>
          <div className="o-video-container-first">
            <ReactPlayer
              className="VideoV"
              url={vd1}
              width="640px"
              height="480px"
              controls="false"
              onStart={this.changeThis.bind(this)}
            />
            <div className="o-add-info">
                <b className="o-tittle-info-add">Información adicional acerca del Voto</b>
                  <a href="https://www.registraduria.gov.co/Elecciones/inf_votan.htm">Caracteristicas del voto</a>
                  <a href="https://www.registraduria.gov.co/-Historia-del-voto-en-Colombia-.html">Historia del voto en Colombia</a>
                  <a href="https://www.registraduria.gov.co/Estos-son-los-mecanismos-de.html">Mecanismos de participación ciudadana</a>
                  <a href="https://www.registraduria.gov.co/-Historia-del-voto-en-Colombia,3677-.html">Historia resumidad del Voto en Colombia</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default VideoVoto;
