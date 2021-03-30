import React from "react"
import "../components/forumcard.css"

const ForumCard = (props) =>{
    console.log("Publicaciones",props);
    //Destructuring
  const{isrc, descript, timeD}=props;
  return(
       <div className="Card">        
        <img  className="imgP" src={isrc} alt=""></img>
        <div className="DescF">
            <b>{descript}</b>
            <p className="TimeDe">{timeD}</p>
        </div>
    </div>

  );
}
export default ForumCard;