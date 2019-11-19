import React from "react";
import Swapi from "../../services/swapi";
import Spinner from "../spinner/spinner";
import "./random-planet.css";


class RandomPlanet extends React.Component{    
    state = {
        planet:{},
        loading:true,
        error:false,
    };
    componentDidMount(){        
        this.swapiService = new Swapi();
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet,15000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }
    onPlanetLoaded = (planet) => {
        this.setState({planet, loading:false});
    };

    onError = (err) => {
        this.setState({error:true, loading: false});
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random()*19)+1;
        this.swapiService.getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError);
    }

    render(){
        const {loading, error} = this.state;
        const spinner = loading && !error ? <Spinner/> : null;
        const content = !loading && !error ? <PlanetViewContent planet={this.state}/> : null;
        const errorSplash = error ? <LoadingError/> :null;
        return (
        <div className="justify-content-center card w-100 d-flex flex-row random-planet">
            {spinner}
            {content}
            {errorSplash}
        </div>
        );
    }
}

const PlanetViewContent = ({planet}) =>{
    const {
        planet: {
            id,
            name,
            population,
            rotationPeriod,
            diameter
        }
    } = planet;
    return (
        <React.Fragment>
            <img alt="planet" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="img-fluid img-thumbnail"/>
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
        </React.Fragment>
    );
};

const LoadingError = () => {
    return <div>Something Gone Wrong While Loading!</div>;
};
export default RandomPlanet; 