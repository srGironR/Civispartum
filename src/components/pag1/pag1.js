import React from 'react';
import "../pag1/pag1.css";
import Nnavbar from "../navbar/navbar.js";


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
                <h1>¿Por qué aprender Competencias Ciudadanas con Civispartum?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum 
                    finibus magna non lobortis. Morbi mollis libero et sagittis consequat. Donec eu 
                    condimentum libero, a sodales augue. Morbi et orci mi. Duis dolor tellus, pellentesque 
                    sit amet viverra at, lobortis in risus. </p>   
            </div>                    
            </section>  
            <hr class="new4" width="90%"  align="center" />   
            <div>
            <h1>¿Cómo funciona?</h1>
                
            </div> 
        </div>
        
    );
}
export default pag1;