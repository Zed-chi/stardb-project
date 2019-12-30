import React from "react";
import {Record,ItemDetails} from "../item-details/item-details";
import {SwapiServiceConsumer, SwapiServiceProvider} from "../swapi-service-context/swapi-service-cotext";



const PersonDetails = ({itemId})=>{
    return (
        <SwapiServiceConsumer>
            {
                ({getPerson, getPersonImage})=>{
                    return (
                        <ItemDetails 
                            id={itemId} 
                            getData={getPerson} 
                            getImgUrl={getPersonImage}>
                            <Record field="gender" label="Gender"/>
                            <Record field="eyeColor" label="Eye Color"/>
                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>
    );
};

const PlanetDetails = ({itemId})=>{
    return (
        <SwapiServiceConsumer>
            {
                ({getPlanet, getPlanetImage})=>{
                    return (
                        <ItemDetails 
                            id={itemId} 
                            getData={getPlanet} 
                            getImgUrl={getPlanetImage}>
                            <Record field="population" label="Population"/>
                            <Record field="rotetionPeriod" label="Rotation Period"/>
                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>        
    );
};

const StarshipDetails = ()=>{
    return (
        <SwapiServiceConsumer>
            {
                ({getStarship, getStarshipImage})=>{
                    return (
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
                }
            }
        </SwapiServiceConsumer>        
    );
};


export {PersonDetails,PlanetDetails,StarshipDetails};