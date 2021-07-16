import React from "react";
import p1 from "../Assets/Caso1.mp4";
import { withRouter } from "react-router-dom";
import QCard from "../components/QCard";
import ReactPlayer from "react-player";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";
import "../Questions/FullvidP.css";

class Case1 extends React.Component {
  render() {
    return (
      <div className="o-vid-containerFQ">
        <div className="video-containerFQ">
          <ReactPlayer
            className="VideoVQ"
            url={p1}
            width="720px"
            height="480px"
            controls="True"
            playing="True"
          />
        </div>
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          isVisible={true}
          animationInDelay="22000"
        >
          <div className="QuestionsC">
            <Link to="/GoodC" className="QF">
              <QCard descript="Si los cumple." />
            </Link>
            <Link to="/BadC" className="QF">
              <QCard descript="No, para nada." />
            </Link>
          </div>
        </Animated>
      </div>
    );
  }
}

export default withRouter(Case1);
