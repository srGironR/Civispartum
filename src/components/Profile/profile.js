import React from 'react';
import "../Profile/profile.css"
import Sidebar from "../Dashboard/Sidebar";
import RCard from "../Profile/components/rewardCard"
import History from "../Profile/components/history.js"
import UsersCard from "../Forum/components/usersCard"
import ImgP from "../pics/image.png"
import Medal from "../pics/medal.png"
import Wise from "../pics/wise.png"
import Voto from "../pics/Voto.png"
import ImgP1 from "../pics/image.png"
import ImgP2 from "../pics/imagep2.png"
import ImgP3 from "../pics/imagep3.png"
import Champ from "../pics/winner.png"
import Ilp from "../pics/ilp.jpg"
import Plebiscito from "../pics/plebiscito.jpg"
import user from "../pics/user.png";



const Profile=()=>(
    <div className="ProfileAll">
        <Sidebar className="SsB"/>
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
            <div className="PrReArH">
                <div className="Prof-ReAr">
                    <p className="RTittle">Premios y logros</p>
                    <div className="bar-P"></div>
                    <RCard isrc={Wise} descript="Completa 1 vídeo sin errores" score="0"/>
                    <RCard isrc={Medal} descript="Completa al menos un vídeo con un puntaje de 5 " score="0"/>
                    <RCard isrc={Champ} descript="Obtén al menos una insignia" score="1"/>         
                </div>
                <div className="Prof-His">
                <p className="RTittle">Historial</p>
                    <div className="bar-P"></div>
                    <History isrc={Voto} Name="El voto" Time="5 min" score="0"/>
                    <History isrc={Ilp} Name="La inicitiva legislativa" Time="5 min" score="0"/>
                    <History isrc={Plebiscito} Name="El plebiscito" Time="5 min" score="0"/>
                    <div className="btnPlus"><a className="btnPlus" href=" ">Más</a></div>

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
);
export default Profile;