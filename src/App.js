import './App.css';
import React from 'react';
import Pag1 from './components/pag1/pag1';
import Login from './components/login/login';
import Register from './components/registro/registro';
import Mmain from './components/Dashboard/Main';
import Std from './components/stads/std.js'
import Help from './components/help/help.js'
import Forum from './components/Forum/forum.js'
import Profile from './components/Profile/profile.js'
import Video from './components/Video/video.js'

import {BrowserRouter, Route}  from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div className="App">     
     <Route exact path="/" component={Pag1}/>
     <Route path="/Registro" component={Register}/>
     <Route path="/Login" component={Login}/>
     <Route path="/Temas" component={Mmain}/> 
     <Route path="/Estadisticas" component={Std}/>
     <Route path="/Ayuda" component={Help}/> 
     <Route path="/Foro" component={Forum}/>
     <Route path="/Perfil" component={Profile}/>
     <Route path="/Perfil" component={Video}/>

    </div>
    </BrowserRouter>
  );
}

export default App;
