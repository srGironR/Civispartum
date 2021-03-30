import React from 'react';
import SideBar from "../Dashboard/Sidebar";
import ForumCard from "../Forum/components/forumcard"
import UsersCard from "../Forum/components/usersCard"
import "../Forum/forum.css"
import ImgP1 from "../pics/image.png"
import ImgP2 from "../pics/imagep2.png"
import ImgP3 from "../pics/imagep3.png"

const forum=()=>(
    <div className="Forum-container">
        <SideBar/>
        <div className="ForumAll">
        <div className="Forum-title">
            <b>Foro de usuarios de Civispartum</b>
        </div>
        <div className="Forum-cotent">
            <div className="Btn-forum">
            <button type="submit" class="btn btn-primary">Publicar algo</button>
            </div>
            <div className="form-forum-cont">
                <div className="form-title-lasts">
                    <b>ÚLTIMOS</b>
                    <div className="bar-l"></div>
                </div>
                <ForumCard isrc={ImgP1} descript="Hola buenas! Tuve un puntaje de 5/5 en el Voto" timeD="Publicado hace 2 horas por Jacob R" />
                <div className="bar-F"></div>
                <ForumCard isrc={ImgP2} descript="Hola buenas! Tuve un puntaje de 5/5 en el Voto" timeD="Publicado hace 2 horas por Bella D" />
                <div className="bar-F"></div>
                <ForumCard isrc={ImgP3} descript="Hola buenas! Tuve un puntaje de 5/5 en el Voto" timeD="Publicado hace 2 horas por Henry F" />
                <div className="bar-F"></div>
            </div>
        </div>
        </div>
        <div className="TopUsers">
            <b className="TopUsers-title">Top de usuarios  </b>
            <UsersCard isrc={ImgP1} Name="Jacob R" timeU="Desde 2021" Level="Nivel 13" />
            <UsersCard isrc={ImgP2} Name="Bella D" timeU="Desde 2021" Level="Nivel: 5" />
            <UsersCard isrc={ImgP3} Name="Henry F" timeU="Desde 2021" Level="Nivel 6" />

        </div>
    </div>
    );
    export default forum;
