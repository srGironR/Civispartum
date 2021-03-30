import React from "react"
import "../components/usersCard.css"
import Medal from '../components/medal.png'

const UsersCard = (props) =>{
    console.log("Usuarios",props);
    //Destructuring
  const{isrc, Name, timeU, Level}=props;
  return(
       <div className="Card-Top">        
        <img  className="imgU" src={isrc} alt=""></img>
        <div className="DescF">
            <b className="NameU">{Name}</b>
            <p className="TimeDe">{timeU}</p>            
        </div>
        <img className="medalU" src={Medal} alt=""></img>
        <b className="LevelU">{Level}</b>
    </div>

  );
}
export default UsersCard;