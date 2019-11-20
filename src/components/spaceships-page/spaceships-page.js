import React from "react";
import SpaceshipsDetails from "../starship-details/starship-details";
import ItemList from "../item-list/item-list";
import "./person-page.css";


export default class SpaceshipsPage extends React.Component{    
    render (){
        return (
            <div>
                <SpaceshipsDetails/>
                <ItemList/>                
            </div>
        );
    }
    
};
