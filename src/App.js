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
import Password from "./components/login/password";
import { createBrowserHistory } from 'history';

import { BrowserRouter, Route, Switch, Redirect, withRouter } from "react-router-dom";
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
                <Route exact path="/Temas" render={ props =>(<Mmain{...props}/>)} />
                <Route exact path="/Estadisticas" render={ props=>(<Std{...props}/>)} />
                <Route exact path="/Ayuda" render ={ props =>(<Help{...props}/>)} />
                <Route exact path="/Foro" render={ props =>(<Forum{...props}/>)} />
                <Route exact path="/Perfil" render={ props =>(<Profile{...props}/>)} />
                <Route exact path="/Video" render={ props =>(<Video{...props}/>)} />
                <Route exact path="/Password" render={ props =>(<Password{...props}/>)}/>
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
              </div>
          </Switch>
      </BrowserRouter>
     
      
    );
  }
}
 
