import React from "react";
import Header from "../header/header";
//import RandomPlanet from "../random-planet/random-planet";
import {ItemDetails, Record} from "../item-details/item-details";
//import ItemPage from "../item-page/item-page";
import ErrorBoundry from "../error-boundry/error-boundry";
import Row from "../row/row";
import "./app.css";
import Swapi from "../../services/swapi";
import {PersonList, PlanetList, StarshipList} from "../sw-components/item-lists";
import {PersonDetails,PlanetDetails,StarshipDetails} from "../sw-components/details";

class App extends React.Component{
    swapi = new Swapi();
    state = {        
        showRandomPlanet:true,
    }
    
    render(){
        return (
            <ErrorBoundry>
                <div className="container">
                    <Header/>

                    <PersonList/> 

                    <PersonDetails itemId={9}/>

                    <PlanetList/>                 

                    <StarshipList/>                                        
                </div>
            </ErrorBoundry>            
        );
    }
}

export default App;