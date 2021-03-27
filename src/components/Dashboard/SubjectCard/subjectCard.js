import React from "react"
import "../SubjectCard/subjectCard.css"

const subjectCard = (props) =>{
    console.log("Temas",props);
    //Destructuring
  const{ Tema, isrcT}=props;
  return(
       <div className="SubCont">        
        <div className="imgS"><img width="400px" height="400px" className="imgS" src={isrcT} alt=""></img></div>
        <div className="DescS">
            <p>{Tema}</p>            
        </div>
    </div>

  );
}
export default subjectCard;