import React from 'react';
import "../Questions/FullvidP.css";
import p1 from '../Assets/Good.mp4';
import {withRouter} from 'react-router-dom';
import ReactPlayer from 'react-player'


class GoodEnd extends React.Component { 
    changeThis () {
        window.location = "/Temas";
        
        console.log("Ended");
    }

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
        onEnded={this.changeThis.bind(this)}
      />
    </div>
    </div>

);
}
}

export default withRouter(GoodEnd);