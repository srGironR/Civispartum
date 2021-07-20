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
              Un referendo aprobatorio es el sometimiento de un proyecto de acto legislativo 
              o de una ley que no fue adoptada por la corporación pública correspondiente, a 
              consideración del pueblo para que éste decida si lo aprueba o lo rechaza, total o 
              parcialmente. Por el contrario, un referendo derogatorio consiste en el sometimiento 
              de una norma que fue aprobada por el Congreso, la Asamblea Departamental o el Concejo 
              Municipal a consideración del pueblo para que éste decida si se deroga la respectiva ley, 
              ordenanza o acuerdo.
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
          </div>
        </div>
      </div>
    );
  }
}
export default VideoRef;
