import React from "react";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import Planetdetails from "../planet-details/planet-details";
import StarshipDetails from "../starship-details/starship-details";
import "./app.css";

class App extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="row w-100" >
                    <Header/>
                </div>
                <div className="row">
                <RandomPlanet/>
                </div>

                <div className="">
                    <div className="col-md-6">
                        <ItemList/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;