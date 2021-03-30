import React from "react"
import "../components/history.css"

const history = (props) =>{
    console.log("Historial",props);
    //Destructuring
  const{isrc, Name, Time, score}=props;
  return(
       <div className="CardH">        
        <img  className="imgH" src={isrc} alt=""></img>
        <p className="Hname">{Name}</p>
            <div className="H-info">
                <p className="TimeHR">{"Tiempo : "+Time}</p>
                <p className="scoreHR">{"Puntaje : "+score+"/5"}</p>
            </div>
       
    </div>

  );
}
export default history;