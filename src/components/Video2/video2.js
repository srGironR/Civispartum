import React from "react";
import "../Video2/video2.css";
import NavbarV from "./Components/NavbarV.js";
import ReactPlayer from "react-player";
import vd2 from "../Video2/Assets/Teoria.mp4";

class VideoRef extends React.Component {
  changeThis() {
    window.location = "/FullVid2";

    console.log("Start");
  }

  render() {
    return (
      <div className="ContentVideo-all">
        <NavbarV />
        <div className="info-content">
          <div className="infoVid">
            <div className="Title-content">
              <b className="TittleVidC">
                Mecanismos de Participación: El Referendo.
              </b>
              <p className="descriptVid">
                El referendo es uno de los mecanismos de participación ciudadana
                previstos en el artículo 103 de la Constitución y en la Ley 134
                de 1994. Hay referendos aprobatorios y derogatorios. 
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
          <div className="VideoV">
            <ReactPlayer
              className="VideoV"
              url={vd2}
              width="640px"
              height="480px"
              controls="False"
              onStart={this.changeThis.bind(this)}
            />

            <div className="o-add-info">
              <b className="o-tittle-info-add">
                Información adicional acerca del Voto
              </b>
              <a href="https://www.registraduria.gov.co/Que-es-un-referendo.html">
                ¿Qué es un Referendo?
              </a>
              <a href="https://www.registraduria.gov.co/-Referendo-3646-.html">
                Referendo mecanismo de participación ciudadana
              </a>
              <a href="https://www.registraduria.gov.co/rev_electro/articulos/referendo.htm">
                Caracteristicas Referendo
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default VideoRef;
