import React from 'react';
import "../Video2/video2.css";
import NavbarV from "./Components/NavbarV.js";
import ReactPlayer from 'react-player';
import vd2 from "../Video2/Assets/Teoria.mp4";



class VideoRef extends React.Component {
  
    changeThis () {
        window.location = "/FullVid2";
        
        console.log("Start");
    }

    render() {
    return(
    <div className="ContentVideo-all">
        <NavbarV/>
        <div className="info-content">
            <div className="infoVid">
                <div className="Title-content">
                    <b className="TittleVidC">Mecanismos de Participación: El Voto.</b>
                    <p className="descriptVid">
                    Una sociedad que quiere ser realmente democrática requiere de
                    la participación activa y crítica de todos sus miembros. Esto implica
                    que los ciudadanos deben poder estar involucrados en la construcción de acuerdos y en la toma de decisiones en todos los niveles.
                    Es decir, que, en principio, el poder recae en los representados, quienes tienen distintos mecanismos para ejercer el control, y uno
                    de estás herramientas es el Voto.
                    </p>
                </div>
                <div className="Concept-content">
                    <b className="TittlConcept">Mecánicas del video interactivo</b>
                    <p className="descriptConcept">
                    El video comienza cuando le das click en reproducir, el video se expandirá en pantalla 
                    completa y alrededor de 3 minutos de teoría, comenzará una serie de preguntas sobre la información anterior dada. 
                    No te distraigas cualquier información es valiosa para responder. ¡Que comience el juego!.

                    </p>
                </div>
            </div>
            <div className="VideoV">
            <ReactPlayer
            className="VideoV" 
            url={vd2}
            width='640px' 
            height='480px'
            controls='False' 
            onStart={this.changeThis.bind(this)}
            />
            </div>


        </div>

    </div>
    );
    }
}
export default VideoRef;