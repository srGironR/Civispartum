import React from "react"
import "../components/forumcard.css"
import Heart from '@material-ui/icons/FavoriteBorder';


const ForumCard = (props) =>{
    console.log("Publicaciones",props);
    //Destructuring
  const{isrc, descript, timeD, likesD}=props;
  return(
       <div className="o-Card">        
        <img  className="imgP" src={isrc} alt=""></img>
        <div className="DescF">
            <p1>{descript}</p1>
            <p className="TimeDe">{timeD}</p>
            <div className="likes">
              <div ><Heart/></div>
              <p1>{likesD}</p1>
              </div>
        </div>
    </div>

  );
}
export default ForumCard;