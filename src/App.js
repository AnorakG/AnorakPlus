import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Bond from './components/Bond/Bond';
import StarWars from './components/StarWars/StarWars';
import IndianaJones from './components/IndianaJones/IndianaJones';
import HomemAranha from './components/HomemAranha/HomemAranha';
import Marvel from './components/Marvel/Marvel';
import Batman from './components/Batman/Batman';
import BackToTheFuture from './components/BackToTheFuture/BackToTheFuture';
import Carros from './components/Carros/Carros';
import ToyStory from './components/ToyStory/ToyStory';
import Tarzan from './components/Tarzan/Tarzan';
import Stitch from './components/LiloeStitch/LiloEStitch';
import HarryPotter from './components/HarryPotter/HarryPotter'; 
import Crepusculo from './components/Crepusculo/Crepusculo';
import Tolkien from './components/Tolkien/Tolkien';
import Godfather from './components/Godfather/Godfather';
import Matrix from './components/Matrix/Matrix';
import TropaDeElite from './components/TropaDeElite/TropaDeElite';
import MadMax from './components/MadMax/MadMax';
import BladeRunner from './components/BladeRunner/BladeRunner';
import JurassicPark from './components/JurassicPark/JurassicPark';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <AuthProvider>
      <Switch>
        <PrivateRoute exact path="/" component={Home}/>
        <PrivateRoute exact path="/bond" component={Bond}/>
        <PrivateRoute exact path="/starwars" component={StarWars}/>
        <PrivateRoute exact path="/indianajones" component={IndianaJones}/>
        <PrivateRoute exact path="/homemaranha" component={HomemAranha}/>
        <PrivateRoute exact path="/marvel" component={Marvel}/>
        <PrivateRoute exact path="/batman" component={Batman}/>
        <PrivateRoute exact path="/devoltaparaofuturo" component={BackToTheFuture}/>
        <PrivateRoute exact path="/carros" component={Carros}/>
        <PrivateRoute exact path="/toystory" component={ToyStory}/>
        <PrivateRoute exact path="/tarzan" component={Tarzan}/>
        <PrivateRoute exact path="/stitch" component={Stitch}/>
        <PrivateRoute exact path="/harrypotter" component={HarryPotter}/>        
        <PrivateRoute exact path="/crepusculo" component={Crepusculo}/> 
        <PrivateRoute exact path="/tolkien" component={Tolkien}/> 
        <PrivateRoute exact path="/poderosochefao" component={Godfather}/> 
        <PrivateRoute exact path="/matrix" component={Matrix}/> 
        <PrivateRoute exact path="/tropadeelite" component={TropaDeElite}/> 
        <PrivateRoute exact path="/madmax" component={MadMax}/> 
        <PrivateRoute exact path="/bladerunner" component={BladeRunner}/> 
        <PrivateRoute exact path="/jurassic" component={JurassicPark}/> 
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={SignUp}/>
      </Switch>
      </AuthProvider>
    </Router>
    
  );
    
}

export default App;
