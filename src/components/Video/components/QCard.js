import React from "react"
import "../components/QCard.css"

const QCard = (props) =>{
    //Destructuring
  const{descript}=props;
  return(
       <div className="Card">     
             
            <p className="Qrv">{descript}</p>
           
        </div>
    

  );
}
export default QCard;