import React from "react";
import "../components/forumcard.css";
import Heart from "@material-ui/icons/FavoriteBorder";

const ForumCard = (props) => {
  //Destructuring
  const { isrc, descript, timeD, likesD } = props;
  return (
    <div className="o-Card">
      <img className="imgP" src={isrc} alt=""></img>
      <div className="DescF">
        <p className="o-text-forum-card">{descript}</p>
        <p className="TimeDe">{timeD}</p>
        <div className="likes">
          <div>
            <Heart />
          </div>
          <p>{likesD}</p>
        </div>
      </div>
    </div>
  );
};
export default ForumCard;
