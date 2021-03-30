import React from "react"
import "../components/rewardCard.css"

const rewardCard = (props) =>{
    console.log("Logros",props);
    //Destructuring
  const{isrc, descript, score}=props;
  return(
       <div className="CardR">        
        <img  className="imgR" src={isrc} alt=""></img>
        <div className="DescR">
            <p className="Rdescript">{descript}</p>
            <div className="Progress">
                <div className="barS"></div>
                <p className="scoreR">{score+"/5"}</p>
            </div>
        </div>
    </div>

  );
}
export default rewardCard;