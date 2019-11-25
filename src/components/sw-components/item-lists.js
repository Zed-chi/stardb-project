import React from "react";
import ItemList from "../item-list/item-list";
import withData from "../hoc-helpers/with-data";
import Swapi from "../../services/swapi";

const swapi = new Swapi();
const { getAllPeople, getAllStarships, getAllPlanets} = swapi;

const PersonList = withData(ItemList, getAllPeople);
const PlanetList = withData(ItemList,getAllPlanets);
const StarshipList = withData(ItemList, getAllStarships);


export {PersonList, PlanetList, StarshipList};