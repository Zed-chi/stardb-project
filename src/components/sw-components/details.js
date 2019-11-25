import React from "react";
import {Record,ItemDetails} from "../item-details/item-details";
import Swapi from "../../services/swapi";

const swapi = new Swapi();
const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} = swapi;


const PersonDetails = ({itemId})=>{
    return (
        <ItemDetails 
            id={itemId} 
            getData={getPerson} 
            getImgUrl={getPersonImage}>
            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye Color"/>
        </ItemDetails>
    );
};

const PlanetDetails = ({itemId})=>{
    return (
        <ItemDetails 
            id={itemId} 
            getData={getPlanet} 
            getImgUrl={getPlanetImage}>
            <Record field="population" label="Population"/>
            <Record field="rotetionPeriod" label="Rotation Period"/>
        </ItemDetails>
    );
};

const StarshipDetails = ()=>{
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
};


export {PersonDetails,PlanetDetails,StarshipDetails};