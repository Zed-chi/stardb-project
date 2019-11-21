import React from "react";
import Header from "../header/header";
//import RandomPlanet from "../random-planet/random-planet";
import {ItemDetails, Record} from "../item-details/item-details";
//import ItemPage from "../item-page/item-page";
import ErrorBoundry from "../error-boundry/error-boundry";
import Row from "../row/row";
import "./app.css";
import Swapi from "../../services/swapi";

class App extends React.Component{
    swapi = new Swapi();
    state = {        
        showRandomPlanet:true,
    }
    
    render(){
        const {
            getPerson, 
            getStarship, 
            getStarshipImage,
            getPersonImage
        } = this.swapi;
        const personDetails = (
            <ItemDetails 
                id={10} 
                getData={getPerson} 
                getImgUrl={getPersonImage}>
                <Record field="gender" label="Gender"/>
                <Record field="eyeColor" label="Eye Color"/>
            </ItemDetails>
        );
        
        const starshipDetails = (
            <ItemDetails 
                id={10} 
                getData={getStarship} 
                getImgUrl={getStarshipImage}
            >
                <Record field="model" label="Model"/>
                <Record field="length" label="Length"/>
                <Record field="costInCredits" label="Cost"/>                
            </ItemDetails>
        );

        return (
            <ErrorBoundry>
                <div className="container">
                    <Header/>
                    <Row
                        left={personDetails}
                        right={starshipDetails}/>
                </div>
            </ErrorBoundry>            
        );
    }
}

export default App;