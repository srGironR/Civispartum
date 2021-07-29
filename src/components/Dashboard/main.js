import SideBar from "../Dashboard/Sidebar";
import SubjeCard from "../Dashboard/SubjectCard/subjectCard";
import "../Dashboard/main.css";
import imgV from "../pics/voto-new.png"
import Ilp from "../pics/referendo-new.png"
import Plebiscito from "../pics/plebicito.png"
import CP from "../pics/cp.png"
import DH from "../pics/derechosHumanos.png"
import ECI from "../pics/EduCiv.png"
import EC from "../pics/EduCiu.png"
import CCT from "../pics/edutip.png"
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
                   <Link to="/Video2"><SubjeCard Tema="El referendo" isrcT={Ilp}></SubjeCard></Link> 
                    <SubjeCard Tema="El plebiscito" isrcT={Plebiscito}></SubjeCard>
                    <SubjeCard Tema="La consulta popular" isrcT={CP}></SubjeCard>
                </div>
            </div>
                <div className="OtherMat">
                <div className="Title-conT">
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