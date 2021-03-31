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
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Component } from "react";

export default class App extends Component {
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
              </div>
          </Switch>
      </BrowserRouter>
    );
  }
}

