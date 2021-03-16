import React from "react"
import "../componentsPag1/StepCard.css"

const StepCard = (props) =>{
    console.log("Descripción",props);
    //Destructuring
  const{step, descript, isrc}=props;
  return(
       <div className="StO">        
        <img  className="imgO" src={isrc} alt=""></img>
        <div className="DescO">
            <b>{step}</b>
            <p>{descript}</p>
        </div>
    </div>

  );
}
export default StepCard;