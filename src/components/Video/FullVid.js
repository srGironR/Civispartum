import React from "react";
import vd1 from "../Video/Assets/TemaExp.mp4"
import {withRouter} from 'react-router-dom';
import ReactPlayer from 'react-player'
import "../Video/Fullvid.css";

class videoFull extends React.Component { 
    changeThis () {
        window.location = "/P1";
        console.log("Ended");
      }
  
  render() {
    return (
        <div className="o-vid-containerF">
        <div className="video-container">
         <ReactPlayer
            className="VideoV" 
            url={vd1}
            width='720px' 
            height='480px'
            controls='False' 
            playing='True'
            onEnded={this.changeThis.bind(this)}
            />
            </div>
          
        </div>
        );
      }
      }
      
      export default withRouter(videoFull);;