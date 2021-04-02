import React from "react"
import "../components/history.css"

const history = (props) =>{
    console.log("Historial",props);
    //Destructuring
  const{isrc, Name, fec, score}=props;
  return(
       <div className="CardH">        
        <img  className="imgH" src={isrc} alt=""></img>
        <p className="Hname">{Name}</p>
            <div className="H-info">
                <p className="TimeHR">{"Fecha : "+fec}</p>
                <p className="scoreHR">{"Puntaje : "+score+"/5"}</p>
            </div>
       
    </div>

  );
}
export default history;