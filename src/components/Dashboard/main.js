import SideBar from "../Dashboard/Sidebar";
import SubjeCard from "../Dashboard/SubjectCard/subjectCard";
import "../Dashboard/main.css";
import imgV from "../pics/Voto.png"
import Ilp from "../pics/ilp.jpg"
import Plebiscito from "../pics/plebiscito.jpg"
import CP from "../pics/cp.jpg"
import DH from "../pics/derechos-humanos.jpg"
import ECI from "../pics/educivi.jpg"
import EC from "../pics/EduCiudada.jpg"
import CCT from "../pics/CC.webp"
import {Link} from 'react-router-dom';


function Main(){     
        return(
        <div className="Main-container">            
            <SideBar/>
            <div className="info-Con">
            <div className="ppalMat">
                <div className="Title-con">
                    <b>Mecanismos de Participación ciudadana</b>
                </div>
                <div className="Subjects">
                   <Link to="/Video"><SubjeCard Tema="El voto" isrcT={imgV}></SubjeCard></Link>
                    <SubjeCard Tema="La iniciativa legislativa" isrcT={Ilp}></SubjeCard>
                    <SubjeCard Tema="El plebiscito" isrcT={Plebiscito}></SubjeCard>
                    <SubjeCard Tema="La consulta popular" isrcT={CP}></SubjeCard>
                </div>
            </div>
                <div className="OtherMat">
                <div className="Title-con">
                    <b>Material Adicional</b>
                </div>
                <div className="Subjects">
                    <SubjeCard Tema="Los derechos humanos" isrcT={DH}></SubjeCard>
                    <SubjeCard Tema="Educación cívica" isrcT={ECI}></SubjeCard>
                    <SubjeCard Tema="Educación ciudadana" isrcT={EC}></SubjeCard>
                    <SubjeCard Tema="Competencias Ciudadanas Tips" isrcT={CCT}></SubjeCard>
                </div>              
                </div>
                

            </div>
            </div>
     
        )
}
export default Main;