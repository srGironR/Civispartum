import React from "react";
import v2p4 from '../Assets/Pregunta4.mp4'
import {withRouter} from 'react-router-dom';
import QCard from "../Components/QCard.js";
import ReactPlayer from 'react-player'
import {Animated} from "react-animated-css";
import {Link} from 'react-router-dom';
import "../Questions/v2pq.css";


class Pr4 extends React.Component { 
  
  render() {
  
    return (
        
        <div className="o-vid-containerFQ">            

            <div className="video-containerFQ">
            <ReactPlayer               
                className="VideoVQ" 
                url={v2p4}
                width='720px' 
                height='480px'
                controls='True' 
                playing='True' 
                loop='True'         
              />
            </div>
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay="21000">
            <div className="QuestionsPf2">
            
            <Link to="/Gudv2p4" className="QF"><QCard  descript="Si." /></Link>
            <Link to="/Badv2p4" className="QF"><QCard  descript="No."/></Link>          
            
            
            </div> 
            </Animated>
            
        </div>
        );
      }
      }
      
      export default withRouter(Pr4);;