import React from "react";
import vd2 from "../Video2/Assets/Teoria.mp4";
import { withRouter } from "react-router-dom";
import ReactPlayer from "react-player";
import "../Video2/FullVid2.css";

class videoFull2 extends React.Component {
  changeThis() {
    window.location = "/V2P1";
    console.log("Ended");
  }

  render() {
    return (
      <div className="o-vid-containerF">
        <div className="video-container">
          <ReactPlayer
            className="VideoV"
            url={vd2}
            width="720px"
            height="480px"
            controls="False"
            playing="True"
            onEnded={this.changeThis.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(videoFull2);
