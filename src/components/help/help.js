import React from 'react';
import Sidebar from "../Dashboard/Sidebar";
import "../help/help.css"
import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';

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
                <input className="form-control" id="Sbar" type="text" placeholder="Escribe tu pregunta" aria-label="Search" />
            </div>
                <div className="FAsks">
                    <p className="FAks-title">Preguntas frecuentes</p>
                    <div className="bar"></div>

                    <div className="o-array">
                        <button onClick={() =>setShowFirst(true)} className="o-button-help">¿Qué es Civispartum?</button>
                        <Modal show={showFirst} onHide={()=> setShowFirst(false)}>
                            <Modal.Header closeButton>
                                ¿Qué es Civispartum?
                            </Modal.Header>
                            <Modal.Body>
                                Es una plataforma educativa que buscar servir como herramienta en el proceso de aprendizaje
                                de competencias ciudadanas
                            </Modal.Body>
                        </Modal>  

                        <button onClick={()=>setShowSecond(true)} className="o-button-help">¿Cómo usar Civispartum?</button>
                        <Modal show={showSecond} onHide={()=> setShowSecond(false)}>
                            <Modal.Header closeButton>
                                ¿Cómo usar Civispartum?
                            </Modal.Header>
                            <Modal.Body>
                               A traves de videos interactivos, buscamos que todos los conceptos involucrados en los temas de competencias
                               ciudadanas sean faciles de entender y de trasladar lo aprendido por medio de situaciones ejemplo 
                            </Modal.Body>
                        </Modal>

                        <button onClick={()=>setShowThird(true)} className="o-button-help">¿Cuanto cuesta usar Civispartum?</button>
                        <Modal show={showThird} onHide={()=> setShowThird(false)}>
                            <Modal.Header closeButton>
                                ¿Cuanto cuesta usar Civispartum?
                            </Modal.Header>
                            <Modal.Body>
                                Por el momento se encuentra en desarrollo, por lo tanto acceder al mismo no tiene costo
                            </Modal.Body>
                        </Modal>   

                        <button onClick={()=>setShowFour(true)} className="o-button-help">¿Mi información está asegurada?</button>
                        <Modal show={showFour} onHide={()=> setShowFour(false)}>
                            <Modal.Header closeButton>
                                ¿Mi información está asegurada?
                            </Modal.Header>
                            <Modal.Body>
                                Toda la información que pedimos es exclusivamente para uso de la plataforma, y los datos que trackeamos
                                son exclusivos de la misma, tambien tenemos en cuenta la seguridad de los perfiles, por eso ciframos todas las 
                                contraseñas que nos llegan
                            </Modal.Body>
                        </Modal> 
                    </div>
                </div>
            </div>
        <div className="Scontent">
        <div className="FAsks">
                <p className="FAks-title">Preguntas frecuentes</p>
                <div className="bar"></div>
                <div className="o-array">
                        <button onClick={() =>setShowSix(true)} className="o-button-help">¿Cómo gano premios?</button>
                        <Modal show={showSix} onHide={()=> setShowSix(false)}>
                            <Modal.Header closeButton>
                                ¿Cómo gano premios?
                            </Modal.Header>
                            <Modal.Body>
                                Termina los contenidos dispuestos y gana puntos, esto se veran reflejados en premios dentro de la plataforma
                            </Modal.Body>
                        </Modal>  

                        <button onClick={()=>setShowSeven(true)} className="o-button-help">¿Cómo subo de nivel rápido?</button>
                        <Modal show={showSeven} onHide={()=> setShowSeven(false)}>
                            <Modal.Header closeButton>
                                ¿Cómo subo de nivel rápido?
                            </Modal.Header>
                            <Modal.Body>
                               gana puntos realizando diversas actividades
                            </Modal.Body>
                        </Modal>

                        <button onClick={()=>setShowEight(true)} className="o-button-help">¿Qué pasa si me quedó sin conexión?</button>
                        <Modal show={showEight} onHide={()=> setShowEight(false)}>
                            <Modal.Header closeButton>
                                ¿Qué pasa si me quedó sin conexión?
                            </Modal.Header>
                            <Modal.Body>
                                No sabemos XD jaja saludos (PD Al que ver esto como funciona)
                            </Modal.Body>
                        </Modal>   
                    </div>
               
            </div>
            <div className="FAsks">
                <p className="FAks-title">Preguntas frecuentes</p>
                <div className="bar"></div>
                <div className="o-array">
                        <button onClick={() =>setShowNine(true)} className="o-button-help">¿Cómo reporto un problema con el contenido del vídeo?</button>
                        <Modal show={showNine} onHide={()=> setShowNine(false)}>
                            <Modal.Header closeButton>
                                ¿Cómo reporto un problema con el contenido del vídeo?
                            </Modal.Header>
                            <Modal.Body>
                             En la parte de AYUDA, sube tu duda, esto nos enviara un correo, apenas lo veamos te responderemos ASAP
                            </Modal.Body>
                        </Modal>  

                        <button onClick={()=>setShowTen(true)} className="o-button-help">¿Cómo reporto un error?</button>
                        <Modal show={showTen} onHide={()=> setShowTen(false)}>
                            <Modal.Header closeButton>
                                ¿Cómo reporto un error?
                            </Modal.Header>
                            <Modal.Body>
                             En la parte de AYUDA, sube tu duda, esto nos enviara un correo, apenas lo veamos te responderemos ASAP
                            </Modal.Body>
                        </Modal>

                        <button onClick={()=>setShowEleven(true)} className="o-button-help">¿Cómo adjunto un vídeo o una imagen de un problema?</button>
                        <Modal show={showEleven} onHide={()=> setShowEleven(false)}>
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