import React from 'react';
import "../Video/video.css"
import NavbarV from "../Video/components/NavbarV.js"
import ReactPlayer from 'react-player'


const Video=()=>(
    <div className="ContentVideo-all">
        <NavbarV/>
        <div className="info-content">
            <div className="infoVid">
                <div className="Title-content">
                    <b className="TittleVidC">Mecanismos de Participación: El Voto.</b>
                    <p className="descriptVid">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nullam vehicula dui id tellus ullamcorper tristique. 
                    Sed ut libero malesuada sem faucibus faucibus. 
                    Aliquam et aliquet metus, sed cursus
                    </p>
                </div>
                <div className="Concept-content">
                    <b className="TittlConcept">Mecanismos de Participación: El Voto.</b>
                    <p className="descriptConcept">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nullam vehicula dui id tellus ullamcorper tristique. 
                    Sed ut libero malesuada sem faucibus faucibus. 
                    Aliquam et aliquet metus, sed cursus
                    </p>
                </div>
            </div>
            <div className="VideoV">
            <ReactPlayer
            className="VideoV" 
            url='https://www.youtube.com/watch?v=bmVKaAV_7-A'
            width='640px' 
            height='360px'
            controls='True' 
            />
            </div>


        </div>

    </div>
);
export default Video;