import React from "react";
import PersonDetails from "../person-details/person-details";
import ItemList from "../item-list/item-list";
import ErrorSplash from "../error-splash/error-splash";
import "./person-page.css";
import Swapi from "../../services/swapi";



export default class PersonPage extends React.Component{  
    state = {
        selectedPerson:null,
        hasError:false,
    }  
    onPersonSelected = (id)=>{
        this.setState({
            selectedPerson:id
        })
    }
    componentDidCatch(){
        this.setState({
            hasError:true,
        })
    }
    render (){
        let content = null;
        if (this.state.hasError){
            content = <ErrorSplash/>;
        } else {
            content = 
            <React.Fragment>
                <ItemList 
                    onItemSelected={this.onPersonSelected}
                    getData={this.props.swapi}
                />        
                <PersonDetails personId={this.state.selectedPerson}/>
            </React.Fragment>
            ;
        }
        return (
            <div className="row">
                {content}  
            </div>
        );
    }
    
};
