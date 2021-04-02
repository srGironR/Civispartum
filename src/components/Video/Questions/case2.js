import React from "react";
import p1 from '../Assets/Caso3.mp4'
import {withRouter} from 'react-router-dom';
import QCard from "../components/QCard"
import ReactPlayer from 'react-player'
import {Animated} from "react-animated-css";
import {Link} from 'react-router-dom';
import "../Questions/FullvidP.css";


class Case2 extends React.Component { 
  

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
              />
            </div>
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay="13000">
            <div className="QuestionsC">
            <Link to="/GoodE" className="QF"><QCard  descript="Marcar la opción que ella considera."/></Link>
            <Link to="/BadE" className="QF"><QCard  descript="No, me da igual marcaré el tarjetón con una X."/></Link>            
            </div> 
            </Animated>
            
        </div>
        );
      }
      }
      
      export default withRouter(Case2);;