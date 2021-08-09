import React from "react";
import p1 from '../Assets/P1.mp4'
import {withRouter} from 'react-router-dom';
import QCard from "../components/QCard"
import ReactPlayer from 'react-player'
import {Animated} from "react-animated-css";
import {Link} from 'react-router-dom';
import "../Questions/FullvidP.css";


class Pr1 extends React.Component { 
  
  render() {
  
    return (
        
        <div className="o-vid-containerFQ">            

            <div className="video-containerFQ">
            <ReactPlayer               
                className="VideoVQ" 
                url={p1}
                width='720px' 
                height='480px'
                controls='True' 
                playing='True' 
                loop='True'
              />
            </div>
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay="6000">
            <div className="QuestionsP">
            
            <Link to="/Bad" className="QF"><QCard  descript="Un deber, es libre y es pago." /></Link>
            <Link to="/Bad" className="QF"><QCard  descript="Es un derecho, pero no es libre."/></Link>
            <Link to="/Good" className="QF"><QCard  descript="Un deber y un derecho."></QCard></Link>
            <Link to="/Bad" className="QF"><QCard  descript="No es un deber."/></Link>
            
            </div> 
            </Animated>
            
        </div>
        );
      }
      }
      
      export default withRouter(Pr1);;