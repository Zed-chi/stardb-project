import React from "react";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import Planetdetails from "../planet-details/planet-details";
import StarshipDetails from "../starship-details/starship-details";
import "./app.css";

class App extends React.Component{
    state = {
        selectedPerson:null,
        showRandomPlanet:true
    }
    onPersonSelected = (id)=>{
        this.setState({
            selectedPerson:id
        })
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

                <div className="row">                    
                        <ItemList onItemSelected={this.onPersonSelected}/>        
                        <PersonDetails personId={this.state.selectedPerson}/>            
                </div>
            </div>
        );
    }
}

export default App;