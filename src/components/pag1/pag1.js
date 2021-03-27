import React from 'react';
import "../pag1/pag1.css";
import Nnavbar from "../navbar/navbar.js";
import SCard from "../pag1/componentsPag1/StepCard";
import {Link} from 'react-router-dom';


function pag1(){
    return(
        <div className="P1-Container">
            <Nnavbar/>
            <header className="Banner">              
                <div className="Banner-text"> 
                    <b>Aprende Competencias Ciudadanas de forma creativa y rápida</b>
                    <Link to="/Registro"><button type="button" class="btn btn-warning Button-Empieza">Empieza ahora</button> </Link>                
                </div>                
            </header> 
            <section className="Section-why"> 
            <div className="Whytext">        
                <b className="title">¿Por qué aprender Competencias Ciudadanas con Civispartum?</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum 
                    finibus magna non lobortis. Morbi mollis libero et sagittis consequat. Donec eu 
                    condimentum libero, a sodales augue. Morbi et orci mi. Duis dolor tellus, pellentesque 
                    sit amet viverra at, lobortis in risus. </p>   
            </div>                    
            </section>  
            <hr class="new4" width="90%"  align="center"/> 
            <h1 className="Howtitle">¿Cómo funciona?</h1>  
            <div className="HoWork-container">             
                <SCard step={"Paso#1"} 
                descript={"Ingresa o Registrate pulsando el botón empieza ahora o en la barra de navegación de arriba, escribe tus datos y dale click en iniciar sesión."}
                isrc={" "}
                />
                <SCard step={"Paso#2"} 
                descript={"Revisa los temás que se exponén y aquel que quieras revisar dale click para entrar y ver contenido, cómo conceptos importantes y su importancia."}
                isrc={" "}
                />  
                
                <SCard step={"Paso#3"} 
                descript={"Reproduce el video interactivo, esté contará diferentes situaciones con respecto al tema escogido y deberás responder, al terminar se desbloquea un final con respecto a las respuestas y se da un puntaje. (Sólo se puede reproducir un video una vez, pero puedes repasar la infomarción de esta en la parte de concepto importante)."}
                isrc={" "}
                />
                <SCard step={"Paso#4"} 
                descript={"Dependiendo de que decisión tomás se te darán logros, premiando a las buenas desiciones con Medallas y la oportunidad de repetir videos anteriores( sólo una vez más) para mejorar el puntaje para competir contra otros."}
                isrc={" "}
                />                 
            </div>
            <div className="End-Container">
                <div className="Banner-text-end"> 
                    <b>Aprende Competencias Ciudadanas de forma creativa y rápida</b>
                    <Link to="/Registro"><button type="button" class="btn btn-warning Button-Empieza-end">Empieza ahora</button></Link>               
                </div> 
            
           <footer className="FinalT">
               <p className="FinalTitle">Civispartum</p>
               <div>
               <img className="imgRS" src="" alt=""></img>
               <img className="imgRS" src="" alt=""></img>
               <img className="imgRS" src="" alt=""></img>
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