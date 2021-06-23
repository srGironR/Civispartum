import React from 'react';
import Sidebar from "../Dashboard/Sidebar";
import "../help/help.css";
import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Email from "./email.js";

export default function Help(){
    const [showFirst, setShowFirst] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    const [showThird, setShowThird] = useState(false);
    const [showFour, setShowFour] = useState(false);

    const [showSix, setShowSix] = useState(false);
    const [showSeven, setShowSeven] = useState(false);
    const [showEight, setShowEight] = useState(false);

    const [showNine, setShowNine] = useState(false);
    const [showTen, setShowTen] = useState(false);
    const [showEleven, setShowEleven] = useState(false);

    return (
    <div className="Main-Help-Cont">
        <Sidebar/>
        <div className="Fcontent">
            <div className="Search">
                <b className="Help-title">Centro de ayuda de Civispatrum</b>
                <Email/>
            </div>
                <div className="FAsks">
                    <p className="FAks-title">Preguntas frecuentes</p>
                    <div className="bar"></div>

                    <div className="o-array">
                        <button onClick={() =>setShowFirst(true)} className="o-button-help">¿Qué es Civispartum?</button>
                        <Modal show={showFirst} onHide={()=> setShowFirst(false)}  centered>
                            <Modal.Header closeButton>
                                ¿Qué es Civispartum?
                            </Modal.Header>
                            <Modal.Body>
                                Es una plataforma educativa que buscar servir como herramienta en el proceso de aprendizaje
                                de competencias ciudadanas
                            </Modal.Body>
                        </Modal>  

                        <button onClick={()=>setShowSecond(true)} className="o-button-help">¿Cómo usar Civispartum?</button>
                        <Modal show={showSecond} onHide={()=> setShowSecond(false)} centered>
                            <Modal.Header closeButton>
                                ¿Cómo usar Civispartum?
                            </Modal.Header>
                            <Modal.Body>
                            Por el momento se encuentra en etapa de pruebas y la forma de acceso, es a través de alguno de los equipos de los desarrolladores.
                            En el futuro probablemente a traves de la web www.civispartum.com
                            </Modal.Body>
                        </Modal>

                        <button onClick={()=>setShowThird(true)} className="o-button-help">¿Cuanto cuesta usar Civispartum?</button>
                        <Modal show={showThird} onHide={()=> setShowThird(false)} centered>
                            <Modal.Header closeButton>
                                ¿Cuanto cuesta usar Civispartum?
                            </Modal.Header>
                            <Modal.Body>
                                Por el momento se encuentra en desarrollo, por lo tanto acceder al mismo no tiene costo
                            </Modal.Body>
                        </Modal>   

                        <button onClick={()=>setShowFour(true)} className="o-button-help">¿Mi información está asegurada?</button>
                        <Modal show={showFour} onHide={()=> setShowFour(false)} centered>
                            <Modal.Header closeButton>
                                ¿Mi información está asegurada?
                            </Modal.Header>
                            <Modal.Body>
                                Toda la información que pedimos es exclusivamente para uso de la plataforma, y los datos que obtenemos
                                son exclusivos de la misma, tambien tenemos en cuenta la seguridad de los perfiles, por eso ciframos todas las 
                                contraseñas que nos llegan
                            </Modal.Body>
                        </Modal> 
                    </div>
                </div>
            </div>
        <div className="Scontent">
        <div className="FAsks">
                <p className="FAks-titleT">Usar Civispartum</p>
                <div className="bar"></div>
                <div className="o-array">
                        <button onClick={() =>setShowSix(true)} className="o-button-help">¿Cómo gano premios?</button>
                        <Modal show={showSix} onHide={()=> setShowSix(false)} centered>
                            <Modal.Header closeButton>
                                ¿Cómo gano premios?
                            </Modal.Header>
                            <Modal.Body>
                                Termina los contenidos dispuestos y gana puntos, esto se veran reflejados en premios dentro de la plataforma
                            </Modal.Body>
                        </Modal>  

                        <button onClick={()=>setShowSeven(true)} className="o-button-help">¿Cómo subo de nivel rápido?</button>
                        <Modal show={showSeven} onHide={()=> setShowSeven(false)} centered>
                            <Modal.Header closeButton>
                                ¿Cómo subo de nivel rápido?
                            </Modal.Header>
                            <Modal.Body>
                               gana puntos realizando diversas actividades
                            </Modal.Body>
                        </Modal>

                        <button onClick={()=>setShowEight(true)} className="o-button-help">¿Qué pasa si me quedó sin conexión?</button>
                        <Modal show={showEight} onHide={()=> setShowEight(false)} centered>
                            <Modal.Header closeButton>
                                ¿Qué pasa si me quedó sin conexión?
                            </Modal.Header>
                            <Modal.Body>
                                Por el momento no esta en un servidor accesible a través de internet por lo tanto no hay problemas de conexión
                            </Modal.Body>
                        </Modal>   
                    </div>
               
            </div>
            <div className="FAsks">
                <p className="FAks-titleT">Reportar problemas</p>
                <div className="bar"></div>
                <div className="o-array">
                        <button onClick={() =>setShowNine(true)} className="o-button-help">¿Cómo reporto un problema con el contenido del vídeo?</button>
                        <Modal show={showNine} onHide={()=> setShowNine(false)} centered>
                            <Modal.Header closeButton>
                                ¿Cómo reporto un problema con el contenido del vídeo?
                            </Modal.Header>
                            <Modal.Body>
                             En la parte de "ayuda", escribe tu duda, esto nos enviara un correo, apenas llegue te responderemos lo mas pronto posible
                            </Modal.Body>
                        </Modal>  

                        <button onClick={()=>setShowTen(true)} className="o-button-help">¿Cómo reporto un error?</button>
                        <Modal show={showTen} onHide={()=> setShowTen(false)} centered>
                            <Modal.Header closeButton>
                                ¿Cómo reporto un error?
                            </Modal.Header>
                            <Modal.Body>
                            En la parte de "ayuda", escribe tu duda, esto nos enviara un correo, apenas llegue te responderemos lo mas pronto posible
                            </Modal.Body>
                        </Modal>

                        <button onClick={()=>setShowEleven(true)} className="o-button-help">¿Cómo adjunto un vídeo o una imagen de un problema?</button>
                        <Modal show={showEleven} onHide={()=> setShowEleven(false)} centered>
                            <Modal.Header closeButton>
                                ¿Cómo adjunto un vídeo o una imagen de un problema?
                            </Modal.Header>
                            <Modal.Body>
                             Estamos resolviendo esta caracteristica
                            </Modal.Body>
                        </Modal>   
                    </div>    
            </div>

        </div>
    </div>
    )
}