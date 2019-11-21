import React from "react";
import PersonDetails from "../item-details/item-details";
import ItemList from "../item-list/item-list";
import ErrorSplash from "../error-splash/error-splash";
import "./item-page.css";


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

    render (){
        let content = null;
        if (this.state.hasError){
            content = <ErrorSplash/>;
        } else {
            const itemList = (<ItemList 
                onItemSelected={this.onPersonSelected}
                getData={this.props.swapi}
                renderItem={({name, gender, birthOfYear})=>`${name} (${gender}, ${birthOfYear})`}
            />);
            const personDetails = (<PersonDetails personId={this.state.selectedPerson}/>);
            content = 
            <React.Fragment>
                {itemList}           
                {personDetails}
            </React.Fragment>
            ;
        }
        return (
            <ErrorBoundry>
                <div className="row">
                    {content}  
                </div>
            </ErrorBoundry>
            
        );
    }
    
};
