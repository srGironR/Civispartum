import React, {Component} from 'react';
import Sidebar from "../Dashboard/Sidebar";
import "../stads/std.css";
import Pc from "../pics/pc-search.png";
import axios from 'axios';
import Charts from "./chart-component/charts.js";


class STD extends Component{

    state={
        act:[],
        algo:[]
    }
    

    componentDidMount(){
        let url = 'http://localhost:8080/usuario/registro/ultimo/'+localStorage.getItem("NombreUsuario");
        axios.get(url)
        .then(res=>{
            let act =[];
            let alg = [];
            console.log(res);
            for (const paso of res.data){
                alg.push(new Date(paso.fechaRegistro).toLocaleString());
                act.push(paso.actividad);
            }
            
            
            //var registros = res.data;
            this.setState({alg, act});
        })
    }

render(){
    return(
        <div className="MainSTDContent">
            <Sidebar/>
            <div className="o-general-org">
            <div className="Forum-title">
                <b>Estadísticas de usuario</b>
            </div>
                <div className="contentStd">

                        <div className="Charts">
                            <div className="FrP">
                                <div className="LastV">
                                    <div className="last-Video-Cont">
                                        <b className="Tittle-text" >Último vídeo</b>
                                        <b className="Percentaje" >{this.state.act}</b>
                                    </div>
                                    <div className="last-Video-Sec">
                                        <b className="Date">Fecha-Hora</b>
                                        <b className="Date2" >{this.state.alg}</b>
                                        <img className="Pc" src={Pc} alt=""></img>
                                    </div>

                                </div>
                            </div>
                        </div>
                    <Charts/>
                </div>
                </div>
            </div>

        );
    }
}export default STD;

