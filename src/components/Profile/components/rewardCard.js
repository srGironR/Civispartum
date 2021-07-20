import React from "react";
import "../components/rewardCard.css";
import ProgressBar from 'react-bootstrap/ProgressBar'

const rewardCard = (props) =>{
    console.log("Logros",props);
    //Destructuring
  const{isrc, descript, score}=props;
  const now = score;
  return(
       <div className="CardR">        
        <img  className="imgR" src={isrc} alt=""></img>
        <div className="DescR">
            <p className="Rdescript">{descript}</p>
            <div className="Progress">
            <ProgressBar className="Progress" now={now} label={`${now}%`} />
                
            </div>
        </div>
    </div>

  );
}
export default rewardCard;