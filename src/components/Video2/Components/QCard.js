import React from "react"
import "../Components/QCard.css";

const QCard = (props) =>{
    console.log("Repuestas",props);
    //Destructuring
  const{descript}=props;
  return(
       <div className="Card">     
             
            <p className="Qrv">{descript}</p>
           
        </div>
    

  );
}
export default QCard;