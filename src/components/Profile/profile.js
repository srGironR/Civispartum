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




const Profile=()=>(
    <div className="ProfileAll">
        <Sidebar/>
        <div className="Profile-inPH">
            <div className="Profile-info">
                <img className="imgPer " src={ImgP} alt=""></img>
                <div className="levelP">
                    <b className="">Nombre</b>
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
                    <RCard isrc={Wise} descript="Completa 1 vídeo sin errores" score="0"/>
                    <RCard isrc={Wise} descript="Completa 1 vídeo sin errores" score="0"/>         
                </div>
                <div className="Prof-His">
                <p className="RTittle">Historial</p>
                    <div className="bar-P"></div>
                    <History isrc={Voto} Name="El voto" Time="5 min" score="0"/>
                    <History isrc={Voto} Name="El voto" Time="5 min" score="0"/>
                    <History isrc={Voto} Name="El voto" Time="5 min" score="0"/>
                    <div className="btnPlus"><a className="btnPlus" href=" ">Más</a></div>

                </div>
            </div>           
        </div>
        <div className="Friends">
        <b className="Friends-title">Amigos</b>
                <UsersCard isrc={ImgP1} Name="Jacob R" timeU="Desde 2021" Level="Nivel 13" />
                <UsersCard isrc={ImgP2} Name="Bella D" timeU="Desde 2021" Level="Nivel: 5" />
                <UsersCard isrc={ImgP3} Name="Henry F" timeU="Desde 2021" Level="Nivel 6" />     
        </div>

    </div>
);
export default Profile;