import React from "react";
import PersonDetails from "../person-details/person-details";
import ItemList from "../item-list/item-list";
import "./person-page.css";


export default class PersonPage extends React.Component{    
    render (){
        return (
            <div>
                <PersonDetails/>
                <ItemList/>                
            </div>
        );
    }
    
};
