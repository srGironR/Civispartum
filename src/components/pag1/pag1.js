import React from 'react';
import "../pag1/pag1.css";
import Nnavbar from "../navbar/navbar.js";
import SCard from "../pag1/componentsPag1/StepCard";
import {Link} from 'react-router-dom';
import FilesI from "../pics/files.png";
import LoginI from "../pics/login.png"
import VideoI from "../pics/video.png"
import MedalI from "../pics/medal.png"
import Insta from "../pics/instagram.png"
import Twit from "../pics/twitter.png"
import Face from "../pics/facebook.png"


function pag1(){
    
    return(
        
        <div className="P1-Container">
            <Nnavbar/>
            <header className="Banner">              
                <div className="Banner-text"> 
                    <b>Aprende Competencias Ciudadanas de forma creativa y rápida</b>
                    <Link to="/Registro"><button type="button" className="btn btn-warning Button-Empieza">Empieza ahora</button> </Link>                
                </div>                
            </header> 
            <section className="Section-why"> 
            <div className="Whytext">        
                <b className="title">¿Por qué aprender Competencias Ciudadanas con Civispartum?</b>
                <p>Entendemos que todas las personas tienen diferentes formas de aprender,
                     por ello esta plataforma se presenta como una alternativa a lo tradicional, 
                     utilizando elementos audiovisuales que pretenden dar una experiencia activa y entretenida, 
                     con la cual se pueda adquirir y ampliar conocimientos de competencias ciudadanas.  </p>   
            </div>                    
            </section>  
            <hr class="new4" width="90%"  align="center"/> 
            <h1 className="Howtitle">¿Cómo funciona?</h1>  
            <div className="HoWork-container">             
                <SCard step={"Paso 1"} 
                descript={"Registrate pulsando el botón “Empieza ahora” o directamente en la parte superior en el botón registrate, escribe tus datos y luego inicia sesión."}
                isrc={LoginI}
                />
                <SCard step={"Paso 2"} 
                descript={"Revisa los contenidos escoge el que mas te llame la atención y dale click, cada uno cuenta con un video y textos de apoyo."}
                isrc={FilesI}
                />  
                
                <SCard step={"Paso 3"} 
                descript={"Reproduce el video interactivo, esté contará con diferentes situaciones de acuerdo al tema escogido, en ellas deberás responder a ciertos problemas que se plantean, al terminar se desbloquea un final con respecto a tus respuestas y se da un puntaje."}
                isrc={VideoI}
                />
                <SCard step={"Paso 4"} 
                descript={"Dependiendo de tus respuestas se te darán puntos, premiando a las buenas desiciones con Medallas y la oportunidad de subir de nivel compitiendo con los demas usuarios y amigos de la plataforma."}
                isrc={MedalI}
                />                 
            </div>
            <div className="End-Container">
                <div className="Banner-text-end"> 
                    <b>Aprende Competencias Ciudadanas de forma creativa y rápida</b>
                    <Link to="/Registro"><button type="button" className="btn btn-warning Button-Empieza-end">Empieza ahora</button></Link>               
                </div> 
            
           <footer className="FinalT">
               <p className="FinalTitle">Civispartum</p>
               <div>
               <img className="imgRS" src={Insta} alt=""></img>
               <img className="imgRS" src={Twit} alt=""></img>
               <img className="imgRS" src={Face} alt=""></img>
               </div>
               <div className="Fele">
                   <a className="linkF" href="https://www.w3schools.com">Sobre nosotros</a>
                   <a className="linkF" href="https://www.w3schools.com">Contactanos</a>
                   <a className="linkF" href="https://www.w3schools.com">Equipo</a>
                   <a className="linkF" href="https://www.w3schools.com">FAQ & Ayuda</a>
               </div>
           </footer>
           </div>
        </div>
        
    );
}
export default pag1;