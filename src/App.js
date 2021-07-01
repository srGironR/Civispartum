import "./App.css";
import React from "react";
import Pag1 from "./components/pag1/pag1";
import Login from "./components/login/login";
import Register from "./components/registro/registro";
import Mmain from "./components/Dashboard/main";
import Std from "./components/stads/std.js";
import Help from "./components/help/help.js";
import Forum from "./components/Forum/forum.js";
import Profile from "./components/Profile/profile.js";
import Video from "./components/Video/video.js";
import FullVide from "./components/Video/FullVid.js";
import P1 from "./components/Video/Questions/p1.js";
import GoodA from "./components/Video/Questions/GoodAnswer";
import BadAns from "./components/Video/Questions/BadAnswer";
import GoodC from "./components/Video/Questions/GoodC";
import BadC from "./components/Video/Questions/BadC";
import Case1 from "./components/Video/Questions/case1";
import Case2 from "./components/Video/Questions/case2";
import GoodE from "./components/Video/Questions/goodEnd";
import BadE from "./components/Video/Questions/badEnd";
import Video2 from "./components/Video2/video2.js";
import FullVide2 from "./components/Video2/Fullvid2.js";
import V2P1 from "./components/Video2/Questions/v2p1.js";
import Goodv2 from "./components/Video2/Questions/goodv2.js";
import Badv2 from "./components/Video2/Questions/badv2.js";
import V2P2 from "./components/Video2/Questions/v2p2.js";
import Gudv2p2 from "./components/Video2/Questions/gudv2p2.js";
import bv2p2 from "./components/Video2/Questions/bv2p2.js";
import V2P3 from "./components/Video2/Questions/v2p3.js";
import Gudv2p3 from "./components/Video2/Questions/gudv2p3.js";
import badv2p3 from "./components/Video2/Questions/badv2p3.js";
import badv2p4 from "./components/Video2/Questions/badv2p4.js";
import gudv2p4 from "./components/Video2/Questions/gudv2p4.js";
import v2p4 from "./components/Video2/Questions/v2p4.js";

import { BrowserRouter, Route, Switch} from "react-router-dom";
import { Component } from "react";

export default class App extends Component {
  componentDidMount() {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', function (event){
        window.history.pushState(null, document.title,  window.location.href);
    });
 }
  /*
  constructor(){
    super();
    this.state ={
      loggedInStatus: "NOT_LOGGED_IN",
      user:{}
    }
  }
  */
render(){
  return (
    <BrowserRouter>
          <Switch>
              <div className="App">
                <Route exact path= {"/"} render={props =>(<Pag1{...props}/>)}/>
                <Route exact path="/Registro" render ={ props =>(<Register{...props}/>)}/>
                <Route exact path="/Login" render={ props =>(<Login{...props}/>)}/>
                <Route path="/Temas" render={ props =>(<Mmain{...props}/>)} />
                <Route path="/Estadisticas" render={ props=>(<Std{...props}/>)} />
                <Route path="/Ayuda" render ={ props =>(<Help{...props}/>)} />
                <Route path="/Foro" render={ props =>(<Forum{...props}/>)} />
                <Route path="/Perfil" render={ props =>(<Profile{...props}/>)} />
                <Route path="/Video" render={ props =>(<Video{...props}/>)} />
                <Route path="/Fullvid" component={FullVide} />
                <Route path="/P1" component={P1} />
                <Route path="/Good" component={GoodA} />
                <Route path="/Bad" component={BadAns} />                
                <Route path="/Case1" component={Case1}/> 
                <Route path="/GoodC" component={GoodC} />
                <Route path="/BadC" component={BadC} />
                <Route path="/Case2" component={Case2}/> 
                <Route path="/GoodE" component={GoodE} />
                <Route path="/BadE" component={BadE} />
                <Route path="/Video2" render={ props =>(<Video2{...props}/>)} />
                <Route path="/FullVid2" component={FullVide2} />
                <Route path="/V2P1" component={V2P1} />
                <Route path="/GoodV2" component={Goodv2} />
                <Route path="/BadV2" component={Badv2} />
                <Route path="/V2P2" component={V2P2}/> 
                <Route path="/GudV2p2" component={Gudv2p2}/>
                <Route path="/Bv2p2" component={bv2p2} />
                <Route path="/V2P3" component={V2P3}/> 
                <Route path="/GudV2p3" component={Gudv2p3}/>
                <Route path="/Bv2p3" component={badv2p3} />
                <Route path="/V2P4" component={v2p4}/> 
                <Route path="/GudV2p4" component={gudv2p4}/>
                <Route path="/Badv2p4" component={badv2p4} />
              </div>
          </Switch>
      </BrowserRouter>
     
      
    );
  }
}
 
