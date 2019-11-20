import React from "react";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import PersonsPage from "../persons-page/person-page";
import Planetdetails from "../planet-details/planet-details";
import StarshipDetails from "../starship-details/starship-details";
import "./app.css";
import Swapi from "../../services/swapi";

class App extends React.Component{
    swapi = new Swapi();
    state = {        
        showRandomPlanet:true
    }
    
    render(){
        return (
            <div className="container">
                <div className="row w-100" >
                    <Header/>
                </div>
                <div className="row">
                <RandomPlanet/>
                </div>
                
                <PersonsPage swapi={this.swapi.getAllPeople}/>
                <PersonsPage swapi={this.swapi.getAllPlanets}/>
                <PersonsPage swapi={this.swapi.getAllStarships}/>
                
            </div>
        );
    }
}

export default App;