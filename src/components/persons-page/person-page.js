import React from "react";
import PersonDetails from "../person-details/person-details";
import ItemList from "../item-list/item-list";
import ErrorSplash from "../error-splash/error-splash";
import "./person-page.css";


class ErrorBoundry extends React.Component{
    state = {
        hasError:false,
    } 
    componentDidCatch(){
        this.setState({
            hasError:true,
        })
    }
    render(){
        if (this.state.hasError){
            return <ErrorSplash/>;
        } 
        return this.props.children
    }
}


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
