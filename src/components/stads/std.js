import React from 'react';
import Sidebar from "../Dashboard/Sidebar";
import "../stads/std.css"
import Pc from "../pics/pc-search.png"

function STD(){

    return(
        <div className="MainSTDContent">
            <Sidebar/>
            <div className="contentStd">
            <div className="Forum-title">
            <b>Estadísticas de usuario</b>
            </div>
            <div className="Charts">
            <div className="FrP">
                <div className="LastV">
                    <div className="last-Video-Cont">
                        <b className="Tittle-text" >Último vídeo</b>
                        <b className="Percentaje" >0%</b>
                    </div>
                    <div className="last-Video-Sec">
                        <b className="Date" >Marzo 2021</b>
                        <img className="Pc" src={Pc} alt=""></img>
                    </div>

                </div>
                <div className="ActivityChart">

                </div>
            </div>
            <div className="SChart">

            </div>
            </div>
           
        </div>
        </div>

    );
}export default STD;

