import React from 'react';
import "../Profile/profile.css"
import Sidebar from "../Dashboard/Sidebar";
import RCard from "../Profile/components/rewardCard";
import History from "../Profile/components/history.js";
import UsersCard from "../Forum/components/usersCard";
import Medal from "../pics/medal.png";
import Wise from "../pics/wise.png";
import Voto from "../pics/Voto.png";
import Champ from "../pics/winner.png";
import user from "../pics/user.png";
import axios from 'axios';



class  Profile extends React.Component{

    state ={
        registro:[]
        
    }

    componentDidMount() {
        let url = 'http://localhost:8080/usuario/registro/'+localStorage.getItem("NombreUsuario");
        axios.get(url)
          .then(res => {
            const registro = res.data;
            this.setState({ registro });
            console.log(registro);
          })
      }
      
  
render(){
    return(
    <div className="ProfileAll">
    <Sidebar className="Ssb"/>
    <div className="PA">
        <div className="Profile-inPH">
            <div className="Profile-info">
                <img className="imgPer " src={user} alt=""></img>
                <div className="levelP">
                    <b className="o-nombre-perfil">{localStorage.getItem("NombreUsuario")}</b>
                    <div className="TwoLvl">             
                    <img className="Medal" src={Medal} alt=" "></img>
                    <p className="lvl"> Nivel: 0</p>
                    </div>   
                </div>
            </div>
            <div className="Friends">
                <b className="Friends-title">Amigos</b>
                <UsersCard isrc={user} Name="Jacob R" timeU="Desde 2021"  />
                <UsersCard isrc={user} Name="Bella D" timeU="Desde 2021"  />
                <UsersCard isrc={user} Name="Henry F" timeU="Desde 2021" />     
            </div>
        </div>

            <div className="PrReArH">
                <div className="Prof-His">
                    <p className="RTittle">Historial</p>
                        <div className="bar-P"></div>
                        {this.state.registro.map(registro=>
                            <History isrc={Voto} Name={registro.actividad} fec={registro.fechaRegistro.split("T",1)} score={registro.puntaje}/>)}                        
                        
                </div>
                <div className="Prof-ReAr">
                    <p className="RTittle">Premios y logros</p>
                    <div className="bar-P"></div>
                    <div className="cardsP">
                    <RCard isrc={Wise} descript="Completa 1 vídeo sin errores" score="0"/>
                    <RCard isrc={Medal} descript="Completa al menos un vídeo con un puntaje de 5 " score="0"/>
                    <RCard isrc={Champ} descript="Obtén al menos una insignia" score="1"/>   
                    </div>      
                </div>
                
            </div>           
        </div>
        </div>
       

   
        )
    }
}

export default Profile;