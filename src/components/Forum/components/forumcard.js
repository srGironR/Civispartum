import React from "react"
import "../components/forumcard.css"
import Heart from '@material-ui/icons/FavoriteBorder';
import HeartF from '@material-ui/icons/Favorite';

const ForumCard = (props) =>{
    console.log("Publicaciones",props);
    //Destructuring
  const{isrc, descript, timeD, likesD}=props;
  return(
       <div className="o-Card">        
        <img  className="imgP" src={isrc} alt=""></img>
        <div className="DescF">
            <a>{descript}</a>
            <p className="TimeDe">{timeD}</p>
            <div className="likes">
              <div ><Heart/></div>
              <a>{likesD}</a>
              </div>
        </div>
    </div>

  );
}
export default ForumCard;