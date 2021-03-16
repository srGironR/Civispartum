import React from 'react';
import "../pag1/pag1.css";
import Nnavbar from "../navbar/navbar.js";
import SCard from "../pag1/componentsPag1/StepCard";


function pag1(){
    return(
        <div className="P1-Container">
            <Nnavbar/>
            <header className="Banner">              
                <div className="Banner-text"> 
                    <b>Aprende Competencias Ciudadanas de forma creativa y rápida</b>
                    <button type="button" class="btn btn-warning Button-Empieza">Empieza ahora</button>                 
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
                isrc={"https://www.flaticon.com/svg/vstatic/svg/891/891401.svg?token=exp=1615928554~hmac=71d233919cb75303fd4d84ee2b1e7fd4"}
                />
                <SCard step={"Paso#2"} 
                descript={"Revisa los temás que se exponén y aquel que quieras revisar dale click para entrar y ver contenido, cómo conceptos importantes y su importancia."}
                isrc={"https://www.flaticon.com/svg/vstatic/svg/148/148957.svg?token=exp=1615933654~hmac=1cf57b342147adbadb1339a7ab40743d"}
                />  
                
                <SCard step={"Paso#3"} 
                descript={"Reproduce el video interactivo, esté contará diferentes situaciones con respecto al tema escogido y deberás responder, al terminar se desbloquea un final con respecto a las respuestas y se da un puntaje. (Sólo se puede reproducir un video una vez, pero puedes repasar la infomarción de esta en la parte de concepto importante)."}
                isrc={"https://www.flaticon.com/svg/vstatic/svg/3616/3616885.svg?token=exp=1615933747~hmac=fde3af53aaea08f8fc0b874043a98427"}
                />
                <SCard step={"Paso#4"} 
                descript={"Dependiendo de que decisión tomás se te darán logros, premiando a las buenas desiciones con Medallas y la oportunidad de repetir videos anteriores( sólo una vez más) para mejorar el puntaje para competir contra otros."}
                isrc={"https://www.flaticon.com/svg/vstatic/svg/744/744922.svg?token=exp=1615933776~hmac=fcbea62c821933cedd02f8414e43d3f9"}
                />                 
            </div>
            <div className="End-Container">
                <div className="Banner-text-end"> 
                    <b>Aprende Competencias Ciudadanas de forma creativa y rápida</b>
                    <button type="button" class="btn btn-warning Button-Empieza-end">Empieza ahora</button>                 
                </div> 
            
           <footer className="FinalT">
               <p className="FinalTitle">Civispartum</p>
               <div>
               <img className="imgRS" src="https://dw-iconusers.flaticon.com/15585/15585462/1615935144018.svg?token=exp=1615936067~hmac=8913e5c88e6b78d992815af1bd1e033c" alt=""></img>
               <img className="imgRS" src="https://dw-iconusers.flaticon.com/15585/15585462/1615935336411.svg?token=exp=1615936304~hmac=e6e73bc425277a5ea9c5e387797bc056" alt=""></img>
               <img className="imgRS" src="https://dw-iconusers.flaticon.com/15585/15585462/1615935408815.svg?token=exp=1615936330~hmac=eada40cad9d662d8f0597e9c0d671ae8" alt=""></img>
               </div>
               <div className="Fele">
                   <a className="linkF" href="">Sobre nosotros</a>
                   <a className="linkF" href="">Contactanos</a>
                   <a className="linkF" href="">Equipo</a>
                   <a className="linkF" href="">FAQ & Ayuda</a>
               </div>
           </footer>
           </div>
        </div>
        
    );
}
export default pag1;