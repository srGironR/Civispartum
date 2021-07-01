import React from "react";
import v2p1 from '../Assets/Pregunta1.mp4'
import {withRouter} from 'react-router-dom';
import QCard from "../Components/QCard.js";
import ReactPlayer from 'react-player'
import {Animated} from "react-animated-css";
import {Link} from 'react-router-dom';
import "../Questions/v2pq.css";


class Pr1 extends React.Component { 
  
  render() {
  
    return (
        
        <div className="o-vid-containerFQ">            

            <div className="video-containerFQ">
            <ReactPlayer               
                className="VideoVQ" 
                url={v2p1}
                width='720px' 
                height='480px'
                controls='True' 
                playing='True'          
              />
            </div>
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay="6000">
            <div className="QuestionsP">
            
            <Link to="/BadV2" className="QF"><QCard  descript="Revocatorio, Aprobatorio y Constitucional." /></Link>
            <Link to="/BadV2" className="QF"><QCard  descript="Sufragio, Derogatorio y Aprobatorio."/></Link>
            <Link to="/GoodV2" className="QF"><QCard  descript="Inconstitucional, De ley y Aprobatorio."></QCard></Link>
            <Link to="/BadV2" className="QF"><QCard  descript="Revocatorio, Abrogatorio y Constitucional."/></Link>
            
            
            </div> 
            </Animated>
            
        </div>
        );
      }
      }
      
      export default withRouter(Pr1);;