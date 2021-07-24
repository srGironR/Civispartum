import React from "react";
import v2p2 from '../Assets/Pregunta2.mp4'
import {withRouter} from 'react-router-dom';
import QCard from "../Components/QCard.js";
import ReactPlayer from 'react-player'
import {Animated} from "react-animated-css";
import {Link} from 'react-router-dom';
import "../Questions/v2pq.css";


class Pr2 extends React.Component { 
  
  render() {
  
    return (
        
        <div className="o-vid-containerFQ">            

            <div className="video-containerFQ">
            <ReactPlayer               
                className="VideoVQ" 
                url={v2p2}
                width='720px' 
                height='480px'
                controls='True' 
                playing='True'          
              />
            </div>
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay="2000">
            <div className="QuestionsP2">
            
            <Link to="/Bv2p2" className="QF"><QCard  descript="si la opción Sí obtiene la mitad más uno de los votantes." /></Link>
            <Link to="/Bv2p2" className="QF"><QCard  descript="si la opción Sí obtiene la mitad más uno de los votantes, siempre y cuando en la votación participe la cuarta parte de los ciudadanos que componen el censo electoral."/></Link>
            <Link to="/GudV2p2" className="QF"><QCard  descript="si la opción Sí obtiene la mitad más uno de los votantes, siempre y cuando en la votación participe la mitad de los ciudadanos que componen el censo electoral."></QCard></Link>
            <Link to="/Bv2p2" className="QF"><QCard  descript="si la opción Sí obtiene la mitad más 10 de los votantes, siempre y cuando en la votación participe la cuarta parte de los ciudadanos que componen el censo electoral."/></Link>
            
            
            </div> 
            </Animated>
            
        </div>
        );
      }
      }
      
      export default withRouter(Pr2);;