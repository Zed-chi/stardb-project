import React from "react";
import Swapi from "../../services/swapi";
import "./random-planet.css";


class RandomPlanet extends React.Component{
    swapiService = new Swapi();
    state = {
        id:null,
        name:"",
        population:null,
        rotationPeriod:null,
        diameter:null
    };
    constructor(){
        super();
        this.updatePlanet();
    }
    updatePlanet(){
        const id = Math.floor(Math.random()*30) +2;
        this.swapiService.getPlanet(id)
        .then(
            ({name, population,rotation_period,diameter})=>{
                this.setState({
                    name:name,
                    population:population,
                    diameter:diameter,
                    rotationPeriod:rotation_period,
                    id:id
                });
            });
    }

    render(){
        const {id, name, population,rotationPeriod,diameter} = this.state;
        return (
        <div className="card w-100 d-flex flex-row random-planet">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="img-fluid img-thumbnail"/>
            <div>
                <h4>Planet: {name}</h4>
                <ul>
                    <li>
                        <span>population: </span>
                        <span>{population}</span>
                    </li>
                    <li>
                        <span>rotation period: </span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li>
                        <span>diameter: </span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </div>
        );
    }
}

export default RandomPlanet; 