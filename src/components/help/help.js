import React from 'react';
import Sidebar from "../Dashboard/Sidebar";
//import {Link} from 'react-router-dom';
import "../help/help.css"

const help=()=>(
    <div className="Main-Help-Cont">
        <Sidebar/>
        <div className="Fcontent">
            <div className="Search">
                <b className="Help-title">Centro de ayuda de Civispatrum</b>
                <input className="form-control" type="text" placeholder="Escribe tu pregunta" aria-label="Search" />
            </div>
            <div className="FAsks">
                <p className="FAks-title">Preguntas frecuentes</p>
                <div className="bar"></div>
                <a className="Asks" href="https://www.whatsapp.com/legal/privacy-policy">¿Qué es Civispartum?</a>
                <a className="Asks" href="https://www.whatsapp.com/legal/privacy-policy">¿Cómo usar Civispartum?</a>
                <a className="Asks" href="https://www.whatsapp.com/legal/privacy-policy">¿Cuanto cuesta usar Civispartum?</a>
                <a className="Asks" href="https://www.whatsapp.com/legal/privacy-policy">¿Mi información está asegurada?</a>
            </div>
        </div>
        <div className="Scontent">
        <div className="FAsks">
                <p className="FAks-title">Preguntas frecuentes</p>
                <div className="bar"></div>
                <a className="Asks" href="https://www.whatsapp.com/legal/privacy-policy">¿Cómo gano premios?</a>
                <a className="Asks" href="https://www.whatsapp.com/legal/privacy-policy">¿Cómo subo de nivel rápido??</a>
                <a className="Asks" href="https://www.whatsapp.com/legal/privacy-policy">¿Qué pasa si me quedó sin conexión?</a>
               
            </div>
            <div className="FAsks">
                <p className="FAks-title">Preguntas frecuentes</p>
                <div className="bar"></div>
                <a className="Asks" href="https://www.whatsapp.com/legal/privacy-policy">¿Cómo reporto un problema con el contenido del vídeo?</a>
                <a className="Asks" href="https://www.whatsapp.com/legal/privacy-policy">¿Cómo reporto un error?</a>
                <a className="Asks" href="https://www.whatsapp.com/legal/privacy-policy">¿Cómo adjunto un vídeo o una imagen de un problema?</a>
    
            </div>

        </div>
    </div>
);
export default help;