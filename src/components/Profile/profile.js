import React from "react";
import "../Profile/profile.css";
import Sidebar from "../Dashboard/Sidebar";
import RCard from "../Profile/components/rewardCard";
import History from "../Profile/components/history.js";
import UsersCard from "../Forum/components/usersCard";
import Medal from "../pics/medal.png";
import Wise from "../pics/wise.png";
import Voto from "../pics/Voto.png";
import Champ from "../pics/winner.png";
import user from "../pics/user.png";
import axios from "axios";

class Profile extends React.Component {
    
  state = {
    registro: [],
    premio1: [],
    premio2: [],
  };

  componentDidMount() {
    let url1 =
      "http://localhost:8080/usuario/primer/premio/" +
      localStorage.getItem("NombreUsuario");
    let url =
      "http://localhost:8080/usuario/registro/tres/" +
      localStorage.getItem("NombreUsuario");
    let url3 =
      "http://localhost:8080/usuario/segundo/premio/" +
      localStorage.getItem("NombreUsuario");

    axios.get(url).then((res) => {
      const registro = res.data;
      this.setState({ registro });
      console.log(registro);
    });
    axios.get(url1).then((res) => {
      const premio1 = res.data;
      this.setState({ premio1 });
      console.log(premio1);
    });
    axios.get(url3).then((res) => {
      const premio2 = res.data;
      this.setState({ premio2 });
      console.log(premio2);
    });

  }

  render() {
    return (
      <div className="ProfileAll">
        <Sidebar />
        <div className="PA">
          <div className="Profile-inPH">
            <div className="Profile-info">
              <img className="imgPer " src={user} alt=""></img>
              <div className="levelP">
                <b className="o-nombre-perfil">
                  {localStorage.getItem("NombreUsuario")}
                </b>
                <div className="TwoLvl">
                  <img className="Medal" src={Medal} alt=" "></img>
                  <p className="lvl"> Nivel: 0</p>
                </div>
              </div>
            </div>
            <div className="Friends">
              <b className="Friends-title">Amigos</b>
              <UsersCard isrc={user} Name="Jacob R" timeU="Desde 2021" />
              <UsersCard isrc={user} Name="Bella D" timeU="Desde 2021" />
              <UsersCard isrc={user} Name="Henry F" timeU="Desde 2021" />
            </div>
          </div>

          <div className="PrReArH">
            <div className="Prof-His">
              <p className="RTittle">Historial</p>
              <div className="bar-P"></div>
              <div className="o-content-registro">
                {this.state.registro.map((registro) => (
                  <History
                    isrc={Voto}
                    Name={registro.actividad}
                    fec={new Date(registro.fechaRegistro).toLocaleDateString()}
                  />
                ))}
                <button className="o-button-showmore">Ver más</button>
              </div>
            </div>
            <div className="Prof-ReAr">
              <p className="RTittle">Premios y logros</p>
              <div className="bar-P"></div>

              <div className="cardsP">
                <RCard
                  isrc={Wise}
                  descript="Completa el vídeo voto sin errores"
                  score={this.state.premio1}
                />
                <RCard
                  isrc={Medal}
                  descript="Completa dos videos"
                  score={this.state.premio2}
                />
                <RCard
                  isrc={Champ}
                  descript="Obtén al menos un premio"
                  score={this.state.premio1}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
