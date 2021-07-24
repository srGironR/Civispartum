import React from "react";
import v2p3 from '../Assets/Pregunta3.mp4'
import {withRouter} from 'react-router-dom';
import QCard from "../Components/QCard.js";
import ReactPlayer from 'react-player'
import {Animated} from "react-animated-css";
import {Link} from 'react-router-dom';
import "../Questions/v2pq.css";


class Pr3 extends React.Component { 
  
  render() {
  
    return (
        
        <div className="o-vid-containerFQ">            

            <div className="video-containerFQ">
            <ReactPlayer               
                className="VideoVQ" 
                url={v2p3}
                width='720px' 
                height='480px'
                controls='True' 
                playing='True'          
              />
            </div>
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay="21000">
            <div className="QuestionsP2">
            
            <Link to="/GudV2p3" className="QF"><QCard  descript="Constitucional." /></Link>
            <Link to="/Bv2p3" className="QF"><QCard  descript="Aprobatorio."/></Link>
            <Link to="/Bv2p3" className="QF"><QCard  descript="Derogativo."></QCard></Link>
            <Link to="/Bv2p3" className="QF"><QCard  descript="Impuesto."/></Link>
            
            
            </div> 
            </Animated>
            
        </div>
        );
      }
      }
      
      export default withRouter(Pr3);;