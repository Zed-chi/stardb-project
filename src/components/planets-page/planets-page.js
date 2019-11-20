import React from "react";
import PlanetDetails from "../planet-details/planet-details";
import ItemList from "../item-list/item-list";
import "./person-page.css";


export default class PersonPage extends React.Component{    
    render (){
        return (
            <div>
                <PlanetDetails/>
                <ItemList/>                
            </div>
        );
    }
    
};
