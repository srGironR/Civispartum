import React from "react";
import "../components/history.css";

const history = (props) =>{
    console.log("Historial",props);
    //Destructuring Aqui hay un prop score que no se como podemos usar por vainas de integracion de la bd lines {, score}
  const{isrc, Name, fec}=props;
  return(
       <div className="CardH">        
        <img  className="imgH" src={isrc} alt=""></img>
        <p className="Hname">{Name}</p>
            <div className="H-info">
                <p className="TimeHR">{"Fecha : "+fec}</p>
                {/*<p className="scoreHR">{"Puntaje : "+score}</p>*/}
            </div>
       
    </div>

  );
}
export default history;