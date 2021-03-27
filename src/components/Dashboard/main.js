import SideBar from "../Dashboard/Sidebar";
import SubjeCard from "../Dashboard/SubjectCard/subjectCard";
import "../Dashboard/Main.css";
import imgV from "../pics/Voto.png"



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
                    <SubjeCard Tema="El voto" isrcT={imgV}></SubjeCard>
                    <SubjeCard Tema="El voto" isrcT={imgV}></SubjeCard>
                    <SubjeCard Tema="El voto" isrcT={imgV}></SubjeCard>
                    <SubjeCard Tema="El voto" isrcT={imgV}></SubjeCard>
                </div>
            </div>
                <div className="OtherMat">
                <div className="Title-con">
                    <b>Mecanismos de Participación ciudadana</b>
                </div>
                <div className="Subjects">
                    <SubjeCard Tema="El voto" isrcT={imgV}></SubjeCard>
                    <SubjeCard Tema="El voto" isrcT={imgV}></SubjeCard>
                    <SubjeCard Tema="El voto" isrcT={imgV}></SubjeCard>
                    <SubjeCard Tema="El voto" isrcT={imgV}></SubjeCard>
                </div>
                </div>

            </div>
            </div>
     
        )
}
export default Main;